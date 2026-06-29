import {
  MapPin,
  Battery,
  Activity,
  Users,
  Bell,
  Lock,
  Clock,
  Globe,
  Zap,
} from 'lucide-react'

const features = [
  {
    icon: MapPin,
    title: 'Live Location Sharing',
    desc: 'See your partner\'s real-time GPS location on a shared map. Both partners\' locations update continuously, so you always know where each other are.',
  },
  {
    icon: Battery,
    title: 'Battery & Connection',
    desc: 'Know your partner\'s battery level and connection status (Wi-Fi, 4G, offline). Never worry about whether their phone died or if they\'re unreachable.',
  },
  {
    icon: Activity,
    title: 'Activity Feed',
    desc: 'Track your partner\'s recent movements and status changes throughout the day. See arrival/departure times, location visits, and status updates.',
  },
  {
    icon: Users,
    title: 'Status & Availability',
    desc: 'Share your current status — At Home, At Work, Driving, Sleeping, or custom. See if your partner is available to talk or busy.',
  },
  {
    icon: Bell,
    title: 'Smart Notifications',
    desc: 'Get notified when your partner arrives home, leaves work, or their battery is low. Customizable alerts for what matters to you.',
  },
  {
    icon: Lock,
    title: 'Privacy Controls',
    desc: 'You control what you share. Pause location sharing, hide specific locations, or go invisible temporarily. Your privacy, your rules.',
  },
  {
    icon: Clock,
    title: 'Location History',
    desc: 'Review where your partner has been throughout the day, week, or month. Available on Monthly and Yearly plans.',
  },
  {
    icon: Globe,
    title: 'Works Everywhere',
    desc: 'Qsync works worldwide — no region restrictions. Whether you\'re in the same city or different countries, stay connected.',
  },
  {
    icon: Zap,
    title: 'Instant Sync',
    desc: 'Location and status updates sync in real-time between both partners. No delays, no refresh needed — everything is live.',
  },
]

export default function EcosystemSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2e25] mb-3">
          Everything you need to stay connected
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Core features designed for couples who value transparency and trust.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {features.map((f, i) => {
          const Icon = f.icon
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-100"
            >
              <Icon className="w-5 h-5 text-[#1a2e25] mb-3" strokeWidth={1.5} />
              <h3 className="text-sm sm:text-base font-semibold text-[#1a2e25] mb-2">{f.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
