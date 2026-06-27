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
    <header className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 h-14">
        <img src="/logo/icon.svg" alt="Qsync" className="h-6" />
        <button onClick={() => setOpen(!open)} className="p-2 text-gray-600" aria-label="Menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>
      {open && (
        <nav className="px-3 pb-3 space-y-1 border-t border-gray-100 bg-white">
          {sections.map((s) => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                onClick={() => { onNavigate(s.id); setOpen(false) }}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex items-center gap-2.5 ${
                  active === s.id ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
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
