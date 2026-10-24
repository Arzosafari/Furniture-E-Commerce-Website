import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice, products } from '../data/products.js'

export default function SearchDialog() {
  const { searchOpen, closeSearch } = useStore()
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    if (!searchOpen) return undefined
    setQuery('')
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 60)
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeSearch()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => {
      window.clearTimeout(focusTimer)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [searchOpen, closeSearch])

  const trimmed = query.trim().toLowerCase()
  const results = useMemo(() => {
    if (!trimmed) return []
    return products.filter((product) =>
      `${product.name} ${product.category} ${product.description}`
        .toLowerCase()
        .includes(trimmed),
    )
  }, [trimmed])

  return (
    <div
      className={`search-modal${searchOpen ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Search products"
      aria-hidden={!searchOpen}
    >
      <div className="search-modal__backdrop" onClick={closeSearch} aria-hidden="true" />
      <div className="search-modal__panel">
        <div className="search-modal__field">
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search for pieces, materials, rooms…"
            aria-label="Search products"
          />
          <button
            type="button"
            className="search-modal__cancel"
            onClick={closeSearch}
          >
            Close
          </button>
        </div>

        {!trimmed && (
          <p className="search-modal__hint">
            Try “linen”, “lamp” or “chair”.
          </p>
        )}

        {trimmed && results.length === 0 && (
          <div className="search-modal__empty">
            <p>No pieces found for “{query.trim()}”.</p>
            <Link to="/shop" className="text-link" onClick={closeSearch}>
              Browse all products
            </Link>
          </div>
        )}

        {results.length > 0 && (
          <ul className="search-results">
            {results.map((product) => (
              <li key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  className="search-result"
                  onClick={closeSearch}
                >
                  <img src={product.images[0]} alt="" loading="lazy" />
                  <span className="search-result__body">
                    <span className="search-result__name">{product.name}</span>
                    <span className="search-result__meta">
                      {product.category} · {formatPrice(product.price)}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
