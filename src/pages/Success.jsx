import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { CheckCircle, ArrowLeft, Download, Loader2 } from 'lucide-react'

export function Success() {
  const [searchParams] = useSearchParams()
  const reference = searchParams.get('reference')
  const plan = searchParams.get('plan')
  const [status, setStatus] = useState('verifying')
  const [error, setError] = useState(null)

  useEffect(() => {
    if (reference) {
      // Verify payment with your backend
      // For now, we'll assume success
      setTimeout(() => {
        setStatus('success')
      }, 2000)
    }
  }, [reference])

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl border border-gray-200 p-8 text-center">
          {status === 'verifying' && (
            <>
              <Loader2 className="w-12 h-12 text-gray-400 animate-spin mx-auto" />
              <h1 className="mt-4 text-lg font-semibold text-gray-900">
                Verifying payment...
              </h1>
              <p className="mt-2 text-[13px] text-gray-400">
                This will only take a moment.
              </p>
            </>
          )}

          {status === 'success' && (
            <>
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto" />
              <h1 className="mt-4 text-lg font-semibold text-gray-900">
                Welcome to Qsync!
              </h1>
              <p className="mt-2 text-[13px] text-gray-400">
                Your {plan} subscription is now active. You have full access to all features.
              </p>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-[12px] text-gray-500 mb-3">
                  Reference: {reference}
                </p>
                <p className="text-[12px] text-gray-500">
                  Plan: {plan}
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download Qsync APK
                </a>

                <Link
                  to="/"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to home
                </Link>
              </div>

              <p className="mt-4 text-[11px] text-gray-400">
                Check your email for login credentials and setup instructions.
              </p>
            </>
          )}

          {status === 'error' && (
            <>
              <h1 className="text-lg font-semibold text-gray-900">
                Payment verification failed
              </h1>
              <p className="mt-2 text-[13px] text-gray-400">
                {error || 'Something went wrong. Please contact support.'}
              </p>
              <Link
                to="/plan"
                className="mt-6 inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-gray-900 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
              >
                Try again
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
