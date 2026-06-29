import { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { SideNav } from '@/components/landing/SideNav'
import { MobileNav } from '@/components/landing/MobileNav'
import { SiteHeader } from '@/components/landing/SiteHeader'
import { SiteFooter } from '@/components/landing/SiteFooter'

export function Layout() {
  const [active, setActive] = useState('overview')
  const location = useLocation()

  const getActiveFromPath = () => {
    if (location.pathname === '/terms') return 'terms'
    if (location.pathname === '/privacy') return 'privacy'
    if (location.pathname === '/refund') return 'refund'
    if (location.pathname.startsWith('/plan')) return 'pricing'
    if (location.pathname.startsWith('/payment')) return 'pricing'
    return active
  }

  const currentActive = getActiveFromPath()

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <MobileNav active={currentActive} onNavigate={setActive} />
        <SiteHeader onNavigate={setActive} />
        <main className="flex-1 px-4 py-6">
          <Outlet />
        </main>
        <SiteFooter />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center p-6 lg:p-10 min-h-screen">
        <div className="w-full max-w-[1400px] h-[90vh] min-h-[700px] flex rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <SideNav active={currentActive} onNavigate={setActive} />

          <main className="flex-1 flex flex-col overflow-hidden bg-[#f5f5f5]">
            <SiteHeader onNavigate={setActive} />

            <div className="flex-1 overflow-y-auto scroll-container">
              <div className="max-w-4xl mx-auto px-8 lg:px-12 py-8">
                <Outlet />
              </div>
            </div>

            <SiteFooter />
          </main>
        </div>
      </div>
    </div>
  )
}
