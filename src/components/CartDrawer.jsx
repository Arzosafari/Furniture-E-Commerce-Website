import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'
import { formatPrice } from '../data/products.js'
import { CloseIcon, MinusIcon, PlusIcon } from './icons.jsx'

export default function CartDrawer() {
  const { cartOpen, closeCart, cartItems, cartCount, subtotal, setQty, removeItem } = useStore()
  const [notice, setNotice] = useState('')
  const closeRef = useRef(null)

  useEffect(() => {
    if (!cartOpen) {
      setNotice('')
      return undefined
    }
    closeRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeCart()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [cartOpen, closeCart])

  return (
    <>
      <div
        className={`overlay${cartOpen ? ' is-open' : ''}`}
        onClick={closeCart}
        aria-hidden="true"
      />
      <aside
        className={`drawer${cartOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Shopping bag"
        aria-hidden={!cartOpen}
      >
        <header className="drawer__head">
          <h2 className="drawer__title">Your Bag ({cartCount})</h2>
          <button
            type="button"
            className="icon-btn"
            onClick={closeCart}
            aria-label="Close bag"
            ref={closeRef}
          >
            <CloseIcon />
          </button>
        </header>

        {cartItems.length === 0 ? (
          <div className="drawer__empty">
            <p>Your bag is empty.</p>
            <Link to="/shop" className="btn" onClick={closeCart}>
              Shop All Pieces
            </Link>
          </div>
        ) : (
          <>
            <div className="drawer__items">
              {cartItems.map((item) => (
                <div className="cart-item" key={item.key}>
                  <img
                    className="cart-item__img"
                    src={item.product.images[0]}
                    alt=""
                    loading="lazy"
                  />
                  <div className="cart-item__body">
                    <div className="cart-item__top">
                      <Link
                        to={`/product/${item.product.id}`}
                        className="cart-item__name"
                        onClick={closeCart}
                      >
                        {item.product.name}
                      </Link>
                      <button
                        type="button"
                        className="cart-item__remove"
                        onClick={() => removeItem(item.key)}
                        aria-label={`Remove ${item.product.name} from bag`}
                      >
                        <CloseIcon />
                      </button>
                    </div>
                    <p className="cart-item__meta">
                      {item.color} · {formatPrice(item.product.price)}
                    </p>
                    <div className="qty">
                      <button
                        type="button"
                        onClick={() => setQty(item.key, item.qty - 1)}
                        aria-label={`Decrease quantity of ${item.product.name}`}
                        disabled={item.qty <= 1}
                      >
                        <MinusIcon />
                      </button>
                      <span aria-live="polite" aria-label="Quantity">
                        {item.qty}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQty(item.key, item.qty + 1)}
                        aria-label={`Increase quantity of ${item.product.name}`}
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <footer className="drawer__foot">
              <div className="drawer__row">
                <span>Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <p className="drawer__note">
                {subtotal >= 149
                  ? 'Free shipping applied.'
                  : `Add ${formatPrice(149 - subtotal)} more for free shipping.`}
              </p>
              <button
                type="button"
                className="btn btn--block"
                onClick={() =>
                  setNotice(
                    "Checkout isn't connected in this demo, so no payment is taken.",
                  )
                }
              >
                Checkout
              </button>
              <p className="drawer__notice" role="status" aria-live="polite">
                {notice}
              </p>
            </footer>
          </>
        )}
      </aside>
    </>
  )
}
