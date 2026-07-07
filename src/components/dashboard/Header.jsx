import { useAuth } from '../../contexts/AuthContext'
import { Menu, User } from 'lucide-react'
import Logo from '../Logo'

export default function Header({ title, onMenuToggle }) {
  const { user, profile } = useAuth()

  return (
    <header className="bg-[#1a2e25] px-4 sm:px-6 py-3 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 -ml-2 text-white/80 hover:text-white"
        >
          <Menu size={20} />
        </button>
        <Logo className="h-5" />
      </div>

      <div className="flex items-center gap-3">
        <User size={20} className="text-white/80" />
      </div>
    </header>
  )
}
