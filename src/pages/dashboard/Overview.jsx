import { MapPin, Battery, Wifi, Clock, Shield, Activity, Loader2, Smartphone, Heart, Eye } from 'lucide-react'
import { useDeviceId } from '../../hooks/useDeviceId'
import { useLatestLocation, useLocations, useSmsLogs, useCallLogs, useCommands } from '../../hooks/useSupabaseData'
import { supabase, isSupabaseConfigured } from '../../lib/supabase'
import { useQuery } from '@tanstack/react-query'
import { useAuth } from '../../contexts/AuthContext'

function useDeviceInfo(deviceId) {
  return useQuery({
    queryKey: ['device_info', deviceId],
    queryFn: async () => {
      if (!supabase || !deviceId) return null
      const { data } = await supabase
        .from('commands')
        .select('*')
        .eq('target_device_id', deviceId)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle()
      return data
    },
    enabled: !!deviceId && isSupabaseConfigured,
    refetchInterval: 10000,
  })
}

function useTodayCount(table, deviceId) {
  return useQuery({
    queryKey: [`today_${table}`, deviceId],
    queryFn: async () => {
      if (!supabase || !deviceId) return 0
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      const { count } = await supabase
        .from(table)
        .select('*', { count: 'exact', head: true })
        .eq('device_id', deviceId)
        .gte('timestamp', today.toISOString())
      return count || 0
    },
    enabled: !!deviceId && isSupabaseConfigured,
    refetchInterval: 30000,
  })
}

function formatTimeAgo(timestamp) {
  if (!timestamp) return 'Never'
  const diff = Date.now() - new Date(timestamp).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'Just now'
  if (mins < 60) return `${mins}m ago`
  const hours = Math.floor(mins / 60)
  if (hours < 24) return `${hours}h ago`
  const days = Math.floor(hours / 24)
  return `${days}d ago`
}

