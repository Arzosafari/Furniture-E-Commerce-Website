import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail.jsx'
import ProductGrid from '../components/ProductGrid.jsx'
import NotFound from './NotFound.jsx'
import { getProduct, products } from '../data/products.js'

export default function ProductPage() {
  const { id } = useParams()
  const product = getProduct(id)

  if (!product) return <NotFound />

  const related = products
    .filter((item) => item.id !== product.id)
    .sort((a, b) => Number(b.category === product.category) - Number(a.category === product.category))
    .slice(0, 5)

  return (
    <>
      <ProductDetail product={product} />
      <div className="section">
        <ProductGrid title="You May Also Like" items={related} level={2} showCount={false} />
      </div>
    </>
  )
}
