import { Activity, MapPin, Wifi, Battery, Bell, Clock, Filter } from 'lucide-react'
import { useState } from 'react'

const mockEvents = [
  { time: '2:30 PM', event: 'Arrived at Office', type: 'location', icon: MapPin, color: 'text-[#2d9c7a]' },
  { time: '2:28 PM', event: 'Shared location', type: 'location', icon: MapPin, color: 'text-[#2d9c7a]' },
  { time: '2:15 PM', event: 'Status: Working', type: 'status', icon: Activity, color: 'text-blue-500' },
  { time: '1:15 PM', event: 'Left Home', type: 'location', icon: MapPin, color: 'text-[#2d9c7a]' },
  { time: '1:00 PM', event: 'Battery 80%', type: 'system', icon: Battery, color: 'text-yellow-500' },
  { time: '12:30 PM', event: 'Connected to Wi-Fi', type: 'system', icon: Wifi, color: 'text-purple-500' },
  { time: '12:00 PM', event: 'Status: Working', type: 'status', icon: Activity, color: 'text-blue-500' },
  { time: '11:00 AM', event: 'Notification from WhatsApp', type: 'notification', icon: Bell, color: 'text-orange-500' },
  { time: '10:30 AM', event: 'Battery 90%', type: 'system', icon: Battery, color: 'text-yellow-500' },
  { time: '10:00 AM', event: 'Arrived at Office', type: 'location', icon: MapPin, color: 'text-[#2d9c7a]' },
  { time: '9:15 AM', event: 'Left Home', type: 'location', icon: MapPin, color: 'text-[#2d9c7a]' },
  { time: '8:30 AM', event: 'Device connected', type: 'system', icon: Wifi, color: 'text-purple-500' },
]

const filters = ['All', 'Location', 'Status', 'System', 'Notification']

export default function ActivityFeed() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? mockEvents
    : mockEvents.filter(e => e.type === activeFilter.toLowerCase())

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

        <div className="space-y-1">
          {filtered.map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-3 border-b border-gray-50 last:border-0">
              <item.icon size={16} className={item.color} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-[#1a2e25]">{item.event}</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-gray-400 shrink-0">
                <Clock size={12} />
                {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