export default function Overview() {
  const { profile } = useAuth()
  const { deviceId, loading: deviceLoading } = useDeviceId()
  const { data: location } = useLatestLocation(deviceId)
  const { data: locations } = useLocations(deviceId, 50)
  const { data: sms } = useSmsLogs(deviceId, 50)
  const { data: calls } = useCallLogs(deviceId, 50)
  const { data: commands } = useCommands(deviceId)
  const { data: smsToday } = useTodayCount('sms_logs', deviceId)
  const { data: callsToday } = useTodayCount('call_logs', deviceId)
  const { data: locToday } = useTodayCount('locations', deviceId)

  const battery = commands?.find(c => c.type === 'battery')?.battery_level || null
  const connection = commands?.find(c => c.type === 'connection')?.connection_type || null

  const roleConfig = {
    hubby: {
      title: 'Honey Dashboard',
      subtitle: "Monitoring Honey's device",
      icon: Heart,
      color: '#2d9c7a'
    },
    honey: {
      title: 'Hubby Dashboard',
      subtitle: "Monitoring Hubby's device",
      icon: Smartphone,
      color: '#1a2e25'
    },
    qid: {
      title: 'Qid Dashboard',
      subtitle: "Monitoring kid's device",
      icon: Eye,
      color: '#1a2e25'
    }
  }

  const currentRole = profile?.role || 'hubby'
  const config = roleConfig[currentRole] || roleConfig.hubby

  if (deviceLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 size={24} className="animate-spin text-[#2d9c7a]" />
      </div>
    )
  }

  if (!deviceId) {
    const noDeviceMsg = {
      hubby: "Link Honey's device to start seeing their location, activity, and status. Go to Settings to enter the Device ID.",
      honey: "Link Hubby's device to start seeing their location, activity, and status. Go to Settings to enter the Device ID.",
      qid: "Link your kid's device to start seeing their location, activity, and status. Go to Settings to enter the Device ID."
    }

    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <Smartphone size={48} className="text-gray-300 mb-4" />
        <h2 className="text-lg font-semibold text-[#1a2e25] mb-2">No device linked yet</h2>
        <p className="text-sm text-gray-500 max-w-sm">
          {noDeviceMsg[currentRole] || noDeviceMsg.hubby}
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl">
      {/* Device Status Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: config.color }}>
            <config.icon size={20} />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-[#1a2e25]">Partner's Device</h2>
            <p className="text-sm text-gray-500">Last seen {formatTimeAgo(location?.timestamp)}</p>
          </div>
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-green-50 text-green-700">
            {location ? 'Online' : 'Offline'}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <MapPin size={14} />
              <span className="text-xs">Location</span>
            </div>
            <p className="text-sm font-medium text-[#1a2e25]">
              {location ? `${location.lat?.toFixed(4)}, ${location.lng?.toFixed(4)}` : 'No data'}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Battery size={14} />
              <span className="text-xs">Battery</span>
            </div>
            <p className="text-sm font-medium text-[#1a2e25]">
              {battery != null ? `${battery}%` : 'No data'}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Wifi size={14} />
              <span className="text-xs">Connection</span>
            </div>
            <p className="text-sm font-medium text-[#1a2e25]">
              {connection || 'No data'}
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Clock size={14} />
              <span className="text-xs">Last Sync</span>
            </div>
            <p className="text-sm font-medium text-[#1a2e25]">
              {formatTimeAgo(location?.timestamp)}
            </p>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Live Location</h3>
          {location && (
            <div className="flex items-center gap-1.5 text-xs text-[#2d9c7a] ml-auto">
              <span className="w-2 h-2 bg-[#2d9c7a] rounded-full animate-pulse"></span>
              Live
            </div>
          )}
        </div>
        <div className="bg-gray-100 rounded-xl h-64 sm:h-80 flex items-center justify-center">
          {location ? (
            <div className="text-center">
              <MapPin size={40} className="mx-auto mb-2 text-[#2d9c7a]" />
              <p className="text-sm font-medium text-[#1a2e25]">
                {location.lat?.toFixed(6)}, {location.lng?.toFixed(6)}
              </p>
              <p className="text-xs text-gray-400 mt-1">
                Accuracy: {location.accuracy?.toFixed(0)}m
              </p>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <MapPin size={40} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm">Waiting for location data...</p>
            </div>
          )}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Recent Activity</h3>
        </div>
        <div className="space-y-3">
          {locations?.slice(0, 5).map((loc, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#2d9c7a]"></div>
              <span className="text-sm text-gray-500 w-20 shrink-0">
                {new Date(loc.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span className="text-sm text-[#1a2e25]">
                {loc.event_type === 'arrived' ? `Arrived at ${loc.place_name || 'location'}` :
                 loc.event_type === 'departed' ? `Left ${loc.place_name || 'location'}` :
                 'Location updated'}
              </span>
            </div>
          ))}
          {sms?.slice(0, 3).map((msg, i) => (
            <div key={`sms-${i}`} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              <span className="text-sm text-gray-500 w-20 shrink-0">
                {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span className="text-sm text-[#1a2e25]">
                SMS from {msg.address || 'Unknown'}
              </span>
            </div>
          ))}
          {(!locations || locations.length === 0) && (!sms || sms.length === 0) && (
            <p className="text-sm text-gray-400 text-center py-4">No activity yet</p>
          )}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center">
          <MapPin size={20} className="mx-auto mb-2 text-[#2d9c7a]" />
          <p className="text-2xl font-bold text-[#1a2e25]">{locToday || 0}</p>
          <p className="text-xs text-gray-500">Locations Today</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center">
          <Activity size={20} className="mx-auto mb-2 text-[#2d9c7a]" />
          <p className="text-2xl font-bold text-[#1a2e25]">{smsToday || 0}</p>
          <p className="text-xs text-gray-500">SMS Today</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center col-span-2 sm:col-span-1">
          <Shield size={20} className="mx-auto mb-2 text-[#2d9c7a]" />
          <p className="text-2xl font-bold text-[#1a2e25]">{callsToday || 0}</p>
          <p className="text-xs text-gray-500">Calls Today</p>
        </div>
      </div>
    </div>
  )
}
