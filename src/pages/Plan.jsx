import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Check, X, ArrowLeft, Loader2 } from 'lucide-react'
import { plans, initializePaystack, openPaystackCheckout } from '@/lib/paystack'

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

function PaystackButton({ planName, email }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubscribe = async () => {
    if (!email) {
      setError('Please enter your email address')
      return
    }

    setLoading(true)
    setError(null)

    try {
      await initializePaystack()

      openPaystackCheckout({
        email,
        plan: planName,
        onSuccess: (response) => {
          window.location.href = `/success?reference=${response.reference}&plan=${planName}`
        },
        onClose: () => {
          setLoading(false)
        },
      })
    } catch (err) {
      setError('Failed to initialize payment. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div>
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="mt-8 w-full px-4 py-3 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </>
        ) : (
          'Subscribe now'
        )}
      </button>
      {error && (
        <p className="mt-2 text-[12px] text-red-500 text-center">{error}</p>
      )}
    </div>
  )
}

function PlanCard({ plan, planName }) {
  const [email, setEmail] = useState('')

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

      <div className="mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
        />
      </div>

      <PaystackButton planName={planName} email={email} />
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
            <ArrowLeft className="w-3.5 h-3.5" />
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

            <SinglePlanPaystack tier={tier} />
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
          <ArrowLeft className="w-3.5 h-3.5" />
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

function SinglePlanPaystack({ tier }) {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubscribe = async () => {
    if (!email) {
      setError('Please enter your email address')
      return
    }

    setLoading(true)
    setError(null)

    try {
      await initializePaystack()

      openPaystackCheckout({
        email,
        plan: tier,
        onSuccess: (response) => {
          window.location.href = `/success?reference=${response.reference}&plan=${tier}`
        },
        onClose: () => {
          setLoading(false)
        },
      })
    } catch (err) {
      setError('Failed to initialize payment. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div>
      <div className="mt-6">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
        />
      </div>
      <button
        onClick={handleSubscribe}
        disabled={loading}
        className="mt-4 w-full px-4 py-3 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Processing...
          </>
        ) : (
          'Subscribe now'
        )}
      </button>
      {error && (
        <p className="mt-2 text-[12px] text-red-500 text-center">{error}</p>
      )}
      <p className="mt-4 text-center text-[11px] text-gray-400">
        Cancel anytime before trial ends. You won't be charged.
      </p>
    </div>
  )
}
