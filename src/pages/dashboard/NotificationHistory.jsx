import { Bell, Search, Clock, Globe, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useDeviceId } from '../../hooks/useDeviceId'
import { useWebHistory, useAppUsage } from '../../hooks/useSupabaseData'

export default function NotificationHistory() {
  const { deviceId } = useDeviceId()
  const { data: webHistory, loading: webLoading } = useWebHistory(deviceId, 100)
  const { data: appUsage, loading: usageLoading } = useAppUsage(deviceId, 100)
  const [search, setSearch] = useState('')

  const loading = webLoading || usageLoading

  const webFiltered = search
    ? webHistory?.filter(w => (w.url || '').toLowerCase().includes(search.toLowerCase()))
    : webHistory

  const usageFiltered = search
    ? appUsage?.filter(u => (u.package_name || '').toLowerCase().includes(search.toLowerCase()))
    : appUsage

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl">
      {/* Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search activity..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20"
          />
        </div>
      </div>

      {/* App Usage */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bell size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">App Usage</h3>
          <span className="text-xs text-gray-400 ml-auto">{usageFiltered?.length || 0} apps</span>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 size={24} className="animate-spin text-[#2d9c7a]" />
          </div>
        ) : usageFiltered?.length > 0 ? (
          <div className="space-y-1">
            {usageFiltered.map((usage, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-gray-100 flex items-center justify-center shrink-0">
                  <Globe size={16} className="text-gray-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1a2e25]">{usage.package_name}</p>
                  <p className="text-xs text-gray-400">{usage.minutes_used} minutes used</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                  <Clock size={12} />
                  {usage.timestamp ? new Date(usage.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-8">No app usage data yet</p>
        )}
      </div>

      {/* Web History */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Globe size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Web History</h3>
          <span className="text-xs text-gray-400 ml-auto">{webFiltered?.length || 0} entries</span>
        </div>

        {webFiltered?.length > 0 ? (
          <div className="space-y-1">
            {webFiltered.map((entry, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Globe size={16} className="text-blue-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#1a2e25] truncate">{entry.url}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                  <Clock size={12} />
                  {entry.timestamp ? new Date(entry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-8">No web history yet</p>
        )}
      </div>
    </div>
  )
}
