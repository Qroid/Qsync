import { useState } from 'react'
import { useSearchParams, Link, useNavigate } from 'react-router-dom'
import { CreditCard, Smartphone, ArrowLeft, Check, Loader2 } from 'lucide-react'
import { initializePaystack, openPaystackCheckout, plans as paystackPlans } from '../lib/paystack'

const plans = {
  weekly: { name: 'Weekly', price: '$3', period: '/week', paystackKey: 'Weekly' },
  monthly: { name: 'Monthly', price: '$8.50', period: '/month', paystackKey: 'Monthly' },
  yearly: { name: 'Yearly', price: '$65', period: '/year', paystackKey: 'Yearly' },
  'qid-monthly': { name: 'Qid Monthly', price: '$5', period: '/month', paystackKey: 'QidMonthly' },
  'qid-yearly': { name: 'Qid Yearly', price: '$99', period: '/year', paystackKey: 'QidYearly' },
}

export default function Payment() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const planKey = searchParams.get('plan') || 'monthly'
  const plan = plans[planKey] || plans.monthly

  const [email, setEmail] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [loading, setLoading] = useState(false)

  const sendMagicLink = async (emailAddress) => {
    return false
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)

    try {
      await initializePaystack()

      openPaystackCheckout({
        email,
        plan: plan.paystackKey,
        onSuccess: async (response) => {
          navigate('/create-account', {
            state: {
              email,
              plan: planKey,
              reference: response.reference
            }
          })
        },
        onClose: () => {
          setLoading(false)
        },
      })
    } catch (err) {
      console.error('Paystack error:', err)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back link */}
        <Link to="/plan" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#1a2e25] mb-4 sm:mb-6 transition-colors">
          <ArrowLeft size={14} />
          Back to plans
        </Link>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Header */}
          <div className="bg-[#1a2e25] p-5 sm:p-6 text-white">
            <div className="text-xs text-white/60 mb-1">Qsync</div>
            <div className="text-lg sm:text-xl font-semibold">{plan.name} Plan</div>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-2xl sm:text-3xl font-bold">{plan.price}</span>
              <span className="text-white/60 text-sm">{plan.period}</span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 sm:space-y-5">
            {/* Email */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-[#1a2e25] mb-1.5">Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full px-3.5 py-2.5 sm:py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20 focus:border-[#2d9c7a] transition-colors"
              />
              <p className="text-[10px] sm:text-xs text-gray-400 mt-1.5">Your account will be created after payment</p>
            </div>

            {/* Payment method */}
            <div>
              <label className="block text-xs sm:text-sm font-medium text-[#1a2e25] mb-2">Payment method</label>
              <div className="space-y-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border transition-all ${
                    paymentMethod === 'card'
                      ? 'border-[#2d9c7a] bg-[#2d9c7a]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    paymentMethod === 'card' ? 'border-[#2d9c7a]' : 'border-gray-300'
                  }`}>
                    {paymentMethod === 'card' && <div className="w-2 h-2 bg-[#2d9c7a] rounded-full" />}
                  </div>
                  <CreditCard size={18} className="text-gray-600" />
                  <span className="text-xs sm:text-sm font-medium text-[#1a2e25]">Card (Visa/Mastercard)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  disabled
                  className="w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-gray-100 opacity-50 cursor-not-allowed"
                >
                  <div className="w-4 h-4 rounded-full border-2 border-gray-200" />
                  <div className="w-4 h-4 bg-gray-300 rounded" />
                  <span className="text-xs sm:text-sm text-gray-400">PayPal (Coming soon)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cashapp')}
                  disabled
                  className="w-full flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border border-gray-100 opacity-50 cursor-not-allowed"
                >
                  <div className="w-4 h-4 rounded-full border-2 border-gray-200" />
                  <Smartphone size={18} className="text-gray-300" />
                  <span className="text-xs sm:text-sm text-gray-400">Cash App (Coming soon)</span>
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="bg-[#f5f5f5] rounded-xl p-3.5 sm:p-4">
              <div className="text-[10px] sm:text-xs text-gray-500 mb-2">Includes:</div>
              <div className="space-y-1.5">
                {['7-day free trial', 'Cancel anytime', 'Instant access'].map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                    <Check size={12} className="text-[#2d9c7a]" />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading || !email}
              className="w-full bg-[#1a2e25] hover:bg-[#0f1c16] disabled:bg-gray-300 text-white font-semibold py-3 sm:py-3.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Processing...
                </>
              ) : (
                `Pay ${plan.price}`
              )}
            </button>

            <p className="text-[10px] sm:text-xs text-center text-gray-400">
              Secured by Paystack. Your payment info is encrypted.
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}
