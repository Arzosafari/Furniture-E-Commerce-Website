import { useCallback, useEffect, useRef, useState } from 'react'
import { gallery } from '../data/site.js'
import { ChevronLeftIcon, ChevronRightIcon } from './icons.jsx'

export default function StyledByYouCarousel() {
  const trackRef = useRef(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const syncEdges = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4)
  }, [])

  useEffect(() => {
    syncEdges()
    window.addEventListener('resize', syncEdges)
    return () => window.removeEventListener('resize', syncEdges)
  }, [syncEdges])

  const scrollByCard = (direction) => {
    const el = trackRef.current
    if (!el) return
    const first = el.firstElementChild
    const step = first ? first.getBoundingClientRect().width + 14 : 220
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section className="section section--gallery">
      <div className="container">
        <div className="section-head section-head--gallery">
          <div>
            <h2 className="section-title">Styled By You</h2>
            <p className="gallery__sub">Real homes. Real inspiration.</p>
          </div>
        </div>

        <div className="gallery">
          <button
            type="button"
            className="gallery__arrow gallery__arrow--prev"
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous images"
          >
            <ChevronLeftIcon />
          </button>

          <div className="gallery__track" ref={trackRef} onScroll={syncEdges}>
            {gallery.map((item) => (
              <figure className="gallery__item" key={item.image}>
                <img src={item.image} alt={item.caption} loading="lazy" />
                <figcaption className="gallery__caption">{item.caption}</figcaption>
              </figure>
            ))}
          </div>

          <button
            type="button"
            className="gallery__arrow gallery__arrow--next"
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next images"
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </section>
  )
}
