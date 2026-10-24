import { Link, useParams } from 'react-router-dom'
import { journalArticles } from '../data/site.js'

export default function JournalArticle() {
  const { slug } = useParams()
  const article = journalArticles.find((item) => item.slug === slug)

  if (!article) {
    return (
      <section className="page">
        <div className="container empty-state">
          <p>We couldn’t find that story.</p>
          <Link to="/journal" className="btn">
            Back to the Journal
          </Link>
        </div>
      </section>
    )
  }

  return (
    <article className="article">
      <div className="container article__inner">
        <Link to="/journal" className="text-link">
          ← The Journal
        </Link>
        <p className="journal-card__meta" style={{ marginTop: 18 }}>
          {article.date} · {article.readTime}
        </p>
        <h1 className="article__title">{article.title}</h1>
        <div className="article__media">
          <img src={article.image} alt="" />
        </div>
        <div className="article__body">
          {article.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <div className="article__footer">
          <Link to="/shop" className="btn">
            Shop the Story
          </Link>
        </div>
      </div>
    </article>
  )
}
