import { useState } from 'react'
import { Smartphone, Monitor } from 'lucide-react'

export default function LiveWorkspace() {
  const [activeTab, setActiveTab] = useState('activity')

  return (
    <section className="py-6 sm:py-10">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2e25] mb-3">
          See it in action
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Preview what Qsync looks like when two partners are connected.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Alex's Device */}
        <div className="bg-[#1a2e25] rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-4">
            <Smartphone size={16} className="text-white" />
            <span className="text-white text-xs sm:text-sm font-medium">Alex's Device</span>
            <span className="ml-auto text-[10px] text-white/40">Connected</span>
          </div>
          <div className="bg-white rounded-xl p-3 sm:p-4 min-h-[250px] sm:min-h-[300px]">
            <div className="text-[#1a2e25] text-xs sm:text-sm font-medium mb-3">Dashboard</div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <div className="bg-[#f5f5f5] rounded-lg p-2.5 sm:p-3 border border-gray-100">
                <div className="text-[9px] sm:text-[10px] text-gray-400 mb-1">Your Status</div>
                <div className="text-[#1a2e25] text-[10px] sm:text-xs font-medium">At Home</div>
                <div className="text-[#2d9c7a] text-[9px] sm:text-[10px]">Battery: 84%</div>
              </div>
              <div className="bg-[#f5f5f5] rounded-lg p-2.5 sm:p-3 border border-gray-100">
                <div className="text-[9px] sm:text-[10px] text-gray-400 mb-1">Partner</div>
                <div className="text-[#1a2e25] text-[10px] sm:text-xs font-medium">At Office</div>
                <div className="text-yellow-500 text-[9px] sm:text-[10px]">Battery: 62%</div>
              </div>
            </div>

            <div className="bg-[#f5f5f5] rounded-lg p-2.5 sm:p-3 border border-gray-100">
              <div className="text-[9px] sm:text-[10px] text-gray-400 mb-2">Recent Activity</div>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[#2d9c7a] rounded-full" />
                  <span className="text-gray-600 text-[9px] sm:text-[10px]">You arrived at Home</span>
                  <span className="text-gray-400 text-[8px] sm:text-[9px] ml-auto">2m ago</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                  <span className="text-gray-600 text-[9px] sm:text-[10px]">Jordan checked in at Office</span>
                  <span className="text-gray-400 text-[8px] sm:text-[9px] ml-auto">15m ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Jordan's Device */}
        <div className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5">
          <div className="flex items-center gap-2 mb-4">
            <Monitor size={16} className="text-[#1a2e25]" />
            <span className="text-[#1a2e25] text-xs sm:text-sm font-medium">Jordan's Device</span>
            <span className="ml-auto text-[10px] text-gray-400">Connected</span>
          </div>
          <div className="bg-[#f5f5f5] rounded-xl p-3 sm:p-4 min-h-[250px] sm:min-h-[300px]">
            <div className="flex gap-2 mb-3">
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-medium transition-colors ${
                  activeTab === 'activity'
                    ? 'bg-[#1a2e25] text-white'
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                Activity
              </button>
              <button
                onClick={() => setActiveTab('status')}
                className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-medium transition-colors ${
                  activeTab === 'status'
                    ? 'bg-[#1a2e25] text-white'
                    : 'bg-white text-gray-500 hover:bg-gray-100'
                }`}
              >
                Status
              </button>
            </div>

            {activeTab === 'activity' ? (
              <div className="bg-white rounded-lg p-2.5 sm:p-3 border border-gray-100">
                <div className="text-[9px] sm:text-[10px] text-gray-400 mb-2">TODAY</div>
                <div className="space-y-2">
                  {[
                    { time: '8:00 AM', event: 'Left Home', color: '#2d9c7a' },
                    { time: '8:45 AM', event: 'Arrived Office', color: '#3b82f6' },
                    { time: '12:30 PM', event: 'Shared location', color: '#2d9c7a' },
                    { time: '2:00 PM', event: 'Status: Working', color: '#8b5cf6' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />
                      <span className="text-gray-600 text-[9px] sm:text-[10px]">{item.event}</span>
                      <span className="text-gray-400 text-[8px] sm:text-[9px] ml-auto">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-lg p-2.5 sm:p-3 border border-gray-100">
                <div className="text-[9px] sm:text-[10px] text-gray-400 mb-2">CURRENT STATUS</div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-[9px] sm:text-[10px]">Status</span>
                    <span className="text-[#1a2e25] text-[9px] sm:text-[10px] font-medium">At Office</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-[9px] sm:text-[10px]">Battery</span>
                    <span className="text-yellow-500 text-[9px] sm:text-[10px]">62%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600 text-[9px] sm:text-[10px]">Connection</span>
                    <span className="text-green-500 text-[9px] sm:text-[10px]">4G</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
