import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { WeeklyMacBookMockup, MonthlyMacBookMockup, YearlyMacBookMockup } from './MacBookMockup'

const plans = [
  {
    name: 'Weekly',
    price: '$3.99',
    period: '/week',
    note: '30-min free trial',
    Mockup: WeeklyMacBookMockup,
    features: [
      { name: 'Live Location Sharing', included: true },
      { name: 'Battery Status', included: true },
      { name: 'Activity Feed', included: true },
      { name: 'Safety Check-Ins', included: false },
      { name: 'Screen Time Together', included: false },
      { name: 'Priority Support', included: false },
      { name: 'Location History', included: true },
      { name: 'Arrival Alerts', included: true },
      { name: 'Privacy Controls', included: true },
    ],
  },
  {
    name: 'Monthly',
    price: '$9.99',
    period: '/mo',
    note: 'Most popular',
    Mockup: MonthlyMacBookMockup,
    features: [
      { name: 'Live Location Sharing', included: true },
      { name: 'Battery Status', included: true },
      { name: 'Activity Feed', included: true },
      { name: 'Safety Check-Ins', included: true },
      { name: 'Screen Time Together', included: true },
      { name: 'Priority Support', included: false },
      { name: 'Location History', included: true },
      { name: 'Arrival Alerts', included: true },
      { name: 'Privacy Controls', included: true },
    ],
  },
  {
    name: 'Yearly',
    price: '$79.99',
    period: '/yr',
    note: 'Save 33%',
    Mockup: YearlyMacBookMockup,
    features: [
      { name: 'Live Location Sharing', included: true },
      { name: 'Battery Status', included: true },
      { name: 'Activity Feed', included: true },
      { name: 'Safety Check-Ins', included: true },
      { name: 'Screen Time Together', included: true },
      { name: 'Priority Support', included: true },
      { name: 'Location History', included: true },
      { name: 'Arrival Alerts', included: true },
      { name: 'Privacy Controls', included: true },
    ],
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 lg:p-10">
      <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
        Choose a plan
      </h2>
      <p className="mt-2 text-[13px] text-gray-400">
        Subscribe to start your free trial. Cancel anytime.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
        {plans.map((plan) => {
          const Mockup = plan.Mockup
          return (
            <div key={plan.name} className="rounded-xl border border-gray-200 overflow-hidden bg-gray-50">
              {/* MacBook mockup as card background */}
              <div className="bg-gradient-to-b from-gray-100 to-gray-50 p-4">
                <Mockup />
              </div>

              {/* Plan details */}
              <div className="p-5">
                <div className="text-[12px] font-medium text-gray-900 text-center">{plan.name}</div>
                <div className="mt-2 flex items-baseline justify-center gap-0.5">
                  <span className="text-2xl font-semibold text-gray-900">{plan.price}</span>
                  <span className="text-[12px] text-gray-400">{plan.period}</span>
                </div>
                <div className="mt-1 text-[11px] text-gray-400 text-center">{plan.note}</div>

                <ul className="mt-5 space-y-2.5">
                  {plan.features.map((f) => (
                    <li key={f.name} className="flex items-center gap-2 text-[12px]">
                      {f.included ? (
                        <Check className="w-3 h-3 text-gray-900 shrink-0" />
                      ) : (
                        <X className="w-3 h-3 text-gray-200 shrink-0" />
                      )}
                      <span className={f.included ? 'text-gray-600' : 'text-gray-300'}>
                        {f.name}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/plan/${plan.name}`}
                  className="mt-5 block w-full px-4 py-2.5 rounded-lg bg-gray-900 text-[12px] font-medium text-white hover:bg-gray-800 transition-colors text-center"
                >
                  Get started
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
