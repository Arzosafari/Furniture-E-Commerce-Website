import { Link } from 'react-router-dom'
import { banners } from '../data/site.js'
import { ArrowRightIcon } from './icons.jsx'

export default function EditorialBanners() {
  return (
    <section className="section section--promos">
      <div className="container">
        <div className="banner-row">
          {banners.map((banner) => (
            <article
              key={banner.title}
              className="banner"
              style={{ '--banner-bg': banner.background }}
            >
              <div className="banner__media">
                <img src={banner.image} alt="" loading="lazy" />
              </div>
              <div className="banner__text">
                <h2 className="banner__title">{banner.title}</h2>
                <p className="banner__desc">{banner.description}</p>
                <Link to={banner.to} className="banner__link">
                  {banner.linkLabel}
                  <ArrowRightIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
