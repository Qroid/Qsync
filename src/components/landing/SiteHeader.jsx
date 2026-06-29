import { Menu, User } from 'lucide-react'

export default function SiteHeader({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-4 sm:px-8 lg:px-10 py-3 sm:py-4 lg:border-b lg:border-gray-200 lg:bg-[#f0f7e6] bg-[#1a2e25]">
      <button
        onClick={onMenuClick}
        className="lg:hidden inline-flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/10 transition-colors"
      >
        <Menu className="w-5 h-5 text-white" />
      </button>
      <div className="flex-1 lg:flex-none" />
      <button
        onClick={() => window.location.href = '/plan'}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors lg:hover:bg-[#e4efd4] hover:bg-white/10"
      >
        <User className="w-4 h-4 text-white lg:text-gray-600" />
        <span className="text-[12px] font-medium text-white lg:text-gray-600">Subscribe</span>
      </button>
    </header>
  )
}
