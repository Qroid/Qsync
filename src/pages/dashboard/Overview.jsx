import { MapPin, Battery, Wifi, Clock, Shield, Activity } from 'lucide-react'

const mockPartner = {
  name: 'Jordan',
  status: 'At Office',
  battery: 72,
  connection: 'Wi-Fi',
  lastSeen: '2 min ago',
  safe: true,
}

const mockActivity = [
  { time: '2:30 PM', event: 'Arrived at Office', type: 'location' },
  { time: '1:15 PM', event: 'Left Home', type: 'location' },
  { time: '12:00 PM', event: 'Status: Working', type: 'status' },
  { time: '8:30 AM', event: 'Arrived at Home', type: 'location' },
  { time: '8:00 AM', event: 'Device connected', type: 'system' },
]

const typeColors = {
  location: 'bg-[#2d9c7a]',
  status: 'bg-blue-500',
  system: 'bg-purple-500',
}

export default function Overview() {
  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl">
      {/* Partner Status Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-4 mb-5">
          <div className="w-12 h-12 rounded-full bg-[#2d9c7a] flex items-center justify-center text-white text-lg font-bold">
            {mockPartner.name.charAt(0)}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-[#1a2e25]">{mockPartner.name}</h2>
            <p className="text-sm text-gray-500">Last seen {mockPartner.lastSeen}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${mockPartner.safe ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {mockPartner.safe ? 'Safe' : 'Alert'}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <MapPin size={14} />
              <span className="text-xs">Location</span>
            </div>
            <p className="text-sm font-medium text-[#1a2e25]">{mockPartner.status}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Battery size={14} />
              <span className="text-xs">Battery</span>
            </div>
            <p className="text-sm font-medium text-[#1a2e25]">{mockPartner.battery}%</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Wifi size={14} />
              <span className="text-xs">Connection</span>
            </div>
            <p className="text-sm font-medium text-[#1a2e25]">{mockPartner.connection}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3">
            <div className="flex items-center gap-2 text-gray-400 mb-1">
              <Clock size={14} />
              <span className="text-xs">Last Sync</span>
            </div>
            <p className="text-sm font-medium text-[#1a2e25]">{mockPartner.lastSeen}</p>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <MapPin size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Live Location</h3>
        </div>
        <div className="bg-gray-100 rounded-xl h-64 sm:h-80 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <MapPin size={40} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">Map will display when device is connected</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-4">
          <Activity size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Recent Activity</h3>
        </div>
        <div className="space-y-3">
          {mockActivity.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-2 h-2 rounded-full ${typeColors[item.type]}`}></div>
              <span className="text-sm text-gray-500 w-20 shrink-0">{item.time}</span>
              <span className="text-sm text-[#1a2e25]">{item.event}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center">
          <Shield size={20} className="mx-auto mb-2 text-[#2d9c7a]" />
          <p className="text-2xl font-bold text-[#1a2e25]">24</p>
          <p className="text-xs text-gray-500">Hours Safe</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center">
          <MapPin size={20} className="mx-auto mb-2 text-[#2d9c7a]" />
          <p className="text-2xl font-bold text-[#1a2e25]">3</p>
          <p className="text-xs text-gray-500">Locations Today</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 text-center col-span-2 sm:col-span-1">
          <Activity size={20} className="mx-auto mb-2 text-[#2d9c7a]" />
          <p className="text-2xl font-bold text-[#1a2e25]">12</p>
          <p className="text-xs text-gray-500">Events Today</p>
        </div>
      </div>
    </div>
  )
}
