import { Link } from 'react-router-dom'
import { LayoutDashboard, Target, Lightbulb, Monitor, CreditCard, Download } from 'lucide-react'
import Logo from '../Logo'

const sections = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'mission', label: 'Mission', icon: Target },
  { id: 'how-it-works', label: 'How It Works', icon: Lightbulb },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'get-started', label: 'Get Started', icon: Download },
  { id: 'live-demo', label: 'Live Demo', icon: Monitor },
]

export default function SideNav({ activeSection, onNavigate }) {
  return (
    <aside className="hidden lg:flex flex-col w-56 shrink-0 bg-[#1a2e25]">
      <Link to="/" className="px-6 py-6 block">
        <Logo className="h-6" />
      </Link>

      <nav className="flex-1 py-2 flex flex-col px-2">
        {sections.map((s) => {
          const Icon = s.icon
          return (
            <button
              key={s.id}
              onClick={() => onNavigate(s.id)}
              className={`sidebar-item ${activeSection === s.id ? 'active' : ''}`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {s.label}
            </button>
          )
        })}
      </nav>

      <div className="px-6 py-5 border-t border-white/5">
        <p className="text-white/30 text-[11px]">Couples Transparency</p>
        <p className="text-white/50 text-[11px] font-medium">Built with trust</p>
      </div>
    </aside>
  )
}
