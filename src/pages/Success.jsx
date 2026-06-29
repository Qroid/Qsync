import { Link } from 'react-router-dom'
import { CheckCircle, Download, ArrowRight } from 'lucide-react'

export default function Success() {
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
            <div className="bg-[#f5f5f5] rounded-xl p-4">
              <div className="text-xs text-gray-500 mb-2">Your subscription is active</div>
              <div className="text-sm font-medium text-[#1a2e25]">Monthly Plan — $9.99/month</div>
              <div className="text-xs text-gray-400 mt-1">Next billing: July 2026</div>
            </div>

            <div className="space-y-2.5">
              <div className="text-xs sm:text-sm font-medium text-[#1a2e25]">Next steps:</div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#2d9c7a]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#2d9c7a] text-[10px] font-bold">1</span>
                </div>
                Download the Qsync app
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#2d9c7a]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#2d9c7a] text-[10px] font-bold">2</span>
                </div>
                Create your account with this email
              </div>
              <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-600">
                <div className="w-5 h-5 rounded-full bg-[#2d9c7a]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[#2d9c7a] text-[10px] font-bold">3</span>
                </div>
                Invite your partner to connect
              </div>
            </div>

            <button className="w-full bg-[#1a2e25] hover:bg-[#0f1c16] text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
              <Download size={16} />
              Download Qsync APK
            </button>

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
