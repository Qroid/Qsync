export function HeroMacBookMockup() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <div className="relative">
        {/* MacBook Screen */}
        <div className="bg-[#e0e0e0] rounded-t-[12px] sm:rounded-t-[16px] p-[6px] sm:p-[10px] shadow-xl">
          <div className="bg-white rounded-t-[8px] sm:rounded-t-[12px] overflow-hidden">
            {/* Camera bar */}
            <div className="bg-[#f5f5f5] flex justify-center py-2 sm:py-3 border-b border-gray-100">
              <div className="w-16 sm:w-24 h-1 sm:h-1.5 bg-gray-300 rounded-full" />
            </div>
            {/* Screen */}
            <div className="bg-[#f9fafb] aspect-[16/10] p-3 sm:p-6 relative overflow-hidden">
              {/* App content */}
              <div className="relative h-full flex gap-3 sm:gap-5">
                {/* Sidebar */}
                <div className="hidden sm:flex w-40 lg:w-48 flex-col bg-white rounded-xl p-3 lg:p-4 border border-gray-200 shadow-sm">
                  {/* Logo */}
                  <div className="flex items-center gap-2.5 mb-6">
                    <img src="/logo/icon.svg" className="w-7 h-7" alt="Qsync" />
                    <span className="text-gray-900 font-semibold text-xs lg:text-sm">Qsync</span>
                  </div>
                  {/* Nav items */}
                  <div className="space-y-1.5">
                    {['Dashboard', 'Locations', 'Activity', 'Shared', 'Settings'].map((item, i) => (
                      <div key={item} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-[10px] lg:text-xs transition-colors ${
                        i === 0 ? 'bg-[#1a2e25] text-white' : 'text-gray-500 hover:bg-gray-50'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-[#2d9c7a]' : 'bg-gray-300'}`} />
                        {item}
                      </div>
                    ))}
                  </div>
                  {/* User section */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-[#2d9c7a] flex items-center justify-center text-[9px] font-medium text-white">A</div>
                      <div>
                        <div className="text-[10px] text-gray-900 font-medium">Alex</div>
                        <div className="text-[8px] text-gray-400">Connected</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main content */}
                <div className="flex-1 flex flex-col gap-2.5 sm:gap-4">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-gray-900 text-xs sm:text-sm lg:text-base font-semibold">Welcome back, Alex</div>
                      <div className="text-gray-400 text-[9px] sm:text-[10px] lg:text-xs">Connected with Jordan • Last synced just now</div>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-[#2d9c7a]/10 rounded-full">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#2d9c7a] rounded-full" />
                      <span className="text-[#2d9c7a] text-[9px] sm:text-[10px] lg:text-xs font-medium">Live</span>
                    </div>
                  </div>

                  {/* Status cards */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-gray-400 text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-wider">Your Status</div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#2d9c7a]/10 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#2d9c7a] rounded-full" />
                        </div>
                      </div>
                      <div className="text-gray-900 text-[10px] sm:text-xs lg:text-sm font-medium">At Home</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-[#2d9c7a]/10 flex items-center justify-center">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#2d9c7a] rounded-full" />
                          </div>
                          <span className="text-gray-400 text-[8px] sm:text-[9px]">84%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-blue-50 flex items-center justify-center">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-full" />
                          </div>
                          <span className="text-gray-400 text-[8px] sm:text-[9px]">Wi-Fi</span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-gray-400 text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-wider">Partner</div>
                        <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-blue-50 flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-full" />
                        </div>
                      </div>
                      <div className="text-gray-900 text-[10px] sm:text-xs lg:text-sm font-medium">At Office</div>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-yellow-50 flex items-center justify-center">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-400 rounded-full" />
                          </div>
                          <span className="text-gray-400 text-[8px] sm:text-[9px]">62%</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 rounded bg-orange-50 flex items-center justify-center">
                            <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-orange-400 rounded-full" />
                          </div>
                          <span className="text-gray-400 text-[8px] sm:text-[9px]">4G</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Map area */}
                  <div className="flex-1 bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm relative overflow-hidden min-h-[120px] sm:min-h-[160px]">
                    <div className="text-gray-400 text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-wider mb-2">Live Locations</div>
                    {/* Map visualization */}
                    <div className="absolute inset-0 mt-8 sm:mt-10">
                      {/* Grid pattern */}
                      <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: 'linear-gradient(#2d9c7a 1px, transparent 1px), linear-gradient(90deg, #2d9c7a 1px, transparent 1px)',
                        backgroundSize: '30px 30px'
                      }} />
                      {/* Connection line */}
                      <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                        <path d="M 30% 60% Q 50% 30% 70% 40%" stroke="#2d9c7a" strokeWidth="2" fill="none" strokeDasharray="6,4" opacity="0.4"/>
                      </svg>
                      {/* User markers */}
                      <div className="absolute top-[55%] left-[28%]">
                        <div className="relative">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#2d9c7a] rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white text-[10px] sm:text-xs font-bold">A</span>
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-white rounded border border-gray-200 text-[7px] sm:text-[8px] text-[#2d9c7a] whitespace-nowrap font-medium shadow-sm">Alex</div>
                        </div>
                      </div>
                      <div className="absolute top-[35%] right-[28%]">
                        <div className="relative">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white text-[10px] sm:text-xs font-bold">J</span>
                          </div>
                          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-1.5 py-0.5 bg-white rounded border border-gray-200 text-[7px] sm:text-[8px] text-blue-500 whitespace-nowrap font-medium shadow-sm">Jordan</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Activity feed */}
                  <div className="bg-white rounded-xl p-3 sm:p-4 border border-gray-200 shadow-sm">
                    <div className="text-gray-400 text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-wider mb-2">Recent Activity</div>
                    <div className="space-y-1.5 sm:space-y-2">
                      {[
                        { user: 'Alex', action: 'arrived at Home', time: '2 min ago', color: '#2d9c7a' },
                        { user: 'Jordan', action: 'checked in at Office', time: '15 min ago', color: '#3b82f6' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-gray-600 text-[9px] sm:text-[10px] lg:text-xs">
                            <span className="text-gray-900 font-medium">{item.user}</span> {item.action}
                          </span>
                          <span className="text-gray-300 text-[8px] sm:text-[9px] ml-auto">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* MacBook Bottom */}
        <div className="bg-gradient-to-b from-[#d0d0d0] to-[#e0e0e0] h-3 sm:h-4 rounded-b-lg sm:rounded-b-xl mx-6 sm:mx-12 lg:mx-16" />
        <div className="bg-[#e0e0e0] h-1.5 sm:h-2 rounded-b-md mx-20 sm:mx-32 lg:mx-40" />
        {/* Notch */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-1 bg-[#c0c0c0] rounded-t" />
      </div>
    </div>
  )
}

export function WeeklyMacBookMockup() {
  return (
    <div className="w-full aspect-[16/10] relative">
      <div className="bg-[#e0e0e0] rounded-t-lg p-[4px] shadow-lg">
        <div className="bg-white rounded-t overflow-hidden">
          <div className="bg-[#f5f5f5] flex justify-center py-1.5 border-b border-gray-100">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>
          <div className="bg-[#f9fafb] aspect-[16/10] p-2 sm:p-3 relative overflow-hidden">
            {/* Content */}
            <div className="flex h-full gap-2">
              {/* Mini sidebar */}
              <div className="w-2 sm:w-3 bg-white border border-gray-200 rounded" />
              <div className="flex-1 flex flex-col gap-1.5 sm:gap-2">
                {/* Header with logo */}
                <div className="bg-white rounded-lg p-1.5 sm:p-2 flex items-center gap-1.5 border border-gray-200 shadow-sm">
                  <img src="/logo/icon.svg" className="w-3 h-3 sm:w-4 sm:h-4" alt="Qsync" />
                  <span className="text-gray-900 text-[6px] sm:text-[8px] font-semibold">Weekly Plan</span>
                </div>
                {/* Feature cards */}
                <div className="grid grid-cols-2 gap-1.5 flex-1">
                  <div className="bg-white rounded-lg p-2 flex flex-col justify-center border border-gray-200 shadow-sm">
                    <div className="text-[5px] sm:text-[7px] text-gray-400 mb-1">LIVE LOCATION</div>
                    <div className="text-[7px] sm:text-[9px] text-gray-900 font-medium">Real-time GPS</div>
                    <div className="w-full h-1 bg-[#2d9c7a]/20 rounded mt-1.5">
                      <div className="w-4/5 h-full bg-[#2d9c7a] rounded" />
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-2 flex flex-col justify-center border border-gray-200 shadow-sm">
                    <div className="text-[5px] sm:text-[7px] text-gray-400 mb-1">BATTERY</div>
                    <div className="text-[7px] sm:text-[9px] text-gray-900 font-medium">84%</div>
                    <div className="w-full h-1 bg-green-100 rounded mt-1.5">
                      <div className="w-4/5 h-full bg-green-400 rounded" />
                    </div>
                  </div>
                </div>
                {/* Activity */}
                <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
                  <div className="text-[5px] sm:text-[7px] text-gray-400 mb-1.5">ACTIVITY FEED</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                      <div className="h-1 bg-gray-200 rounded flex-1" />
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1 h-1 bg-blue-400 rounded-full" />
                      <div className="h-1 bg-gray-200 rounded w-3/4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#d0d0d0] to-[#e0e0e0] h-1.5 sm:h-2 rounded-b mx-3 sm:mx-6" />
    </div>
  )
}

export function MonthlyMacBookMockup() {
  return (
    <div className="w-full aspect-[16/10] relative">
      <div className="bg-[#e0e0e0] rounded-t-lg p-[4px] shadow-lg">
        <div className="bg-white rounded-t overflow-hidden">
          <div className="bg-[#f5f5f5] flex justify-center py-1.5 border-b border-gray-100">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>
          <div className="bg-[#f9fafb] aspect-[16/10] p-2 sm:p-3 relative overflow-hidden">
            <div className="flex h-full gap-2">
              <div className="w-2 sm:w-3 bg-white border border-gray-200 rounded" />
              <div className="flex-1 flex flex-col gap-1.5 sm:gap-2">
                {/* Header */}
                <div className="bg-[#f0f7e6] rounded-lg p-1.5 sm:p-2 flex items-center justify-between border border-[#2d9c7a]/20">
                  <div className="flex items-center gap-1.5">
                    <img src="/logo/icon.svg" className="w-3 h-3 sm:w-4 sm:h-4" alt="Qsync" />
                    <span className="text-gray-900 text-[6px] sm:text-[8px] font-semibold">Monthly Plan</span>
                  </div>
                  <span className="text-[#2d9c7a] text-[5px] sm:text-[7px] font-medium">Safety</span>
                </div>
                {/* Safety features */}
                <div className="grid grid-cols-3 gap-1.5">
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 text-center border border-gray-200 shadow-sm">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-green-100 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-[5px] sm:text-[7px] text-gray-700">Safe</div>
                  </div>
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 text-center border border-gray-200 shadow-sm">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-yellow-100 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full" />
                    </div>
                    <div className="text-[5px] sm:text-[7px] text-gray-700">Check-in</div>
                  </div>
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 text-center border border-gray-200 shadow-sm">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 bg-purple-100 rounded-full mx-auto mb-1 flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-500 rounded-full" />
                    </div>
                    <div className="text-[5px] sm:text-[7px] text-gray-700">Alerts</div>
                  </div>
                </div>
                {/* Check-ins */}
                <div className="flex-1 bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
                  <div className="text-[5px] sm:text-[7px] text-gray-400 mb-1.5">SAFETY CHECK-INS</div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <div className="text-[6px] sm:text-[8px] text-gray-600">Jordan is safe at Office</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                      <div className="text-[6px] sm:text-[8px] text-gray-600">Last check-in: 2:30 PM</div>
                    </div>
                  </div>
                </div>
                {/* Screen time */}
                <div className="bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="text-[5px] sm:text-[7px] text-gray-400">SCREEN TIME TOGETHER</div>
                    <div className="text-[5px] sm:text-[7px] text-purple-500 font-medium">4h 32m</div>
                  </div>
                  <div className="w-full h-1 bg-gray-200 rounded mt-1.5">
                    <div className="w-1/3 h-full bg-gradient-to-r from-purple-400 to-purple-300 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#d0d0d0] to-[#e0e0e0] h-1.5 sm:h-2 rounded-b mx-3 sm:mx-6" />
    </div>
  )
}

export function YearlyMacBookMockup() {
  return (
    <div className="w-full aspect-[16/10] relative">
      <div className="bg-[#e0e0e0] rounded-t-lg p-[4px] shadow-lg">
        <div className="bg-white rounded-t overflow-hidden">
          <div className="bg-[#f5f5f5] flex justify-center py-1.5 border-b border-gray-100">
            <div className="w-10 h-1 bg-gray-300 rounded-full" />
          </div>
          <div className="bg-[#f9fafb] aspect-[16/10] p-2 sm:p-3 relative overflow-hidden">
            <div className="flex h-full gap-2">
              <div className="w-2 sm:w-3 bg-white border border-gray-200 rounded" />
              <div className="flex-1 flex flex-col gap-1.5 sm:gap-2">
                {/* Premium header */}
                <div className="bg-[#f0f7e6] rounded-lg p-1.5 sm:p-2 flex items-center justify-between border border-[#2d9c7a]/30">
                  <div className="flex items-center gap-1.5">
                    <img src="/logo/icon.svg" className="w-3 h-3 sm:w-4 sm:h-4" alt="Qsync" />
                    <span className="text-gray-900 text-[6px] sm:text-[8px] font-semibold">Yearly Plan</span>
                  </div>
                  <span className="px-1.5 py-0.5 bg-[#2d9c7a] rounded text-[5px] sm:text-[7px] text-white font-medium">Premium</span>
                </div>
                {/* Features */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 border border-gray-200 shadow-sm">
                    <div className="text-[5px] sm:text-[7px] text-gray-400 mb-1">PRIORITY SUPPORT</div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 bg-[#2d9c7a] rounded-full" />
                      <div className="text-[6px] sm:text-[8px] text-gray-700">24/7 Available</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-1.5 sm:p-2 border border-gray-200 shadow-sm">
                    <div className="text-[5px] sm:text-[7px] text-gray-400 mb-1">LOCATION HISTORY</div>
                    <div className="text-[6px] sm:text-[8px] text-gray-700">Unlimited</div>
                    <div className="text-[5px] sm:text-[6px] text-gray-400">30 days retained</div>
                  </div>
                </div>
                {/* Timeline */}
                <div className="flex-1 bg-white rounded-lg p-2 border border-gray-200 shadow-sm">
                  <div className="text-[5px] sm:text-[7px] text-gray-400 mb-2">ACTIVITY TIMELINE</div>
                  <div className="relative pl-2.5">
                    <div className="absolute left-0.5 top-0 bottom-0 w-px bg-gradient-to-b from-[#2d9c7a] to-blue-400" />
                    <div className="space-y-1.5">
                      {[
                        { time: '8:00 AM', event: 'Left Home', color: '#2d9c7a' },
                        { time: '8:45 AM', event: 'Arrived Office', color: '#3b82f6' },
                        { time: '12:30 PM', event: 'Check-in Sent', color: '#2d9c7a' },
                      ].map((item, i) => (
                        <div key={i} className="relative">
                          <div className="absolute -left-[7px] top-0.5 w-2 h-2 rounded-full border-2 border-white" style={{ backgroundColor: item.color }} />
                          <div className="text-[5px] sm:text-[7px] text-gray-700">{item.event}</div>
                          <div className="text-[4px] sm:text-[6px] text-gray-400">{item.time}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Privacy */}
                <div className="bg-white rounded-lg p-1.5 sm:p-2 border border-gray-200 shadow-sm">
                  <div className="text-[5px] sm:text-[7px] text-gray-400 mb-1">PRIVACY CONTROLS</div>
                  <div className="flex gap-1">
                    {['Location', 'Status', 'Activity'].map((item) => (
                      <div key={item} className="px-1.5 py-0.5 bg-[#f0f7e6] rounded text-[5px] sm:text-[7px] text-[#2d9c7a] border border-[#2d9c7a]/20">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-b from-[#d0d0d0] to-[#e0e0e0] h-1.5 sm:h-2 rounded-b mx-3 sm:mx-6" />
    </div>
  )
}
