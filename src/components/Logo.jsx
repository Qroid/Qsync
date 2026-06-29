export default function Logo({ className = 'w-6 h-6' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 4v6h6" />
      <path d="M20 20v-6h-6" />
      <path d="M4 10a8 8 0 0 1 13.3-5.7" />
      <path d="M20 14a8 8 0 0 1-13.3 5.7" />
    </svg>
  )
}
