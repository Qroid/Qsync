import { useState } from 'react'
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

  return (
    <header className="lg:hidden sticky top-0 z-50">
      {/* Top bar - dark teal like desktop sidebar */}
      <div className="bg-[#1a2e25] flex items-center justify-between px-4 h-14">
        <img src="/logo/icon.svg" alt="Qsync" className="h-6" />
        <button onClick={() => setOpen(!open)} className="p-2 text-white/80" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Dropdown menu */}
      {open && (
        <nav className="bg-[#1a2e25] border-t border-white/10 px-3 pb-3 space-y-1">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                onClick={() => { onNavigate(s.id); setOpen(false) }}
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
      )}
    </header>
  )
}
