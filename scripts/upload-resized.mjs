// Fallback for images that exceed Cloudinary's 10MB upload limit (or errored):
// download from Dropbox, downscale to <=2560px long edge locally (all the deck
// ever serves), then upload the smaller file. Names passed as CLI args.
//
//   node scripts/upload-resized.mjs L1010012 IMG_2300 ...

import 'dotenv/config';
import { writeFileSync, readFileSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { v2 as cloudinary } from 'cloudinary';
import { SLIDES } from '../src/data/slides.js';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const targets = new Set(process.argv.slice(2));
const urls = {};
const walk = (o) => {
  if (!o || typeof o !== 'object') return;
  if (Array.isArray(o)) return o.forEach(walk);
  for (const [k, v] of Object.entries(o)) {
    if (k === 'imageUrl' && typeof v === 'string' && v.includes('/scl/fo/')) {
      const name = decodeURIComponent(v.split('/').pop().split('?')[0]).replace(/\.[^.]+$/, '');
      if (targets.has(name)) urls[name] = v;
    } else walk(v);
  }
};
SLIDES.forEach(walk);

const tmp = new URL('./_tmp/', import.meta.url);
mkdirSync(tmp, { recursive: true });
const mapPath = new URL('./cloudinary-map.json', import.meta.url);
const map = JSON.parse(readFileSync(mapPath, 'utf8'));

let ok = 0;
let failed = 0;
for (const name of targets) {
  const url = urls[name];
  if (!url) { console.error(`✗ ${name} — not referenced in slides.js`); failed++; continue; }
  const file = new URL(`./_tmp/${name}.jpg`, import.meta.url);
  try {
    execFileSync('curl', ['-sL', '--max-time', '60', '-o', file.pathname, url]);
    // downscale to 2560px long edge, ~82% quality
    execFileSync('sips', ['-Z', '2560', '-s', 'formatOptions', '82', file.pathname]);
    const res = await cloudinary.uploader.upload(file.pathname, {
      public_id: `villa/${name}`,
      overwrite: true,
      unique_filename: false,
      resource_type: 'image',
    });
    map[name] = res.secure_url;
    ok++;
    console.log(`✓ ${name}  (→ ${(res.bytes / 1e6).toFixed(1)}MB ${res.width}x${res.height})`);
  } catch (e) {
    failed++;
    console.error(`✗ ${name} — ${e?.message || e}`);
  }
}
writeFileSync(mapPath, JSON.stringify(map, null, 2));
console.log(`\nDone: ${ok} fixed, ${failed} failed. Map now has ${Object.keys(map).length} entries.`);
