import { Link } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="px-8 lg:px-12 py-4 border-t border-gray-200 bg-white flex items-center justify-between text-[11px] text-gray-400">
      <div className="flex-1" />
      <span className="text-center">&copy; 2026 Qsync</span>
      <div className="flex-1 flex justify-end items-center gap-4">
        <Link to="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
        <Link to="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
      </div>
    </footer>
  )
}
