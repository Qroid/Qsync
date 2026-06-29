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

const SECTION_IDS = ['overview', 'mission', 'how-it-works', 'pricing', 'get-started', 'live-demo']

export default function Home({ activeSection, setActiveSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSectionChange = (section) => {
    setActiveSection(section)
    setMobileMenuOpen(false)
    const container = document.getElementById('scroll-container')
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const renderSection = () => {
    switch (activeSection) {
      case 'overview':
        return <OverviewSection />
      case 'mission':
        return <MissionSection />
      case 'how-it-works':
        return <EcosystemSection />
      case 'pricing':
        return <PricingSection />
      case 'get-started':
        return <OnboardingSection />
      case 'live-demo':
        return <LiveWorkspace />
      default:
        return <OverviewSection />
    }
  }

  return (
    <div className="flex h-screen bg-[#e8e8e8] overflow-hidden rounded-xl shadow-2xl">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <SideNav activeSection={activeSection} onNavigate={handleSectionChange} />
      </div>

      {/* Mobile Nav */}
      <MobileNav
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        activeSection={activeSection}
        onNavigate={handleSectionChange}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-white overflow-hidden">
        <SiteHeader onMenuClick={() => setMobileMenuOpen(true)} />

        <main
          id="scroll-container"
          className="flex-1 overflow-y-auto overscroll-contain"
        >
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-6xl mx-auto">
            {renderSection()}
          </div>
          <SiteFooter />
        </main>

        <ScrollToTopButton />
      </div>
    </div>
  )
}
