/**
 * The PNGs exported from Figma come out at up to 4096px wide, which is 4-8x
 * more than any of them is ever displayed at — roughly 35MB for one page load.
 *
 * This script rewrites each one as a WebP sized for a 2x display, and keeps the
 * untouched exports in src/assets/img/original/ so the source of truth for the
 * design is never lost.
 *
 *   node scripts/optimize-images.mjs
 */
import { mkdir, readdir, rename, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const IMG_DIR = path.resolve('src/assets/img');
const ORIGINAL_DIR = path.join(IMG_DIR, 'original');

/** Target box = 2x the largest size the image is ever rendered at. */
const TARGETS = {
  'hero-bg-work.png': { width: 2000 },
  'hero-photo-work.png': { width: 1178 },
  'hero-bg-about.png': { width: 1600 },
  'hero-photo-about.png': { width: 950 },
  'clouds-strip.png': { width: 1928 },
  'palms-right.png': { height: 3060 },
  'btn-texture.png': { height: 3060 },
  'oncosearch.png': { width: 848 },
  'yard-phone.png': { width: 642 },
  'yard-tablet.png': { width: 618 },
  'hotel-booking.png': { width: 1052 },
  'real-estate.png': { width: 1032 },
  'fitness-landing.png': { width: 1052 },
  'fitness-mobile.png': { width: 236 },
  'team-management.png': { width: 1052 },
  'healthcare-landing.png': { width: 1052 },

  // OncoSearch case study
  'casestudy-cover.png': { width: 2284 },
  'cs-problem.png': { width: 1592 },
  'cs-research-1.png': { width: 718 },
  'cs-research-2.png': { width: 648 },
  'cs-research-3.png': { width: 718 },
  'cs-persona.png': { width: 964 },
  'cs-wireframes.png': { width: 1682 },
  'cs-design-1.png': { width: 1094 },
  'cs-design-2.png': { width: 1094 },
  'cs-design-3.png': { width: 1094 },
  'cs-design-4.png': { width: 1094 },
};

const kb = (bytes) => `${(bytes / 1024).toFixed(0)}KB`;

async function main() {
  await mkdir(ORIGINAL_DIR, { recursive: true });

  const entries = await readdir(IMG_DIR, { withFileTypes: true });
  const pngs = entries.filter((e) => e.isFile() && e.name.endsWith('.png'));

  if (pngs.length === 0) {
    console.log('Nothing to do — PNGs already moved to original/.');
  }

  // Stash the untouched exports first.
  for (const entry of pngs) {
    await rename(path.join(IMG_DIR, entry.name), path.join(ORIGINAL_DIR, entry.name));
  }

  const sources = await readdir(ORIGINAL_DIR);
  let before = 0;
  let after = 0;

  for (const name of sources) {
    if (!name.endsWith('.png')) continue;

    const target = TARGETS[name];
    if (!target) {
      console.warn(`! no target size for ${name} — skipped`);
      continue;
    }

    const src = path.join(ORIGINAL_DIR, name);
    const dest = path.join(IMG_DIR, name.replace(/\.png$/, '.webp'));

    await sharp(src)
      .resize({ ...target, fit: 'inside', withoutEnlargement: true })
      .webp({ quality: 82, effort: 5 })
      .toFile(dest);

    const srcSize = (await stat(src)).size;
    const destSize = (await stat(dest)).size;
    before += srcSize;
    after += destSize;

    console.log(`${name.padEnd(24)} ${kb(srcSize).padStart(8)} -> ${kb(destSize).padStart(8)}`);
  }

  console.log(`\ntotal ${kb(before)} -> ${kb(after)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
