import { useQuery } from '@tanstack/react-query'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

async function fetchFromSupabase(table, filters = {}, options = {}) {
  if (!isSupabaseConfigured || !supabase) return []

  let query = supabase.from(table).select(options.select || '*')

  Object.entries(filters).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      query = query.eq(key, value)
    }
  })

  if (options.order) {
    query = query.order(options.order.column, { ascending: options.order.ascending ?? false })
  }

  if (options.limit) {
    query = query.limit(options.limit)
  }

  const { data, error } = await query
  if (error) throw error
  return data || []
}

export function useLocations(deviceId, limit = 50) {
  return useQuery({
    queryKey: ['locations', deviceId, limit],
    queryFn: () => fetchFromSupabase('locations', { device_id: deviceId }, {
      order: { column: 'timestamp', ascending: false },
      limit,
    }),
    enabled: !!deviceId && isSupabaseConfigured,
    refetchInterval: 10000,
  })
}

export function useLatestLocation(deviceId) {
  return useQuery({
    queryKey: ['latestLocation', deviceId],
    queryFn: async () => {
      const data = await fetchFromSupabase('locations', { device_id: deviceId }, {
        order: { column: 'timestamp', ascending: false },
        limit: 1,
      })
      return data[0] || null
    },
    enabled: !!deviceId && isSupabaseConfigured,
    refetchInterval: 5000,
  })
}

export function useSmsLogs(deviceId, limit = 100) {
  return useQuery({
    queryKey: ['sms_logs', deviceId, limit],
    queryFn: () => fetchFromSupabase('sms_logs', { device_id: deviceId }, {
      order: { column: 'timestamp', ascending: false },
      limit,
    }),
    enabled: !!deviceId && isSupabaseConfigured,
    refetchInterval: 15000,
  })
}

export function useCallLogs(deviceId, limit = 100) {
  return useQuery({
    queryKey: ['call_logs', deviceId, limit],
    queryFn: () => fetchFromSupabase('call_logs', { device_id: deviceId }, {
      order: { column: 'timestamp', ascending: false },
      limit,
    }),
    enabled: !!deviceId && isSupabaseConfigured,
    refetchInterval: 15000,
  })
}

export function useContacts(deviceId) {
  return useQuery({
    queryKey: ['contacts', deviceId],
    queryFn: () => fetchFromSupabase('contacts', { device_id: deviceId }),
    enabled: !!deviceId && isSupabaseConfigured,
  })
}

export function useAppUsage(deviceId, limit = 50) {
  return useQuery({
    queryKey: ['app_usage', deviceId, limit],
    queryFn: () => fetchFromSupabase('app_usage', { device_id: deviceId }, {
      order: { column: 'timestamp', ascending: false },
      limit,
    }),
    enabled: !!deviceId && isSupabaseConfigured,
  })
}

export function useAppInventory(deviceId) {
  return useQuery({
    queryKey: ['app_inventory', deviceId],
    queryFn: () => fetchFromSupabase('app_inventory', { device_id: deviceId }),
    enabled: !!deviceId && isSupabaseConfigured,
  })
}

export function useWebHistory(deviceId, limit = 50) {
  return useQuery({
    queryKey: ['web_history', deviceId, limit],
    queryFn: () => fetchFromSupabase('web_history', { device_id: deviceId }, {
      order: { column: 'timestamp', ascending: false },
      limit,
    }),
    enabled: !!deviceId && isSupabaseConfigured,
  })
}

export function useDeviceRegistry(deviceId) {
  return useQuery({
    queryKey: ['device_registry', deviceId],
    queryFn: async () => {
      const data = await fetchFromSupabase('device_registry', { device_id: deviceId })
      return data[0] || null
    },
    enabled: !!deviceId && isSupabaseConfigured,
  })
}

export function useCommands(deviceId) {
  return useQuery({
    queryKey: ['commands', deviceId],
    queryFn: () => fetchFromSupabase('commands', {
      target_device_id: deviceId,
      status: 'pending',
    }),
    enabled: !!deviceId && isSupabaseConfigured,
    refetchInterval: 5000,
  })
}

export function useKnownPlaces(deviceId) {
  return useQuery({
    queryKey: ['known_places', deviceId],
    queryFn: () => fetchFromSupabase('known_places', { device_id: deviceId }),
    enabled: !!deviceId && isSupabaseConfigured,
  })
}

export function useGeofences(deviceId) {
  return useQuery({
    queryKey: ['geofence_zones', deviceId],
    queryFn: () => fetchFromSupabase('geofence_zones', { device_id: deviceId }),
    enabled: !!deviceId && isSupabaseConfigured,
  })
}
