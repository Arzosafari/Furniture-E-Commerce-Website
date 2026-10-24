import { services } from '../data/site.js'
import { serviceIcons } from './icons.jsx'

export default function ServiceBenefits() {
  return (
    <section className="section section--services">
      <div className="container">
        <ul className="services">
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <li className="service" key={service.title}>
                <span className="service__icon">
                  <Icon />
                </span>
                <span>
                  <h2 className="service__title">{service.title}</h2>
                  <p className="service__desc">{service.description}</p>
                </span>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
