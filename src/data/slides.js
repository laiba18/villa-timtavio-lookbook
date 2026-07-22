// Villa TimTavio — a chronological, editorial walk-through of the estate,
// reordered per client feedback (Tim, Jul 2026) into the exact flow:
//
//   The Reveal (the door opens for the guest) → The Front Door → The
//   Gardens → The Pool → Shadows & Architecture → The Suites →
//   Dining & Living → The Bar → Sun Pits & Rooftops → The Sunset →
//   (Aerial placeholder) → Executive & Logistics
//
// One rule on imagery: the signature palapa/pool hero appears only twice —
// the cover and the door Reveal — and every other chapter draws from its own
// dedicated Dropbox folder so no view repeats across adjacent sections.
//
// The pivot-door reveal opens the journey right after the cover — as if
// the door is being opened for the arriving guest. Slides flagged
// `scrub: true` are driven by scroll progress (CSS var --p) on desktop;
// on mobile they render as a plain full-screen page.
//
// This deck is stills-only (no video), per client direction.
//
// NOTE — Dropbox staging assets: images marked `dbx(...)` hotlink from the
// shared Dropbox folder for staging review. Re-upload the final picks to
// Cloudinary before production (full-res originals are heavy).

const DBX_BASE = 'https://www.dropbox.com/scl/fo/f4iro5c3t7j2r2vdga2v1';
const DBX_KEY = 'rlkey=9005v9rodglnqydmzctcqnsbh&raw=1';
const dbx = (id, path) => `${DBX_BASE}/${id}/${path}?${DBX_KEY}`;

// Curated picks from Merrell's Dropbox (folder / file)
const IMG = {
  entranceHero: dbx('AMOdIi0kwnz1X4-Uvfck4Bg', 'Website%20HiRes%20jpgs/L1000048-Edit.jpg'),
  doorCactus: dbx('AGFWM4Tf2CvAC6gvQnUAPH4', 'Front%20Entrance%20Options/2J7A3494.jpg'),
  doorOpen: dbx('AN_qsrg30qoGMwUgymeK-Yg', 'Front%20Entrance%20Options/2J7A3531.jpg'),
  courtyardPalapa: dbx('AIQ7k7YHzoD_8TnTqFODB00', 'Website%20HiRes%20jpgs/2J7A4259.jpg'),
  gardenCactusWall: dbx('AGOpvfoWkxZ6kF-WA-T-x1M', 'Landscape%20and%20Plants/2J7A3225.jpg'),
  gardenFlowerWall: dbx('AJUBqWWpAL8jeE7SRjwgb4Q', 'Landscape%20and%20Plants/2J7A3140.jpg'),
  gardenCactusBeam: dbx('AM_2ImL_RkfuG4gryeetbDI', 'Landscape%20and%20Plants/L1000136.jpg'),
  estatePano: dbx('AEi36xD7fiWBNufWB9uan6M', 'Wide%20Open%20View/2J7A3040.jpg'),
  brutalistFacade: dbx('ABF9CkrnH8xhd21ZrwasaBQ', 'Architecture%20Focus/2J7A3017.jpg'),
  stairSculpture: dbx('AGr7AuKMuk3jYwxek4pJ-Sc', 'Architecture%20Focus/2J7A3070.jpg'),
  wallShadow: dbx('AI7th-dp55rLAZu-1rKhofo', 'Architecture%20Focus/2J7A3184.jpg'),
  bunkHero: dbx('ANge9NId5lHJFKYMLKQVXnM', 'Bunk%20Room/2J7A2603.jpg'),
  bunkVertical: dbx('AK-zFPCEg4olpSc7HGR9SmQ', 'Bunk%20Room/2J7A2611.jpg'),
  diningHero: dbx('APxSQrvXmwVYXqPK9r-GlgU', 'Dining%20Area/2J7A2841.jpg'),
  diningTable: dbx('APXs2BZx7lYe42CG05UByZc', 'Dining%20Area/2J7A2786.jpg'),
  diningWide: dbx('AD3BIKOpfvAtGsT4ejzs3FA', 'Dining%20Area/2J7A2792.jpg'),
  barWall: dbx('AE1gC2P1IprNM0jCbxnHwFU', 'Living%20Room%20Bar%20Area/L1010331.jpg'),
  barWallAlt: dbx('AJHGuo332c7gq8exIZ9933Y', 'Living%20Room%20Bar%20Area/L1010332.jpg'),
  livingCurve: dbx('AKmW-tkXyah6NkKgAZ_cUgM', 'Living%20Room%20Bar%20Area/L1010322.jpg'),
  sunsetTerrace: dbx('AB1DEwZwYlm9aw87KVzIH3U', 'Website%20HiRes%20jpgs/IMG_2300.jpg'),
  beachSunset: dbx('AK7oMpxquoP2Q2KSBn_lBCA', 'Surrounding%20Location%20Views/2J7A2924.jpg'),
  estateNight: dbx('ANhgm1i-crE_FHRqOE0Ifd4', 'Website%20HiRes%20jpgs/L1010043.jpg'),
};

