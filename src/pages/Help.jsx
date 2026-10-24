import { Link } from 'react-router-dom'

const sections = [
  {
    id: 'contact',
    title: 'Contact Us',
    body: [
      'Our studio answers every message within one working day. Write to hello@livenest.example or call +1 (555) 018 2200, Monday to Friday, 9am–6pm.',
    ],
  },
  {
    id: 'shipping',
    title: 'Shipping & Delivery',
    body: [
      'Orders over $149 ship free within the continental United States. Smaller parcels arrive in 3–5 working days; furniture is delivered by appointment in 2–3 weeks.',
      'You will receive a tracking link as soon as your piece leaves our warehouse. Delivery to remote areas may add a few days.',
    ],
  },
  {
    id: 'returns',
    title: 'Returns & Exchanges',
    body: [
      'Unused pieces in their original packaging can be returned within 30 days of delivery for a full refund. Made-to-order items are excluded.',
      'Email us with your order number and we will arrange a collection. Refunds are issued to the original payment method within five working days.',
    ],
  },
  {
    id: 'faqs',
    title: 'FAQs',
    body: [
      'Can I order fabric swatches? Yes — write to us with the piece you are considering and we will post three options.',
      'Do you hold stock? Everything marked in stock ships from our own warehouse; made-to-order pieces are noted on the product page.',
      'Do you deliver outside the US? Not yet. We ship to Canada and are working on Europe.',
    ],
  },
]

export default function Help() {
  return (
    <section className="page">
      <div className="container prose-page">
        <header className="page__head">
          <p className="eyebrow">Customer care</p>
          <h1 className="page__title">How Can We Help?</h1>
          <p className="page__sub">
            Delivery, returns and the small details — answered here.
          </p>
        </header>

        <nav className="prose-nav" aria-label="Customer care sections">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.title}
            </a>
          ))}
          <Link to="/account">Track Your Order</Link>
        </nav>

        {sections.map((section) => (
          <section key={section.id} id={section.id} className="prose-section">
            <h2>{section.title}</h2>
            {section.body.map((paragraph) => (
              <p key={paragraph.slice(0, 20)}>{paragraph}</p>
            ))}
          </section>
        ))}

        <div className="prose-cta">
          <p>Prefer to talk it through? Our design team is happy to help.</p>
          <Link to="/journal" className="btn">
            Read the Journal
          </Link>
        </div>
      </div>
    </section>
  )
}
