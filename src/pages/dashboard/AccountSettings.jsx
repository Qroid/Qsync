import { useState } from 'react'
import { Settings, CreditCard, Users, Shield, AlertTriangle, CheckCircle, Smartphone, Link, Loader2 } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useDeviceId } from '../../hooks/useDeviceId'
import { supabase, isSupabaseConfigured } from '../../lib/supabase'

export default function AccountSettings() {
  const { user } = useAuth()
  const { deviceId, setDevice, loading: deviceLoading } = useDeviceId()
  const [inputDeviceId, setInputDeviceId] = useState('')
  const [linking, setLinking] = useState(false)
  const [linkSuccess, setLinkSuccess] = useState(false)

  const handleLinkDevice = async (e) => {
    e.preventDefault()
    if (!inputDeviceId.trim()) return
    setLinking(true)
    setLinkSuccess(false)

    try {
      if (isSupabaseConfigured && supabase && user) {
        await supabase.from('device_registry').upsert({
          device_id: inputDeviceId.trim(),
          user_id: user.id,
          linked_at: new Date().toISOString(),
        }, { onConflict: 'device_id' })
      }
      setDevice(inputDeviceId.trim())
      setInputDeviceId('')
      setLinkSuccess(true)
      setTimeout(() => setLinkSuccess(false), 3000)
    } catch (err) {
      console.error('Link error:', err)
    } finally {
      setLinking(false)
    }
  }

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
            <span className="text-sm font-medium text-[#1a2e25]">
              {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {/* Device Linking */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Smartphone size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Linked Device</h3>
        </div>

        {deviceLoading ? (
          <div className="flex justify-center py-4">
            <Loader2 size={20} className="animate-spin text-[#2d9c7a]" />
          </div>
        ) : deviceId ? (
          <div className="bg-[#2d9c7a]/5 border border-[#2d9c7a]/20 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#2d9c7a] flex items-center justify-center text-white">
                <Smartphone size={18} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1a2e25]">Device Linked</p>
                <p className="text-xs text-gray-500 font-mono">{deviceId}</p>
              </div>
              <span className="text-xs text-[#2d9c7a] font-medium flex items-center gap-1">
                <CheckCircle size={14} />
                Active
              </span>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLinkDevice} className="space-y-3">
            <p className="text-sm text-gray-500">
              Enter your Android Device ID to start monitoring. Find it in the Qsync app settings.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                value={inputDeviceId}
                onChange={(e) => setInputDeviceId(e.target.value)}
                placeholder="Enter Device ID"
                className="flex-1 px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20 focus:border-[#2d9c7a] font-mono"
              />
              <button
                type="submit"
                disabled={linking || !inputDeviceId.trim()}
                className="px-4 py-2.5 bg-[#2d9c7a] text-white rounded-xl text-sm font-medium hover:bg-[#24806a] transition-colors disabled:opacity-50 flex items-center gap-2"
              >
                {linking ? <Loader2 size={16} className="animate-spin" /> : <Link size={16} />}
                Link
              </button>
            </div>
            {linkSuccess && (
              <p className="text-xs text-[#2d9c7a] flex items-center gap-1">
                <CheckCircle size={14} />
                Device linked successfully!
              </p>
            )}
          </form>
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
    </div>
  )
}
