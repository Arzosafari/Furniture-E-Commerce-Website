import { useState } from 'react'
import { Link } from 'react-router-dom'
import { footerColumns, socialLinks } from '../data/site.js'
import { socialIcons } from './icons.jsx'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default function Footer() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState({ tone: 'idle', message: '' })

  function handleSubmit(event) {
    event.preventDefault()
    const value = email.trim()
    if (!EMAIL_PATTERN.test(value)) {
      setStatus({ tone: 'error', message: 'Please enter a valid email address.' })
      return
    }
    setStatus({
      tone: 'success',
      message: "You're on the list. This demo doesn't send email.",
    })
    setEmail('')
  }

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-col--wide">
            <h3>Stay Inspired</h3>
            <p>
              Be the first to know about new arrivals, exclusive offers &amp; design
              ideas.
            </p>
            <form className="subscribe" onSubmit={handleSubmit} noValidate>
              <label className="visually-hidden" htmlFor="newsletter-email">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={email}
                autoComplete="email"
                aria-invalid={status.tone === 'error'}
                aria-describedby="newsletter-status"
                onChange={(event) => {
                  setEmail(event.target.value)
                  if (status.tone !== 'idle') setStatus({ tone: 'idle', message: '' })
                }}
              />
              <button type="submit" className="subscribe__btn">
                Subscribe
              </button>
            </form>
            <p
              id="newsletter-status"
              className={`form-msg form-msg--${status.tone}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
          </div>

          {footerColumns.map((column) => (
            <div className="footer-col" key={column.title}>
              <h3>{column.title}</h3>
              <nav className="footer-links" aria-label={column.title}>
                {column.links.map((link) => (
                  <Link key={link.label} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}

          <div className="footer-col">
            <h3>Follow Us</h3>
            <div className="social-row">
              {socialLinks.map((social) => {
                const Icon = socialIcons[social.label]
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="social-link"
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <div className="container copyright__inner">
          <p>© 2025 LIVE NEST. All Rights Reserved.</p>
          <nav className="copyright__links" aria-label="Legal">
            <Link to="/legal/privacy">Privacy Policy</Link>
            <Link to="/legal/terms">Terms &amp; Conditions</Link>
            <Link to="/legal/accessibility">Accessibility</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
