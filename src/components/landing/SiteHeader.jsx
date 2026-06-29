import { Menu, User } from 'lucide-react'

export default function SiteHeader({ onMenuClick }) {
  return (
    <header className="flex items-center justify-between px-4 sm:px-8 lg:px-10 py-3 sm:py-4 border-b border-gray-200 bg-[#f0f7e6]">
      <button
        onClick={onMenuClick}
        className="lg:hidden inline-flex items-center gap-2 p-1.5 rounded-lg hover:bg-[#e4efd4] transition-colors"
      >
        <Menu className="w-5 h-5 text-gray-600" />
      </button>
      <div className="flex-1 lg:flex-none" />
      <button
        onClick={() => window.location.href = '/plan'}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[#e4efd4] transition-colors"
      >
        <User className="w-4 h-4 text-gray-600" />
        <span className="text-[12px] font-medium text-gray-600">Subscribe</span>
      </button>
    </header>
  )
}
