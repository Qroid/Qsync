import { useState, useEffect } from 'react'
import { Settings, Shield, CheckCircle, Smartphone, Link, Loader2, Trash2 } from 'lucide-react'
import { useAuth } from '../../contexts/AuthContext'
import { useDeviceId } from '../../hooks/useDeviceId'
import { supabase, isSupabaseConfigured } from '../../lib/supabase'

function DeviceLinker({ label, deviceId, devices, setDevice, clearDevice, deviceLoading, user }) {
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

  const handleSelectDevice = async (id) => {
    if (isSupabaseConfigured && supabase && user) {
      await supabase.from('device_registry').upsert({
        device_id: id,
        user_id: user.id,
        linked_at: new Date().toISOString(),
      }, { onConflict: 'device_id' })
    }
    setDevice(id)
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Smartphone size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">{label}</h3>
        </div>
        {deviceId && (
          <button
            onClick={clearDevice}
            className="text-xs text-gray-400 hover:text-red-500 flex items-center gap-1 transition-colors"
          >
            <Trash2 size={12} />
            Unlink
          </button>
        )}
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
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-[#1a2e25]">Device Linked</p>
              <p className="text-xs text-gray-500 font-mono truncate">{deviceId}</p>
            </div>
            <span className="text-xs text-[#2d9c7a] font-medium flex items-center gap-1 shrink-0">
              <CheckCircle size={14} />
              Active
            </span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {devices.length > 0 && (
            <div>
              <p className="text-sm text-gray-500 mb-3">
                {devices.length === 1 ? '1 device detected' : `${devices.length} devices detected`} — select one:
              </p>
              <div className="space-y-2">
                {devices.map((id) => (
                  <button
                    key={id}
                    onClick={() => handleSelectDevice(id)}
                    className="w-full flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:border-[#2d9c7a] hover:bg-[#2d9c7a]/5 transition-all text-left"
                  >
                    <Smartphone size={16} className="text-gray-400 shrink-0" />
                    <span className="text-sm font-mono text-[#1a2e25] truncate">{id}</span>
                    <Link size={14} className="text-[#2d9c7a] ml-auto shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          <div>
            <p className="text-sm text-gray-500 mb-2">
              {devices.length > 0 ? 'Or enter a different Device ID:' : 'Enter the Android Device ID:'}
            </p>
            <form onSubmit={handleLinkDevice} className="flex gap-2">
              <input
                type="text"
                value={inputDeviceId}
                onChange={(e) => setInputDeviceId(e.target.value)}
                placeholder="Device ID from Android app"
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
            </form>
            {linkSuccess && (
              <p className="text-xs text-[#2d9c7a] flex items-center gap-1 mt-2">
                <CheckCircle size={14} />
                Device linked successfully!
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default function AccountSettings() {
  const { user, profile } = useAuth()
  const { deviceId, devices, setDevice, clearDevice, loading: deviceLoading } = useDeviceId()
  const [hubbyDevice, setHubbyDevice] = useState(null)
  const [honeyDevice, setHoneyDevice] = useState(null)
  const [loadingDevices, setLoadingDevices] = useState(false)

  const isQid = profile?.role === 'qid'
  const isHubby = profile?.role === 'hubby'
  const isHoney = profile?.role === 'honey'

  const getDeviceLabel = () => {
    if (isQid) return "Kid's Device"
    if (isHubby) return "Honey's Device"
    if (isHoney) return "Hubby's Device"
    return "Partner's Device"
  }

  useEffect(() => {
    if (!isQid || !isSupabaseConfigured || !supabase || !user) return

    const fetchDevices = async () => {
      setLoadingDevices(true)
      try {
        const { data } = await supabase
          .from('device_registry')
          .select('device_id, label')
          .eq('user_id', user.id)

        if (data) {
          data.forEach(d => {
            if (d.label === 'hubby') setHubbyDevice(d.device_id)
            if (d.label === 'honey') setHoneyDevice(d.device_id)
          })
        }
      } catch (err) {
        console.error('Error fetching devices:', err)
      } finally {
        setLoadingDevices(false)
      }
    }

    fetchDevices()
  }, [isQid, user])

  const handleSetHubbyDevice = async (id) => {
    if (isSupabaseConfigured && supabase && user) {
      await supabase.from('device_registry').upsert({
        device_id: id,
        user_id: user.id,
        label: 'hubby',
        linked_at: new Date().toISOString(),
      }, { onConflict: 'device_id' })
    }
    setHubbyDevice(id)
    setDevice(id)
  }

  const handleSetHoneyDevice = async (id) => {
    if (isSupabaseConfigured && supabase && user) {
      await supabase.from('device_registry').upsert({
        device_id: id,
        user_id: user.id,
        label: 'honey',
        linked_at: new Date().toISOString(),
      }, { onConflict: 'device_id' })
    }
    setHoneyDevice(id)
    setDevice(id)
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
          <div className="flex items-center justify-between py-3">
            <span className="text-sm text-gray-500">Member since</span>
            <span className="text-sm font-medium text-[#1a2e25]">
              {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}
            </span>
          </div>
        </div>
      </div>

      {isQid ? (
        <>
          <DeviceLinker
            label="Hubby's Device"
            deviceId={hubbyDevice}
            devices={devices}
            setDevice={handleSetHubbyDevice}
            clearDevice={() => { setHubbyDevice(null); clearDevice() }}
            deviceLoading={loadingDevices}
            user={user}
          />
          <DeviceLinker
            label="Honey's Device"
            deviceId={honeyDevice}
            devices={devices}
            setDevice={handleSetHoneyDevice}
            clearDevice={() => { setHoneyDevice(null); clearDevice() }}
            deviceLoading={loadingDevices}
            user={user}
          />
        </>
      ) : (
        <DeviceLinker
          label={getDeviceLabel()}
          deviceId={deviceId}
          devices={devices}
          setDevice={setDevice}
          clearDevice={clearDevice}
          deviceLoading={deviceLoading}
          user={user}
        />
      )}

      {/* Security */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Shield size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Security</h3>
        </div>

        <div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="text-sm font-medium text-[#1a2e25]">Password</p>
              <p className="text-xs text-gray-400">Last changed {user?.created_at ? new Date(user.created_at).toLocaleDateString() : 'N/A'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
