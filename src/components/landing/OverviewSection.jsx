import { scrollToSection } from '@/lib/motion'
import { HeroPhoneMockup } from './PhoneMockup'
import { MapPin, Battery, Activity, Bell, Shield, Clock, Wifi, Smartphone } from 'lucide-react'

export function OverviewSection() {
  return (
    <section id="overview" className="bg-white rounded-xl border border-gray-200 px-8 lg:px-10 py-16 lg:py-20">
      {/* Hero row */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-lg">
          <h1 className="text-3xl sm:text-4xl font-semibold text-gray-900 tracking-tight leading-snug whitespace-nowrap">
            Connected, by choice.
          </h1>
          <p className="mt-4 text-gray-400 text-[14px] leading-relaxed">
            Share your world with the person who matters most.
          </p>
          <button
            onClick={() => scrollToSection('pricing')}
            className="mt-8 text-[13px] font-medium text-teal-600 hover:text-teal-700 transition-colors"
          >
            Start Free Trial &rarr;
          </button>
        </div>
        <div className="hidden lg:block shrink-0">
          <HeroPhoneMockup />
        </div>
      </div>

      {/* Feature highlights */}
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <MapPin className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-[12px] font-medium text-gray-900">Live Location</div>
            <div className="text-[11px] text-gray-400">Real-time GPS</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Battery className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-[12px] font-medium text-gray-900">Battery Status</div>
            <div className="text-[11px] text-gray-400">Charge level</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Activity className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-[12px] font-medium text-gray-900">Activity Feed</div>
            <div className="text-[11px] text-gray-400">What's happening</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Bell className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-[12px] font-medium text-gray-900">Check-Ins</div>
            <div className="text-[11px] text-gray-400">Safety alerts</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Shield className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-[12px] font-medium text-gray-900">Mutual Consent</div>
            <div className="text-[11px] text-gray-400">Both opt-in</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Clock className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-[12px] font-medium text-gray-900">Screen Time</div>
            <div className="text-[11px] text-gray-400">Together mode</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Wifi className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-[12px] font-medium text-gray-900">Network Status</div>
            <div className="text-[11px] text-gray-400">Wi-Fi / 4G</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center">
            <Smartphone className="w-4 h-4 text-gray-500" />
          </div>
          <div>
            <div className="text-[12px] font-medium text-gray-900">Cross-Device</div>
            <div className="text-[11px] text-gray-400">Phone & tablet</div>
          </div>
        </div>
      </div>
    </section>
  )
}
