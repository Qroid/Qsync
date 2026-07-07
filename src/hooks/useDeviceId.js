import { useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

export function useDeviceId() {
  const [deviceId, setDeviceId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [devices, setDevices] = useState([])

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false)
      return
    }

    async function detectDevice() {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        setLoading(false)
        return
      }

      const stored = localStorage.getItem('qsync_device_id')
      if (stored) {
        setDeviceId(stored)
        setLoading(false)
        return
      }

      const { data: registry } = await supabase
        .from('device_registry')
        .select('device_id')
        .eq('user_id', user.id)
        .limit(1)
        .maybeSingle()

      if (registry?.device_id) {
        localStorage.setItem('qsync_device_id', registry.device_id)
        setDeviceId(registry.device_id)
        setLoading(false)
        return
      }

      const { data: locDevices } = await supabase
        .from('locations')
        .select('device_id')
        .order('timestamp', { ascending: false })
        .limit(10)

      if (locDevices?.length > 0) {
        const unique = [...new Set(locDevices.map(d => d.device_id))]
        setDevices(unique)

        if (unique.length === 1) {
          localStorage.setItem('qsync_device_id', unique[0])
          setDeviceId(unique[0])
        }
      }

      setLoading(false)
    }

    detectDevice()
  }, [])

  const setDevice = (id) => {
    localStorage.setItem('qsync_device_id', id)
    setDeviceId(id)
  }

  const clearDevice = () => {
    localStorage.removeItem('qsync_device_id')
    setDeviceId(null)
  }

  return { deviceId, devices, setDevice, clearDevice, loading }
}
