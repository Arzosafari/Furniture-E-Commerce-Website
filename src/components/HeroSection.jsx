import { useState } from 'react'
import { Link } from 'react-router-dom'
import { heroSlides } from '../data/site.js'

export default function HeroSection() {
  const [active, setActive] = useState(0)
  const slide = heroSlides[active]

  return (
    <section className="hero" aria-label="Featured">
      <div className="hero__stage">
        {heroSlides.map((item, index) => (
          <div
            key={item.image}
            className={`hero__slide${index === active ? ' is-active' : ''}`}
            aria-hidden={index !== active}
          >
            <img
              className="hero__img"
              src={item.image}
              alt=""
              loading={index === 0 ? 'eager' : 'lazy'}
            />
            <div className="hero__scrim" />
          </div>
        ))}

        <div className="hero__content">
          <div className="container">
            <div className="hero__copy" key={active}>
              <h1 className="hero__title">
                {slide.title}
                <em>{slide.accent}</em>
              </h1>
              <p className="hero__sub">{slide.subtitle}</p>
              <Link to={slide.cta.to} className="btn">
                {slide.cta.label}
              </Link>
            </div>
          </div>
        </div>

        <div className="hero__dots" role="tablist" aria-label="Hero slides">
          {heroSlides.map((item, index) => (
            <button
              key={item.image}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Slide ${index + 1}: ${item.title} ${item.accent}`}
              className={`hero__dot${index === active ? ' is-active' : ''}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
