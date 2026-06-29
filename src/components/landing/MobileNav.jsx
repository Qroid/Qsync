import { Link } from 'react-router-dom'
import { X } from 'lucide-react'
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

export default function MobileNav({ isOpen, onClose, activeSection, onNavigate }) {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 w-64 sm:w-72 h-full bg-[#1a2e25] z-50 lg:hidden transform transition-transform duration-200 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/5">
            <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
              <Logo className="w-7 h-7 text-white" />
              <span className="text-white font-semibold text-sm tracking-tight">Qsync</span>
            </Link>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
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
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-150 ${
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

          {/* Bottom */}
          <div className="p-4 border-t border-white/5">
            <Link
              to="/plan"
              onClick={onClose}
              className="block w-full text-center bg-white text-[#1a2e25] font-semibold py-3 rounded-xl hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </Link>
            <div className="mt-3 text-center text-white/40 text-[11px]">
              Couples Transparency App
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
