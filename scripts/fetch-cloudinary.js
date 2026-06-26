import 'dotenv/config';
import { writeFileSync } from 'fs';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

async function fetchAllResources(resourceType) {
  const all = [];
  let nextCursor;

  do {
    const result = await cloudinary.api.resources({
      type: 'upload',
      resource_type: resourceType,
      max_results: 500,
      next_cursor: nextCursor,
    });

    all.push(...result.resources);
    nextCursor = result.next_cursor;
  } while (nextCursor);

  return all;
}

function normalizeKey(value) {
  return value
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, '')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

function buildLookup(resources) {
  const byPublicId = {};
  const byFolder = {};

  for (const item of resources) {
    byPublicId[item.public_id] = item;

    const folder = item.public_id.includes('/')
      ? item.public_id.slice(0, item.public_id.lastIndexOf('/'))
      : '';
    if (!byFolder[folder]) byFolder[folder] = [];
    byFolder[folder].push(item);

    const key = normalizeKey(item.public_id.split('/').pop());
    if (!byPublicId[key]) byPublicId[key] = item;
  }

  return { byPublicId, byFolder };
}

async function main() {
  const [images, videos] = await Promise.all([
    fetchAllResources('image'),
    fetchAllResources('video'),
  ]);

  const manifest = {
    generatedAt: new Date().toISOString(),
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    images: images.map((item) => ({
      publicId: item.public_id,
      format: item.format,
      width: item.width,
      height: item.height,
      url: item.secure_url,
      folder: item.public_id.includes('/')
        ? item.public_id.slice(0, item.public_id.lastIndexOf('/'))
        : '',
    })),
    videos: videos.map((item) => ({
      publicId: item.public_id,
      format: item.format,
      width: item.width,
      height: item.height,
      url: item.secure_url,
      folder: item.public_id.includes('/')
        ? item.public_id.slice(0, item.public_id.lastIndexOf('/'))
        : '',
    })),
  };

  writeFileSync(
    new URL('../src/data/cloudinary-manifest.json', import.meta.url),
    JSON.stringify(manifest, null, 2),
  );

  console.log(`Exported ${manifest.images.length} images and ${manifest.videos.length} videos.`);
  console.log('Folders:');
  const folders = new Set([
    ...manifest.images.map((i) => i.folder || '(root)'),
    ...manifest.videos.map((v) => v.folder || '(root)'),
  ]);
  [...folders].sort().forEach((f) => console.log(`  - ${f}`));
}

main().catch((err) => {
  const message = err?.error?.message || err?.message || String(err);
  if (message.includes('api_secret')) {
    console.error(
      'Cloudinary authentication failed. Re-copy API Key and API Secret from your dashboard into .env, then run npm run extract:media again.',
    );
  }
  console.error(err);
  process.exit(1);
});
