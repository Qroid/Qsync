import { Link } from 'react-router-dom'
import Logo from '../Logo'
import {
  MapPin,
  Shield,
  Layers,
  CreditCard,
  Download,
  Activity,
} from 'lucide-react'

const navItems = [
  { id: 'overview', label: 'Overview', icon: MapPin },
  { id: 'mission', label: 'Mission', icon: Shield },
  { id: 'how-it-works', label: 'How It Works', icon: Layers },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'get-started', label: 'Get Started', icon: Download },
  { id: 'live-demo', label: 'Live Demo', icon: Activity },
]

export default function SideNav({ activeSection, onNavigate }) {
  return (
    <nav className="w-56 xl:w-60 h-full bg-[#1a2e25] flex flex-col">
      {/* Logo */}
      <div className="p-5 border-b border-white/5">
        <Link to="/" className="flex items-center gap-2.5">
          <Logo className="w-8 h-8" />
          <span className="text-white font-semibold text-base tracking-tight">Qsync</span>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-3 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeSection === item.id

          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                isActive
                  ? 'bg-white text-[#1a2e25]'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2 : 1.5} />
              {item.label}
            </button>
          )
        })}
      </div>

      {/* Bottom section */}
      <div className="p-4 border-t border-white/5">
        <div className="bg-white/5 rounded-xl p-4">
          <div className="text-white/60 text-xs mb-1">Couples Transparency</div>
          <div className="text-white text-sm font-medium">Built with trust</div>
        </div>
      </div>
    </nav>
  )
}
