import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { useStore } from '../context/StoreContext.jsx'
import { categories, navLinks, rooms } from '../data/site.js'
import { CloseIcon } from './icons.jsx'

export default function MobileNavigation() {
  const { navOpen, closeNav } = useStore()
  const closeRef = useRef(null)

  useEffect(() => {
    if (!navOpen) return undefined
    closeRef.current?.focus()
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeNav()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [navOpen, closeNav])

  return (
    <>
      <div
        className={`overlay${navOpen ? ' is-open' : ''}`}
        onClick={closeNav}
        aria-hidden="true"
      />
      <div
        className={`side-nav${navOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        aria-hidden={!navOpen}
      >
        <div className="side-nav__head">
          <span className="wordmark wordmark--sm">
            Live <span>/</span> Nest
          </span>
          <button
            type="button"
            className="icon-btn"
            onClick={closeNav}
            aria-label="Close menu"
            ref={closeRef}
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="side-nav__links" aria-label="Mobile">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={closeNav}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="side-nav__group">
          <p className="eyebrow">Shop by category</p>
          <div className="side-nav__sublinks">
            {categories.map((category) => (
              <NavLink
                key={category.slug}
                to={`/collections/${category.slug}`}
                onClick={closeNav}
              >
                {category.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="side-nav__group">
          <p className="eyebrow">Shop by room</p>
          <div className="side-nav__sublinks">
            {rooms.map((room) => (
              <NavLink key={room.slug} to={`/rooms/${room.slug}`} onClick={closeNav}>
                {room.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
