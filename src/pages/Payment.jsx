import { useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { ArrowLeft, CreditCard, Loader2, Wallet, Smartphone } from 'lucide-react'
import { plans, initializePaystack, openPaystackCheckout } from '@/lib/paystack'

const paymentMethods = [
  { id: 'card', name: 'Card', description: 'Visa, Mastercard', icon: CreditCard },
  { id: 'paypal', name: 'PayPal', description: 'Pay with PayPal', icon: Wallet, coming: true },
  { id: 'cashapp', name: 'Cash App', description: 'Pay with Cash App', icon: Smartphone, coming: true },
]

export function Payment() {
  const [searchParams] = useSearchParams()
  const planName = searchParams.get('plan') || 'Monthly'
  const plan = plans[planName]

  const [email, setEmail] = useState('')
  const [selectedMethod, setSelectedMethod] = useState('card')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  if (!plan) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-xl font-semibold text-gray-900">Plan not found</h1>
          <Link to="/plan" className="mt-4 inline-block text-sm text-teal-600 hover:text-teal-700">
            View plans
          </Link>
        </div>
      </div>
    )
  }

  const handleSubscribe = async () => {
    if (!email) {
      setError('Please enter your email address')
      return
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address')
      return
    }

    if (selectedMethod === 'paypal' || selectedMethod === 'cashapp') {
      setError('This payment method is coming soon')
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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <Link
          to="/plan"
          className="inline-flex items-center gap-1.5 text-[13px] text-gray-400 hover:text-gray-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to plans
        </Link>

        <div className="bg-white rounded-xl border border-gray-200 p-8">
          <div className="text-center mb-6">
            <h1 className="text-lg font-semibold text-gray-900">Subscribe to {plan.name}</h1>
            <p className="text-[13px] text-gray-400 mt-1">{plan.note}</p>
          </div>

          {/* Plan Summary */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-[13px] text-gray-600">{plan.name} Plan</span>
              <span className="text-[13px] font-medium text-gray-900">{plan.priceFormatted}</span>
            </div>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200">
              <span className="text-[13px] font-medium text-gray-900">Total today</span>
              <span className="text-[14px] font-semibold text-gray-900">{plan.priceFormatted}</span>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mb-6">
            <label className="block text-[12px] font-medium text-gray-700 mb-2">
              Payment method
            </label>
            <div className="space-y-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon
                return (
                  <button
                    key={method.id}
                    onClick={() => setSelectedMethod(method.id)}
                    disabled={method.coming}
                    className={`w-full flex items-center gap-3 p-3 rounded-lg border transition-colors ${
                      selectedMethod === method.id
                        ? 'border-gray-900 bg-gray-50'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${method.coming ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <Icon className="w-5 h-5 text-gray-600" />
                    <div className="flex-1 text-left">
                      <div className="text-[13px] font-medium text-gray-900">{method.name}</div>
                      <div className="text-[11px] text-gray-400">{method.description}</div>
                    </div>
                    {method.coming && (
                      <span className="text-[10px] text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                        Coming soon
                      </span>
                    )}
                    {selectedMethod === method.id && !method.coming && (
                      <div className="w-4 h-4 rounded-full bg-gray-900 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>
                    )}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Email */}
          <div className="mb-6">
            <label className="block text-[12px] font-medium text-gray-700 mb-1.5">
              Email address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setError(null) }}
              className="w-full px-3 py-2.5 rounded-lg border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10 focus:border-gray-300"
            />
            {error && (
              <p className="mt-1.5 text-[12px] text-red-500">{error}</p>
            )}
          </div>

          {/* Pay Button */}
          <button
            onClick={handleSubscribe}
            disabled={loading}
            className="w-full px-4 py-3 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <CreditCard className="w-4 h-4" />
                Pay {plan.priceFormatted}
              </>
            )}
          </button>

          <p className="mt-4 text-center text-[11px] text-gray-400">
            You'll have 30 minutes to cancel for a full refund.
          </p>
        </div>
      </div>
    </div>
  )
}
