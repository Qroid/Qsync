export function HeroMacBookMockup() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="relative">
        {/* MacBook body */}
        <div className="bg-gray-800 rounded-t-2xl p-2 shadow-2xl">
          {/* Screen bezel */}
          <div className="bg-gray-950 rounded-t-xl overflow-hidden">
            {/* Camera notch */}
            <div className="flex justify-center pt-3 pb-2 bg-gray-900">
              <div className="w-20 h-1.5 bg-gray-700 rounded-full" />
            </div>
            {/* Screen content */}
            <div className="bg-[#0d1117] aspect-video p-6">
              {/* App UI */}
              <div className="flex h-full gap-4">
                {/* Sidebar */}
                <div className="w-48 bg-[#161b22] rounded-lg p-4 hidden md:block">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-6 h-6 bg-teal-500 rounded-md flex items-center justify-center">
                      <span className="text-white text-[8px] font-bold">Q</span>
                    </div>
                    <span className="text-white text-[10px] font-semibold">Qsync</span>
                  </div>
                  <div className="space-y-2">
                    {['Dashboard', 'Locations', 'Activity', 'Settings'].map((item, i) => (
                      <div key={item} className={`px-3 py-2 rounded text-[9px] ${i === 0 ? 'bg-white/10 text-white' : 'text-gray-400'}`}>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                {/* Main content */}
                <div className="flex-1 flex flex-col gap-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-white text-[11px] font-semibold">Welcome back, Alex</div>
                      <div className="text-gray-400 text-[8px]">Connected with Jordan</div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-green-400 text-[8px]">Synced</span>
                    </div>
                  </div>
                  {/* Status cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#161b22] rounded-lg p-3">
                      <div className="text-gray-400 text-[7px] mb-1">YOUR STATUS</div>
                      <div className="text-white text-[9px] font-medium">At Home</div>
                      <div className="text-gray-500 text-[7px] mt-1">Battery: 84% • Wi-Fi</div>
                    </div>
                    <div className="bg-[#161b22] rounded-lg p-3">
                      <div className="text-gray-400 text-[7px] mb-1">PARTNER'S STATUS</div>
                      <div className="text-white text-[9px] font-medium">At Office</div>
                      <div className="text-gray-500 text-[7px] mt-1">Battery: 62% • 4G</div>
                    </div>
                  </div>
                  {/* Map placeholder */}
                  <div className="flex-1 bg-[#161b22] rounded-lg p-3 relative overflow-hidden">
                    <div className="text-gray-400 text-[7px] mb-2">LIVE LOCATIONS</div>
                    <div className="absolute inset-0 opacity-20">
                      {/* Map grid lines */}
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    {/* Location markers */}
                    <div className="absolute top-1/2 left-1/3 w-3 h-3 bg-teal-400 rounded-full border-2 border-white shadow-lg" />
                    <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full border-2 border-white shadow-lg" />
                    {/* Connection line */}
                    <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                      <line x1="33%" y1="50%" x2="67%" y2="33%" stroke="rgba(45,156,122,0.3)" strokeWidth="2" strokeDasharray="4,4" />
                    </svg>
                  </div>
                  {/* Activity feed */}
                  <div className="bg-[#161b22] rounded-lg p-3">
                    <div className="text-gray-400 text-[7px] mb-2">RECENT ACTIVITY</div>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full" />
                        <span className="text-gray-300 text-[7px]">Alex arrived at Home • 2 min ago</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                        <span className="text-gray-300 text-[7px]">Jordan checked in at Office • 15 min ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MacBook base */}
        <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-3 rounded-b-xl mx-8" />
        <div className="bg-gray-700 h-1 rounded-b-lg mx-16" />
        {/* Trackpad indicator */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gray-600 rounded-full" />
      </div>
    </div>
  )
}

export function WeeklyMacBookMockup() {
  return (
    <div className="w-full aspect-video relative">
      <div className="bg-gray-800 rounded-t-lg p-1 shadow-lg">
        <div className="bg-gray-950 rounded-t overflow-hidden">
          <div className="flex justify-center pt-2 pb-1 bg-gray-900">
            <div className="w-12 h-1 bg-gray-700 rounded-full" />
          </div>
          <div className="bg-[#0d1117] aspect-[16/10] p-3">
            {/* Simplified dashboard for Weekly */}
            <div className="flex h-full gap-2">
              <div className="w-3 bg-[#161b22] rounded" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="bg-[#161b22] rounded p-2">
                  <div className="text-[6px] text-gray-400">WEEKLY PLAN</div>
                  <div className="text-[8px] text-white font-medium">Basic Tracking</div>
                </div>
                <div className="grid grid-cols-2 gap-1.5 flex-1">
                  <div className="bg-[#161b22] rounded p-2 flex flex-col justify-center">
                    <div className="text-[5px] text-gray-400">LOCATION</div>
                    <div className="text-[7px] text-white">Live GPS</div>
                    <div className="w-full h-1 bg-teal-500/30 rounded mt-1">
                      <div className="w-3/4 h-full bg-teal-400 rounded" />
                    </div>
                  </div>
                  <div className="bg-[#161b22] rounded p-2 flex flex-col justify-center">
                    <div className="text-[5px] text-gray-400">BATTERY</div>
                    <div className="text-[7px] text-white">84%</div>
                    <div className="w-full h-1 bg-green-500/30 rounded mt-1">
                      <div className="w-4/5 h-full bg-green-400 rounded" />
                    </div>
                  </div>
                </div>
                <div className="bg-[#161b22] rounded p-2">
                  <div className="text-[5px] text-gray-400">ACTIVITY FEED</div>
                  <div className="space-y-1 mt-1">
                    <div className="h-1 bg-gray-700 rounded w-full" />
                    <div className="h-1 bg-gray-700 rounded w-3/4" />
                    <div className="h-1 bg-gray-700 rounded w-5/6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-2 rounded-b mx-4" />
    </div>
  )
}

export function MonthlyMacBookMockup() {
  return (
    <div className="w-full aspect-video relative">
      <div className="bg-gray-800 rounded-t-lg p-1 shadow-lg">
        <div className="bg-gray-950 rounded-t overflow-hidden">
          <div className="flex justify-center pt-2 pb-1 bg-gray-900">
            <div className="w-12 h-1 bg-gray-700 rounded-full" />
          </div>
          <div className="bg-[#0d1117] aspect-[16/10] p-3">
            {/* Safety features for Monthly */}
            <div className="flex h-full gap-2">
              <div className="w-3 bg-[#161b22] rounded" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="bg-[#161b22] rounded p-2">
                  <div className="text-[6px] text-gray-400">MONTHLY PLAN</div>
                  <div className="text-[8px] text-white font-medium">Safety Features</div>
                </div>
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="bg-[#161b22] rounded p-2 text-center">
                    <div className="w-4 h-4 bg-green-500/20 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                    </div>
                    <div className="text-[5px] text-white">Safe</div>
                  </div>
                  <div className="bg-[#161b22] rounded p-2 text-center">
                    <div className="w-4 h-4 bg-yellow-500/20 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                    </div>
                    <div className="text-[5px] text-white">Check-in</div>
                  </div>
                  <div className="bg-[#161b22] rounded p-2 text-center">
                    <div className="w-4 h-4 bg-blue-500/20 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full" />
                    </div>
                    <div className="text-[5px] text-white">Alerts</div>
                  </div>
                </div>
                <div className="flex-1 bg-[#161b22] rounded p-2">
                  <div className="text-[5px] text-gray-400 mb-1">SAFETY CHECK-INS</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <div className="text-[6px] text-gray-300">Jordan is safe at Office</div>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                      <div className="text-[6px] text-gray-300">Last check-in: 2:30 PM</div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#161b22] rounded p-2">
                  <div className="text-[5px] text-gray-400">SCREEN TIME TOGETHER</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex-1 h-1.5 bg-gray-700 rounded">
                      <div className="w-1/3 h-full bg-purple-400 rounded" />
                    </div>
                    <span className="text-[5px] text-gray-400">4h 32m</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-2 rounded-b mx-4" />
    </div>
  )
}

export function YearlyMacBookMockup() {
  return (
    <div className="w-full aspect-video relative">
      <div className="bg-gray-800 rounded-t-lg p-1 shadow-lg">
        <div className="bg-gray-950 rounded-t overflow-hidden">
          <div className="flex justify-center pt-2 pb-1 bg-gray-900">
            <div className="w-12 h-1 bg-gray-700 rounded-full" />
          </div>
          <div className="bg-[#0d1117] aspect-[16/10] p-3">
            {/* Premium features for Yearly */}
            <div className="flex h-full gap-2">
              <div className="w-3 bg-[#161b22] rounded" />
              <div className="flex-1 flex flex-col gap-2">
                <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded p-2 border border-teal-500/30">
                  <div className="text-[6px] text-teal-400">YEARLY PLAN • PREMIUM</div>
                  <div className="text-[8px] text-white font-medium">Full Access</div>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-[#161b22] rounded p-2">
                    <div className="text-[5px] text-gray-400">PRIORITY SUPPORT</div>
                    <div className="flex items-center gap-1 mt-1">
                      <div className="w-2 h-2 bg-teal-400 rounded-full" />
                      <div className="text-[6px] text-white">24/7 Available</div>
                    </div>
                  </div>
                  <div className="bg-[#161b22] rounded p-2">
                    <div className="text-[5px] text-gray-400">LOCATION HISTORY</div>
                    <div className="text-[6px] text-white mt-1">Unlimited</div>
                    <div className="text-[5px] text-gray-500">30 days retained</div>
                  </div>
                </div>
                <div className="flex-1 bg-[#161b22] rounded p-2">
                  <div className="text-[5px] text-gray-400 mb-1">ACTIVITY TIMELINE</div>
                  <div className="relative">
                    <div className="absolute left-1 top-0 bottom-0 w-px bg-gray-700" />
                    <div className="space-y-1.5 pl-3">
                      <div className="relative">
                        <div className="absolute -left-[5px] top-0.5 w-2 h-2 bg-teal-400 rounded-full" />
                        <div className="text-[5px] text-gray-300">Left Home • 8:00 AM</div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[5px] top-0.5 w-2 h-2 bg-blue-400 rounded-full" />
                        <div className="text-[5px] text-gray-300">Arrived Office • 8:45 AM</div>
                      </div>
                      <div className="relative">
                        <div className="absolute -left-[5px] top-0.5 w-2 h-2 bg-green-400 rounded-full" />
                        <div className="text-[5px] text-gray-300">Check-in Sent • 12:30 PM</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#161b22] rounded p-2">
                  <div className="text-[5px] text-gray-400">PRIVACY CONTROLS</div>
                  <div className="flex gap-1 mt-1">
                    <div className="px-1.5 py-0.5 bg-teal-500/20 rounded text-[5px] text-teal-400">Location</div>
                    <div className="px-1.5 py-0.5 bg-teal-500/20 rounded text-[5px] text-teal-400">Status</div>
                    <div className="px-1.5 py-0.5 bg-teal-500/20 rounded text-[5px] text-teal-400">Activity</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-2 rounded-b mx-4" />
    </div>
  )
}
