import { Link, useParams } from 'react-router-dom'
import ProductGrid from '../components/ProductGrid.jsx'
import { productsFor } from '../data/products.js'
import { rooms } from '../data/site.js'

export default function RoomPage() {
  const { slug } = useParams()
  const room = rooms.find((item) => item.slug === slug)

  if (!room) {
    return (
      <section className="page">
        <div className="container empty-state">
          <p>We couldn’t find that room.</p>
          <Link to="/rooms" className="btn">
            Explore All Rooms
          </Link>
        </div>
      </section>
    )
  }

  return (
    <ProductGrid
      eyebrow="Shop by room"
      title={room.label}
      subtitle={room.description}
      items={productsFor({ room: slug })}
      emptyMessage={`We’re adding more ${room.label.toLowerCase()} pieces soon.`}
    />
  )
}
