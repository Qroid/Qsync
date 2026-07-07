import { useAuth } from '../../contexts/AuthContext'
import { Menu } from 'lucide-react'
import Logo from '../Logo'

export default function Header({ title, onMenuToggle }) {
  const { user, profile } = useAuth()

  const initials = profile?.display_name
    ? profile.display_name.charAt(0).toUpperCase()
    : user?.email?.charAt(0).toUpperCase() || 'U'

  return (
    <header className="bg-white border-b border-gray-100 px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900"
        >
          <Menu size={20} />
        </button>
        <Logo dark className="h-6" />
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#1a2e25] flex items-center justify-center text-white text-sm font-semibold">
          {initials}
        </div>
      </div>
    </header>
  )
}
