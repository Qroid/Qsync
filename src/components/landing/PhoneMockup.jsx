export function PhoneMockup({ children, className = '' }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative w-[200px] mx-auto">
        {/* Phone frame */}
        <div className="relative bg-gray-900 rounded-[24px] p-[3px] shadow-lg">
          {/* Screen */}
          <div className="bg-gray-950 rounded-[21px] overflow-hidden">
            {/* Notch */}
            <div className="flex justify-center pt-2 pb-1">
              <div className="w-12 h-1.5 bg-gray-800 rounded-full" />
            </div>
            {/* Content */}
            <div className="px-2 pb-2">
              {children}
            </div>
          </div>
        </div>
        {/* Side button */}
        <div className="absolute right-[-2px] top-20 w-[2px] h-6 bg-gray-700 rounded-r" />
      </div>
    </div>
  )
}

export function HeroPhoneMockup() {
  return (
    <PhoneMockup>
      <div className="bg-gray-900 rounded-[18px] p-3 space-y-2">
        {/* Header */}
        <div className="flex items-center justify-between">
          <span className="text-[8px] font-semibold text-white">Qsync</span>
          <div className="flex -space-x-1">
            <div className="w-3 h-3 rounded-full bg-teal-500 border border-gray-900" />
            <div className="w-3 h-3 rounded-full bg-blue-500 border border-gray-900" />
          </div>
        </div>
        {/* Status */}
        <div className="bg-gray-800 rounded-lg p-2">
          <div className="text-[6px] text-gray-400 mb-1">SYNC & VITALS</div>
          <div className="text-[7px] font-medium text-white">CONNECTED & SYNCED</div>
          <div className="flex gap-2 mt-1">
            <div className="text-[6px] text-gray-400">Alex: 78%</div>
            <div className="text-[6px] text-gray-400">Chris: 91%</div>
          </div>
        </div>
        {/* Map placeholder */}
        <div className="bg-gray-800 rounded-lg p-2 h-16">
          <div className="text-[6px] text-gray-400 mb-1">REAL-TIME LOCATIONS</div>
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-teal-400" />
            <div className="text-[5px] text-gray-500">Alex: At Work</div>
          </div>
          <div className="flex gap-1 mt-0.5">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <div className="text-[5px] text-gray-500">Chris: At Gym</div>
          </div>
        </div>
        {/* Shared data */}
        <div className="bg-gray-800 rounded-lg p-2">
          <div className="text-[6px] text-gray-400 mb-1">SHARED INSIGHTS</div>
          <div className="space-y-0.5">
            <div className="text-[5px] text-gray-500">Alex: Battery low warning</div>
            <div className="text-[5px] text-gray-500">Chris: Emergency Check-in</div>
          </div>
        </div>
        {/* Nav */}
        <div className="flex justify-around py-1">
          <div className="text-[5px] text-teal-400">HOME</div>
          <div className="text-[5px] text-gray-500">LOCATIONS</div>
          <div className="text-[5px] text-gray-500">SHARED</div>
          <div className="text-[5px] text-gray-500">MENU</div>
        </div>
      </div>
    </PhoneMockup>
  )
}

export function PlanPhoneMockup({ tier }) {
  const screens = {
    Weekly: (
      <div className="bg-gray-900 rounded-[18px] p-2 space-y-1.5">
        <div className="text-[7px] font-semibold text-white mb-1">Qsync</div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">LOCATION</div>
          <div className="text-[6px] text-white">Live GPS</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">STATUS</div>
          <div className="text-[6px] text-white">Battery & Network</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">FEED</div>
          <div className="text-[6px] text-white">Activity updates</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">ALERTS</div>
          <div className="text-[6px] text-white">Arrival notifications</div>
        </div>
      </div>
    ),
    Monthly: (
      <div className="bg-gray-900 rounded-[18px] p-2 space-y-1.5">
        <div className="text-[7px] font-semibold text-white mb-1">Qsync</div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">LOCATION</div>
          <div className="text-[6px] text-white">Live GPS</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">SAFETY</div>
          <div className="text-[6px] text-white">Check-ins & Alerts</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">SCREEN TIME</div>
          <div className="text-[6px] text-white">Together</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">HISTORY</div>
          <div className="text-[6px] text-white">7-day location log</div>
        </div>
      </div>
    ),
    Yearly: (
      <div className="bg-gray-900 rounded-[18px] p-2 space-y-1.5">
        <div className="text-[7px] font-semibold text-white mb-1">Qsync</div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">LOCATION</div>
          <div className="text-[6px] text-white">Live GPS</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">SAFETY</div>
          <div className="text-[6px] text-white">Check-ins & Alerts</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5 border border-teal-500/30">
          <div className="text-[5px] text-teal-400">PRIORITY</div>
          <div className="text-[6px] text-white">24/7 Support</div>
        </div>
        <div className="bg-gray-800 rounded p-1.5">
          <div className="text-[5px] text-gray-400">HISTORY</div>
          <div className="text-[6px] text-white">Unlimited log</div>
        </div>
      </div>
    ),
  }

  return (
    <div className="flex justify-center mb-4">
      <div className="w-[120px]">
        <div className="bg-gray-900 rounded-[16px] p-[2px] shadow-md">
          <div className="bg-gray-950 rounded-[14px] overflow-hidden">
            <div className="flex justify-center pt-1.5 pb-0.5">
              <div className="w-6 h-1 bg-gray-800 rounded-full" />
            </div>
            <div className="px-1.5 pb-1.5">
              {screens[tier]}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
