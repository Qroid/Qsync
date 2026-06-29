import { useParams, Link } from 'react-router-dom'
import { Check, X, ArrowLeft, ArrowRight } from 'lucide-react'
import PolicyPageLayout from './Layout'
import { WeeklyMacBookMockup, MonthlyMacBookMockup, YearlyMacBookMockup } from '../components/landing/MacBookMockup'

const allPlans = [
  {
    name: 'Weekly',
    price: '$3.99',
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
    price: '$9.99',
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
    price: '$79.99',
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

export default function Plan() {
  const { tier } = useParams()

  const displayPlans = tier
    ? allPlans.filter((p) => p.name.toLowerCase() === tier.toLowerCase())
    : allPlans

  return (
    <PolicyPageLayout>
      <div className="max-w-5xl">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1a2e25] mb-2">
            {tier ? `${tier.charAt(0).toUpperCase() + tier.slice(1)} Plan` : 'Choose Your Plan'}
          </h1>
          <p className="text-sm text-gray-500">
            {tier ? 'Plan details and features' : 'All plans include core transparency features'}
          </p>
        </div>

        <div className={`grid gap-4 sm:gap-6 ${tier ? 'grid-cols-1 max-w-lg' : 'grid-cols-1 lg:grid-cols-3'}`}>
          {displayPlans.map((plan) => (
            <div
              key={plan.name}
              className={`${plan.bg} rounded-2xl overflow-hidden shadow-sm ${
                plan.badge === 'Popular' && !tier ? 'ring-2 ring-[#1a2e25] lg:scale-105 lg:z-10' : ''
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className={`px-3 py-1.5 text-xs font-medium text-center ${
                  plan.badge === 'Popular'
                    ? 'bg-[#1a2e25] text-white'
                    : 'bg-[#f0f7e6] text-[#1a2e25]'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* MacBook Mockup */}
              <div className="px-4 pt-4">
                <plan.Mockup />
              </div>

              {/* Plan details */}
              <div className="p-5 sm:p-6">
                <div className="flex items-baseline gap-1 mb-4">
                  <span className={`text-3xl sm:text-4xl font-bold ${plan.accent}`}>{plan.price}</span>
                  <span className={`text-sm ${plan.accent} opacity-60`}>{plan.period}</span>
                </div>

                <h3 className={`text-lg font-semibold mb-4 ${plan.accent}`}>{plan.name}</h3>

                <ul className="space-y-2.5 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      {feature.included ? (
                        <div className="w-5 h-5 rounded-full bg-[#2d9c7a]/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={12} className="text-[#2d9c7a]" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                          <X size={12} className="text-gray-400" />
                        </div>
                      )}
                      <span className={`text-sm ${feature.included ? (plan.bg === 'bg-[#1a2e25]' ? 'text-white/80' : 'text-gray-600') : (plan.bg === 'bg-[#1a2e25]' ? 'text-white/30' : 'text-gray-400')}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/payment?plan=${plan.name.toLowerCase()}`}
                  className={`block w-full text-center ${plan.button} font-semibold py-3 rounded-xl transition-colors text-sm`}
                >
                  Get {plan.name}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Back to overview */}
        {!tier && (
          <div className="mt-6 sm:mt-8 text-center">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#1a2e25] transition-colors">
              <ArrowLeft size={14} />
              Back to overview
            </Link>
          </div>
        )}
      </div>
    </PolicyPageLayout>
  )
}
