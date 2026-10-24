// Thin line icons, 1px stroke, sized by the parent.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

export const SearchIcon = (props) => (
  <svg viewBox="0 0 24 24" width="17" height="17" {...base} {...props}>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5 21 21" />
  </svg>
)

export const UserIcon = (props) => (
  <svg viewBox="0 0 24 24" width="17" height="17" {...base} {...props}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20.5c.8-4 3.8-6 7.5-6s6.7 2 7.5 6" />
  </svg>
)

export const BagIcon = (props) => (
  <svg viewBox="0 0 24 24" width="17" height="17" {...base} {...props}>
    <path d="M5 7.5h14l-1 12.5H6L5 7.5Z" />
    <path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
  </svg>
)

export const HeartIcon = ({ filled = false, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width="14"
    height="14"
    {...base}
    fill={filled ? 'currentColor' : 'none'}
    {...props}
  >
    <path d="M12 20s-7.5-4.6-7.5-9.5A4.5 4.5 0 0 1 12 7.6a4.5 4.5 0 0 1 7.5 2.9C19.5 15.4 12 20 12 20Z" />
  </svg>
)

export const MenuIcon = (props) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...base} {...props}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
)

export const CloseIcon = (props) => (
  <svg viewBox="0 0 24 24" width="16" height="16" {...base} {...props}>
    <path d="M5 5l14 14M19 5 5 19" />
  </svg>
)

export const ArrowRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width="13" height="13" {...base} {...props}>
    <path d="M4 12h15" />
    <path d="m14 7 5 5-5 5" />
  </svg>
)

export const ChevronLeftIcon = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...base} {...props}>
    <path d="m14.5 5-7 7 7 7" />
  </svg>
)

export const ChevronRightIcon = (props) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...base} {...props}>
    <path d="m9.5 5 7 7-7 7" />
  </svg>
)

export const PlusIcon = (props) => (
  <svg viewBox="0 0 24 24" width="11" height="11" {...base} {...props}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const MinusIcon = (props) => (
  <svg viewBox="0 0 24 24" width="11" height="11" {...base} {...props}>
    <path d="M5 12h14" />
  </svg>
)

export const FrameIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <rect x="3.5" y="4.5" width="17" height="15" />
    <rect x="7" y="8" width="10" height="8" />
    <path d="M3.5 9.5h3.5M17 9.5h3.5M3.5 14.5h3.5M17 14.5h3.5" />
  </svg>
)

export const LeafIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M20 4c-9 0-15 4.2-15 11a5 5 0 0 0 5 5c6.8 0 10-6 10-16Z" />
    <path d="M4 21c1.5-5 5-8.5 10-10.5" />
  </svg>
)

export const ReturnIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M20 12a8 8 0 1 1-2.6-5.9" />
    <path d="M20 4v5h-5" />
  </svg>
)

export const LockIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <rect x="5" y="10.5" width="14" height="9.5" rx="1" />
    <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
  </svg>
)

export const SupportIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" {...base} {...props}>
    <path d="M4.5 15v-3a7.5 7.5 0 0 1 15 0v3" />
    <rect x="2.5" y="14" width="4" height="6" rx="1.4" />
    <rect x="17.5" y="14" width="4" height="6" rx="1.4" />
    <path d="M19.5 20v.5a2 2 0 0 1-2 2H13" />
  </svg>
)

const socialBase = { ...base, width: 15, height: 15, strokeWidth: 1.1 }

export const InstagramIcon = (props) => (
  <svg viewBox="0 0 24 24" {...socialBase} {...props}>
    <rect x="4" y="4" width="16" height="16" rx="4.5" />
    <circle cx="12" cy="12" r="3.6" />
    <circle cx="16.8" cy="7.2" r="0.6" fill="currentColor" stroke="none" />
  </svg>
)

export const PinterestIcon = (props) => (
  <svg viewBox="0 0 24 24" {...socialBase} {...props}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M10.4 20c.8-2.2 1.3-4.3 1.7-6.1M9.6 12.4c-.3-1.4.4-2.9 1.9-3.2 1.4-.3 2.6.5 2.7 1.9.1 1.6-.8 2.9-2 2.9-.7 0-1.2-.5-1-1.2" />
  </svg>
)

export const FacebookIcon = (props) => (
  <svg viewBox="0 0 24 24" {...socialBase} {...props}>
    <path d="M14.5 8.5h2.2V5.6h-2.5c-2 0-3.2 1.3-3.2 3.3v1.6H8.6v2.9H11V21h3v-7.6h2.4l.4-2.9H14v-1.2c0-.5.2-.8.5-.8Z" />
  </svg>
)

export const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" {...socialBase} {...props}>
    <path d="M14 4v10.2a3.3 3.3 0 1 1-2.6-3.2" />
    <path d="M14 4c.3 2.2 1.8 3.6 4 3.8" />
  </svg>
)

export const serviceIcons = {
  frame: FrameIcon,
  leaf: LeafIcon,
  return: ReturnIcon,
  lock: LockIcon,
  support: SupportIcon,
}

export const socialIcons = {
  Instagram: InstagramIcon,
  Pinterest: PinterestIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
}
