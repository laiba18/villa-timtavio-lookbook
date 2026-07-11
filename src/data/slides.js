// Villa TimTavio — the deck is organized as a single uninterrupted journey,
// grouped into the four narrative phases of the blueprint:
//
//   Phase 1 · Arrival & Reveal
//   Phase 2 · The First Afternoon
//   Phase 3 · The 24-Hour Ecosystem
//   Phase 4 · Executive & Production
//
// Slides flagged `scrub: true` are driven by scroll progress (CSS var --p),
// not the horizontal panel-track — used for the signature swivel-door reveal.

export const PHASES = [
  { key: 'arrival', label: 'I · Arrival & Reveal', startSlide: 1 },
  { key: 'afternoon', label: 'II · The First Afternoon', startSlide: 6 },
  { key: 'ecosystem', label: 'III · The 24-Hour Ecosystem', startSlide: 11 },
  { key: 'executive', label: 'IV · Executive & Production', startSlide: 17 },
];

export const RAIL_ITEMS = [
  { slide: 0, title: 'Cover', gapBefore: false },
  // Phase I — Arrival & Reveal
  { slide: 1, title: 'The Threshold', gapBefore: true },
  { slide: 2, title: 'The Swivel', gapBefore: false },
  { slide: 3, title: 'The Architecture', gapBefore: false },
  { slide: 4, title: 'The Reveal', gapBefore: false },
  { slide: 5, title: 'The View', gapBefore: false },
  // Phase II — The First Afternoon
  { slide: 6, title: 'The Welcome', gapBefore: true },
  { slide: 7, title: 'The Table', gapBefore: false },
  { slide: 8, title: 'The Suite', gapBefore: false },
  { slide: 9, title: 'The Bunk Room', gapBefore: false },
  { slide: 10, title: 'The Craft', gapBefore: false },
  // Phase III — The 24-Hour Ecosystem
  { slide: 11, title: 'Culinary Program', gapBefore: true },
  { slide: 12, title: 'Premium Amenities', gapBefore: false },
  { slide: 13, title: 'The Pit', gapBefore: false },
  { slide: 14, title: 'The Rooftop', gapBefore: false },
  { slide: 15, title: 'The Garden', gapBefore: false },
  { slide: 16, title: 'The Location', gapBefore: false },
  // Phase IV — Executive & Production
  { slide: 17, title: 'Production Footprint', gapBefore: true },
  { slide: 18, title: 'The Retreat', gapBefore: false },
  { slide: 19, title: 'Closing', gapBefore: true },
];

