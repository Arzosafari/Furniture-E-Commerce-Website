// Editorial content and navigation for the LIVE / NEST storefront.

export const navLinks = [
  { label: 'Shop', to: '/shop' },
  { label: 'Rooms', to: '/rooms' },
  { label: 'Collections', to: '/collections' },
  { label: 'New', to: '/new' },
  { label: 'Sale', to: '/sale' },
  { label: 'Journal', to: '/journal' },
]

export const heroSlides = [
  {
    image: '/images/hero-1.jpg',
    title: 'Live Beautifully,',
    accent: 'Every Day.',
    subtitle: 'Curated pieces for a home\nthat reflects you.',
    cta: { label: 'Shop the Collection', to: '/shop' },
  },
  {
    image: '/images/hero-2.jpg',
    title: 'Designed For',
    accent: 'Quiet Living.',
    subtitle: 'Natural materials, honest forms,\nmade to be lived with.',
    cta: { label: 'Shop Furniture', to: '/collections/furniture' },
  },
  {
    image: '/images/hero-3.jpg',
    title: 'Warmth In',
    accent: 'Every Corner.',
    subtitle: 'Layered texture and soft light\nfor the slower seasons.',
    cta: { label: 'Shop New Arrivals', to: '/new' },
  },
]

export const categories = [
  { slug: 'furniture', label: 'Furniture', image: '/images/cat-furniture.jpg' },
  { slug: 'kitchen', label: 'Kitchen', image: '/images/cat-kitchen.jpg' },
  { slug: 'lighting', label: 'Lighting', image: '/images/cat-lighting.jpg' },
  { slug: 'decor', label: 'Decor', image: '/images/cat-decor.jpg' },
  { slug: 'storage', label: 'Storage', image: '/images/cat-storage.jpg' },
  { slug: 'textiles', label: 'Textiles', image: '/images/cat-textiles.jpg' },
]

export const rooms = [
  {
    slug: 'living-room',
    label: 'Living Room',
    image: '/images/room-living.jpg',
    description: 'Deep seats, warm wood and room to gather.',
  },
  {
    slug: 'bedroom',
    label: 'Bedroom',
    image: '/images/room-bedroom.jpg',
    description: 'Soft linen, low light and a slower morning.',
  },
  {
    slug: 'dining-room',
    label: 'Dining Room',
    image: '/images/room-dining.jpg',
    description: 'Long tables and low-hanging light for every meal.',
  },
  {
    slug: 'home-office',
    label: 'Home Office',
    image: '/images/room-office.jpg',
    description: 'A calm desk, a good chair, quiet focus.',
  },
  {
    slug: 'outdoor',
    label: 'Outdoor',
    image: '/images/room-outdoor.jpg',
    description: 'Pale woven seating for long afternoons outside.',
  },
]

export const collections = [
  {
    slug: 'summer-edit',
    label: 'Summer Edit',
    image: '/images/banner-summer.jpg',
    description:
      'Crisp linen, warm ceramics and the pieces that make a room feel like sunlight.',
    productIds: ['arlo-ceramic-vase', 'solene-table-vase', 'linen-cushion-cover', 'fold-linen-throw'],
  },
  {
    slug: 'new-in',
    label: 'New In',
    image: '/images/banner-new.jpg',
    description: 'The latest additions to the LIVE / NEST collection.',
    productIds: ['orla-sideboard', 'lumen-pendant', 'halden-accent-chair', 'solene-table-vase'],
  },
  {
    slug: 'quiet-materials',
    label: 'Quiet Materials',
    image: '/images/detail-cabinet-1.jpg',
    description: 'Oak, bouclé and stoneware — honest materials that age beautifully.',
    productIds: ['sable-lounge-chair', 'rhea-storage-cabinet', 'halden-accent-chair', 'alba-dinnerware-set'],
  },
  {
    slug: 'evening-light',
    label: 'Evening Light',
    image: '/images/detail-pendant-2.jpg',
    description: 'Lamps and lanterns chosen for their glow after sunset.',
    productIds: ['milo-pendant-lamp', 'lumen-pendant', 'arlo-ceramic-vase'],
  },
]

export const banners = [
  {
    title: 'Summer Edit',
    description: 'Fresh looks for sunlit spaces.',
    linkLabel: 'Shop the Edit',
    to: '/collections/summer-edit',
    image: '/images/banner-summer.jpg',
    background: '#F1E9DD',
  },
  {
    title: 'The Design Guide',
    description: "Timeless tips for a home you'll love.",
    linkLabel: 'Read & Inspire',
    to: '/journal',
    image: '/images/banner-guide.jpg',
    background: '#DDE0CE',
  },
  {
    title: 'New In',
    description: 'Discover the latest arrivals.',
    linkLabel: 'Shop New Arrivals',
    to: '/new',
    image: '/images/banner-new.jpg',
    background: '#E4DDD3',
  },
]

