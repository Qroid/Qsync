import { MessageSquare, Search, ArrowUpRight, ArrowDownLeft, Clock } from 'lucide-react'
import { useState } from 'react'

const mockSms = [
  { contact: 'Mom', message: 'Don\'t forget dinner tonight!', time: '2:45 PM', direction: 'incoming', read: true },
  { contact: 'Jordan', message: 'Leaving office in 10 mins', time: '2:30 PM', direction: 'outgoing', read: true },
  { contact: 'Bank', message: 'Your account balance is $1,234.56', time: '1:15 PM', direction: 'incoming', read: true },
  { contact: 'Jordan', message: 'Pick up groceries on the way', time: '12:00 PM', direction: 'incoming', read: true },
  { contact: 'Office', message: 'Meeting rescheduled to 3 PM', time: '11:30 AM', direction: 'incoming', read: false },
  { contact: 'Jordan', message: 'Got it, see you soon!', time: '11:00 AM', direction: 'outgoing', read: true },
  { contact: 'Delivery', message: 'Your package has been delivered', time: '10:00 AM', direction: 'incoming', read: true },
  { contact: 'Jordan', message: 'Good morning!', time: '8:30 AM', direction: 'incoming', read: true },
]

export default function SmsReader() {
  const [search, setSearch] = useState('')

  const filtered = search
    ? mockSms.filter(s => s.contact.toLowerCase().includes(search.toLowerCase()) || s.message.toLowerCase().includes(search.toLowerCase()))
    : mockSms

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
          <span className="text-xs text-gray-400 ml-auto">{filtered.length} messages</span>
        </div>

        <div className="space-y-1">
          {filtered.map((sms, i) => (
            <div key={i} className={`flex items-start gap-3 p-3 rounded-xl ${!sms.read ? 'bg-[#2d9c7a]/5' : 'hover:bg-gray-50'} transition-colors`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${sms.direction === 'incoming' ? 'bg-blue-100 text-blue-600' : 'bg-[#2d9c7a]/10 text-[#2d9c7a]'}`}>
                {sms.direction === 'incoming' ? <ArrowDownLeft size={14} /> : <ArrowUpRight size={14} />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-sm font-medium text-[#1a2e25]">{sms.contact}</span>
                  {!sms.read && <span className="w-1.5 h-1.5 bg-[#2d9c7a] rounded-full"></span>}
                </div>
                <p className="text-sm text-gray-600 truncate">{sms.message}</p>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400 shrink-0">
                <Clock size={12} />
                {sms.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
