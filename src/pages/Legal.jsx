import { Link, useParams } from 'react-router-dom'

const pages = {
  privacy: {
    title: 'Privacy Policy',
    intro:
      'We collect only what we need to fulfil an order and improve the store. We never sell personal data.',
    sections: [
      {
        heading: 'What we collect',
        body: 'Name, delivery address, email address and order history. Payment details are handled by our payment provider and never stored on our servers.',
      },
      {
        heading: 'How we use it',
        body: 'To process orders, answer enquiries and — only if you subscribe — send occasional new-arrival emails. You can unsubscribe from any email.',
      },
      {
        heading: 'Your rights',
        body: 'You can request a copy of your data or ask us to delete it at any time by writing to hello@livenest.example.',
      },
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    intro:
      'These terms apply to every order placed with LIVE / NEST. This storefront is a demonstration build.',
    sections: [
      {
        heading: 'Orders',
        body: 'An order is accepted when we confirm dispatch. Prices are shown in US dollars and include applicable taxes at checkout.',
      },
      {
        heading: 'Delivery',
        body: 'Estimated lead times are shown on each product page. Furniture deliveries are scheduled by appointment.',
      },
      {
        heading: 'Returns',
        body: 'Unused items may be returned within 30 days in their original packaging. Made-to-order pieces are excluded.',
      },
    ],
  },
  accessibility: {
    title: 'Accessibility',
    intro:
      'We want the LIVE / NEST store to be usable by everyone, whatever device or assistive technology you use.',
    sections: [
      {
        heading: 'Our approach',
        body: 'The store is built with semantic markup, visible keyboard focus states and labelled controls. Dialogs close with the Escape key.',
      },
      {
        heading: 'Ongoing work',
        body: 'We are auditing contrast and motion preferences across the collection pages. If something obstructs you, tell us and we will fix it.',
      },
      {
        heading: 'Contact',
        body: 'Write to hello@livenest.example with the page and the issue, and we will respond within one working day.',
      },
    ],
  },
}

export default function Legal() {
  const { slug } = useParams()
  const page = pages[slug]

  if (!page) {
    return (
      <section className="page">
        <div className="container empty-state">
          <p>That page doesn’t exist.</p>
          <Link to="/" className="btn">
            Back to Home
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="page">
      <div className="container prose-page">
        <header className="page__head">
          <p className="eyebrow">Legal</p>
          <h1 className="page__title">{page.title}</h1>
          <p className="page__sub">{page.intro}</p>
        </header>
        {page.sections.map((section) => (
          <section className="prose-section" key={section.heading}>
            <h2>{section.heading}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
    </section>
  )
}
