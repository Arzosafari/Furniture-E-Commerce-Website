import { Link, NavLink } from 'react-router-dom'
import { useStore } from '../context/StoreContext.jsx'
import { navLinks } from '../data/site.js'
import { BagIcon, MenuIcon, SearchIcon, UserIcon } from './icons.jsx'

export default function Header() {
  const { cartCount, openCart, openSearch, openNav } = useStore()

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <div className="header__left">
          <button
            type="button"
            className="icon-btn"
            onClick={openNav}
            aria-label="Open menu"
          >
            <MenuIcon />
          </button>
          <Link to="/" className="wordmark" aria-label="LIVE / NEST — home">
            Live <span>/</span> Nest
          </Link>
        </div>

        <nav className="main-nav" aria-label="Main">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={openSearch}
            aria-label="Search products"
          >
            <SearchIcon />
          </button>
          <Link to="/account" className="icon-btn" aria-label="Account">
            <UserIcon />
          </Link>
          <button
            type="button"
            className="icon-btn icon-btn--bag"
            onClick={openCart}
            aria-label={`Shopping bag, ${cartCount} ${cartCount === 1 ? 'item' : 'items'}`}
          >
            <BagIcon />
            <span className="cart-count" aria-hidden="true">
              {cartCount}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
