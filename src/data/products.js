// Sample catalogue for the LIVE / NEST storefront.
// Kept as plain data so a real inventory service can replace it later.

export function formatPrice(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value)
}

export const products = [
  {
    id: 'sable-lounge-chair',
    name: 'Sable Lounge Chair',
    price: 649,
    category: 'furniture',
    rooms: ['living-room', 'bedroom'],
    bestseller: true,
    description:
      'A sculptural lounge chair with a gently curved back and a deep, generous seat. Wrapped in a soft wool-blend bouclé and lifted on tapered solid oak legs, it is the quiet centrepiece of a considered living room.',
    images: [
      '/images/product-sable-lounge-chair.jpg',
      '/images/detail-lounge-1.jpg',
      '/images/detail-lounge-2.jpg',
    ],
    colors: [
      { name: 'Ivory Bouclé', hex: '#EADFCE' },
      { name: 'Sand', hex: '#D6C2A8' },
      { name: 'Olive', hex: '#6E6D4C' },
    ],
    materials: 'Solid oak frame, wool-blend bouclé, high-resilience foam',
    dimensions: 'W 78 × D 82 × H 74 cm · seat height 42 cm',
    inventory: 'In stock — ships in 5–7 days',
  },
  {
    id: 'arlo-ceramic-vase',
    name: 'Arlo Ceramic Vase',
    price: 49,
    category: 'decor',
    rooms: ['living-room', 'dining-room', 'home-office'],
    bestseller: true,
    description:
      'Hand-thrown in a warm matte clay, the Arlo vase has a softly irregular silhouette that catches the light. Beautiful on its own, extraordinary with a single branch of dried foliage.',
    images: [
      '/images/product-arlo-vase.jpg',
      '/images/detail-vase-1.jpg',
      '/images/detail-vase-2.jpg',
    ],
    colors: [
      { name: 'Clay', hex: '#C39A7B' },
      { name: 'Chalk', hex: '#E8E1D5' },
      { name: 'Ash', hex: '#A9A296' },
    ],
    materials: 'Hand-thrown stoneware with matte glaze',
    dimensions: 'Ø 16 × H 26 cm',
    inventory: 'In stock — ships in 3–5 days',
  },
  {
    id: 'milo-pendant-lamp',
    name: 'Milo Pendant Lamp',
    price: 129,
    category: 'lighting',
    rooms: ['dining-room', 'living-room'],
    bestseller: true,
    description:
      'A simple dome pendant with a soft, diffused glow. Powder-coated steel on a linen-wrapped cable, designed to sit low over a dining table or reading nook.',
    images: [
      '/images/product-milo-pendant.jpg',
      '/images/detail-pendant-1.jpg',
      '/images/detail-pendant-2.jpg',
    ],
    colors: [
      { name: 'Bone', hex: '#E7E0D2' },
      { name: 'Olive', hex: '#5C6046' },
      { name: 'Matte Black', hex: '#2E2E2A' },
    ],
    materials: 'Powder-coated steel shade, linen cable, brass canopy',
    dimensions: 'Ø 34 × H 22 cm · 2 m cable',
    inventory: 'In stock — ships in 5–7 days',
  },
  {
    id: 'rhea-storage-cabinet',
    name: 'Rhea Storage Cabinet',
    price: 899,
    category: 'storage',
    rooms: ['living-room', 'home-office', 'bedroom'],
    bestseller: true,
    description:
      'Mid-century proportions, quiet detailing. Two soft-close doors and an adjustable shelf behind a clean walnut facade — a home for records, linen and everything in between.',
    images: [
      '/images/product-rhea-cabinet.jpg',
      '/images/detail-cabinet-1.jpg',
      '/images/detail-cabinet-2.jpg',
    ],
    colors: [
      { name: 'Walnut', hex: '#8A5B3B' },
      { name: 'Natural Oak', hex: '#C9A87C' },
    ],
    materials: 'Walnut veneer over FSC-certified engineered wood, solid oak legs',
    dimensions: 'W 120 × D 42 × H 76 cm',
    inventory: 'In stock — ships in 2–3 weeks',
  },
  {
    id: 'linen-cushion-cover',
    name: 'Linen Cushion Cover',
    price: 39,
    category: 'textiles',
    rooms: ['living-room', 'bedroom', 'outdoor'],
    bestseller: true,
    description:
      'Stonewashed European linen with a subtle slub and a concealed zip. Softens with every wash and layers effortlessly with our bouclé and wool pieces.',
    images: [
      '/images/product-linen-cushion.jpg',
      '/images/detail-cushion-1.jpg',
      '/images/detail-cushion-2.jpg',
    ],
    colors: [
      { name: 'Rust', hex: '#B96547' },
      { name: 'Oat', hex: '#DCCFBB' },
      { name: 'Sage', hex: '#9AA189' },
    ],
    materials: '100% European flax linen, stonewashed',
    dimensions: '50 × 50 cm',
    inventory: 'In stock — ships in 2–4 days',
  },
  {
    id: 'halden-accent-chair',
    name: 'Halden Accent Chair',
    price: 529,
    category: 'furniture',
    rooms: ['living-room', 'home-office'],
    newIn: true,
    description:
      'A pared-back accent chair with a solid ash frame and a woven seat that lends quiet texture to a corner. Light enough to move wherever the light is best.',
    images: ['/images/cat-furniture.jpg', '/images/detail-lounge-2.jpg'],
    colors: [
      { name: 'Natural Ash', hex: '#C6A780' },
      { name: 'Walnut', hex: '#8A5B3B' },
    ],
    materials: 'Solid ash, paper-cord woven seat',
    dimensions: 'W 54 × D 56 × H 78 cm',
    inventory: 'In stock — ships in 1–2 weeks',
  },
  {
    id: 'alba-dinnerware-set',
    name: 'Alba Dinnerware Set',
    price: 89,
    category: 'kitchen',
    rooms: ['dining-room'],
    description:
      'Four hand-glazed stoneware plates and bowls in a warm matte finish. Stackable, dishwasher-safe and made for long tables and second helpings.',
    images: ['/images/cat-kitchen.jpg', '/images/gallery-3.jpg'],
    colors: [
      { name: 'Olive', hex: '#6E6D4C' },
      { name: 'Chalk', hex: '#E8E1D5' },
    ],
    materials: 'Hand-glazed stoneware',
    dimensions: 'Set of 4 · plate Ø 27 cm, bowl Ø 15 cm',
    inventory: 'In stock — ships in 3–5 days',
  },
  {
    id: 'solene-table-vase',
    name: 'Solene Table Vase',
    price: 79,
    category: 'decor',
    rooms: ['living-room', 'dining-room'],
    newIn: true,
    description:
      'A softly ribbed vessel in a chalky glaze, shaped by hand and left unpolished so the maker’s touch remains. Group two or three for a quiet still life.',
    images: ['/images/cat-decor.jpg', '/images/detail-vase-2.jpg'],
    colors: [
      { name: 'Chalk', hex: '#E8E1D5' },
      { name: 'Terra', hex: '#B96547' },
    ],
    materials: 'Stoneware with chalk glaze',
    dimensions: 'Ø 14 × H 32 cm',
    inventory: 'In stock — ships in 3–5 days',
  },
  {
    id: 'orla-sideboard',
    name: 'Orla Sideboard',
    price: 1249,
    category: 'storage',
    rooms: ['living-room', 'dining-room'],
    newIn: true,
    description:
      'Long, low and beautifully practical. Four push-latch doors, cable cut-outs at the back and a warm oak finish that softens as the light moves across it.',
    images: ['/images/cat-storage.jpg', '/images/detail-cabinet-1.jpg'],
    colors: [
      { name: 'Natural Oak', hex: '#C9A87C' },
      { name: 'Smoked Oak', hex: '#6F5740' },
    ],
    materials: 'Oak veneer, solid oak base, adjustable shelving',
    dimensions: 'W 180 × D 45 × H 72 cm',
    inventory: 'In stock — ships in 3–4 weeks',
  },
  {
    id: 'fold-linen-throw',
    name: 'Fold Linen Throw',
    price: 69,
    compareAtPrice: 89,
    category: 'textiles',
    rooms: ['living-room', 'bedroom'],
    sale: true,
    description:
      'A weighty, breathable throw woven from European flax and finished with a hand-knotted fringe. The piece you reach for when the evening turns cool.',
    images: ['/images/cat-textiles.jpg', '/images/detail-cushion-2.jpg'],
    colors: [
      { name: 'Oat', hex: '#DCCFBB' },
      { name: 'Sage', hex: '#9AA189' },
      { name: 'Clay', hex: '#C39A7B' },
    ],
    materials: '100% European flax linen',
    dimensions: '130 × 180 cm',
    inventory: 'In stock — ships in 2–4 days',
  },
  {
    id: 'lumen-pendant',
    name: 'Lumen Pendant',
    price: 189,
    category: 'lighting',
    rooms: ['kitchen', 'dining-room'],
    newIn: true,
    description:
      'A hand-finished pendant with a warm bone shade and a soft downward pool of light — ideal hung in a pair above a kitchen island.',
    images: ['/images/cat-lighting.jpg', '/images/detail-pendant-1.jpg'],
    colors: [
      { name: 'Bone', hex: '#E7E0D2' },
      { name: 'Olive', hex: '#5C6046' },
    ],
    materials: 'Spun steel, powder-coated finish, fabric cable',
    dimensions: 'Ø 30 × H 26 cm · 3 m cable',
    inventory: 'In stock — ships in 1–2 weeks',
  },
]

export const bestsellers = products.filter((product) => product.bestseller)

export function getProduct(id) {
  return products.find((product) => product.id === id)
}

export function productsFor({ category, room, collection, only }) {
  let list = products
  if (only === 'new') list = list.filter((product) => product.newIn)
  if (only === 'sale') list = list.filter((product) => product.sale || product.compareAtPrice)
  if (category) list = list.filter((product) => product.category === category)
  if (room) list = list.filter((product) => product.rooms?.includes(room))
  if (collection?.productIds) {
    list = collection.productIds.map((id) => getProduct(id)).filter(Boolean)
  }
  return list
}
