const messages = [
  'Free Shipping On Orders Over $149',
  'Easy Returns',
  'Designed For Modern Living',
]

export default function AnnouncementBar() {
  return (
    <div className="announce">
      <div className="announce__inner">
        {messages.map((message, index) => (
          <span className="announce__item" key={message}>
            {index > 0 && <span className="announce__dot" aria-hidden="true" />}
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
