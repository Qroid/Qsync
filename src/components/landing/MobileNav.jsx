import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, LayoutDashboard, Target, Lightbulb, Monitor, CreditCard, Download } from 'lucide-react'

const sections = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'mission', label: 'Mission', icon: Target },
  { id: 'ecosystem', label: 'How It Works', icon: Lightbulb },
  { id: 'interfaces', label: 'Demo', icon: Monitor },
  { id: 'pricing', label: 'Pricing', icon: CreditCard },
  { id: 'onboarding', label: 'Installation', icon: Download },
]

export function MobileNav({ active, onNavigate }) {
  const [open, setOpen] = useState(false)

  const handleNavigate = (id) => {
    onNavigate(id)
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {/* Top bar */}
      <header className="lg:hidden sticky top-0 z-50 bg-[#1a2e25] flex items-center justify-between px-4 h-14">
        <Link to="/" onClick={() => onNavigate('overview')}>
          <img src="/logo/icon.svg" alt="Qsync" className="h-6" />
        </Link>
        <button onClick={() => setOpen(true)} className="p-2 text-white/80" aria-label="Menu">
          <Menu className="w-5 h-5" />
        </button>
      </header>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side drawer */}
      <nav
        className={`lg:hidden fixed top-0 left-0 h-full w-72 bg-[#1a2e25] z-50 transform transition-transform duration-300 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Link to="/" onClick={() => { onNavigate('overview'); setOpen(false) }}>
            <img src="/logo/icon.svg" alt="Qsync" className="h-6" />
          </Link>
          <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="px-3 pb-6 space-y-1">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                onClick={() => handleNavigate(s.id)}
                className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center gap-3 ${
                  active === s.id
                    ? 'bg-white/10 text-white'
                    : 'text-white/50 hover:bg-white/5 hover:text-white/80'
                }`}
              >
                <Icon className="w-4 h-4" />
                {s.label}
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 border-t border-white/10">
          <div className="text-[10px] text-white/25 font-mono">&copy; 2026 Qsync</div>
        </div>
      </nav>
    </>
  )
}
