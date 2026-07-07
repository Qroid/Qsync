import { Link, useSearchParams } from 'react-router-dom'
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react'

const planDetails = {
  weekly: { name: 'Weekly Plan', price: '$3/week', nextBilling: 'Next week' },
  monthly: { name: 'Monthly Plan', price: '$8.50/month', nextBilling: 'Next month' },
  yearly: { name: 'Yearly Plan', price: '$65/year', nextBilling: 'Next year' },
}

export default function Success() {
  const [searchParams] = useSearchParams()
  const planKey = searchParams.get('plan') || 'monthly'
  const reference = searchParams.get('reference') || ''
  const email = searchParams.get('email') || ''
  const plan = planDetails[planKey] || planDetails.monthly

  const downloadUrl = reference && email
    ? `/api/download?reference=${encodeURIComponent(reference)}&email=${encodeURIComponent(email)}`
    : null

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden text-center">
          {/* Success header */}
          <div className="bg-[#2d9c7a] p-6 sm:p-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle size={32} className="text-white" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-white mb-1">Payment Successful!</h1>
            <p className="text-white/80 text-xs sm:text-sm">Welcome to Qsync</p>
          </div>

          {/* Content */}
          <div className="p-5 sm:p-6 space-y-4 sm:space-y-5">
            {/* Subscription info */}
            <div className="bg-[#f5f5f5] rounded-xl p-4">
              <div className="text-xs text-gray-500 mb-2">Your subscription is active</div>
              <div className="text-sm font-medium text-[#1a2e25]">{plan.name} — {plan.price}</div>
              <div className="text-xs text-gray-400 mt-1">{plan.nextBilling}</div>
            </div>

            {/* Magic link notification */}
            <div className="bg-[#2d9c7a]/5 border border-[#2d9c7a]/20 rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#2d9c7a] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-[#1a2e25]">Check your email</p>
                  <p className="text-xs text-gray-500">
                    We sent a login link to <span className="font-medium">{email}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Next steps */}
            <div className="space-y-2.5">
              <div className="text-xs sm:text-sm font-medium text-[#1a2e25]">Next steps:</div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#2d9c7a]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#2d9c7a] text-[10px] font-bold">1</span>
                </div>
                <span>Check your email and click the login link</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#2d9c7a]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#2d9c7a] text-[10px] font-bold">2</span>
                </div>
                <span>Download the Qsync app on your Android device</span>
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#2d9c7a]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#2d9c7a] text-[10px] font-bold">3</span>
                </div>
                <span>Link your device in the dashboard settings</span>
              </div>
            </div>

            {/* Download button */}
            {downloadUrl ? (
              <a
                href={downloadUrl}
                className="w-full bg-[#1a2e25] hover:bg-[#0f1c16] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm"
              >
                <Download size={16} />
                Download Qsync APK
              </a>
            ) : (
              <div className="w-full bg-gray-100 text-gray-400 font-semibold py-3 rounded-xl text-sm text-center">
                Download link expired — check your email
              </div>
            )}

            <Link
              to="/login"
              className="block w-full bg-[#2d9c7a] hover:bg-[#24806a] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
            >
              Go to Dashboard
            </Link>

            <Link
              to="/"
              className="block w-full text-center text-xs text-gray-400 hover:text-[#1a2e25] transition-colors py-2"
            >
              Return to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
