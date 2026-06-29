import { NavLink } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import Logo from '../Logo'
import {
  LayoutDashboard,
  MapPin,
  Activity,
  MessageSquare,
  Phone,
  Bell,
  Monitor,
  Settings,
  LogOut,
  X
} from 'lucide-react'

const navItems = [
  { to: '/dashboard/overview', icon: LayoutDashboard, label: 'Overview' },
  { to: '/dashboard/location', icon: MapPin, label: 'Location' },
  { to: '/dashboard/activity', icon: Activity, label: 'Activity' },
  { to: '/dashboard/sms', icon: MessageSquare, label: 'SMS' },
  { to: '/dashboard/calls', icon: Phone, label: 'Calls' },
  { to: '/dashboard/notifications', icon: Bell, label: 'Notifications' },
  { to: '/dashboard/screen', icon: Monitor, label: 'Screen' },
  { to: '/dashboard/settings', icon: Settings, label: 'Settings' },
]

export default function Sidebar({ open, onClose }) {
  const { user, signOut } = useAuth()

  const handleSignOut = async () => {
    await signOut()
  }

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
        fixed top-0 left-0 h-full w-64 bg-[#1a2e25] z-50 flex flex-col
        transition-transform duration-300
        lg:translate-x-0 lg:static lg:z-auto
        ${open ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="p-5 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-2.5">
            <Logo className="w-7 h-7" />
            <span className="text-white font-semibold text-lg">Qsync</span>
          </div>
          <button onClick={onClose} className="lg:hidden text-white/60 hover:text-white">
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`
              }
            >
              <item.icon size={18} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* User section */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-full bg-[#2d9c7a] flex items-center justify-center text-white text-sm font-semibold">
              {user?.email?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">{user?.email}</p>
              <p className="text-white/40 text-xs">Subscriber</p>
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center gap-2 px-3 py-2 text-white/50 hover:text-white hover:bg-white/5 rounded-lg text-sm transition-colors"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      </aside>
    </>
  )
}
