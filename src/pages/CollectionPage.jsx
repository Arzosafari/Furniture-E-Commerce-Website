import { Link, useParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { bestsellers, productsFor } from '../data/products.js'
import { categories, collections } from '../data/site.js'

export default function CollectionPage() {
  const { slug } = useParams()
  const category = categories.find((item) => item.slug === slug)
  const collection = collections.find((item) => item.slug === slug)

  if (slug === 'bestsellers') {
    return (
      <ProductGrid
        eyebrow="Most loved"
        title="Bestsellers"
        subtitle="The pieces our customers return to, season after season."
        items={bestsellers}
      />
    )
  }

  if (category) {
    return (
      <ProductGrid
        eyebrow="Shop by category"
        title={category.label}
        subtitle={`Our edit of ${category.label.toLowerCase()} for a considered home.`}
        items={productsFor({ category: slug })}
        emptyMessage={`No ${category.label.toLowerCase()} pieces are available right now.`}
      />
    )
  }

  if (collection) {
    return (
      <ProductGrid
        eyebrow="Curated collection"
        title={collection.label}
        subtitle={collection.description}
        items={productsFor({ collection })}
      />
    )
  }

  return (
    <section className="page">
      <div className="container empty-state">
        <p>We couldn’t find that collection.</p>
        <Link to="/collections" className="btn">
          View All Collections
        </Link>
      </div>
    </section>
  )
}
