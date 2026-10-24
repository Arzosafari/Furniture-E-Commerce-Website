import { Link } from 'react-router-dom'
import { journalArticles } from '../data/site.js'

export default function Journal() {
  return (
    <section className="page">
      <div className="container">
        <header className="page__head">
          <p className="eyebrow">The Journal</p>
          <h1 className="page__title">Notes On Living Well</h1>
          <p className="page__sub">
            Slow interiors, honest materials and the people who make them.
          </p>
        </header>

        <div className="journal-list">
          {journalArticles.map((article) => (
            <article className="journal-card" key={article.slug}>
              <Link to={`/journal/${article.slug}`} className="journal-card__media">
                <img src={article.image} alt="" loading="lazy" />
              </Link>
              <div className="journal-card__body">
                <p className="journal-card__meta">
                  {article.date} · {article.readTime}
                </p>
                <h2 className="journal-card__title">
                  <Link to={`/journal/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="journal-card__excerpt">{article.excerpt}</p>
                <Link to={`/journal/${article.slug}`} className="text-link">
                  Read the story
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
