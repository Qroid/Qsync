import { Monitor, Maximize2, Clock, Grid } from 'lucide-react'
import { useState } from 'react'

const mockScreenshots = [
  { id: 1, time: '2:45 PM', app: 'WhatsApp', thumbnail: null },
  { id: 2, time: '2:30 PM', app: 'Instagram', thumbnail: null },
  { id: 3, time: '2:15 PM', app: 'Chrome', thumbnail: null },
  { id: 4, time: '1:30 PM', app: 'Gmail', thumbnail: null },
  { id: 5, time: '1:00 PM', app: 'Slack', thumbnail: null },
  { id: 6, time: '12:30 PM', app: 'Spotify', thumbnail: null },
  { id: 7, time: '12:00 PM', app: 'Camera', thumbnail: null },
  { id: 8, time: '11:30 AM', app: 'Maps', thumbnail: null },
  { id: 9, time: '11:00 AM', app: 'YouTube', thumbnail: null },
  { id: 10, time: '10:30 AM', app: 'Chrome', thumbnail: null },
  { id: 11, time: '10:00 AM', app: 'WhatsApp', thumbnail: null },
  { id: 12, time: '9:30 AM', app: 'Settings', thumbnail: null },
]

const appColors = {
  WhatsApp: 'from-green-400 to-green-600',
  Instagram: 'from-pink-400 to-purple-600',
  Chrome: 'from-blue-400 to-blue-600',
  Gmail: 'from-red-400 to-red-600',
  Slack: 'from-purple-400 to-purple-600',
  Spotify: 'from-green-400 to-green-600',
  Camera: 'from-gray-400 to-gray-600',
  Maps: 'from-blue-400 to-green-500',
  YouTube: 'from-red-500 to-red-600',
  Settings: 'from-gray-400 to-gray-500',
}

export default function ScreenViewer() {
  const [selected, setSelected] = useState(null)

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor size={18} className="text-[#2d9c7a]" />
            <h3 className="font-semibold text-[#1a2e25]">Screen Captures</h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Grid size={14} />
            {mockScreenshots.length} captures
          </div>
        </div>
      </div>

      {/* Screenshot Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {mockScreenshots.map((screenshot) => (
          <button
            key={screenshot.id}
            onClick={() => setSelected(screenshot)}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow text-left group"
          >
            <div className={`aspect-[9/16] bg-gradient-to-br ${appColors[screenshot.app] || 'from-gray-400 to-gray-600'} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/80 text-2xl font-bold">{screenshot.app.charAt(0)}</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <Maximize2 size={20} className="text-white" />
              </div>
            </div>
            <div className="p-2.5">
              <p className="text-sm font-medium text-[#1a2e25]">{screenshot.app}</p>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <Clock size={12} />
                {screenshot.time}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div className="bg-white rounded-2xl overflow-hidden max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className={`aspect-[9/16] bg-gradient-to-br ${appColors[selected.app] || 'from-gray-400 to-gray-600'} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/80 text-6xl font-bold">{selected.app.charAt(0)}</span>
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-[#1a2e25]">{selected.app}</p>
                <p className="text-sm text-gray-400">{selected.time}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="px-4 py-2 bg-gray-100 rounded-lg text-sm text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
