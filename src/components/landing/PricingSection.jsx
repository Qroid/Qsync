import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { WeeklyMacBookMockup, MonthlyMacBookMockup, YearlyMacBookMockup } from './MacBookMockup'

const couplePlans = [
  {
    name: 'Weekly',
    price: '$3',
    period: '/week',
    badge: null,
    bg: 'bg-white',
    accent: 'text-[#1a2e25]',
    button: 'bg-[#1a2e25] hover:bg-[#0f1c16] text-white',
    Mockup: WeeklyMacBookMockup,
    features: [
      { text: 'Real-time location sharing', included: true },
      { text: 'Partner status & availability', included: true },
      { text: 'Battery & connection level', included: true },
      { text: 'Basic activity feed (7 days)', included: true },
      { text: 'Location history', included: false },
      { text: 'Safety check-ins', included: false },
      { text: 'Screen time together', included: false },
      { text: 'Priority support', included: false },
      { text: 'Advanced privacy controls', included: false },
    ],
  },
  {
    name: 'Monthly',
    price: '$8.50',
    period: '/month',
    badge: 'Popular',
    bg: 'bg-[#1a2e25]',
    accent: 'text-white',
    button: 'bg-white hover:bg-gray-100 text-[#1a2e25]',
    Mockup: MonthlyMacBookMockup,
    features: [
      { text: 'Real-time location sharing', included: true },
      { text: 'Partner status & availability', included: true },
      { text: 'Battery & connection level', included: true },
      { text: 'Activity feed (14 days)', included: true },
      { text: 'Location history', included: true },
      { text: 'Safety check-ins', included: true },
      { text: 'Screen time together', included: true },
      { text: 'Priority support', included: false },
      { text: 'Advanced privacy controls', included: false },
    ],
  },
  {
    name: 'Yearly',
    price: '$65',
    period: '/year',
    badge: 'Best value',
    bg: 'bg-white',
    accent: 'text-[#1a2e25]',
    button: 'bg-[#1a2e25] hover:bg-[#0f1c16] text-white',
    Mockup: YearlyMacBookMockup,
    features: [
      { text: 'Real-time location sharing', included: true },
      { text: 'Partner status & availability', included: true },
      { text: 'Battery & connection level', included: true },
      { text: 'Activity feed (unlimited)', included: true },
      { text: 'Location history (30 days)', included: true },
      { text: 'Safety check-ins', included: true },
      { text: 'Screen time together', included: true },
      { text: 'Priority support', included: true },
      { text: 'Advanced privacy controls', included: true },
    ],
  },
]

