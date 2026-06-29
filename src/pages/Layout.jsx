import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, ChevronRight, Home } from 'lucide-react'
import SideNav from '../components/landing/SideNav'
import MobileNav from '../components/landing/MobileNav'
import SiteHeader from '../components/landing/SiteHeader'
import SiteFooter from '../components/landing/SiteFooter'

export default function PolicyPageLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const breadcrumb = location.pathname.slice(1) || 'home'

  return (
    <div className="flex h-screen bg-[#e8e8e8] overflow-hidden rounded-xl shadow-2xl">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <SideNav activeSection="overview" onNavigate={() => {}} />
      </div>

      {/* Mobile Nav */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection="overview"
        onNavigate={() => {}}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">
        <SiteHeader onMenuClick={() => setMobileMenuOpen(true)} />

        <main
          id="scroll-container"
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-gray-400 mb-4 sm:mb-6">
              <Link to="/" className="hover:text-gray-600 transition-colors flex items-center gap-1">
                <Home size={12} />
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-gray-600 capitalize">{breadcrumb}</span>
            </div>

            {children}
          </div>

          <SiteFooter />
        </main>
      </div>
    </div>
  )
}
