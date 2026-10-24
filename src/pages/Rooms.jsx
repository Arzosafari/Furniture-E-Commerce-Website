import { Link } from 'react-router-dom'
import { rooms } from '../data/site.js'

export default function Rooms() {
  return (
    <section className="page">
      <div className="container">
        <header className="page__head">
          <p className="eyebrow">Room by room</p>
          <h1 className="page__title">Shop by Room</h1>
          <p className="page__sub">
            Every space has its own rhythm. Start with the room you use most.
          </p>
        </header>

        <div className="room-grid room-grid--page">
          {rooms.map((room) => (
            <Link key={room.slug} to={`/rooms/${room.slug}`} className="room-card">
              <img src={room.image} alt={room.label} loading="lazy" />
              <span className="room-card__label">{room.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
