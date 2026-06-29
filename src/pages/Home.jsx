import { useState } from 'react'
import SideNav from '../components/landing/SideNav'
import MobileNav from '../components/landing/MobileNav'
import SiteHeader from '../components/landing/SiteHeader'
import SiteFooter from '../components/landing/SiteFooter'
import ScrollToTopButton from '../components/landing/ScrollToTopButton'
import OverviewSection from '../components/landing/OverviewSection'
import MissionSection from '../components/landing/MissionSection'
import EcosystemSection from '../components/landing/EcosystemSection'
import PricingSection from '../components/landing/PricingSection'
import OnboardingSection from '../components/landing/OnboardingSection'
import LiveWorkspace from '../components/landing/LiveWorkspace'

const sections = {
  overview: OverviewSection,
  mission: MissionSection,
  'how-it-works': EcosystemSection,
  pricing: PricingSection,
  'get-started': OnboardingSection,
  'live-demo': LiveWorkspace,
}

export default function Home({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const ActiveSection = sections[activeSection] || OverviewSection

  const handleSectionChange = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    const container = document.getElementById('scroll-container')
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen">
        <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} activeSection={activeSection} onNavigate={handleSectionChange} />
        <SiteHeader onMenuClick={() => setMobileMenuOpen(true)} />
        <main id="scroll-container" className="flex-1 px-4 py-6 overflow-y-auto">
          <ActiveSection />
        </main>
        <SiteFooter />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center p-6 lg:p-10 min-h-screen">
        <div className="w-full max-w-[1400px] h-[90vh] min-h-[700px] flex rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <SideNav activeSection={activeSection} onNavigate={handleSectionChange} />

          <main className="flex-1 flex flex-col overflow-hidden bg-[#f5f5f5]">
            <SiteHeader onMenuClick={() => setMobileMenuOpen(true)} />

            <div id="scroll-container" className="flex-1 overflow-y-auto scroll-container">
              <div className="max-w-4xl mx-auto px-8 lg:px-12 py-8">
                <ActiveSection />
              </div>
            </div>

            <SiteFooter />
          </main>
        </div>
      </div>

      <ScrollToTopButton />
    </div>
  )
}
