import ProductGrid from '../components/ProductGrid.jsx'
import { productsFor } from '../data/products.js'

export default function Shop({ mode }) {
  const config = {
    new: {
      eyebrow: 'Just arrived',
      title: 'New Arrivals',
      subtitle: 'The latest pieces to join the LIVE / NEST collection.',
      items: productsFor({ only: 'new' }),
    },
    sale: {
      eyebrow: 'Final call',
      title: 'Sale',
      subtitle: 'Last pieces at reduced prices — while they last.',
      items: productsFor({ only: 'sale' }),
    },
    default: {
      eyebrow: 'The collection',
      title: 'All Products',
      subtitle: 'Thoughtfully curated furniture, lighting and objects for modern living.',
      items: productsFor({}),
    },
  }[mode ?? 'default']

  return (
    <ProductGrid
      eyebrow={config.eyebrow}
      title={config.title}
      subtitle={config.subtitle}
      items={config.items}
      showFilters
      emptyMessage="No pieces are available in this edit right now."
    />
  )
}
