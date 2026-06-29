import { Shield, Eye, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Shield,
    title: 'Mutual Consent',
    desc: 'Both partners must agree to share. No secret tracking, no hidden installs. Transparency is a choice you make together.',
  },
  {
    icon: Eye,
    title: 'Honest Visibility',
    desc: 'See location, status, and activity in real-time. No filters, no guessing. Just the truth about where your partner is and what they\'re doing.',
  },
  {
    icon: Heart,
    title: 'Trust Growth',
    desc: 'When both partners are transparent, trust deepens. Qsync helps you build a relationship rooted in honesty, not surveillance.',
  },
]

export default function MissionSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2e25] mb-3">
          Built for trust, not surveillance
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Most "couples apps" are surveillance tools disguised as transparency.
          Qsync is different — it requires both partners to opt in.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
        {pillars.map((p, i) => {
          const Icon = p.icon
          return (
            <div
              key={i}
              className="bg-white border border-gray-100 rounded-2xl p-5 sm:p-6"
            >
              <Icon className="w-5 h-5 text-[#1a2e25] mb-4" strokeWidth={1.5} />
              <h3 className="text-base sm:text-lg font-semibold text-[#1a2e25] mb-2">{p.title}</h3>
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{p.desc}</p>
            </div>
          )
        })}
      </div>

      <div className="bg-[#f5f5f5] rounded-2xl p-5 sm:p-8 text-center">
        <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          "Surveillance destroys relationships. Transparency builds them. Qsync is designed
          for couples who believe in honesty — where both partners willingly share their
          location, status, and activity because they trust each other."
        </p>
        <div className="mt-4 text-xs text-gray-400">— The Qsync Philosophy</div>
      </div>
    </section>
  )
}
