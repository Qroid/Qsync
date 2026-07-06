import { Phone, ArrowUpRight, ArrowDownLeft, PhoneMissed, Search, Clock, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useDeviceId } from '../../hooks/useDeviceId'
import { useCallLogs } from '../../hooks/useSupabaseData'

const directionConfig = {
  1: { icon: ArrowDownLeft, color: 'bg-blue-100 text-blue-600', label: 'Incoming' },
  2: { icon: ArrowUpRight, color: 'bg-[#2d9c7a]/10 text-[#2d9c7a]', label: 'Outgoing' },
  3: { icon: PhoneMissed, color: 'bg-red-100 text-red-500', label: 'Missed' },
}

export default function CallLog() {
  const { deviceId } = useDeviceId()
  const { data: calls, loading } = useCallLogs(deviceId, 200)
  const [search, setSearch] = useState('')

  const filtered = search
    ? calls?.filter(c =>
        (c.number || '').includes(search) ||
        (c.contact_name || '').toLowerCase().includes(search.toLowerCase())
      )
    : calls

  const formatTime = (ts) => {
    if (!ts) return ''
    return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const formatDuration = (secs) => {
    if (!secs) return null
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl">
      {/* Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search contacts or numbers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20"
          />
        </div>
      </div>

      {/* Call List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Phone size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Call History</h3>
          <span className="text-xs text-gray-400 ml-auto">{filtered?.length || 0} calls</span>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 size={24} className="animate-spin text-[#2d9c7a]" />
          </div>
        ) : filtered?.length > 0 ? (
          <div className="space-y-1">
            {filtered.map((call, i) => {
              const config = directionConfig[call.type] || directionConfig[1]
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${config.color}`}>
                    <config.icon size={16} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1a2e25]">{call.contact_name || call.number || 'Unknown'}</p>
                    <p className="text-xs text-gray-400">{call.number}</p>
                  </div>
                  <div className="text-right shrink-0">
                    {call.duration > 0 && (
                      <p className="text-sm text-[#1a2e25] font-medium">{formatDuration(call.duration)}</p>
                    )}
                    <div className="flex items-center gap-1 text-xs text-gray-400 justify-end">
                      <Clock size={12} />
                      {formatTime(call.timestamp)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-8">No calls yet</p>
        )}
      </div>
    </div>
  )
}
