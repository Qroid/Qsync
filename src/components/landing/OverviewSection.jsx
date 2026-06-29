import { HeroMacBookMockup } from './MacBookMockup'
import {
  MapPin,
  Shield,
  Battery,
  Activity,
  Users,
  Lock,
  Bell,
  Smartphone,
} from 'lucide-react'

const features = [
  { icon: MapPin, label: 'Live GPS Location', desc: 'Real-time partner locations' },
  { icon: Shield, label: 'Trust First', desc: 'Both partners must opt in' },
  { icon: Battery, label: 'Battery Status', desc: 'Know their charge level' },
  { icon: Activity, label: 'Activity Feed', desc: 'See recent movements' },
  { icon: Users, label: 'Status & Mood', desc: 'Share how you\'re doing' },
  { icon: Lock, label: 'Privacy Controls', desc: 'You control what\'s shared' },
  { icon: Bell, label: 'Smart Alerts', desc: 'Arrival & departure notices' },
  { icon: Smartphone, label: 'Cross-Platform', desc: 'Android & iOS support' },
]

export default function OverviewSection() {
  return (
    <section className="py-6 sm:py-10">
      {/* Hero */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2e25] mb-4 tracking-tight">
          Transparency built on trust
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Qsync helps couples stay connected through mutual transparency.
          Both partners opt in — no monitoring, just honest sharing.
        </p>
      </div>

      {/* MacBook Hero */}
      <div className="mb-10 sm:mb-16">
        <HeroMacBookMockup />
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <div
              key={i}
              className="bg-[#f5f5f5] rounded-xl p-3 sm:p-4 lg:p-5 hover:bg-[#f0f7e6] transition-colors duration-150 group"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-lg bg-[#1a2e25] flex items-center justify-center mb-2.5 sm:mb-3 group-hover:bg-[#2d9c7a] transition-colors">
                <Icon size={18} className="text-white" strokeWidth={1.5} />
              </div>
              <div className="text-xs sm:text-sm font-semibold text-[#1a2e25] mb-1">{f.label}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">{f.desc}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
