import { Link } from 'react-router-dom'
import { categories } from '../data/site.js'

export default function CategoryNavigation() {
  return (
    <nav className="cat-row" aria-label="Shop by category">
      {categories.map((category) => (
        <Link
          key={category.slug}
          to={`/collections/${category.slug}`}
          className="cat"
        >
          <span className="cat__circle">
            <img
              className="cat__img"
              src={category.image}
              alt={category.label}
              loading="lazy"
            />
          </span>
          <span className="cat__label">{category.label}</span>
        </Link>
      ))}
    </nav>
  )
}
