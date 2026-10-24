import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page">
      <div className="container empty-state">
        <p className="eyebrow">404</p>
        <h1 className="page__title">This Page Has Moved On</h1>
        <p>The piece or page you were looking for isn’t here.</p>
        <div className="empty-state__actions">
          <Link to="/" className="btn">
            Back to Home
          </Link>
          <Link to="/shop" className="btn btn--ghost">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
