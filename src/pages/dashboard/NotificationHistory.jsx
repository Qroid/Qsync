import { Bell, Search, Clock, Filter } from 'lucide-react'
import { useState } from 'react'

const mockNotifications = [
  { app: 'WhatsApp', title: 'New message from Jordan', body: 'Hey, are you coming home for dinner?', time: '2:45 PM', date: 'Today' },
  { app: 'Instagram', title: 'Jordan liked your story', body: '', time: '2:30 PM', date: 'Today' },
  { app: 'Gmail', title: 'Meeting Tomorrow', body: 'Reminder: Team standup at 10 AM', time: '1:15 PM', date: 'Today' },
  { app: 'Slack', title: 'New message in #general', body: 'Project update: Q3 targets achieved', time: '12:00 PM', date: 'Today' },
  { app: 'Calendar', title: 'Upcoming event', body: 'Lunch with Alex in 30 minutes', time: '11:30 AM', date: 'Today' },
  { app: 'WhatsApp', title: 'Voice message from Mom', body: '0:45 duration', time: '10:00 AM', date: 'Today' },
  { app: 'Twitter', title: 'Trending in your area', body: 'Local news and events', time: '9:00 AM', date: 'Today' },
  { app: 'WhatsApp', title: 'New message from Jordan', body: 'Good morning!', time: '8:30 AM', date: 'Today' },
  { app: 'Gmail', title: 'Order Confirmation', body: 'Your order #12345 has been confirmed', time: '7:00 PM', date: 'Yesterday' },
  { app: 'Calendar', title: 'Event reminder', body: 'Team meeting at 2 PM', time: '1:30 PM', date: 'Yesterday' },
]

const appColors = {
  WhatsApp: 'bg-green-100 text-green-600',
  Instagram: 'bg-pink-100 text-pink-600',
  Gmail: 'bg-red-100 text-red-500',
  Slack: 'bg-purple-100 text-purple-600',
  Calendar: 'bg-blue-100 text-blue-600',
  Twitter: 'bg-sky-100 text-sky-500',
}

const apps = ['All', 'WhatsApp', 'Instagram', 'Gmail', 'Slack', 'Calendar', 'Twitter']

export default function NotificationHistory() {
  const [search, setSearch] = useState('')
  const [activeApp, setActiveApp] = useState('All')

  const filtered = mockNotifications.filter(n => {
    const matchesSearch = !search || n.title.toLowerCase().includes(search.toLowerCase()) || n.body.toLowerCase().includes(search.toLowerCase())
    const matchesApp = activeApp === 'All' || n.app === activeApp
    return matchesSearch && matchesApp
  })

  return (
    <div className="space-y-4 sm:space-y-6 max-w-4xl">
      {/* Search + Filters */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 space-y-3">
        <div className="relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search notifications..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2d9c7a]/20"
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto">
          <Filter size={14} className="text-gray-400 shrink-0" />
          {apps.map((app) => (
            <button
              key={app}
              onClick={() => setActiveApp(app)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                activeApp === app
                  ? 'bg-[#1a2e25] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {app}
            </button>
          ))}
        </div>
      </div>

      {/* Notifications List */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-5">
          <Bell size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Notifications</h3>
          <span className="text-xs text-gray-400 ml-auto">{filtered.length} notifications</span>
        </div>

        <div className="space-y-1">
          {filtered.map((notif, i) => (
            <div key={i} className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${appColors[notif.app] || 'bg-gray-100 text-gray-500'}`}>
                {notif.app.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <span className="text-xs text-gray-400">{notif.app}</span>
                  <span className="text-xs text-gray-300">·</span>
                  <span className="text-xs text-gray-400">{notif.time}</span>
                </div>
                <p className="text-sm font-medium text-[#1a2e25]">{notif.title}</p>
                {notif.body && <p className="text-sm text-gray-500 truncate">{notif.body}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
