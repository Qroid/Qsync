import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SideNav from '../components/landing/SideNav'
import MobileNav from '../components/landing/MobileNav'
import SiteHeader from '../components/landing/SiteHeader'
import SiteFooter from '../components/landing/SiteFooter'

export default function PolicyPageLayout({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const breadcrumb = location.pathname.slice(1) || 'home'

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activeSection="overview" onNavigate={() => {}} />
        <SiteHeader onMenuClick={() => setMobileMenuOpen(true)} />
        <main className="flex-1 px-4 py-6 overflow-y-auto">
          <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-6">
            <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gray-600 capitalize">{breadcrumb}</span>
          </div>
          {children}
        </main>
        <SiteFooter />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center p-6 lg:p-10 min-h-screen">
        <div className="w-full max-w-[1400px] h-[90vh] min-h-[700px] flex rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <SideNav activeSection="overview" onNavigate={() => {}} />

          <main className="flex-1 flex flex-col overflow-hidden bg-[#f5f5f5]">
            <SiteHeader onMenuClick={() => setMobileMenuOpen(true)} />

            <div className="flex-1 overflow-y-auto">
              <div className="max-w-4xl mx-auto px-8 lg:px-12 py-8">
                <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-6">
                  <Link to="/" className="hover:text-gray-600 transition-colors">Home</Link>
                  <span>/</span>
                  <span className="text-gray-600 capitalize">{breadcrumb}</span>
                </div>
                {children}
              </div>
            </div>

            <SiteFooter />
          </main>
        </div>
      </div>
    </div>
  )
}
