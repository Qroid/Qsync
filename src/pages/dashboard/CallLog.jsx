import { Phone, ArrowUpRight, ArrowDownLeft, PhoneMissed, Search, Clock } from 'lucide-react'
import { useState } from 'react'

const mockCalls = [
  { contact: 'Mom', phone: '+1 (555) 123-4567', direction: 'incoming', duration: '5:32', time: '3:00 PM', date: 'Today' },
  { contact: 'Jordan', phone: '+1 (555) 987-6543', direction: 'outgoing', duration: '12:45', time: '2:15 PM', date: 'Today' },
  { contact: 'Office', phone: '+1 (555) 456-7890', direction: 'missed', duration: null, time: '1:30 PM', date: 'Today' },
  { contact: 'Jordan', phone: '+1 (555) 987-6543', direction: 'incoming', duration: '8:20', time: '11:00 AM', date: 'Today' },
  { contact: 'Delivery', phone: '+1 (555) 321-0987', direction: 'outgoing', duration: '2:15', time: '10:30 AM', date: 'Today' },
  { contact: 'Mom', phone: '+1 (555) 123-4567', direction: 'incoming', duration: '15:00', time: '8:00 PM', date: 'Yesterday' },
  { contact: 'Jordan', phone: '+1 (555) 987-6543', direction: 'outgoing', duration: '22:10', time: '6:30 PM', date: 'Yesterday' },
]

const directionConfig = {
  incoming: { icon: ArrowDownLeft, color: 'bg-blue-100 text-blue-600', label: 'Incoming' },
  outgoing: { icon: ArrowUpRight, color: 'bg-[#2d9c7a]/10 text-[#2d9c7a]', label: 'Outgoing' },
  missed: { icon: PhoneMissed, color: 'bg-red-100 text-red-500', label: 'Missed' },
}

export default function CallLog() {
  const [search, setSearch] = useState('')

  const filtered = search
    ? mockCalls.filter(c => c.contact.toLowerCase().includes(search.toLowerCase()) || c.phone.includes(search))
    : mockCalls

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
          <span className="text-xs text-gray-400 ml-auto">{filtered.length} calls</span>
        </div>

        <div className="space-y-1">
          {filtered.map((call, i) => {
            const config = directionConfig[call.direction]
            return (
              <div key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${config.color}`}>
                  <config.icon size={16} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1a2e25]">{call.contact}</p>
                  <p className="text-xs text-gray-400">{call.phone}</p>
                </div>
                <div className="text-right shrink-0">
                  {call.duration && (
                    <p className="text-sm text-[#1a2e25] font-medium">{call.duration}</p>
                  )}
                  <div className="flex items-center gap-1 text-xs text-gray-400 justify-end">
                    <Clock size={12} />
                    {call.time}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
