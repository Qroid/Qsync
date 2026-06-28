import { useParams, Link } from 'react-router-dom'
import { Check, X } from 'lucide-react'
import { plans } from '@/lib/paystack'

const featureData = [
  { name: 'Live Location Sharing', included: true },
  { name: 'Battery Status', included: true },
  { name: 'Activity Feed', included: true },
  { name: 'Safety Check-Ins', included: false },
  { name: 'Screen Time Together', included: false },
  { name: 'Priority Support', included: false },
  { name: 'Location History', included: true },
  { name: 'Arrival Alerts', included: true },
  { name: 'Privacy Controls', included: true },
]

const planFeatures = {
  Weekly: featureData,
  Monthly: featureData.map(f =>
    f.name === 'Safety Check-Ins' || f.name === 'Screen Time Together'
      ? { ...f, included: true }
      : f
  ),
  Yearly: featureData.map(f => ({ ...f, included: true })),
}

function PlanCard({ plan, planName }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="text-center">
        <h2 className="text-lg font-semibold text-gray-900">{plan.name}</h2>
        <div className="mt-3 flex items-baseline justify-center gap-0.5">
          <span className="text-4xl font-semibold text-gray-900">{plan.priceFormatted}</span>
          <span className="text-sm text-gray-400">{plan.period}</span>
        </div>
        <p className="mt-2 text-[13px] text-gray-400">{plan.note}</p>
      </div>

      <ul className="mt-6 space-y-3">
        {planFeatures[planName].map((f) => (
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

      <Link
        to={`/payment?plan=${planName}`}
        className="mt-6 block w-full px-4 py-3 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors text-center"
      >
        Get started
      </Link>
    </div>
  )
}

export function Plan() {
  const { tier } = useParams()

  // Show single plan page if tier is specified
  if (tier && plans[tier]) {
    const plan = plans[tier]
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Link
            to="/plan"
            className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors mb-8"
          >
            All plans
          </Link>

          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="text-center">
              <h1 className="text-lg font-semibold text-gray-900">{plan.name}</h1>
              <div className="mt-3 flex items-baseline justify-center gap-0.5">
                <span className="text-4xl font-semibold text-gray-900">{plan.priceFormatted}</span>
                <span className="text-sm text-gray-400">{plan.period}</span>
              </div>
              <p className="mt-2 text-[13px] text-gray-400">{plan.note}</p>
            </div>

            <ul className="mt-8 space-y-3">
              {planFeatures[tier].map((f) => (
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

            <Link
              to={`/payment?plan=${tier}`}
              className="mt-8 block w-full px-4 py-3 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors text-center"
            >
              Get started
            </Link>

            <p className="mt-4 text-center text-[11px] text-gray-400">
              30-minute free trial. Cancel anytime.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Show all plans at /plan
  return (
    <div className="min-h-screen bg-gray-50 p-6 lg:p-12">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors mb-8"
        >
          Back to home
        </Link>

        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold text-gray-900">Choose a plan</h1>
          <p className="mt-2 text-[14px] text-gray-400">
            Subscribe to start your free trial. Cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(plans).map(([name, plan]) => (
            <PlanCard key={name} plan={plan} planName={name} />
          ))}
        </div>
      </div>
    </div>
  )
}
