import { useAuth } from '../../contexts/AuthContext'
import { Menu, Bell } from 'lucide-react'

export default function Header({ title, onMenuToggle }) {
  const { user } = useAuth()

  return (
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
        >
          <Menu size={20} />
        </button>
        <h1 className="text-lg font-semibold text-[#1a2e25]">{title}</h1>
      </div>

      <div className="flex items-center gap-3">
        <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#2d9c7a] rounded-full"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-[#1a2e25] flex items-center justify-center text-white text-sm font-semibold">
          {user?.email?.charAt(0).toUpperCase() || 'U'}
        </div>
      </div>
    </header>
  )
}
