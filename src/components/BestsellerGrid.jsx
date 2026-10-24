import { bestsellers } from '../data/products.js'
import ProductCard from './ProductCard.jsx'
import SectionHeading from './SectionHeading.jsx'

export default function BestsellerGrid() {
  return (
    <section className="section section--bestsellers">
      <div className="container">
        <SectionHeading
          title="Bestsellers"
          linkLabel="View All Bestsellers"
          linkTo="/collections/bestsellers"
        />
        <div className="product-grid">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
