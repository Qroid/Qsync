import { useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Logo from '../components/Logo'
import { User, Lock, Eye, EyeOff, Loader2, CheckCircle, ArrowLeft } from 'lucide-react'

export default function AccountCreation() {
  const location = useLocation()
  const navigate = useNavigate()
  const { signUp } = useAuth()

  const email = location.state?.email || ''
  const plan = location.state?.plan || 'monthly'

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [role, setRole] = useState('husband')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  if (!email) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-gray-500 mb-4">No email found. Please complete payment first.</p>
          <Link to="/plan" className="text-[#2d9c7a] hover:underline">View Plans</Link>
        </div>
      </div>
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      await signUp(email, password, {
        display_name: username,
        role,
        plan
      })
      setSuccess(true)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle size={48} className="text-[#2d9c7a]" />
            </div>
            <h2 className="text-xl font-bold text-[#1a2e25] mb-2">Account Created!</h2>
            <p className="text-gray-500 text-sm mb-6">
              Your account is ready. You can use the same login on up to 2 devices.
            </p>
            <Link
              to="/login"
              className="inline-block w-full bg-[#1a2e25] text-white font-semibold py-3 rounded-xl hover:bg-[#243d32] transition-colors text-sm"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/plan" className="inline-flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#1a2e25] mb-4 sm:mb-6 transition-colors">
          <ArrowLeft size={14} />
          Back to plans
        </Link>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <Logo dark className="w-10 h-10" />
          </div>
          <h1 className="text-2xl font-bold text-[#1a2e25]">Create Your Account</h1>
          <p className="text-gray-500 mt-2 text-sm">Set up your Qsync profile</p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email (readonly) */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                readOnly
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm bg-gray-50 text-gray-600"
              />
            </div>

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Username</label>
              <div className="relative">
                <User size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="e.g. john_doe"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20 focus:border-[#2d9c7a] transition-colors"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Min. 6 characters"
                  required
                  className="w-full pl-10 pr-12 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20 focus:border-[#2d9c7a] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Confirm Password</label>
              <div className="relative">
                <Lock size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter password"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20 focus:border-[#2d9c7a] transition-colors"
                />
              </div>
            </div>

            {/* Role Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">I am the</label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRole('husband')}
                  className={`py-3 rounded-xl text-sm font-medium transition-all ${
                    role === 'husband'
                      ? 'bg-[#1a2e25] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Husband
                </button>
                <button
                  type="button"
                  onClick={() => setRole('wife')}
                  className={`py-3 rounded-xl text-sm font-medium transition-all ${
                    role === 'wife'
                      ? 'bg-[#1a2e25] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Wife
                </button>
              </div>
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !username || !password || !confirmPassword}
              className="w-full bg-[#1a2e25] text-white font-semibold py-3 rounded-xl hover:bg-[#243d32] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 text-sm"
            >
              {loading ? (
                <Loader2 size={18} className="animate-spin" />
              ) : (
                'Create Account'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          One account works on up to 2 devices
        </p>
      </div>
    </div>
  )
}
