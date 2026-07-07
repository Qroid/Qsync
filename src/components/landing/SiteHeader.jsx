import { Menu, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

export default function SiteHeader({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-4 sm:px-8 lg:px-10 py-3 sm:py-4 lg:border-b lg:border-gray-200 lg:bg-[#f0f7e6] lg:relative lg:z-auto bg-[#1a2e25] sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden inline-flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
        >
          <Menu className="w-5 h-5 text-white" />
        </button>
        <Link to="/" className="lg:hidden">
          <Logo className="h-5" />
        </Link>
      </div>
      <Link
        to="/login"
        className="inline-flex items-center p-2 rounded-lg transition-colors lg:hover:bg-[#e4efd4] hover:bg-white/10"
      >
        <User className="w-5 h-5 text-white lg:text-gray-600" />
      </Link>
    </header>
  )
}