export const PHASES = [
  { key: 'arrival', label: 'I · The Arrival', startSlide: 1 },
  { key: 'estate', label: 'II · The Estate', startSlide: 3 },
  { key: 'residences', label: 'III · The Residences', startSlide: 7 },
  { key: 'dining', label: 'IV · Dining & Social', startSlide: 10 },
  { key: 'evening', label: 'V · The Evening', startSlide: 13 },
  { key: 'executive', label: 'VI · Executive & Logistics', startSlide: 17 },
];

export const RAIL_ITEMS = [
  { slide: 0, title: 'Cover', gapBefore: false },
  // Phase I — The Arrival
  { slide: 1, title: 'The Reveal', gapBefore: true },
  { slide: 2, title: 'The Front Door', gapBefore: false },
  // Phase II — The Estate
  { slide: 3, title: 'The Pool', gapBefore: true },
  { slide: 4, title: 'The View', gapBefore: false },
  { slide: 5, title: 'Shadows & Structure', gapBefore: false },
  { slide: 6, title: 'The Craft', gapBefore: false },
  // Phase III — The Residences
  { slide: 7, title: 'The Suites', gapBefore: true },
  { slide: 8, title: 'The Bunk Room', gapBefore: false },
  { slide: 9, title: 'The Service', gapBefore: false },
  // Phase IV — Dining & Social
  { slide: 10, title: 'The Table', gapBefore: true },
  { slide: 11, title: 'Culinary Program', gapBefore: false },
  { slide: 12, title: 'The Bar', gapBefore: false },
  // Phase V — The Evening
  { slide: 13, title: 'The Sun Pit', gapBefore: true },
  { slide: 14, title: 'The Rooftop', gapBefore: false },
  { slide: 15, title: 'The Sunset', gapBefore: false },
  // Aerial chapter + Phase VI — Executive & Logistics
  { slide: 16, title: 'The Aerial Chapter', gapBefore: true },
  { slide: 17, title: 'The Floor Plan', gapBefore: false },
  { slide: 18, title: 'Production Footprint', gapBefore: false },
  { slide: 19, title: 'The Retreat', gapBefore: false },
  { slide: 20, title: 'Closing', gapBefore: true },
];

export const NAV_LINKS = [
  { href: '#slide-1', label: 'Arrival' },
  { href: '#slide-10', label: 'Dining' },
  { href: '#slide-17', label: 'Executive' },
];

