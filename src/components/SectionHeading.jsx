import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './icons.jsx'

export default function SectionHeading({ title, linkLabel, linkTo, children }) {
  return (
    <div className="section-head">
      <h2 className="section-title">{title}</h2>
      {linkLabel && linkTo && (
        <Link to={linkTo} className="text-link">
          {linkLabel}
          <ArrowRightIcon />
        </Link>
      )}
      {children}
    </div>
  )
}