export const NAV_LINKS = [
  { href: '#slide-2', label: 'Arrival' },
  { href: '#slide-11', label: 'Ecosystem' },
  { href: '#slide-17', label: 'Production' },
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
        kenBurns: true,
        bg: 'linear-gradient(150deg, rgb(18,14,8) 0%, rgb(38,28,14) 45%, rgb(42,54,40) 100%)',
        overlay: 'linear-gradient(0deg, rgba(20,14,10,0.9) 0%, rgba(20,14,10,0.25) 55%, rgba(20,14,10,0.1) 100%)',
        eyebrow: 'Puerto Escondido, Oaxaca · Mexico',
        headline: 'Where the Pacific\nbegins to whisper.',
        body: 'An uninterrupted walkthrough — from the first gate to the open horizon. Scroll to begin.',
        coverCue: true,
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE I · ARRIVAL & REVEAL
  // ═════════════════════════════════════════════════════════════

  // 1 · THE THRESHOLD — 24hr gated sanctuary → garden path
  {
    id: 'slide-1',
    zIndex: 2,
    meta: { phase: 'I · Arrival & Reveal', page: 'The Threshold' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-arrival-image-1_1_gdh6kx',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782492909/the-arrival-image-1_1_gdh6kx.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(44,30,16) 0%, rgb(68,48,28) 100%)',
        overlay: 'linear-gradient(0deg, rgba(20,14,8,0.85) 0%, rgba(20,14,8,0.1) 60%)',
        headline: 'A sanctuary that\nnever closes.',
        body: 'The journey begins at a secure, 24-hour gated entrance. The massive exterior gates swing open to a lush, native Oaxacan garden path that guides you toward the main structure.',
      },
      {
        variant: 'media',
        publicId: 'the-arrival-image-2_1_db7fiu',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782492917/the-arrival-image-2_1_db7fiu.webp',
        preload: true,
        icon: 'image',
        caption: 'The gated approach — native planting and the path to the house',
      },
      {
        variant: 'vertical',
        publicId: 'the-arrival-video_x7xzqy',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782484037/the-arrival-video_x7xzqy',
        mediaFit: 'cover',
        preload: true,
        caption: 'Walking the garden path — the outside world falls away',
      },
    ],
  },

  // 2 · THE SWIVEL — signature 16ft pivoting door reveal (scroll-scrubbed)
  {
    id: 'slide-2',
    zIndex: 3,
    scrub: true,
    scrubAmount: 1.35,
    meta: { phase: 'I · Arrival & Reveal', page: 'The Swivel' },
    panels: [
      {
        variant: 'swivel',
        doorImageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782492909/the-arrival-image-1_1_gdh6kx.webp',
        revealPublicId: 'the-view-1_fa43z8',
        revealImageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491340/the-view-1_fa43z8.webp',
        preload: true,
        bg: 'linear-gradient(150deg, rgb(10,18,26) 0%, rgb(20,40,54) 60%, rgb(28,56,66) 100%)',
        eyebrow: 'A 16-foot custom architectural swivel door',
        headline: 'One pivot, and\neverything changes.',
        body: 'As the door turns, the environment shifts instantly — ambient music already playing, house staff awaiting you with signature cocktails and chilled, scented towels.',
        hint: 'Scroll to open the door',
      },
    ],
  },

  // 3 · THE ARCHITECTURE (supporting)
  {
    id: 'slide-3',
    zIndex: 4,
    meta: { phase: 'I · Arrival & Reveal', page: 'The Architecture' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-architecture-1_1_axxtlw',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493291/the-architecture-1_1_axxtlw.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(22,20,18) 0%, rgb(38,36,32) 100%)',
        overlay: 'linear-gradient(0deg, rgba(16,14,12,0.88) 0%, rgba(16,14,12,0.1) 60%)',
        headline: 'Built from the coast.\nShaped by the light.',
        body: 'The structure responds to its environment — stone, timber, and open air working with the Pacific rather than against it.',
      },
      {
        variant: 'media',
        publicId: 'the-architecture-2_1_dshryn',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493282/the-architecture-2_1_dshryn.webp',
        preload: true,
        icon: 'image',
        kind: 'Image — Architecture Focus',
        caption: 'Curved concrete form — structure and light',
      },
      {
        variant: 'gallery',
        columns: [
          {
            publicId: 'the-architecture-3-vertical_1_z2pf0u',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493283/the-architecture-3-vertical_1_z2pf0u.webp',
            fit: 'cover',
          },
          {
            publicId: 'the-architecture-4-vertical_1_mvgply',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493283/the-architecture-4-vertical_1_mvgply.webp',
            fit: 'cover',
          },
        ],
      },
      {
        variant: 'vertical',
        publicId: 'the-architecture-5_1_ccrj7o',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493282/the-architecture-5_1_ccrj7o.webp',
        mediaFit: 'cover',
        preload: true,
      },
      {
        variant: 'vertical',
        publicId: 'the-architecture-video-1_mppjer',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782484911/the-architecture-video-1_mppjer',
        mediaFit: 'cover',
        icon: 'video',
        caption: 'Architecture walkthrough — form, material, and light',
      },
    ],
  },

  // 4 · THE REVEAL — infinity pool bleeds into the ocean
  {
    id: 'slide-4',
    zIndex: 5,
    meta: { phase: 'I · Arrival & Reveal', page: 'The Reveal' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-pool-1_sflzic',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489655/the-pool-1_sflzic.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(12,22,34) 0%, rgb(22,38,54) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,16,26,0.85) 0%, rgba(8,16,26,0.1) 60%)',
        headline: 'The pool starts\nright at your feet.',
        body: 'The doors open completely to a sweeping, unobstructed vista. The infinity pool bleeds directly into the beach and the Pacific Ocean. It is pure magic.',
      },
      {
        variant: 'media',
        publicId: 'the-pool-video-horizontal_rpcnuf',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782489646/the-pool-video-horizontal_rpcnuf',
        mediaFit: 'cover',
        preload: true,
        caption: 'The infinity edge — water surface dissolving into the horizon',
      },
      {
        variant: 'vertical',
        publicId: 'the-pool-vertical-image_jjlxtz',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489609/the-pool-vertical-image_jjlxtz.webp',
        mediaFit: 'cover',
        preload: true,
        caption: 'The pool from above — symmetry and open Pacific',
      },
    ],
  },

  // 5 · THE VIEW (wide panoramic)
  {
    id: 'slide-5',
    zIndex: 6,
    meta: { phase: 'I · Arrival & Reveal', page: 'The View' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-view-text-cover_pkt5kv',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491337/the-view-text-cover_pkt5kv.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(16,24,34) 0%, rgb(26,40,56) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,14,20,0.75) 0%, rgba(8,14,20,0.15) 55%, rgba(8,14,20,0.05) 100%)',
        headline: 'Open this way.',
        body: 'The panoramic sweep — coast, canopy, and open Pacific.',
      },
      {
        variant: 'media',
        publicId: 'the-view-video_ccotxy',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782491358/the-view-video_ccotxy',
        mediaFit: 'cover',
        preload: true,
        caption: 'The view — horizon, light, and the open Pacific',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE II · THE FIRST AFTERNOON
  // ═════════════════════════════════════════════════════════════

  // 6 · THE WELCOME — open-air bar, chef, ceviche, tableside guacamole
  {
    id: 'slide-6',
    zIndex: 7,
    meta: { phase: 'II · The First Afternoon', page: 'The Welcome' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-living-room-text-cover_ikqesg',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782487706/the-living-room-text-cover_ikqesg.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(36,24,12) 0%, rgb(58,42,22) 100%)',
        overlay: 'linear-gradient(0deg, rgba(22,14,6,0.88) 0%, rgba(22,14,6,0.1) 60%)',
        headline: 'The first drink is\nalready poured.',
        body: 'The host escorts you to the open-air architectural bar. While you sip, the chef is already serving fresh, local ceviche and preparing artisanal guacamole tableside.',
      },
      {
        variant: 'media',
        publicId: 'the-living-room-image-1_1_eb7ch4',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782487926/the-living-room-image-1_1_eb7ch4.webp',
        preload: true,
        icon: 'image',
        caption: 'The open-air bar — the social heart of the arrival',
      },
      {
        variant: 'service',
        bg: 'linear-gradient(160deg, rgb(30,20,10) 0%, rgb(52,36,18) 100%)',
        overlay: 'linear-gradient(0deg, rgba(18,12,6,0.6) 0%, rgba(18,12,6,0.35) 100%)',
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

  // 7 · THE TABLE — transition + welcome dinner under the stars
  {
    id: 'slide-7',
    zIndex: 8,
    meta: { phase: 'II · The First Afternoon', page: 'The Table' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-table-1_hbdc4f',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488422/the-table-1_hbdc4f.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(20,26,16) 0%, rgb(34,44,26) 100%)',
        overlay: 'linear-gradient(0deg, rgba(12,18,8,0.88) 0%, rgba(12,18,8,0.1) 60%)',
        headline: 'No check-in.\nOnly dinner.',
        body: 'There is no friction. One by one, guests are discreetly escorted to their suites — luggage already delivered — flowing effortlessly into an open-air welcome dinner under the stars.',
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

  // 8 · THE SUITE — private suites, luggage awaiting
  {
    id: 'slide-8',
    zIndex: 9,
    meta: { phase: 'II · The First Afternoon', page: 'The Suite' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-suite-1_tg98wf',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488828/the-suite-1_tg98wf.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(32,24,16) 0%, rgb(54,42,28) 100%)',
        overlay: 'linear-gradient(0deg, rgba(18,12,8,0.88) 0%, rgba(18,12,8,0.1) 60%)',
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
      {
        variant: 'vertical',
        publicId: 'the-suite-video_z9l84e',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782488862/the-suite-video_z9l84e',
        mediaFit: 'cover',
        preload: true,
        caption: 'Suite walkthrough — from entrance to terrace',
      },
    ],
  },

  // 9 · THE BUNK ROOM — group / family sleeping capacity
  {
    id: 'slide-9',
    zIndex: 10,
    meta: { phase: 'II · The First Afternoon', page: 'The Bunk Room' },
    panels: [
      {
        variant: 'text',
        // TODO: swap for Dropbox → "Bunk Room" imagery once on Cloudinary.
        publicId: 'the-suite-1_tg98wf',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488828/the-suite-1_tg98wf.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(26,22,16) 0%, rgb(46,38,26) 100%)',
        overlay: 'linear-gradient(0deg, rgba(16,12,8,0.9) 0%, rgba(16,12,8,0.15) 60%)',
        headline: 'Room for everyone\nyou brought.',
        body: 'A crafted bunk room extends the estate for families and larger groups — the same materials and calm as the suites, scaled for togetherness.',
      },
      {
        variant: 'media',
        // TODO: swap for Dropbox → "Bunk Room" imagery once on Cloudinary.
        publicId: 'the-suite-2_qcdyjz',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488831/the-suite-2_qcdyjz.webp',
        preload: true,
        icon: 'image',
        caption: 'The bunk room — additional sleeping capacity for groups',
        placeholderNote: 'Placeholder — use Dropbox → "Bunk Room" images (add to Cloudinary)',
      },
    ],
  },

  // 10 · THE CRAFT (supporting)
  {
    id: 'slide-10',
    zIndex: 11,
    meta: { phase: 'II · The First Afternoon', page: 'The Craft' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-craft-1_xjgwml',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489224/the-craft-1_xjgwml.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(28,26,22) 0%, rgb(48,44,36) 100%)',
        overlay: 'linear-gradient(0deg, rgba(16,14,10,0.88) 0%, rgba(16,14,10,0.1) 60%)',
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
  // PHASE III · THE 24-HOUR ECOSYSTEM
  // ═════════════════════════════════════════════════════════════

  // 11 · THE CULINARY PROGRAM — round-the-clock F&B
  {
    id: 'slide-11',
    zIndex: 12,
    meta: { phase: 'III · The 24-Hour Ecosystem', page: 'Culinary Program' },
    panels: [
      {
        variant: 'program',
        publicId: 'the-table-2_kjphqd',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488417/the-table-2_kjphqd.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(24,16,10) 0%, rgb(42,28,16) 55%, rgb(20,16,26) 100%)',
        overlay: 'linear-gradient(0deg, rgba(14,10,6,0.9) 0%, rgba(14,10,6,0.55) 100%)',
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

  // 12 · PREMIUM AMENITIES — turndown, bath amenities, house staff
  {
    id: 'slide-12',
    zIndex: 13,
    meta: { phase: 'III · The 24-Hour Ecosystem', page: 'Premium Amenities' },
    panels: [
      {
        variant: 'amenities',
        publicId: 'the-suite-2_qcdyjz',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488831/the-suite-2_qcdyjz.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(26,22,18) 0%, rgb(44,36,28) 100%)',
        overlay: 'linear-gradient(0deg, rgba(16,12,8,0.9) 0%, rgba(16,12,8,0.55) 100%)',
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

  // 13 · THE PIT (supporting — slow afternoons into evening)
  {
    id: 'slide-13',
    zIndex: 14,
    meta: { phase: 'III · The 24-Hour Ecosystem', page: 'The Pit' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-pit-text-cover_shfftj',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490065/the-pit-text-cover_shfftj.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(42,28,14) 0%, rgb(66,46,24) 100%)',
        overlay: 'linear-gradient(0deg, rgba(22,14,6,0.88) 0%, rgba(22,14,6,0.1) 60%)',
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
      {
        variant: 'media',
        publicId: 'the-pit-video-1_kyvjir',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782490076/the-pit-video-1_kyvjir',
        mediaFit: 'cover',
        preload: true,
        caption: 'The sunken lounge — sand, shade, and slow afternoons',
      },
    ],
  },

  // 14 · THE ROOFTOP (supporting)
  {
    id: 'slide-14',
    zIndex: 15,
    meta: { phase: 'III · The 24-Hour Ecosystem', page: 'The Rooftop' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-rooftop-text-cover_unvtgr',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490682/the-rooftop-text-cover_unvtgr.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(38,22,12) 0%, rgb(60,38,20) 100%)',
        overlay: 'linear-gradient(0deg, rgba(20,10,6,0.88) 0%, rgba(20,10,6,0.1) 60%)',
        headline: 'Above everything.\nStill inside it.',
        body: 'The rooftop terrace sits above the canopy — open to the sky, the ocean, and a silence that only altitude brings.',
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
      {
        variant: 'media',
        publicId: 'the-roof-top-video_erlxbz',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782490705/the-roof-top-video_erlxbz',
        mediaFit: 'cover',
        preload: true,
        caption: 'Rooftop terrace — above the canopy, open to the Pacific',
      },
    ],
  },

  // 15 · THE GARDEN (supporting)
  {
    id: 'slide-15',
    zIndex: 16,
    meta: { phase: 'III · The 24-Hour Ecosystem', page: 'The Garden' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-garden-text-cover_j1w7w3',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491053/the-garden-text-cover_j1w7w3.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(14,24,12) 0%, rgb(26,42,22) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,16,6,0.88) 0%, rgba(8,16,6,0.1) 60%)',
        headline: 'The jungle came first.\nWe built around it.',
        body: 'Native Oaxacan flora surrounds every wall — not as decoration, but as the original inhabitant of this land.',
      },
      {
        variant: 'gallery',
        columns: [
          {
            publicId: 'the-garden-image-1_arfey5',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491038/the-garden-image-1_arfey5.webp',
            fit: 'cover',
          },
          {
            publicId: 'the-garden-image-2_vm1d3j',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491040/the-garden-image-2_vm1d3j.webp',
            fit: 'cover',
          },
        ],
      },
    ],
  },

  // 16 · THE LOCATION (supporting proximity)
  {
    id: 'slide-16',
    zIndex: 17,
    meta: { phase: 'III · The 24-Hour Ecosystem', page: 'The Location' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-location-text-cover_da50nt',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491723/the-location-text-cover_da50nt.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(12,20,30) 0%, rgb(22,36,50) 100%)',
        overlay: 'linear-gradient(0deg, rgba(6,12,20,0.88) 0%, rgba(6,12,20,0.1) 60%)',
        headline: 'Puerto Escondido,\nuntamed.',
        body: 'The beach is minutes away. The Pacific is as it has always been — unhurried, enormous, and entirely without agenda.',
      },
      {
        variant: 'media',
        publicId: 'the-location-video_zjfckg',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782491702/the-location-video_zjfckg',
        mediaFit: 'cover',
        preload: true,
        caption: 'Pacific coastline — the surrounding landscape',
      },
    ],
  },

  // ═════════════════════════════════════════════════════════════
  // PHASE IV · EXECUTIVE & PRODUCTION
  // ═════════════════════════════════════════════════════════════

  // 17 · PRODUCTION FOOTPRINT — perimeter + adjacent staging lot (site plan)
  {
    id: 'slide-17',
    zIndex: 18,
    meta: { phase: 'IV · Executive & Production', page: 'Production Footprint' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-architecture-2_1_dshryn',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493282/the-architecture-2_1_dshryn.webp',
        preload: true,
        kenBurns: true,
        bg: 'linear-gradient(160deg, rgb(16,16,18) 0%, rgb(30,30,34) 100%)',
        overlay: 'linear-gradient(0deg, rgba(10,10,12,0.9) 0%, rgba(10,10,12,0.2) 60%)',
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

  // 18 · THE RETREAT — private, by invitation
  {
    id: 'slide-18',
    zIndex: 19,
    meta: { phase: 'IV · Executive & Production', page: 'The Retreat' },
    panels: [
      {
        variant: 'scale',
        publicId: 'the-architecture-1_1_axxtlw',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493291/the-architecture-1_1_axxtlw.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(16,18,22) 0%, rgb(30,34,40) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,10,14,0.88) 0%, rgba(8,10,14,0.4) 100%)',
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

  // 19 · CLOSING — sign-off (invitation)
  {
    id: 'slide-19',
    zIndex: 20,
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
