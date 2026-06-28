import { useState } from 'react'
import { SideNav } from '@/components/landing/SideNav'
import { MobileNav } from '@/components/landing/MobileNav'
import { SiteHeader } from '@/components/landing/SiteHeader'
import { OverviewSection } from '@/components/landing/OverviewSection'
import { MissionSection } from '@/components/landing/MissionSection'
import { EcosystemSection } from '@/components/landing/EcosystemSection'
import { LiveWorkspace } from '@/components/landing/LiveWorkspace'
import { PricingSection } from '@/components/landing/PricingSection'
import { OnboardingSection } from '@/components/landing/OnboardingSection'
import { SiteFooter } from '@/components/landing/SiteFooter'

const sections = {
  overview: OverviewSection,
  mission: MissionSection,
  ecosystem: EcosystemSection,
  interfaces: LiveWorkspace,
  pricing: PricingSection,
  onboarding: OnboardingSection,
}

export function Home() {
  const [active, setActive] = useState('overview')
  const ActiveSection = sections[active]

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen flex flex-col">
        <MobileNav active={active} onNavigate={setActive} />
        <SiteHeader onNavigate={setActive} />
        <main className="flex-1 px-4 py-6">
          <ActiveSection />
        </main>
        <SiteFooter />
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center p-6 lg:p-10 min-h-screen">
        <div className="w-full max-w-[1400px] h-[90vh] min-h-[700px] flex rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <SideNav active={active} onNavigate={setActive} />

          <main className="flex-1 flex flex-col overflow-hidden bg-[#f5f5f5]">
            <SiteHeader onNavigate={setActive} />

            <div className="flex-1 overflow-y-auto">
              <div className="max-w-4xl mx-auto px-8 lg:px-12 py-8">
                <ActiveSection />
              </div>
            </div>

            <SiteFooter />
          </main>
        </div>
      </div>
    </div>
  )
}
