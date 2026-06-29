export default function Logo({ className = 'w-6 h-6', dark = false }) {
  return (
    <img
      src={dark ? '/logo/darkicon.svg' : '/logo/icon.svg'}
      alt="Qsync"
      className={className}
    />
  )
}
