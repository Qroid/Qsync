import { Link } from 'react-router-dom'

export default function SiteFooter() {
  return (
    <footer className="px-4 sm:px-8 lg:px-12 py-4 border-t border-white/10 lg:border-gray-200 bg-[#1a2e25] lg:bg-white mt-auto shrink-0 relative z-20">
      <div className="lg:hidden flex flex-col items-center gap-3">
        <span className="text-[11px] text-white/40">&copy; 2026 Qsync</span>
        <div className="flex items-center gap-4">
          <Link to="/terms" className="text-[11px] text-white/40 hover:text-white/70 transition-colors">Terms</Link>
          <Link to="/privacy" className="text-[11px] text-white/40 hover:text-white/70 transition-colors">Privacy</Link>
          <Link to="/refund" className="text-[11px] text-white/40 hover:text-white/70 transition-colors">Refund</Link>
        </div>
      </div>

      <div className="hidden lg:flex items-center justify-between text-[11px] text-gray-400">
        <span>&copy; 2026 Qsync</span>
        <div className="flex items-center gap-4">
          <Link to="/terms" className="hover:text-gray-600 transition-colors">Terms</Link>
          <Link to="/privacy" className="hover:text-gray-600 transition-colors">Privacy</Link>
          <Link to="/refund" className="hover:text-gray-600 transition-colors">Refund</Link>
        </div>
      </div>
    </footer>
  )
}
