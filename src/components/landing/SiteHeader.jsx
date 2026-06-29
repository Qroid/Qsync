import { User, ChevronUp } from 'lucide-react'

export function SiteHeader({ onNavigate }) {
  const scrollToTop = () => {
    const main = document.querySelector('.scroll-container')
    if (main) main.scrollTop = 0
  }

  return (
    <header className="flex items-center justify-between px-4 sm:px-8 lg:px-10 py-3 sm:py-4 border-b border-gray-200 bg-[#f0f7e6]">
      <button
        onClick={scrollToTop}
        className="inline-flex items-center gap-1 text-[12px] font-medium text-teal-600 hover:text-teal-700 transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-4 h-4" />
        <span className="hidden sm:inline">Top</span>
      </button>

      <button
        onClick={() => onNavigate('pricing')}
        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-[#e4efd4] transition-colors"
      >
        <User className="w-4 h-4 text-gray-600" />
        <span className="text-[12px] font-medium text-gray-600">Subscribe</span>
      </button>
    </header>
  )
}
