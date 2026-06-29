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
  { icon: Smartphone, label: 'Android Only', desc: 'Android device support' },
]

export default function OverviewSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2e25] mb-4 tracking-tight">
          Transparency built on trust
        </h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Qsync helps couples stay connected through mutual transparency.
          Both partners opt in — no monitoring, just honest sharing.
        </p>
      </div>

      <div className="mb-10 sm:mb-16">
        <HeroMacBookMockup />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <div
              key={i}
              className="bg-white rounded-xl p-3 sm:p-4 lg:p-5 hover:bg-[#f0f7e6] transition-colors duration-150 border border-gray-100"
            >
              <Icon className="w-5 h-5 text-[#1a2e25] mb-3" strokeWidth={1.5} />
              <div className="text-xs sm:text-sm font-semibold text-[#1a2e25] mb-1">{f.label}</div>
              <div className="text-[10px] sm:text-xs text-gray-500 leading-relaxed">{f.desc}</div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
