import { MapPin, Navigation, Clock, Home, Briefcase, Dumbbell, Loader2 } from 'lucide-react'
import { useDeviceId } from '../../hooks/useDeviceId'
import { useLocations, useKnownPlaces } from '../../hooks/useSupabaseData'

export default function LocationTracker() {
  const { deviceId } = useDeviceId()
  const { data: locations, loading } = useLocations(deviceId, 100)
  const { data: places } = useKnownPlaces(deviceId)

  const currentLocation = locations?.[0]

  return (
    <div className="space-y-4 sm:space-y-6 max-w-5xl">
      {/* Map */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#2d9c7a]" />
            <h3 className="font-semibold text-[#1a2e25]">Live Location</h3>
          </div>
          {currentLocation && (
            <div className="flex items-center gap-1.5 text-xs text-[#2d9c7a]">
              <span className="w-2 h-2 bg-[#2d9c7a] rounded-full animate-pulse"></span>
              Live
            </div>
          )}
        </div>
        <div className="bg-gray-100 rounded-xl h-72 sm:h-96 flex items-center justify-center">
          {currentLocation ? (
            <div className="text-center">
              <Navigation size={40} className="mx-auto mb-2 text-[#2d9c7a]" />
              <p className="text-lg font-semibold text-[#1a2e25]">
                {currentLocation.lat?.toFixed(6)}, {currentLocation.lng?.toFixed(6)}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Accuracy: {currentLocation.accuracy?.toFixed(0)}m
              </p>
              <p className="text-xs text-gray-400 mt-2">
                {new Date(currentLocation.timestamp).toLocaleString()}
              </p>
            </div>
          ) : (
            <div className="text-center text-gray-400">
              <Navigation size={40} className="mx-auto mb-2 opacity-50" />
              <p className="text-sm">Waiting for location data...</p>
            </div>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
        {/* Known Locations */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <h3 className="font-semibold text-[#1a2e25] mb-4">Known Places</h3>
          {places?.length > 0 ? (
            <div className="space-y-3">
              {places.map((place, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center text-gray-500">
                    <MapPin size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1a2e25]">{place.name}</p>
                    <p className="text-xs text-gray-500 truncate">{place.address}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-6">No known places yet</p>
          )}
        </div>

        {/* Location History */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <div className="flex items-center gap-2 mb-4">
            <Clock size={16} className="text-gray-400" />
            <h3 className="font-semibold text-[#1a2e25]">Recent History</h3>
          </div>
          {locations?.length > 0 ? (
            <div className="space-y-3">
              {locations.slice(0, 10).map((loc, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#2d9c7a]"></div>
                    {i < locations.length - 1 && <div className="w-0.5 h-6 bg-gray-200"></div>}
                  </div>
                  <div className="pb-3">
                    <p className="text-sm font-medium text-[#1a2e25]">
                      {loc.event_type === 'arrived' ? `Arrived at ${loc.place_name || 'location'}` :
                       loc.event_type === 'departed' ? `Left ${loc.place_name || 'location'}` :
                       'Location updated'}
                    </p>
                    <p className="text-xs text-gray-400">
                      {new Date(loc.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-400 text-center py-6">No history yet</p>
          )}
        </div>
      </div>
    </div>
  )
}
