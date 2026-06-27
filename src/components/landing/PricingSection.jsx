import { Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { PlanPhoneMockup } from './PhoneMockup'

const plans = [
  {
    name: 'Weekly',
    price: '$3.99',
    period: '/week',
    note: '7-day free trial',
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
    <section id="pricing" className="bg-white rounded-xl border border-gray-200 p-8 lg:p-10">
      <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
        Choose a plan
      </h2>
      <p className="mt-2 text-[13px] text-gray-400">
        Subscribe to start your free trial. Cancel anytime.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-lg border border-gray-200 p-5">
            <PlanPhoneMockup tier={plan.name} />

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
                    <Check className="w-3 h-3 text-gray-900" />
                  ) : (
                    <X className="w-3 h-3 text-gray-200" />
                  )}
                  <span className={f.included ? 'text-gray-600' : 'text-gray-300'}>
                    {f.name}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to={`/plan/${plan.name}`}
              className="mt-5 block w-full px-4 py-2 rounded-lg border border-gray-200 text-[12px] font-medium text-gray-700 hover:bg-gray-50 transition-colors text-center"
            >
              Get started
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
