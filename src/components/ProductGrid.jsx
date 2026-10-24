import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './ProductCard.jsx'
import { categories } from '../data/site.js'

export default function ProductGrid({
  eyebrow,
  title,
  subtitle,
  items,
  showFilters = false,
  showCount = true,
  level = 1,
  emptyMessage = 'Nothing here yet.',
}) {
  const Heading = level === 1 ? 'h1' : 'h2'
  const [activeCategory, setActiveCategory] = useState('all')
  const list =
    activeCategory === 'all'
      ? items
      : items.filter((product) => product.category === activeCategory)
  const available = new Set(items.map((product) => product.category))

  return (
    <section className="page">
      <div className="container">
        <header className="page__head">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <Heading className="page__title">{title}</Heading>
          {subtitle && <p className="page__sub">{subtitle}</p>}
        </header>

        {showFilters && (
          <div className="filters" role="group" aria-label="Filter by category">
            <button
              type="button"
              className={activeCategory === 'all' ? 'is-active' : ''}
              onClick={() => setActiveCategory('all')}
              aria-pressed={activeCategory === 'all'}
            >
              All
            </button>
            {categories
              .filter((category) => available.has(category.slug))
              .map((category) => (
                <button
                  key={category.slug}
                  type="button"
                  className={activeCategory === category.slug ? 'is-active' : ''}
                  onClick={() => setActiveCategory(category.slug)}
                  aria-pressed={activeCategory === category.slug}
                >
                  {category.label}
                </button>
              ))}
          </div>
        )}

        {showCount && (
          <p className="results-count" aria-live="polite">
            {list.length} {list.length === 1 ? 'piece' : 'pieces'}
          </p>
        )}

        {list.length > 0 ? (
          <div className="product-grid product-grid--page">
            {list.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>{emptyMessage}</p>
            <Link to="/shop" className="btn">
              Shop All Pieces
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