export const gallery = [
  { image: '/images/gallery-1.jpg', caption: 'Living room, Copenhagen' },
  { image: '/images/gallery-2.jpg', caption: 'Ceramics on oak shelving' },
  { image: '/images/gallery-3.jpg', caption: 'Dinner for six, Amsterdam' },
  { image: '/images/gallery-4.jpg', caption: 'Quiet corner, Portland' },
  { image: '/images/gallery-5.jpg', caption: 'Morning light, Lisbon' },
  { image: '/images/gallery-6.jpg', caption: 'Reading corner, Antwerp' },
  { image: '/images/gallery-7.jpg', caption: 'Layered neutrals, Oslo' },
  { image: '/images/gallery-8.jpg', caption: 'Terrace, Mallorca' },
]

export const services = [
  {
    icon: 'frame',
    title: 'Thoughtfully Curated',
    description: 'Quality pieces picked for modern living.',
  },
  {
    icon: 'leaf',
    title: 'Sustainable Choices',
    description: 'Better materials for a better home.',
  },
  {
    icon: 'return',
    title: 'Easy Returns',
    description: '30-day returns for peace of mind.',
  },
  {
    icon: 'lock',
    title: 'Secure Checkout',
    description: 'Safe & secure payments you can trust.',
  },
  {
    icon: 'support',
    title: 'Design Support',
    description: "Need help? We're here for you.",
  },
]

export const footerColumns = [
  {
    title: 'Shop',
    links: [
      { label: 'All Products', to: '/shop' },
      { label: 'New Arrivals', to: '/new' },
      { label: 'Bestsellers', to: '/collections/bestsellers' },
      { label: 'Sale', to: '/sale' },
      { label: 'Gift Cards', to: '/shop' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Contact Us', to: '/journal' },
      { label: 'Shipping & Delivery', to: '/journal' },
      { label: 'Returns & Exchanges', to: '/journal' },
      { label: 'FAQs', to: '/journal' },
      { label: 'Track Your Order', to: '/account' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', to: '/journal' },
      { label: 'Sustainability', to: '/journal' },
      { label: 'Journal', to: '/journal' },
      { label: 'Careers', to: '/journal' },
      { label: 'Press', to: '/journal' },
    ],
  },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Pinterest', href: 'https://pinterest.com' },
  { label: 'Facebook', href: 'https://facebook.com' },
  { label: 'TikTok', href: 'https://tiktok.com' },
]

export const journalArticles = [
  {
    slug: 'layering-neutral-textures',
    title: 'Layering Neutral Textures',
    excerpt:
      'How linen, bouclé and raw oak bring depth to a palette built almost entirely from beige.',
    date: 'September 2025',
    readTime: '6 min read',
    image: '/images/gallery-4.jpg',
    body: [
      'A neutral room does not have to be a flat room. The difference between beige that feels considered and beige that feels unfinished is almost always texture: the contrast between a crisp linen seam and a soft bouclé curve, or between chalky ceramic and oiled oak.',
      'Start with one soft surface and one hard surface per corner. A linen cushion against a plaster wall, a stoneware vase on a timber console. Then repeat the pairing at a different scale so the eye keeps travelling.',
      'Keep the light warm and low where you can. Matte finishes hold shadow instead of reflecting it, which is what gives a quiet room its sense of depth after sunset.',
    ],
  },
  {
    slug: 'a-home-for-everything',
    title: 'A Home For Everything',
    excerpt:
      'Storage that disappears into the architecture — and the pieces worth leaving on show.',
    date: 'August 2025',
    readTime: '5 min read',
    image: '/images/detail-cabinet-1.jpg',
    body: [
      'Good storage is measured by what it lets you keep out of sight. A low sideboard that holds the records, the chargers, the board games, and still leaves the wall above it almost empty.',
      'Choose one long horizontal piece rather than several small ones. It reads as architecture rather than furniture, and it gives everything above it room to breathe.',
      'Reserve open shelving for the objects you actually love looking at: three ceramics, a branch, a framed print. Anything more and a shelf becomes a list.',
    ],
  },
  {
    slug: 'lighting-before-furniture',
    title: 'Lighting Before Furniture',
    excerpt:
      'Why we plan a lighting scheme first — and how a pendant changes the way a table feels.',
    date: 'July 2025',
    readTime: '7 min read',
    image: '/images/detail-pendant-1.jpg',
    body: [
      'Most rooms are lit from the ceiling by one unforgiving source. The single change that does more for a home than any upholstery decision is lowering the light and giving each area its own pool of it.',
      'Hang a pendant low over a dining table — close enough to feel intimate, high enough to see across. Let lamps sit at shoulder height in a living room so faces are lit rather than shadows cast.',
      'Warm bulbs, matte shades, and a dimmer on everything. It is the least expensive way to make a room feel expensive.',
    ],
  },
]
