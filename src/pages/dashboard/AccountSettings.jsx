import { Settings, CreditCard, Users, ArrowUpRight, ArrowDownLeft, Shield, AlertTriangle, CheckCircle, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

const mockSubscription = {
  tier: 'Monthly',
  price: '\u20a68,500',
  period: 'month',
  expiresAt: '2026-07-29',
  status: 'active',
}

const mockPartner = {
  name: 'Jordan',
  email: 'jordan@example.com',
  connected: true,
  since: '2026-05-15',
}

export default function AccountSettings() {
  const { user } = useAuth()

  return (
    <div className="space-y-4 sm:space-y-6 max-w-3xl">
      {/* Account Info */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Settings size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Account</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b border-gray-50">
            <span className="text-sm text-gray-500">Email</span>
            <span className="text-sm font-medium text-[#1a2e25]">{user?.email}</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b border-gray-50">
            <span className="text-sm text-gray-500">Member since</span>
            <span className="text-sm font-medium text-[#1a2e25]">May 2026</span>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <CreditCard size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Subscription</h3>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-lg font-semibold text-[#1a2e25]">{mockSubscription.tier} Plan</span>
            <span className="flex items-center gap-1.5 text-xs font-medium text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
              <CheckCircle size={14} />
              Active
            </span>
          </div>
          <p className="text-sm text-gray-500">
            {mockSubscription.price}/{mockSubscription.period} · Renews {mockSubscription.expiresAt}
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            to="/plan"
            className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#2d9c7a] text-white rounded-xl text-sm font-medium hover:bg-[#24806a] transition-colors"
          >
            <ArrowUpRight size={16} />
            Upgrade Plan
          </Link>
          <button className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-100 text-gray-600 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
            <ArrowDownLeft size={16} />
            Downgrade
          </button>
        </div>
      </div>

      {/* Partner Connection */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Users size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Partner Connection</h3>
        </div>

        {mockPartner.connected ? (
          <div className="bg-[#2d9c7a]/5 border border-[#2d9c7a]/20 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2d9c7a] flex items-center justify-center text-white font-semibold">
                {mockPartner.name.charAt(0)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1a2e25]">{mockPartner.name}</p>
                <p className="text-xs text-gray-500">{mockPartner.email}</p>
              </div>
              <span className="text-xs text-[#2d9c7a] font-medium">Connected</span>
            </div>
            <p className="text-xs text-gray-400 mt-3">Connected since {mockPartner.since}</p>
          </div>
        ) : (
          <div className="text-center py-6">
            <Users size={32} className="mx-auto mb-3 text-gray-300" />
            <p className="text-sm text-gray-500 mb-3">No partner connected yet</p>
            <button className="px-4 py-2 bg-[#2d9c7a] text-white rounded-xl text-sm font-medium hover:bg-[#24806a] transition-colors">
              Invite Partner
            </button>
          </div>
        )}
      </div>

      {/* Security */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Shield size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Security</h3>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-3 border-b border-gray-50">
            <div>
              <p className="text-sm font-medium text-[#1a2e25]">Two-factor authentication</p>
              <p className="text-xs text-gray-400">Add an extra layer of security</p>
            </div>
            <button className="text-sm text-[#2d9c7a] hover:underline">Enable</button>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-[#1a2e25]">Active sessions</p>
              <p className="text-xs text-gray-400">Manage your logged-in devices</p>
            </div>
            <button className="text-sm text-[#2d9c7a] hover:underline">View</button>
          </div>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <AlertTriangle size={18} className="text-red-500" />
          <h3 className="font-semibold text-red-600">Danger Zone</h3>
        </div>

        <div className="space-y-3">
          <button className="w-full py-2.5 bg-red-50 text-red-600 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors">
            Cancel Subscription
          </button>
          <button className="w-full py-2.5 bg-red-50 text-red-600 rounded-xl text-sm font-medium hover:bg-red-100 transition-colors">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}
