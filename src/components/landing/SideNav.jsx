import { Link } from 'react-router-dom'
import { ChevronUp, LayoutDashboard, Target, Lightbulb, Monitor, CreditCard, Download } from 'lucide-react'

const sections = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'mission', label: 'Mission', icon: Target },
  { id: 'ecosystem', label: 'How It Works', icon: Lightbulb },
  { id: 'interfaces', label: 'Demo', icon: Monitor },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'onboarding', label: 'Installation', icon: Download },
]

export function SideNav({ active, onNavigate }) {
  const scrollToTop = () => {
    const main = document.querySelector('.scroll-container')
    if (main) main.scrollTop = 0
  }

  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 bg-[#1a2e25]">
      <Link to="/" className="px-6 py-6 block">
        <img src="/logo/icon.svg" alt="Qsync" className="h-6" />
      </Link>

      <nav className="flex-1 py-2">
        {sections.map((s) => {
          const Icon = s.icon
          return (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={`sidebar-item ${active === s.id ? 'active' : ''}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {s.label}
            </button>
          )
        })}
      </nav>

      <div className="px-6 py-5 flex items-center justify-between">
        <div className="text-[10px] text-white/25 font-mono">
          &copy; 2026
        </div>
        <button
          onClick={scrollToTop}
          className="w-8 h-8 rounded-full bg-teal-500/20 flex items-center justify-center hover:bg-teal-500/30 transition-colors"
          aria-label="Scroll to top"
        >
          <ChevronUp className="w-4 h-4 text-teal-400" />
        </button>
      </div>
    </aside>
  )
}
