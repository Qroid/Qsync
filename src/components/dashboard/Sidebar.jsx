import { NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Logo from '../Logo'
import {
  LayoutDashboard,
  MapPin,
  Activity,
  MessageSquare,
  Phone,
  Monitor,
  Settings,
  LogOut,
  X
} from 'lucide-react'

const navItems = [
  { to: '/dashboard/overview', icon: LayoutDashboard, label: 'Overview' },
  { to: '/dashboard/location', icon: MapPin, label: 'Live Location' },
  { to: '/dashboard/activity', icon: Activity, label: 'Activity Feed' },
  { to: '/dashboard/sms', icon: MessageSquare, label: 'Messages' },
  { to: '/dashboard/calls', icon: Phone, label: 'Call History' },
  { to: '/dashboard/screen', icon: Monitor, label: 'App Usage' },
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar({ open, onClose }) {
  const { user, profile, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

  const displayName = profile?.display_name || user?.email?.split('@')[0] || 'User'

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 h-full w-48 lg:w-56 bg-[#f0f7e6] z-50 flex flex-col
        transition-transform duration-300
        lg:translate-x-0 lg:static lg:z-auto
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-[#1a2e25]/10">
          <Logo className="h-5" dark />
          <button onClick={onClose} className="lg:hidden text-[#1a2e25]/50 hover:text-[#1a2e25]">
            <X size={18} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-2 px-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#1a2e25] text-white'
                    : 'text-[#1a2e25]/60 hover:text-[#1a2e25] hover:bg-[#1a2e25]/5'
                }`
              }
            >
              <item.icon size={16} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User section */}
        <div className="px-6 py-5 border-t border-[#1a2e25]/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#1a2e25] flex items-center justify-center text-white text-sm font-semibold">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[#1a2e25] text-sm font-medium truncate">{displayName}</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-3 py-2 text-[#1a2e25]/50 hover:text-[#1a2e25] hover:bg-[#1a2e25]/5 rounded-lg text-sm transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>
    </>
  )
}
