import { useParams, Link } from 'react-router-dom'
import { Check, X, ArrowLeft } from 'lucide-react'

const planData = {
  Weekly: {
    name: 'Weekly',
    price: '$3.99',
    period: '/week',
    note: '7-day free trial included',
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
  Monthly: {
    name: 'Monthly',
    price: '$9.99',
    period: '/mo',
    note: 'Most popular choice',
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
  Yearly: {
    name: 'Yearly',
    price: '$79.99',
    period: '/yr',
    note: 'Save 33% vs monthly',
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
}

export function Plan() {
  const { tier } = useParams()
  const plan = planData[tier]

  if (!plan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-900">Plan not found</h1>
          <Link to="/" className="mt-4 inline-block text-sm text-teal-600 hover:text-teal-700">
            Back to home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="text-center">
            <h1 className="text-lg font-semibold text-gray-900">{plan.name}</h1>
            <div className="mt-3 flex items-baseline justify-center gap-0.5">
              <span className="text-4xl font-semibold text-gray-900">{plan.price}</span>
              <span className="text-sm text-gray-400">{plan.period}</span>
            </div>
            <p className="mt-2 text-[13px] text-gray-400">{plan.note}</p>
          </div>

          <ul className="mt-8 space-y-3">
            {plan.features.map((f) => (
              <li key={f.name} className="flex items-center gap-3 text-sm">
                {f.included ? (
                  <Check className="w-4 h-4 text-gray-900 shrink-0" />
                ) : (
                  <X className="w-4 h-4 text-gray-300 shrink-0" />
                )}
                <span className={f.included ? 'text-gray-600' : 'text-gray-300'}>
                  {f.name}
                </span>
              </li>
            ))}
          </ul>

          <button className="mt-8 w-full px-4 py-3 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors">
            Start free trial
          </button>

          <p className="mt-4 text-center text-[11px] text-gray-400">
            Cancel anytime before trial ends. You won't be charged.
          </p>
        </div>
      </div>
    </div>
  )
}
