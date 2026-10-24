import { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice } from '../data/products.js'
import { categories } from '../data/site.js'
import { HeartIcon, MinusIcon, PlusIcon } from './icons.jsx'

export default function ProductDetail({ product }) {
  const [searchParams] = useSearchParams()
  const colorParam = searchParams.get('color')
  const { addToCart, toggleWishlist, isWished } = useStore()
  const [color, setColor] = useState(
    product.colors.some((item) => item.name === colorParam)
      ? colorParam
      : product.colors[0].name,
  )
  const [qty, setQty] = useState(1)
  const [activeImage, setActiveImage] = useState(0)
  const wished = isWished(product.id)
  const category = categories.find((item) => item.slug === product.category)

  useEffect(() => {
    if (product.colors.some((item) => item.name === colorParam)) {
      setColor(colorParam)
      setActiveImage(0)
    }
  }, [colorParam, product])

  return (
    <div className="container product-detail">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link to={`/collections/${product.category}`}>{category?.label ?? 'Shop'}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{product.name}</span>
      </nav>

      <div className="product-detail__grid">
        <div className="product-detail__media">
          <div className="product-detail__main">
            <img
              src={product.images[activeImage]}
              alt={`${product.name} in ${color}`}
            />
          </div>
          {product.images.length > 1 && (
            <div className="product-detail__thumbs">
              {product.images.map((image, index) => (
                <button
                  key={image}
                  type="button"
                  className={`thumb${index === activeImage ? ' is-active' : ''}`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                  aria-pressed={index === activeImage}
                >
                  <img src={image} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="product-detail__info">
          <p className="eyebrow">{category?.label ?? 'Collection'}</p>
          <h1 className="product-detail__name">{product.name}</h1>
          <p className="product-detail__price">
            {formatPrice(product.price)}
            {product.compareAtPrice && (
              <span className="product-detail__was">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </p>
          <p className="product-detail__desc">{product.description}</p>

          <div className="product-detail__group">
            <p className="product-detail__label">
              Colour — <span>{color}</span>
            </p>
            <div className="swatches swatches--lg">
              {product.colors.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  className={`swatch swatch--lg${option.name === color ? ' is-active' : ''}`}
                  style={{ background: option.hex }}
                  onClick={() => setColor(option.name)}
                  aria-pressed={option.name === color}
                  aria-label={option.name}
                  title={option.name}
                />
              ))}
            </div>
          </div>

          <div className="product-detail__actions">
            <div className="qty qty--lg">
              <button
                type="button"
                onClick={() => setQty((value) => Math.max(1, value - 1))}
                aria-label="Decrease quantity"
                disabled={qty <= 1}
              >
                <MinusIcon />
              </button>
              <span aria-live="polite">{qty}</span>
              <button
                type="button"
                onClick={() => setQty((value) => Math.min(99, value + 1))}
                aria-label="Increase quantity"
              >
                <PlusIcon />
              </button>
            </div>
            <button
              type="button"
              className="btn product-detail__add"
              onClick={() => addToCart(product, color, qty)}
            >
              Add to Bag
            </button>
            <button
              type="button"
              className={`wish-toggle${wished ? ' is-on' : ''}`}
              onClick={() => toggleWishlist(product.id)}
              aria-pressed={wished}
              aria-label={wished ? 'Remove from wishlist' : 'Save to wishlist'}
            >
              <HeartIcon filled={wished} />
            </button>
          </div>

          <p className="product-detail__stock">{product.inventory}</p>

          <div className="accordions">
            <details>
              <summary>Materials</summary>
              <p>{product.materials}</p>
            </details>
            <details>
              <summary>Dimensions</summary>
              <p>{product.dimensions}</p>
            </details>
            <details>
              <summary>Delivery &amp; Returns</summary>
              <p>
                Free shipping on orders over $149. Delivered in protective packaging;
                pieces are assembled on arrival where noted. 30-day returns on unused
                items in original packaging.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}
