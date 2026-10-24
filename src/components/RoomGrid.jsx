import { Link } from 'react-router-dom'
import { rooms } from '../data/site.js'
import SectionHeading from './SectionHeading.jsx'

export default function RoomGrid() {
  return (
    <section className="section section--rooms">
      <div className="container">
        <SectionHeading
          title="Shop by Room"
          linkLabel="Explore All Rooms"
          linkTo="/rooms"
        />
        <div className="room-grid">
          {rooms.map((room) => (
            <Link
              key={room.slug}
              to={`/rooms/${room.slug}`}
              className="room-card"
            >
              <img src={room.image} alt={`${room.label} — ${room.description}`} loading="lazy" />
              <span className="room-card__label">{room.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
