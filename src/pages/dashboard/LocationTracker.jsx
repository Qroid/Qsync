import { MapPin, Navigation, Clock, Home, Briefcase, Dumbbell } from 'lucide-react'

const mockLocations = [
  { name: 'Home', address: '123 Main Street', time: '8:30 AM - 1:15 PM', icon: Home, current: false },
  { name: 'Office', address: '456 Business Ave', time: '1:15 PM - Present', icon: Briefcase, current: true },
  { name: 'Gym', address: '789 Fitness Blvd', time: 'Yesterday, 6:00 PM', icon: Dumbbell, current: false },
]

const mockHistory = [
  { time: '2:30 PM', event: 'Arrived at Office', lat: 40.7128, lng: -74.006 },
  { time: '1:15 PM', event: 'Left Home', lat: 40.7128, lng: -74.006 },
  { time: '12:00 PM', event: 'Status update', lat: 40.7128, lng: -74.006 },
  { time: '8:30 AM', event: 'Arrived at Home', lat: 40.7128, lng: -74.006 },
  { time: '8:00 AM', event: 'Left Home', lat: 40.7128, lng: -74.006 },
]

export default function LocationTracker() {
  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl">
      {/* Map */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#2d9c7a]" />
            <h3 className="font-semibold text-[#1a2e25]">Live Location</h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#2d9c7a]">
            <span className="w-2 h-2 bg-[#2d9c7a] rounded-full animate-pulse"></span>
            Live
          </div>
        </div>
        <div className="bg-gray-100 rounded-xl h-72 sm:h-96 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <Navigation size={40} className="mx-auto mb-2 opacity-50" />
            <p className="text-sm">Real-time map will display when connected</p>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Known Locations */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <h3 className="font-semibold text-[#1a2e25] mb-4">Known Places</h3>
          <div className="space-y-3">
            {mockLocations.map((loc, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-xl ${loc.current ? 'bg-[#2d9c7a]/5 border border-[#2d9c7a]/20' : 'bg-gray-50'}`}>
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${loc.current ? 'bg-[#2d9c7a] text-white' : 'bg-gray-200 text-gray-500'}`}>
                  <loc.icon size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[#1a2e25]">{loc.name}</p>
                  <p className="text-xs text-gray-500 truncate">{loc.address}</p>
                </div>
                {loc.current && (
                  <span className="text-xs text-[#2d9c7a] font-medium">Current</span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Location History */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} className="text-gray-400" />
            <h3 className="font-semibold text-[#1a2e25]">Today's Timeline</h3>
          </div>
          <div className="space-y-3">
            {mockHistory.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="flex flex-col items-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#2d9c7a]"></div>
                  {i < mockHistory.length - 1 && <div className="w-0.5 h-6 bg-gray-200"></div>}
                </div>
                <div className="pb-3">
                  <p className="text-sm font-medium text-[#1a2e25]">{item.event}</p>
                  <p className="text-xs text-gray-400">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
