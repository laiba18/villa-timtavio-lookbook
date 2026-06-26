export const RAIL_ITEMS = [
  { slide: 0, title: 'Cover', gapBefore: false },
  { slide: 1, title: 'The Arrival', gapBefore: true },
  { slide: 2, title: 'The Architecture', gapBefore: false },
  { slide: 3, title: 'The Living Room', gapBefore: false },
  { slide: 4, title: 'The Table', gapBefore: false },
  { slide: 5, title: 'The Suite', gapBefore: false },
  { slide: 6, title: 'The Craft', gapBefore: false },
  { slide: 7, title: 'The Pool', gapBefore: true },
  { slide: 8, title: 'The Pit', gapBefore: false },
  { slide: 9, title: 'The Rooftop', gapBefore: false },
  { slide: 10, title: 'The Garden', gapBefore: false },
  { slide: 11, title: 'The View', gapBefore: true },
  { slide: 12, title: 'The Location', gapBefore: false },
  { slide: 13, title: 'Closing', gapBefore: true },
];

export const NAV_LINKS = [
  { href: '#slide-2', label: 'Spaces' },
  { href: '#slide-7', label: 'Outdoors' },
  { href: '#slide-11', label: 'The View' },
];

export const SLIDES = [
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
        overlay: 'linear-gradient(0deg, rgba(20,14,10,0.9) 0%, rgba(20,14,10,0.25) 55%, rgba(20,14,10,0.1) 100%)',
        eyebrow: 'Puerto Escondido, Oaxaca · Mexico',
        headline: 'Where the Pacific\nbegins to whisper.',
        body: 'An uninterrupted walkthrough — from the first gate to the open horizon. Scroll to begin.',
        coverCue: true,
      },
    ],
  },
  {
    id: 'slide-1',
    zIndex: 2,
    meta: { phase: 'The Arrival · Villa TimTavio', page: 'Front Entrance' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-arrival-image-1_1_gdh6kx',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782492909/the-arrival-image-1_1_gdh6kx.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(44,30,16) 0%, rgb(68,48,28) 100%)',
        overlay: 'linear-gradient(0deg, rgba(20,14,8,0.85) 0%, rgba(20,14,8,0.1) 60%)',
        headline: 'The first gate is the last\nof the outside world.',
        body: 'A private, secured entrance — the beginning of a complete separation from everything beyond these walls.',
      },
      {
        variant: 'media',
        publicId: 'the-arrival-image-2_1_db7fiu',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782492917/the-arrival-image-2_1_db7fiu.webp',
        preload: true,
        bg: 'linear-gradient(135deg, rgb(46,32,16) 0%, rgb(72,52,30) 100%)',
        icon: 'image',
        caption: 'The entrance — architectural detail and approach',
      },
      {
        variant: 'vertical',
        publicId: 'the-arrival-video_x7xzqy',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782484037/the-arrival-video_x7xzqy',
        mediaFit: 'cover',
        preload: true,
        caption: 'Walking through the entrance — arrival point of view',
      },
    ],
  },
  {
    id: 'slide-2',
    zIndex: 3,
    meta: { phase: 'The Architecture · Villa TimTavio', page: 'Architecture Focus' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-architecture-1_1_axxtlw',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782493291/the-architecture-1_1_axxtlw.webp',
        preload: true,
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
        bg: 'linear-gradient(135deg, rgb(26,24,20) 0%, rgb(44,40,34) 100%)',
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
  {
    id: 'slide-3',
    zIndex: 4,
    meta: { phase: 'The Living Room · Villa TimTavio', page: 'Living Room & Bar Area' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-living-room-text-cover_ikqesg',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782487706/the-living-room-text-cover_ikqesg.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(36,24,12) 0%, rgb(58,42,22) 100%)',
        overlay: 'linear-gradient(0deg, rgba(22,14,6,0.88) 0%, rgba(22,14,6,0.1) 60%)',
        headline: 'A room that never insists\non being a room.',
        body: 'The living room opens entirely — to the pool, the garden, the sky. Indoors and outdoors are the same conversation here.',
      },
      {
        variant: 'media',
        publicId: 'the-living-room-image-1_1_eb7ch4',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782487926/the-living-room-image-1_1_eb7ch4.webp',
        preload: true,
        bg: 'linear-gradient(135deg, rgb(42,28,14) 0%, rgb(68,50,28) 100%)',
        icon: 'image',
        caption: 'Wide living room and bar — full interior perspective',
      },
      {
        variant: 'media',
        publicId: 'the-living-romm-2_zm7tck',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782487704/the-living-romm-2_zm7tck.webp',
        preload: true,
        bg: 'linear-gradient(135deg, rgb(38,26,12) 0%, rgb(60,44,22) 100%)',
        icon: 'image',
        caption: 'The social space — light, texture, and open air',
      },
      {
        variant: 'media',
        publicId: 'the-living-room-3_ny9ip1',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782487695/the-living-room-3_ny9ip1.webp',
        preload: true,
        bg: 'linear-gradient(135deg, rgb(44,30,14) 0%, rgb(70,52,30) 100%)',
        icon: 'image',
        caption: 'Bar detail — bottles, light, surface',
      },
    ],
  },
  {
    id: 'slide-4',
    zIndex: 5,
    meta: { phase: 'The Table · Villa TimTavio', page: 'Dining Area' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-table-1_hbdc4f',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488422/the-table-1_hbdc4f.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(20,26,16) 0%, rgb(34,44,26) 100%)',
        overlay: 'linear-gradient(0deg, rgba(12,18,8,0.88) 0%, rgba(12,18,8,0.1) 60%)',
        headline: 'Everything on the table\nis made here.',
        body: 'The dining space is unhurried — a long table, open air, and a kitchen that works without being seen or heard.',
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
  {
    id: 'slide-5',
    zIndex: 6,
    meta: { phase: 'The Suite · Villa TimTavio', page: 'King Suite' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-suite-1_tg98wf',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488828/the-suite-1_tg98wf.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(32,24,16) 0%, rgb(54,42,28) 100%)',
        overlay: 'linear-gradient(0deg, rgba(18,12,8,0.88) 0%, rgba(18,12,8,0.1) 60%)',
        headline: 'A room that forgets\nit has walls.',
        body: 'The king suite opens to the garden and the sound of the Pacific — a space that belongs entirely to whoever is in it.',
      },
      {
        variant: 'media',
        publicId: 'the-suite-2_qcdyjz',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782488831/the-suite-2_qcdyjz.webp',
        preload: true,
        bg: 'linear-gradient(135deg, rgb(56,44,30) 0%, rgb(84,68,48) 100%)',
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
  {
    id: 'slide-6',
    zIndex: 7,
    meta: { phase: 'The Craft · Villa TimTavio', page: 'Interior Design & Detail' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-craft-1_xjgwml',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489224/the-craft-1_xjgwml.webp',
        preload: true,
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
  {
    id: 'slide-7',
    zIndex: 8,
    meta: { phase: 'The Pool · Villa TimTavio', page: 'Pool & Curve Focus' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-pool-1_sflzic',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489655/the-pool-1_sflzic.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(12,22,34) 0%, rgb(22,38,54) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,16,26,0.88) 0%, rgba(8,16,26,0.1) 60%)',
        headline: 'The pool and the Pacific\nshare the same horizon.',
        body: 'The curve of the pool edge disappears into the coastline — the boundary between the estate and the ocean is entirely intentional.',
      },
      {
        variant: 'media',
        publicId: 'the-pool-1_sflzic',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782489655/the-pool-1_sflzic.webp',
        preload: true,
        bg: 'linear-gradient(135deg, rgb(14,26,40) 0%, rgb(26,44,62) 100%)',
        icon: 'image',
        caption: 'The pool — wide horizontal, curve meeting the ocean',
      },
      {
        variant: 'media',
        publicId: 'the-pool-video-horizontal_rpcnuf',
        resourceType: 'video',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782489646/the-pool-video-horizontal_rpcnuf',
        mediaFit: 'cover',
        preload: true,
        caption: 'Pool edge — water surface and the horizon beyond',
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
  {
    id: 'slide-8',
    zIndex: 9,
    meta: { phase: 'The Pit · Villa TimTavio', page: 'Sun & Social Pit' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-pit-text-cover_shfftj',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490065/the-pit-text-cover_shfftj.webp',
        preload: true,
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
        bg: 'linear-gradient(135deg, rgb(46,30,16) 0%, rgb(70,50,28) 100%)',
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
  {
    id: 'slide-9',
    zIndex: 10,
    meta: { phase: 'The Rooftop · Villa TimTavio', page: 'Rooftop Terrace' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-rooftop-text-cover_unvtgr',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782490682/the-rooftop-text-cover_unvtgr.webp',
        preload: true,
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
          {
            publicId: 'the-roof-top-video_erlxbz',
            resourceType: 'video',
            imageUrl:
              'https://res.cloudinary.com/dgvqx0qje/video/upload/f_mp4,vc_h264/v1782490705/the-roof-top-video_erlxbz',
            fit: 'cover',
          },
        ],
      },
    ],
  },
  {
    id: 'slide-10',
    zIndex: 11,
    meta: { phase: 'The Garden · Villa TimTavio', page: 'Landscape & Plants' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-garden-text-cover_j1w7w3',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491053/the-garden-text-cover_j1w7w3.webp',
        preload: true,
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
  {
    id: 'slide-11',
    zIndex: 12,
    meta: { phase: 'The View · Villa TimTavio', page: 'Wide Open View' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-view-text-cover_pkt5kv',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491337/the-view-text-cover_pkt5kv.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(16,24,34) 0%, rgb(26,40,56) 100%)',
        overlay: 'linear-gradient(0deg, rgba(8,14,20,0.75) 0%, rgba(8,14,20,0.15) 55%, rgba(8,14,20,0.05) 100%)',
        headline: 'Open this way.',
        body: 'The panoramic sweep — coast, canopy, and open Pacific.',
      },
      {
        variant: 'media',
        publicId: 'the-view-1_fa43z8',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491340/the-view-1_fa43z8.webp',
        preload: true,
        bg: 'linear-gradient(135deg, rgb(18,26,36) 0%, rgb(30,44,58) 100%)',
        icon: 'image',
        caption: 'Panoramic still — the full unobstructed view',
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
  {
    id: 'slide-12',
    zIndex: 13,
    meta: { phase: 'The Location · Villa TimTavio', page: 'Surrounding Location Views' },
    panels: [
      {
        variant: 'text',
        publicId: 'the-location-text-cover_da50nt',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491723/the-location-text-cover_da50nt.webp',
        preload: true,
        bg: 'linear-gradient(160deg, rgb(12,20,30) 0%, rgb(22,36,50) 100%)',
        overlay: 'linear-gradient(0deg, rgba(6,12,20,0.88) 0%, rgba(6,12,20,0.1) 60%)',
        headline: 'Puerto Escondido,\nuntamed.',
        body: 'The beach is minutes away. The Pacific is as it has always been — unhurried, enormous, and entirely without agenda.',
      },
      {
        variant: 'media',
        publicId: 'the-location-1_vfruil',
        imageUrl:
          'https://res.cloudinary.com/dgvqx0qje/image/upload/v1782491717/the-location-1_vfruil.webp',
        preload: true,
        bg: 'linear-gradient(135deg, rgb(10,22,34) 0%, rgb(20,38,54) 100%)',
        icon: 'image',
        caption: 'The nearby coast — river, jungle, and open sky',
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
  {
    id: 'slide-13',
    zIndex: 14,
    meta: null,
    panels: [
      {
        variant: 'closing',
        bg: 'linear-gradient(150deg, rgb(16,12,8) 0%, rgb(34,26,14) 50%, rgb(36,46,34) 100%)',
        overlay: 'radial-gradient(circle at 50% 40%, rgba(0,0,0,0) 0%, rgba(10,8,6,0.65) 100%)',
        eyebrow: 'Puerto Escondido, Oaxaca · Mexico',
        headline: 'This is\nVilla TimTavio.',
        headlineStyle: { fontSize: 'clamp(44px,6vw,84px)' },
      },
    ],
  },
];
