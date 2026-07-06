import { MessageSquare, Search, ArrowUpRight, ArrowDownLeft, Clock, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useDeviceId } from '../../hooks/useDeviceId'
import { useSmsLogs } from '../../hooks/useSupabaseData'

export default function SmsReader() {
  const { deviceId } = useDeviceId()
  const { data: sms, loading } = useSmsLogs(deviceId, 200)
  const [search, setSearch] = useState('')

  const filtered = search
    ? sms?.filter(s =>
        (s.address || '').toLowerCase().includes(search.toLowerCase()) ||
        (s.body || '').toLowerCase().includes(search.toLowerCase())
      )
    : sms

  const formatTime = (ts) => {
    if (!ts) return ''
    return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const getTypeLabel = (type) => {
    switch (type) {
      case 1: return 'Received'
      case 2: return 'Sent'
      case 3: return 'Draft'
      default: return 'Unknown'
    }
  }

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl">
      {/* Search */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search messages or contacts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20"
          />
        </div>
      </div>

      {/* SMS List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <MessageSquare size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Messages</h3>
          <span className="text-xs text-gray-400 ml-auto">{filtered?.length || 0} messages</span>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 size={24} className="animate-spin text-[#2d9c7a]" />
          </div>
        ) : filtered?.length > 0 ? (
          <div className="space-y-1">
            {filtered.map((sms, i) => (
              <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${sms.type === 1 ? 'bg-blue-100 text-blue-600' : 'bg-[#2d9c7a]/10 text-[#2d9c7a]'}`}>
                  {sms.type === 1 ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-sm font-medium text-[#1a2e25]">{sms.address || 'Unknown'}</span>
                    <span className="text-xs text-gray-400">{getTypeLabel(sms.type)}</span>
                  </div>
                  <p className="text-sm text-gray-600 truncate">{sms.body}</p>
                </div>
                <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                  <Clock size={12} />
                  {formatTime(sms.timestamp)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-8">No messages yet</p>
        )}
      </div>
    </div>
  )
}
