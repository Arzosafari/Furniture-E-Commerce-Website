import { Link } from 'react-router-dom'

export default function About() {
  return (
    <section className="page">
      <div className="container prose-page">
        <header className="page__head">
          <p className="eyebrow">Our story</p>
          <h1 className="page__title">About LIVE / NEST</h1>
          <p className="page__sub">
            A small studio with a simple belief: a home should feel unhurried.
          </p>
        </header>

        <div className="about-media">
          <img src="/images/gallery-1.jpg" alt="A sunlit living room styled with LIVE / NEST pieces" />
        </div>

        <section className="prose-section">
          <h2>How we began</h2>
          <p>
            LIVE / NEST started in 2019 as a buying trip and a shared notebook. We
            were tired of choosing between furniture that looked good in a photograph
            and furniture that survived a family. So we began commissioning pieces
            from makers we could visit — small workshops in Portugal, Denmark and the
            American south — and selling only what we would keep ourselves.
          </p>
          <p>
            Everything in the collection is chosen for proportion, material honesty
            and the way it ages. Nothing is designed to be replaced next season.
          </p>
        </section>

        <section className="prose-section" id="sustainability">
          <h2>Sustainability</h2>
          <p>
            We use FSC-certified timber, natural fibre textiles and water-based
            finishes. Packaging is paper and card, with no plastic void fill. Where a
            material cannot be traced, we do not use it.
          </p>
        </section>

        <section className="prose-section" id="careers">
          <h2>Careers</h2>
          <p>
            We are a team of twelve across design, buying and customer care. We hire
            rarely and thoughtfully — if you make things beautifully, introduce
            yourself at careers@livenest.example.
          </p>
        </section>

        <section className="prose-section" id="press">
          <h2>Press</h2>
          <p>
            For interviews, imagery and samples, contact press@livenest.example. Our
            press kit includes product photography and founder biographies.
          </p>
        </section>

        <div className="prose-cta">
          <p>Come and see what we are working on.</p>
          <Link to="/shop" className="btn">
            Shop the Collection
          </Link>
        </div>
      </div>
    </section>
  )
}