export const SLIDES = [
  // ─────────────────────────────────────────────────────────────
  // COVER
  // ─────────────────────────────────────────────────────────────
  {
    id: 'slide-0',
    zIndex: 1,
    meta: null,
    panels: [
      {
        variant: 'cover',
        publicId: 'hero-image_1_tzm5b5',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782492938/hero-image_1_tzm5b5.webp',
        preload: true,
        bg: 'linear-gradient(150deg, rgb(18,14,8) 0%, rgb(38,28,14) 45%, rgb(42,54,40) 100%)',
        overlay: 'linear-gradient(0deg, rgba(20,14,10,0.92) 0%, rgba(20,14,10,0.35) 55%, rgba(20,14,10,0.15) 100%)',
        eyebrow: 'Puerto Escondido, Oaxaca · Mexico',
        headline: 'Where the Pacific\nbegins to whisper.',
        body: 'A walk through the estate — from the front door to the last light. Scroll to begin.',
        coverCue: true,
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE I · THE ARRIVAL
  // ═════════════════════════════════════════════════════════════

  // 1 · THE REVEAL — the pivot door opens for the guest (desktop scroll-scrub)
  {
    id: 'slide-1',
    zIndex: 2,
    scrub: true,
    scrubAmount: 1.35,
    meta: { phase: 'I · The Arrival', page: 'The Reveal' },
    panels: [
      {
        variant: 'swivel',
        doorImageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782492909/the-arrival-image-1_1_gdh6kx.webp',
        revealImageUrl: IMG.courtyardPalapa,
        preload: true,
        bg: 'linear-gradient(150deg, rgb(10,18,26) 0%, rgb(20,40,54) 60%, rgb(28,56,66) 100%)',
        eyebrow: 'The signature pivot door',
        headline: 'The door opens\nfor you.',
        body: 'The 16-foot pivot door turns, and the estate opens — the courtyard, the palapa, and the Pacific light beyond. Ambient music is already playing; the first drink is already being poured.',
        hint: 'Scroll to open the door',
      },
    ],
  },

  // 2 · THE FRONT DOOR — the gated sanctuary & the door up close
  {
    id: 'slide-2',
    zIndex: 3,
    meta: { phase: 'I · The Arrival', page: 'The Front Door' },
    panels: [
      {
        variant: 'text',
        imageUrl: IMG.entranceHero,
        preload: true,
        bg: 'linear-gradient(160deg, rgb(44,30,16) 0%, rgb(68,48,28) 100%)',
        overlay: 'linear-gradient(0deg, rgba(20,14,8,0.88) 0%, rgba(20,14,8,0.25) 60%)',
        headline: 'A sanctuary that\nnever closes.',
        body: 'Behind a secure, 24-hour gated perimeter, a carved timber curve holds the signature pivot door — the only threshold between the outside world and the estate.',
      },
      {
        variant: 'media',
        imageUrl: IMG.doorCactus,
        mediaFit: 'cover',
        preload: true,
        icon: 'image',
        caption: 'The pivot door, resting in the timber curve',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE II · THE ESTATE
  // ═════════════════════════════════════════════════════════════

  // 4 · THE POOL — bleeding into the ocean
  {
    id: 'slide-4',
    zIndex: 5,
    meta: { phase: 'II · The Estate', page: 'The Pool' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-pool-1_sflzic',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489655/the-pool-1_sflzic.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(12,22,34) 0%, rgb(22,38,54) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,16,26,0.88) 0%, rgba(8,16,26,0.2) 60%)',
        headline: 'The pool starts\nright at your feet.',
        body: 'The doors open completely to a sweeping, unobstructed vista. The infinity pool bleeds directly into the beach and the Pacific Ocean. It is pure magic.',
      },
      {
        // Portrait aerial — shown contained (not cropped) so the full
        // pool-to-ocean composition reads on wide screens.
        variant: 'vertical',
        publicId: 'the-pool-vertical-image_jjlxtz',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489609/the-pool-vertical-image_jjlxtz.webp',
        bg: 'linear-gradient(160deg, rgb(10,18,28) 0%, rgb(18,32,46) 55%, rgb(12,20,30) 100%)',
        preload: true,
        caption: 'The pool from above — symmetry and open Pacific',
      },
    ],
  },

  // 5 · THE VIEW
  {
    id: 'slide-5',
    zIndex: 6,
    meta: { phase: 'II · The Estate', page: 'The View' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-view-text-cover_pkt5kv',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491337/the-view-text-cover_pkt5kv.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(16,24,34) 0%, rgb(26,40,56) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,14,20,0.82) 0%, rgba(8,14,20,0.25) 55%, rgba(8,14,20,0.1) 100%)',
        headline: 'Open this way.',
        body: 'The panoramic sweep — coast, canopy, and the open Pacific.',
      },
    ],
  },

  // 6 · SHADOWS & BRUTALIST ARCHITECTURE
  {
    id: 'slide-6',
    zIndex: 7,
    meta: { phase: 'II · The Estate', page: 'Shadows & Structure' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-architecture-1_1_axxtlw',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493291/the-architecture-1_1_axxtlw.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(22,20,18) 0%, rgb(38,36,32) 100%)',
        overlay: 'linear-gradient(0deg, rgba(16,14,12,0.9) 0%, rgba(16,14,12,0.2) 60%)',
        headline: 'Shadow is a\nmaterial here.',
        body: 'Raw concrete, carved timber, and open sky — the architecture is brutalist in structure and soft in light, drawn and redrawn by the sun across the day.',
      },
      {
        variant: 'media',
        imageUrl: IMG.brutalistFacade,
        mediaFit: 'cover',
        preload: true,
        icon: 'image',
        caption: 'The concrete scoop — structure meeting the evening sky',
      },
      {
        variant: 'gallery',
        columns: [
          { imageUrl: IMG.stairSculpture, fit: 'cover' },
          { imageUrl: IMG.wallShadow, fit: 'cover' },
        ],
      },
    ],
  },

  // 7 · THE CRAFT — design details
  {
    id: 'slide-7',
    zIndex: 8,
    meta: { phase: 'II · The Estate', page: 'The Craft' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-craft-1_xjgwml',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489224/the-craft-1_xjgwml.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(28,26,22) 0%, rgb(48,44,36) 100%)',
        overlay: 'linear-gradient(0deg, rgba(16,14,10,0.9) 0%, rgba(16,14,10,0.2) 60%)',
        headline: 'The details were not\ndecided. They were found.',
        body: 'Every surface, texture, and object inside was chosen for a reason that goes beyond appearance.',
      },
      {
        variant: 'gallery',
        columns: [
          {
            publicId: 'the-craft-2_nnbiyy',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489221/the-craft-2_nnbiyy.webp',
            fit: 'cover',
          },
          {
            publicId: 'the-craft-3_g9hyuq',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489229/the-craft-3_g9hyuq.webp',
            fit: 'cover',
          },
        ],
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE III · THE RESIDENCES
  // ═════════════════════════════════════════════════════════════

  // 8 · THE SUITES
  {
    id: 'slide-8',
    zIndex: 9,
    meta: { phase: 'III · The Residences', page: 'The Suites' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-suite-1_tg98wf',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488828/the-suite-1_tg98wf.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(32,24,16) 0%, rgb(54,42,28) 100%)',
        overlay: 'linear-gradient(0deg, rgba(18,12,8,0.9) 0%, rgba(18,12,8,0.2) 60%)',
        headline: 'Your room was\nready before you.',
        body: 'Each guest is escorted to a private suite where their luggage already awaits — a room that opens to the garden and the sound of the Pacific.',
      },
      {
        variant: 'media',
        publicId: 'the-suite-2_qcdyjz',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488831/the-suite-2_qcdyjz.webp',
        preload: true,
        icon: 'image',
        caption: 'Suite interior — bed, light, and the view beyond',
      },
    ],
  },

  // 9 · THE BUNK ROOM
  {
    id: 'slide-9',
    zIndex: 10,
    meta: { phase: 'III · The Residences', page: 'The Bunk Room' },
    panels: [
      {
        variant: 'text',
        imageUrl: IMG.bunkHero,
        preload: true,
        bg: 'linear-gradient(160deg, rgb(26,22,16) 0%, rgb(46,38,26) 100%)',
        overlay: 'linear-gradient(0deg, rgba(16,12,8,0.9) 0%, rgba(16,12,8,0.25) 60%)',
        headline: 'Room for everyone\nyou brought.',
        body: 'A crafted bunk room extends the estate for families and larger groups — the same materials and calm as the suites, scaled for togetherness.',
      },
      {
        variant: 'vertical',
        imageUrl: IMG.bunkVertical,
        mediaFit: 'cover',
        preload: true,
        caption: 'The bunk room — lofted beds in concrete and timber',
      },
    ],
  },

  // 10 · THE SERVICE — turndown, amenities, staff
  {
    id: 'slide-10',
    zIndex: 11,
    meta: { phase: 'III · The Residences', page: 'The Service' },
    panels: [
      {
        variant: 'amenities',
        imageUrl: IMG.barWallAlt,
        preload: true,
        bg: 'linear-gradient(160deg, rgb(26,22,18) 0%, rgb(44,36,28) 100%)',
        overlay: 'linear-gradient(0deg, rgba(16,12,8,0.92) 0%, rgba(16,12,8,0.6) 100%)',
        eyebrow: 'Hyper-detailed hospitality',
        headline: 'Anticipated,\nnever asked for.',
        items: [
          { title: 'Impeccable turndown', desc: 'Suites reset each evening, quietly and completely.' },
          { title: 'Regional bath amenities', desc: 'Custom, locally sourced, replenished daily.' },
          { title: 'Intuitive house staff', desc: 'Highly trained to anticipate every movement.' },
        ],
        placeholderNote: 'Recommended new photography: turndown detail + bath amenity flat-lay',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE IV · DINING & SOCIAL
  // ═════════════════════════════════════════════════════════════

  // 11 · THE TABLE — dining & living spaces
  {
    id: 'slide-11',
    zIndex: 12,
    meta: { phase: 'IV · Dining & Social', page: 'The Table' },
    panels: [
      {
        variant: 'text',
        imageUrl: IMG.diningHero,
        preload: true,
        bg: 'linear-gradient(160deg, rgb(20,26,16) 0%, rgb(34,44,26) 100%)',
        overlay: 'linear-gradient(0deg, rgba(12,18,8,0.9) 0%, rgba(12,18,8,0.2) 60%)',
        headline: 'No check-in.\nOnly dinner.',
        body: 'There is no friction. Guests flow from their suites straight into an open-air dinner beneath the sculpted stair — the table set, the ocean just beyond.',
      },
      {
        variant: 'media',
        imageUrl: IMG.diningWide,
        mediaFit: 'cover',
        preload: true,
        icon: 'image',
        caption: 'The dining room — open to the courtyard and the sea air',
      },
      {
        variant: 'gallery',
        columns: [
          {
            publicId: 'the-table-2_kjphqd',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488417/the-table-2_kjphqd.webp',
            fit: 'cover',
          },
          {
            publicId: 'the-table-3_olchls',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488411/the-table-3_olchls.webp',
            fit: 'cover',
          },
        ],
      },
    ],
  },

  // 12 · THE CULINARY PROGRAM — round-the-clock F&B
  {
    id: 'slide-12',
    zIndex: 13,
    meta: { phase: 'IV · Dining & Social', page: 'Culinary Program' },
    panels: [
      {
        variant: 'program',
        imageUrl: IMG.diningTable,
        preload: true,
        bg: 'linear-gradient(160deg, rgb(24,16,10) 0%, rgb(42,28,16) 55%, rgb(20,16,26) 100%)',
        overlay: 'linear-gradient(0deg, rgba(14,10,6,0.92) 0%, rgba(14,10,6,0.6) 100%)',
        eyebrow: 'Food & beverage, 24 hours a day',
        headline: 'The kitchen never\nfully sleeps.',
        body: 'A seamless, continuous culinary experience that follows the day around the clock.',
        windows: [
          { time: '07:00', title: 'Morning', desc: 'Gourmet breakfast and wellness elixirs.' },
          { time: '12:30', title: 'Mid-day', desc: 'Dynamic poolside bites and snacks.' },
          { time: '19:30', title: 'Evening', desc: 'Long architectural lunches and multi-course dinners.' },
          { time: '01:00', title: 'Late-night', desc: 'Bespoke cravings, on request.' },
        ],
      },
    ],
  },

  // 13 · THE ARCHITECTURAL BAR
  {
    id: 'slide-13',
    zIndex: 14,
    meta: { phase: 'IV · Dining & Social', page: 'The Bar' },
    panels: [
      {
        variant: 'text',
        imageUrl: IMG.barWall,
        preload: true,
        bg: 'linear-gradient(160deg, rgb(36,24,12) 0%, rgb(58,42,22) 100%)',
        overlay: 'linear-gradient(0deg, rgba(22,14,6,0.9) 0%, rgba(22,14,6,0.2) 60%)',
        headline: 'The first drink is\nalready poured.',
        body: 'The architectural bar anchors the great room — carved timber, open air, and the chef already plating fresh, local ceviche as you arrive.',
      },
      {
        variant: 'gallery',
        columns: [
          { imageUrl: IMG.livingCurve, fit: 'cover' },
          {
            publicId: 'the-living-room-image-1_1_eb7ch4',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782487926/the-living-room-image-1_1_eb7ch4.webp',
            fit: 'cover',
          },
        ],
      },
      {
        variant: 'service',
        bg: 'linear-gradient(160deg, rgb(30,20,10) 0%, rgb(52,36,18) 100%)',
        overlay: 'linear-gradient(0deg, rgba(18,12,6,0.65) 0%, rgba(18,12,6,0.4) 100%)',
        publicId: 'the-living-romm-2_zm7tck',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782487704/the-living-romm-2_zm7tck.webp',
        eyebrow: 'The welcome ritual',
        headline: 'Arrival, served.',
        items: [
          { title: 'Signature cocktails', desc: 'Poured the moment the door opens.' },
          { title: 'Fresh local ceviche', desc: 'Plated by the chef as you settle in.' },
          { title: 'Guacamole, tableside', desc: 'Prepared in front of you, to taste.' },
          { title: 'Chilled scented towels', desc: 'Offered before you set down a bag.' },
        ],
        placeholderNote: 'Recommended new photography: chef service + ceviche/guacamole detail',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE V · THE EVENING
  // ═════════════════════════════════════════════════════════════

  // 14 · THE SUN PIT
  {
    id: 'slide-14',
    zIndex: 15,
    meta: { phase: 'V · The Evening', page: 'The Sun Pit' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-pit-text-cover_shfftj',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490065/the-pit-text-cover_shfftj.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(42,28,14) 0%, rgb(66,46,24) 100%)',
        overlay: 'linear-gradient(0deg, rgba(22,14,6,0.9) 0%, rgba(22,14,6,0.2) 60%)',
        headline: 'Where the afternoon has\nno intention of ending.',
        body: "The sunken social pit is the estate's slowest place — built for the kind of afternoon that turns into evening without anyone noticing.",
      },
      {
        variant: 'media',
        publicId: 'the-pit-1_xbg40m',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490067/the-pit-1_xbg40m.webp',
        preload: true,
        icon: 'image',
        caption: 'The pit — afternoon light and the social atmosphere',
      },
      {
        variant: 'gallery',
        columns: [
          {
            publicId: 'the-pit-vertical-image_eyt8gz',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490068/the-pit-vertical-image_eyt8gz.webp',
            fit: 'cover',
          },
          {
            publicId: 'the-pit-vertical-image-2_ngxtnt',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490057/the-pit-vertical-image-2_ngxtnt.webp',
            fit: 'cover',
          },
        ],
      },
    ],
  },

  // 15 · THE ROOFTOP
  {
    id: 'slide-15',
    zIndex: 16,
    meta: { phase: 'V · The Evening', page: 'The Rooftop' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-rooftop-text-cover_unvtgr',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490682/the-rooftop-text-cover_unvtgr.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(38,22,12) 0%, rgb(60,38,20) 100%)',
        overlay: 'linear-gradient(0deg, rgba(20,10,6,0.9) 0%, rgba(20,10,6,0.2) 60%)',
        headline: 'Above everything.\nStill inside it.',
        body: 'The rooftop terraces sit above the canopy — open to the sky, the ocean, and a silence that only altitude brings.',
      },
      {
        variant: 'gallery',
        columns: [
          {
            publicId: 'the-roof-top-image-1_u715bo',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490681/the-roof-top-image-1_u715bo.webp',
            fit: 'cover',
          },
          {
            publicId: 'the-roof-top-image-2_gwfao8',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490688/the-roof-top-image-2_gwfao8.webp',
            fit: 'cover',
          },
        ],
      },
    ],
  },

  // 16 · THE SUNSET — the final evening vibe
  {
    id: 'slide-16',
    zIndex: 17,
    meta: { phase: 'V · The Evening', page: 'The Sunset' },
    panels: [
      {
        variant: 'text',
        imageUrl: IMG.sunsetTerrace,
        preload: true,
        bg: 'linear-gradient(160deg, rgb(40,22,18) 0%, rgb(64,34,22) 100%)',
        overlay: 'linear-gradient(0deg, rgba(24,10,8,0.88) 0%, rgba(24,10,8,0.15) 60%)',
        headline: 'The day ends where\nthe ocean begins.',
        body: 'From the terrace daybeds, the sun drops straight into the Pacific — the estate’s nightly, unticketed show.',
      },
      {
        variant: 'media',
        imageUrl: IMG.beachSunset,
        mediaFit: 'cover',
        preload: true,
        icon: 'image',
        caption: 'The beach at sunset — a few steps from the door',
      },
      {
        variant: 'media',
        imageUrl: IMG.estateNight,
        mediaFit: 'cover',
        preload: true,
        icon: 'image',
        caption: 'The estate after dark — lit low, warm, and quiet',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // THE AERIAL CHAPTER — placeholder for Sept/Oct drone shoot
  // ═════════════════════════════════════════════════════════════
  {
    id: 'slide-17',
    zIndex: 18,
    meta: { phase: 'Coming September · October', page: 'The Aerial Chapter' },
    panels: [
      {
        variant: 'aerial',
        bg: 'linear-gradient(170deg, rgb(10,14,20) 0%, rgb(16,24,34) 55%, rgb(12,16,14) 100%)',
        eyebrow: 'Drone photography & film · September – October 2026',
        headline: 'The estate,\nfrom above.',
        body: 'A dedicated aerial chapter lands here after the drone shoot — sweeping coastline approaches, the rooftop geometry, and the jungle canopy in motion.',
        note: 'Reserved for aerial hero footage',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE VI · EXECUTIVE & LOGISTICS
  // ═════════════════════════════════════════════════════════════

  // 18 · THE FLOOR PLAN
  {
    id: 'slide-18',
    zIndex: 19,
    meta: { phase: 'VI · Executive & Logistics', page: 'The Floor Plan' },
    panels: [
      {
        variant: 'floorplan',
        bg: 'radial-gradient(120% 100% at 70% 0%, rgb(20,22,26) 0%, rgb(12,13,16) 70%)',
        eyebrow: 'Room assignment · illustrative',
        headline: 'Every room,\nalready decided.',
        body: 'Assign suites before wheels-down — the estate at a glance for planners, EAs, and production leads.',
        legend: [
          { key: 'suite', label: 'King suites' },
          { key: 'bunk', label: 'Bunk room' },
          { key: 'social', label: 'Living, dining & bar' },
          { key: 'outdoor', label: 'Pool, pit & terraces' },
        ],
        placeholderNote: 'Schematic — replace with surveyed floor plan when available',
      },
    ],
  },

  // 19 · PRODUCTION FOOTPRINT
  {
    id: 'slide-19',
    zIndex: 20,
    meta: { phase: 'VI · Executive & Logistics', page: 'Production Footprint' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-architecture-2_1_dshryn',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493282/the-architecture-2_1_dshryn.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(16,16,18) 0%, rgb(30,30,34) 100%)',
        overlay: 'linear-gradient(0deg, rgba(10,10,12,0.9) 0%, rgba(10,10,12,0.3) 60%)',
        headline: 'Built for productions,\nnot just guests.',
        body: 'A gated, high-security perimeter and a dedicated adjacent lot secured specifically for production staging, grip trucks, and catering basecamps.',
      },
      {
        variant: 'siteplan',
        bg: 'radial-gradient(120% 100% at 70% 0%, rgb(20,22,26) 0%, rgb(12,13,16) 70%)',
        eyebrow: 'Site plan · illustrative',
        headline: 'The logistics are\nalready solved.',
        legend: [
          { key: 'estate', label: 'Villa & guest areas' },
          { key: 'staging', label: 'Production staging lot' },
          { key: 'basecamp', label: 'Catering basecamp' },
          { key: 'crew', label: 'Discreet crew circulation' },
        ],
        placeholderNote: 'Schematic — replace with surveyed site plan / aerial when available',
      },
      {
        variant: 'spec',
        bg: 'linear-gradient(160deg, rgb(14,14,16) 0%, rgb(26,26,30) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,8,10,0.55) 0%, rgba(8,8,10,0.55) 100%)',
        eyebrow: 'Operational footprint',
        headline: 'Everything a unit\nneeds, on site.',
        stats: [
          { value: '24/7', label: 'Gated high-security perimeter' },
          { value: 'Adjacent', label: 'Dedicated staging lot secured' },
          { value: 'Full', label: 'Grip, truck & basecamp access' },
        ],
        points: [
          'Controlled single-point entry with round-the-clock security',
          'Adjacent lot for production staging & grip trucks',
          'Dedicated catering basecamp footprint',
          'Discreet crew circulation, separate from guest areas',
        ],
      },
    ],
  },

  // 20 · THE RETREAT
  {
    id: 'slide-20',
    zIndex: 21,
    meta: { phase: 'VI · Executive & Logistics', page: 'The Retreat' },
    panels: [
      {
        variant: 'scale',
        imageUrl: IMG.estatePano,
        preload: true,
        bg: 'linear-gradient(160deg, rgb(16,18,22) 0%, rgb(30,34,40) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,10,14,0.9) 0%, rgba(8,10,14,0.45) 100%)',
        eyebrow: 'Private, by invitation',
        headline: 'Reserved for\nthe few.',
        body: 'The estate is offered to a small circle at a time — private by design, and entirely yours for the moment you are here.',
        modes: [
          { tag: 'Stays', title: 'Invite-only', desc: 'Private stays for you and your guests.' },
          { tag: 'Business', title: 'Executive offsites', desc: 'Leadership retreats and strategy sessions.' },
          { tag: 'Hosting', title: 'VIP hosting', desc: 'Discreet, high-touch service throughout.' },
        ],
      },
    ],
  },

  // 21 · CLOSING
  {
    id: 'slide-21',
    zIndex: 22,
    meta: null,
    panels: [
      {
        variant: 'closing',
        bg: 'linear-gradient(150deg, rgb(16,12,8) 0%, rgb(34,26,14) 50%, rgb(36,46,34) 100%)',
        overlay: 'radial-gradient(circle at 50% 42%, rgba(0,0,0,0) 0%, rgba(10,8,6,0.7) 100%)',
        eyebrow: 'By invitation · Puerto Escondido, Oaxaca',
        headline: 'This is\nVilla TimTavio.',
        headlineStyle: { fontSize: 'clamp(44px,6vw,84px)' },
        divider: true,
        tagline: 'Where the Pacific begins to whisper.',
        signoff: 'We look forward to your arrival.',
      },
    ],
  },
];
