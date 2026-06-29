import { Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function SiteHeader({ onMenuClick }) {
  return (
    <header className="bg-[#f0f7e6] border-b border-gray-200 px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between shrink-0">
      {/* Mobile: Hamburger + Logo */}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={onMenuClick}
          className="w-9 h-9 flex items-center justify-center rounded-lg hover:bg-black/5 transition-colors text-[#1a2e25]"
          aria-label="Open menu"
        >
          <Menu size={20} />
        </button>
        <Link to="/" className="flex items-center gap-2.5">
          <Logo className="w-7 h-7 text-[#1a2e25]" />
          <span className="text-[#1a2e25] font-semibold text-sm sm:text-base tracking-tight">Qsync</span>
        </Link>
      </div>

      {/* Desktop: Logo */}
      <Link to="/" className="hidden lg:flex items-center gap-2.5">
        <Logo className="w-7 h-7 text-[#1a2e25]" />
        <span className="text-[#1a2e25] font-semibold text-base tracking-tight">Qsync</span>
      </Link>

      {/* Right side */}
      <div className="flex items-center gap-3">
        <Link
          to="/plan"
          className="bg-[#1a2e25] hover:bg-[#0f1c16] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors"
        >
          Subscribe
        </Link>
      </div>
    </header>
  )
}
