import { useState, useEffect } from 'react'
import { Battery, MapPin, Wifi } from 'lucide-react'

const tabs = [
  { id: 'activity', label: 'Activity' },
  { id: 'status', label: 'Status' },
]

const seedActivity = [
  { partner: 'Alex', text: 'Arrived at Coffee House', time: '14:32' },
  { partner: 'Jordan', text: 'Phone charged to 85%', time: '14:28' },
  { partner: 'Alex', text: 'Left home', time: '14:15' },
  { partner: 'Jordan', text: 'Checked in', time: '13:58' },
  { partner: 'Alex', text: 'Connected to Wi-Fi', time: '13:42' },
]

function ActivityTab({ items }) {
  return (
    <div className="h-[260px] overflow-hidden rounded-lg border border-gray-100">
      <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
        <span className="text-[10px] font-mono text-gray-300 uppercase tracking-wider">Feed</span>
        <span className="w-1.5 h-1.5 rounded-full bg-teal-500 animate-pulse" />
      </div>
      <div className="notification-scroll bg-white">
        {[...items, ...items].map((n, i) => (
          <div key={i} className="flex items-center justify-between px-3 py-2 border-b border-gray-50">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-[8px] font-medium text-gray-500">
                {n.partner[0]}
              </div>
              <span className="text-[11px] text-gray-600">{n.text}</span>
            </div>
            <span className="text-[9px] font-mono text-gray-300">{n.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function StatusTab() {
  const profiles = [
    { name: 'Alex', battery: '84%', network: 'Wi-Fi', location: 'Coffee House' },
    { name: 'Jordan', battery: '62%', network: '4G', location: 'Office' },
  ]

  return (
    <div className="grid grid-cols-2 gap-3">
      {profiles.map((p) => (
        <div key={p.name} className="rounded-lg border border-gray-100 p-4">
          <div className="text-[12px] font-medium text-gray-900 mb-3">{p.name}</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <Battery className="w-3 h-3" />
              {p.battery}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <Wifi className="w-3 h-3" />
              {p.network}
            </div>
            <div className="flex items-center gap-2 text-[11px] text-gray-400">
              <MapPin className="w-3 h-3" />
              {p.location}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function LiveWorkspace() {
  const [activeTab, setActiveTab] = useState('activity')
  const [activity, setActivity] = useState(seedActivity)

  useEffect(() => {
    const pool = [
      { partner: 'Jordan', text: 'Phone charged to 92%', time: '14:35' },
      { partner: 'Alex', text: 'Heading home', time: '14:33' },
      { partner: 'Jordan', text: 'Checked in', time: '14:31' },
    ]
    const t = setInterval(() => {
      const n = pool[Math.floor(Math.random() * pool.length)]
      setActivity((prev) => [n, ...prev].slice(0, 10))
    }, 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section id="interfaces" className="bg-white rounded-xl border border-gray-200 p-8 lg:p-10">
      <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
        Demo
      </h2>
      <p className="mt-2 text-[12px] text-gray-400">
        Both partners see the same data.
      </p>

      <div className="mt-6 rounded-lg border border-gray-100 overflow-hidden">
        <div className="flex border-b border-gray-100">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-[11px] font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-gray-900 border-b border-gray-900'
                  : 'text-gray-300 hover:text-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-3">
          {activeTab === 'activity' && <ActivityTab items={activity} />}
          {activeTab === 'status' && <StatusTab />}
        </div>
      </div>
    </section>
  )
}
