import { Link } from 'react-router-dom'
import { X, LayoutDashboard, Target, Lightbulb, Monitor, CreditCard, Download } from 'lucide-react'
import Logo from '../Logo'

const sections = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'mission', label: 'Mission', icon: Target },
  { id: 'how-it-works', label: 'How It Works', icon: Lightbulb },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'get-started', label: 'Get Started', icon: Download },
  { id: 'live-demo', label: 'Live Demo', icon: Monitor },
]

export default function MobileNav({ isOpen, onClose, activeSection, onNavigate }) {
  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-56 h-full bg-[#f0f7e6] z-50 lg:hidden transform transition-transform duration-200 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 py-5 border-b border-[#1a2e25]/10">
            <Link to="/" onClick={onClose}>
              <Logo className="h-5" dark />
            </Link>
            <button
              onClick={onClose}
              className="text-[#1a2e25]/50 hover:text-[#1a2e25] transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          <nav className="flex-1 py-2 flex flex-col px-2">
            {sections.map((s) => {
              const Icon = s.icon
              return (
                <button
                  key={s.id}
                  onClick={() => { onNavigate(s.id); onClose() }}
                  className={`mobile-menu-item ${activeSection === s.id ? 'active' : ''}`}
                >
                  <Icon className="w-4 h-4 shrink-0" />
                  {s.label}
                </button>
              )
            })}
          </nav>

          <div className="px-6 py-5 border-t border-[#1a2e25]/10">
            <Link
              to="/plan"
              onClick={onClose}
              className="block w-full text-center bg-[#1a2e25] text-white text-[13px] font-medium py-2.5 rounded-lg hover:bg-[#0f1c16] transition-colors"
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
