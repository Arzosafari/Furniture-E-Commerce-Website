import { Link } from 'react-router-dom'
import { formatPrice } from '../data/products.js'
import { useStore } from '../context/StoreContext.jsx'
import { HeartIcon } from './icons.jsx'

export default function ProductCard({ product }) {
  const { toggleWishlist, isWished } = useStore()
  const wished = isWished(product.id)

  return (
    <article className="product-card">
      <div className="product-card__media">
        <Link to={`/product/${product.id}`} className="product-card__link" tabIndex={-1} aria-hidden="true">
          <img src={product.images[0]} alt="" loading="lazy" />
        </Link>
        {product.newIn && <span className="product-card__badge">New</span>}
        {product.compareAtPrice && (
          <span className="product-card__badge product-card__badge--sale">Sale</span>
        )}
        <button
          type="button"
          className={`product-card__wish${wished ? ' is-on' : ''}`}
          onClick={() => toggleWishlist(product.id)}
          aria-pressed={wished}
          aria-label={
            wished
              ? `Remove ${product.name} from your wishlist`
              : `Save ${product.name} to your wishlist`
          }
        >
          <HeartIcon filled={wished} />
        </button>
      </div>

      <div className="product-card__body">
        <Link to={`/product/${product.id}`} className="product-card__name">
          {product.name}
        </Link>
        <p className="product-card__price">
          {formatPrice(product.price)}
          {product.compareAtPrice && (
            <span className="product-card__was">{formatPrice(product.compareAtPrice)}</span>
          )}
        </p>
        <div className="swatches">
          {product.colors.map((color) => (
            <Link
              key={color.name}
              to={`/product/${product.id}?color=${encodeURIComponent(color.name)}`}
              className="swatch"
              style={{ background: color.hex }}
              title={color.name}
              aria-label={`${product.name} in ${color.name}`}
            />
          ))}
        </div>
      </div>
    </article>
  )
}
