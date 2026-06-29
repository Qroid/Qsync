import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import Logo from '../components/Logo'
import { Mail, ArrowRight, CheckCircle, Loader2 } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { signInWithEmail } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError(null)
    try {
      await signInWithEmail(email)
      setSent(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo dark className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-[#1a2e25]">Sign in to Qsync</h1>
          <p className="text-gray-500 mt-2 text-sm">Enter your email to receive a magic link</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          {sent ? (
            <div className="text-center py-4">
              <div className="flex justify-center mb-4">
                <CheckCircle size={48} className="text-[#2d9c7a]" />
              </div>
              <h2 className="text-lg font-semibold text-[#1a2e25] mb-2">Check your email</h2>
              <p className="text-gray-500 text-sm">
                We sent a login link to <span className="font-medium text-gray-700">{email}</span>
              </p>
              <p className="text-gray-400 text-xs mt-4">
                Didn't receive it? Check your spam folder or{' '}
                <button onClick={() => setSent(false)} className="text-[#2d9c7a] hover:underline">
                  try again
                </button>
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email address
                </label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20 focus:border-[#2d9c7a] transition-colors"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-500 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading || !email}
                className="w-full bg-[#1a2e25] text-white font-semibold py-3 rounded-xl hover:bg-[#243d32] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <>
                    Send Magic Link
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          <a href="/" className="hover:text-[#2d9c7a] transition-colors">← Back to Qsync</a>
        </p>
      </div>
    </div>
  )
}
