import { Monitor, Grid, Loader2, Package } from 'lucide-react'
import { useDeviceId } from '../../hooks/useDeviceId'
import { useAppInventory } from '../../hooks/useSupabaseData'

export default function ScreenViewer() {
  const { deviceId } = useDeviceId()
  const { data: apps, loading } = useAppInventory(deviceId)

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor size={18} className="text-[#2d9c7a]" />
            <h3 className="font-semibold text-[#1a2e25]">Installed Apps</h3>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <Grid size={14} />
            {apps?.length || 0} apps
          </div>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <Loader2 size={24} className="animate-spin text-[#2d9c7a]" />
        </div>
      ) : apps?.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {apps.map((app, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mx-auto mb-3">
                <Package size={20} className="text-gray-400" />
              </div>
              <p className="text-sm font-medium text-[#1a2e25] text-center truncate">
                {app.app_name || app.package_name}
              </p>
              <p className="text-xs text-gray-400 text-center truncate mt-0.5">
                {app.package_name}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Monitor size={48} className="mx-auto mb-4 text-gray-300" />
          <p className="text-sm text-gray-500">No app inventory data yet</p>
          <p className="text-xs text-gray-400 mt-1">Data will appear when device syncs</p>
        </div>
      )}

      {/* Screenshot Info */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center gap-2 mb-3">
          <Monitor size={18} className="text-[#2d9c7a]" />
          <h3 className="font-semibold text-[#1a2e25]">Screen Captures</h3>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 text-center">
          <p className="text-sm text-gray-500">
            Screenshots are captured on-demand via remote commands.
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Send <code className="bg-gray-200 px-1.5 py-0.5 rounded text-[10px]">#SCREENSHOT</code> command to capture
          </p>
        </div>
      </div>
    </div>
  )
}
