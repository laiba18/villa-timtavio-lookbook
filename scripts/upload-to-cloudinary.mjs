// Upload every Dropbox-hosted deck image to Cloudinary (folder: villa/).
//
// Reads credentials from .env — never hard-code or print secrets.
//   CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
//
// Cloudinary fetches each file server-side from its Dropbox URL, so nothing is
// downloaded locally. Public IDs are villa/<original-filename-without-ext>
// (all 79 filenames are unique). Idempotent: re-running overwrites in place.
//
//   node scripts/upload-to-cloudinary.mjs           # upload
//   node scripts/upload-to-cloudinary.mjs --dry-run # list only, no upload
//
// Writes scripts/cloudinary-map.json (filename -> secure_url) for the link swap.

import 'dotenv/config';
import { writeFileSync } from 'node:fs';
import { v2 as cloudinary } from 'cloudinary';
import { SLIDES } from '../src/data/slides.js';

const DRY = process.argv.includes('--dry-run');
const FOLDER = 'villa';

const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } = process.env;
if (!DRY && !(CLOUDINARY_CLOUD_NAME && CLOUDINARY_API_KEY && CLOUDINARY_API_SECRET)) {
  console.error('Missing Cloudinary credentials in .env (CLOUDINARY_CLOUD_NAME / API_KEY / API_SECRET).');
  process.exit(1);
}
cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRET,
  secure: true,
});

// Collect every unique Dropbox imageUrl in the deck.
const seen = new Map(); // url -> filename (no ext)
const walk = (o) => {
  if (!o || typeof o !== 'object') return;
  if (Array.isArray(o)) return o.forEach(walk);
  for (const [k, v] of Object.entries(o)) {
    if (k === 'imageUrl' && typeof v === 'string' && v.includes('/scl/fo/')) {
      const file = decodeURIComponent(v.split('/').pop().split('?')[0]);
      const id = file.replace(/\.[^.]+$/, '');
      if (!seen.has(v)) seen.set(v, id);
    } else walk(v);
  }
};
SLIDES.forEach(walk);

const jobs = [...seen.entries()];
console.log(`${jobs.length} unique Dropbox images → cloudinary folder "${FOLDER}/"${DRY ? ' (dry run)' : ''}\n`);

const map = {};
let ok = 0;
let failed = 0;

for (const [url, id] of jobs) {
  const publicId = `${FOLDER}/${id}`;
  if (DRY) {
    console.log(`would upload  ${id}`);
    continue;
  }
  try {
    const res = await cloudinary.uploader.upload(url, {
      public_id: publicId,
      overwrite: true,
      unique_filename: false,
      resource_type: 'image',
    });
    map[id] = res.secure_url;
    ok += 1;
    console.log(`✓ ${id}  (${(res.bytes / 1e6).toFixed(1)}MB → ${res.format})`);
  } catch (e) {
    failed += 1;
    console.error(`✗ ${id}  — ${e?.message || e}`);
  }
}

if (!DRY) {
  writeFileSync(new URL('./cloudinary-map.json', import.meta.url), JSON.stringify(map, null, 2));
  console.log(`\nDone: ${ok} uploaded, ${failed} failed. Map written to scripts/cloudinary-map.json`);
  if (failed) process.exit(1);
}