const qidPlans = [
  {
    name: 'Qid Monthly',
    price: '$5',
    period: '/month',
    badge: 'Kid monitoring',
    bg: 'bg-[#1a2e25]',
    accent: 'text-white',
    button: 'bg-white hover:bg-gray-100 text-[#1a2e25]',
    Mockup: MonthlyMacBookMockup,
    features: [
      { text: 'Real-time kid location tracking', included: true },
      { text: 'Screen time monitoring', included: true },
      { text: 'App usage reports', included: true },
      { text: 'Activity feed (14 days)', included: true },
      { text: 'Location history', included: true },
      { text: 'Geofence alerts', included: true },
      { text: 'SMS & call monitoring', included: true },
      { text: 'Priority support', included: false },
      { text: 'Multi-child support', included: false },
    ],
  },
  {
    name: 'Qid Yearly',
    price: '$99',
    period: '/year',
    badge: 'Best value',
    bg: 'bg-white',
    accent: 'text-[#1a2e25]',
    button: 'bg-[#1a2e25] hover:bg-[#0f1c16] text-white',
    Mockup: YearlyMacBookMockup,
    features: [
      { text: 'Real-time kid location tracking', included: true },
      { text: 'Screen time monitoring', included: true },
      { text: 'App usage reports', included: true },
      { text: 'Activity feed (unlimited)', included: true },
      { text: 'Location history (30 days)', included: true },
      { text: 'Geofence alerts', included: true },
      { text: 'SMS & call monitoring', included: true },
      { text: 'Priority support', included: true },
      { text: 'Multi-child support', included: true },
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="py-8 sm:py-12">
      {/* Couple Plans */}
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2e25] mb-3">
          Simple, transparent pricing
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
          Choose the plan that fits your relationship. All plans include core features.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {couplePlans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.bg} rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col relative ${
              plan.badge === 'Popular' ? 'ring-2 ring-[#1a2e25] lg:scale-105 lg:z-10' : 'border border-gray-100'
            }`}
          >
            {plan.badge && (
              <div className={`px-3 py-1.5 text-[11px] font-medium text-center ${
                plan.badge === 'Popular'
                  ? 'bg-[#1a2e25] text-white'
                  : 'bg-[#f0f7e6] text-[#1a2e25]'
              }`}>
                {plan.badge}
              </div>
            )}

            <div className="px-4 pt-4 sm:px-6 sm:pt-6">
              <plan.Mockup />
            </div>

            <div className="p-4 sm:p-6 flex flex-col flex-1 items-center text-center">
              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-3xl sm:text-4xl font-bold ${plan.accent}`}>{plan.price}</span>
                <span className={`text-sm ${plan.accent} opacity-60`}>{plan.period}</span>
              </div>

              <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${plan.accent}`}>{plan.name}</h3>

              <ul className="space-y-2.5 sm:space-y-3 mb-6 flex-1 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2.5">
                    {feature.included ? (
                      <Check size={14} className="text-[#2d9c7a] shrink-0" />
                    ) : (
                      <X size={14} className="text-gray-300 shrink-0" />
                    )}
                    <span className={`text-xs sm:text-sm ${feature.included ? (plan.bg === 'bg-[#1a2e25]' ? 'text-white/80' : 'text-gray-600') : (plan.bg === 'bg-[#1a2e25]' ? 'text-white/30' : 'text-gray-400')}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/payment?plan=${plan.name.toLowerCase().replace(' ', '-')}`}
                className={`block w-full text-center ${plan.button} font-semibold py-3 sm:py-3.5 rounded-xl transition-colors text-sm sm:text-base`}
              >
                Get {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Qid Plans */}
      <div className="text-center mt-16 mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2e25] mb-3">
          Qid — Kid Monitoring
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-xl mx-auto">
          Keep your kids safe with real-time monitoring, screen time controls, and activity reports.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {qidPlans.map((plan) => (
          <div
            key={plan.name}
            className={`${plan.bg} rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-200 flex flex-col relative ${
              plan.badge === 'Best value' ? 'ring-2 ring-[#1a2e25] lg:scale-105 lg:z-10' : 'border border-gray-100'
            }`}
          >
            {plan.badge && (
              <div className={`px-3 py-1.5 text-[11px] font-medium text-center ${
                plan.badge === 'Best value'
                  ? 'bg-[#1a2e25] text-white'
                  : 'bg-[#f0f7e6] text-[#1a2e25]'
              }`}>
                {plan.badge}
              </div>
            )}

            <div className="px-4 pt-4 sm:px-6 sm:pt-6">
              <plan.Mockup />
            </div>

            <div className="p-4 sm:p-6 flex flex-col flex-1 items-center text-center">
              <div className="flex items-baseline gap-1 mb-4">
                <span className={`text-3xl sm:text-4xl font-bold ${plan.accent}`}>{plan.price}</span>
                <span className={`text-sm ${plan.accent} opacity-60`}>{plan.period}</span>
              </div>

              <h3 className={`text-lg sm:text-xl font-semibold mb-4 ${plan.accent}`}>{plan.name}</h3>

              <ul className="space-y-2.5 sm:space-y-3 mb-6 flex-1 w-full">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center justify-center gap-2.5">
                    {feature.included ? (
                      <Check size={14} className="text-[#2d9c7a] shrink-0" />
                    ) : (
                      <X size={14} className="text-gray-300 shrink-0" />
                    )}
                    <span className={`text-xs sm:text-sm ${feature.included ? (plan.bg === 'bg-[#1a2e25]' ? 'text-white/80' : 'text-gray-600') : (plan.bg === 'bg-[#1a2e25]' ? 'text-white/30' : 'text-gray-400')}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/payment?plan=${plan.name.toLowerCase().replace(' ', '-')}`}
                className={`block w-full text-center ${plan.button} font-semibold py-3 sm:py-3.5 rounded-xl transition-colors text-sm sm:text-base`}
              >
                Get {plan.name}
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 sm:mt-12 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-[10px] sm:text-xs text-gray-400">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#2d9c7a] rounded-full" />
          30-day money-back guarantee
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#2d9c7a] rounded-full" />
          Cancel anytime
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-[#2d9c7a] rounded-full" />
          Secure payments via Paystack
        </div>
      </div>
    </section>
  )
}
