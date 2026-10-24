import { Link } from 'react-router-dom'
import { collections } from '../data/site.js'

export default function Collections() {
  return (
    <section className="page">
      <div className="container">
        <header className="page__head">
          <p className="eyebrow">Curated</p>
          <h1 className="page__title">Collections</h1>
          <p className="page__sub">
            Seasonal edits and material stories, gathered by our design studio.
          </p>
        </header>

        <div className="collection-grid">
          {collections.map((collection) => (
            <Link
              key={collection.slug}
              to={`/collections/${collection.slug}`}
              className="collection-card"
            >
              <span className="collection-card__media">
                <img src={collection.image} alt="" loading="lazy" />
              </span>
              <span className="collection-card__body">
                <span className="collection-card__title">{collection.label}</span>
                <span className="collection-card__desc">{collection.description}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
