import { Activity, MapPin, Wifi, Battery, Bell, Clock, Filter, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useDeviceId } from '../../hooks/useDeviceId'
import { useLocations, useSmsLogs, useCallLogs, useCommands } from '../../hooks/useSupabaseData'

function buildEvents(locations, sms, calls, commands) {
  const events = []

  locations?.forEach(loc => {
    events.push({
      time: loc.timestamp,
      event: loc.event_type === 'arrived' ? `Arrived at ${loc.place_name || 'location'}` :
             loc.event_type === 'departed' ? `Left ${loc.place_name || 'location'}` :
             'Location updated',
      type: 'location',
      icon: MapPin,
      color: 'text-[#2d9c7a]'
    })
  })

  sms?.forEach(msg => {
    events.push({
      time: msg.timestamp,
      event: `SMS from ${msg.address || 'Unknown'}`,
      type: 'notification',
      icon: Bell,
      color: 'text-orange-500'
    })
  })

  calls?.forEach(call => {
    const dir = call.type === 1 ? 'Incoming' : call.type === 3 ? 'Missed' : 'Outgoing'
    events.push({
      time: call.timestamp,
      event: `${dir} call${call.contact_name ? ` from ${call.contact_name}` : ''}`,
      type: 'notification',
      icon: Bell,
      color: call.type === 3 ? 'text-red-500' : 'text-orange-500'
    })
  })

  commands?.forEach(cmd => {
    if (cmd.type === 'battery') {
      events.push({
        time: cmd.created_at,
        event: `Battery ${cmd.battery_level}%`,
        type: 'system',
        icon: Battery,
        color: 'text-yellow-500'
      })
    }
    if (cmd.type === 'connection') {
      events.push({
        time: cmd.created_at,
        event: `Connected to ${cmd.connection_type || 'network'}`,
        type: 'system',
        icon: Wifi,
        color: 'text-purple-500'
      })
    }
  })

  events.sort((a, b) => new Date(b.time) - new Date(a.time))
  return events
}

const filters = ['All', 'Location', 'System', 'Notification']

export default function ActivityFeed() {
  const { deviceId } = useDeviceId()
  const { data: locations, loading: locLoading } = useLocations(deviceId, 50)
  const { data: sms, loading: smsLoading } = useSmsLogs(deviceId, 50)
  const { data: calls, loading: callsLoading } = useCallLogs(deviceId, 50)
  const { data: commands, loading: cmdLoading } = useCommands(deviceId)
  const [activeFilter, setActiveFilter] = useState('All')

  const loading = locLoading || smsLoading || callsLoading || cmdLoading
  const events = buildEvents(locations, sms, calls, commands)

  const filtered = activeFilter === 'All'
    ? events
    : events.filter(e => e.type === activeFilter.toLowerCase())

  const formatTime = (ts) => {
    if (!ts) return ''
    return new Date(ts).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl">
      {/* Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-2 overflow-x-auto">
          <Filter size={16} className="text-gray-400 shrink-0" />
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                activeFilter === f
                  ? 'bg-[#1a2e25] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Activity List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Activity size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Activity Feed</h3>
          <span className="text-xs text-gray-400 ml-auto">{filtered.length} events</span>
        </div>

        {loading ? (
          <div className="flex justify-center py-8">
            <Loader2 size={24} className="animate-spin text-[#2d9c7a]" />
          </div>
        ) : filtered.length > 0 ? (
          <div className="space-y-1">
            {filtered.map((item, i) => (
              <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
                <item.icon size={16} className={item.color} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#1a2e25]">{item.event}</p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 shrink-0">
                  <Clock size={12} />
                  {formatTime(item.time)}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-400 text-center py-8">No activity yet</p>
        )}
      </div>
    </div>
  )
}
