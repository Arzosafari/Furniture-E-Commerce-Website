import { useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard.jsx'
import { useStore } from '../context/StoreContext.jsx'
import { products } from '../data/products.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Account() {
  const { wishlist } = useStore()
  const [mode, setMode] = useState('signin')
  const [form, setForm] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('')

  const saved = products.filter((product) => wishlist.includes(product.id))

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = {}
    if (!EMAIL_PATTERN.test(form.email.trim())) {
      nextErrors.email = 'Enter a valid email address.'
    }
    if (form.password.length < 6) {
      nextErrors.password = 'Use at least 6 characters.'
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('')
      return
    }
    setStatus(
      mode === 'signin'
        ? 'This is a demo storefront, so no account was signed in.'
        : 'This is a demo storefront, so no account was created.',
    )
  }

  return (
    <section className="page">
      <div className="container account">
        <div className="account__panel">
          <p className="eyebrow">Your account</p>
          <h1 className="page__title">
            {mode === 'signin' ? 'Welcome Back' : 'Create an Account'}
          </h1>
          <p className="page__sub">
            {mode === 'signin'
              ? 'Sign in to save pieces, track orders and checkout faster.'
              : 'Save your favourite pieces and keep your orders in one place.'}
          </p>

          <form className="form" onSubmit={handleSubmit} noValidate>
            <label className="field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={(event) => setForm({ ...form, email: event.target.value })}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <span className="field__error">{errors.email}</span>}
            </label>
            <label className="field">
              <span>Password</span>
              <input
                type="password"
                name="password"
                autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                value={form.password}
                onChange={(event) => setForm({ ...form, password: event.target.value })}
                aria-invalid={Boolean(errors.password)}
              />
              {errors.password && <span className="field__error">{errors.password}</span>}
            </label>
            <button type="submit" className="btn btn--block">
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
            </button>
            <p className="form-msg form-msg--success" role="status" aria-live="polite">
              {status}
            </p>
          </form>

          <button
            type="button"
            className="account__switch"
            onClick={() => {
              setMode(mode === 'signin' ? 'register' : 'signin')
              setErrors({})
              setStatus('')
            }}
          >
            {mode === 'signin'
              ? 'New here? Create an account'
              : 'Already have an account? Sign in'}
          </button>
        </div>

        <div className="account__saved">
          <h2 className="section-title">Saved Pieces ({saved.length})</h2>
          {saved.length > 0 ? (
            <div className="product-grid product-grid--saved">
              {saved.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="empty-state empty-state--inline">
              <p>You haven’t saved any pieces yet.</p>
              <Link to="/shop" className="btn btn--ghost">
                Browse the Collection
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
