import { useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabase'

export function useDeviceId() {
  const [deviceId, setDeviceId] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!isSupabaseConfigured || !supabase) {
      setLoading(false)
      return
    }

    async function getDeviceId() {
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

      const { data } = await supabase
        .from('device_registry')
        .select('device_id')
        .eq('user_id', user.id)
        .limit(1)
        .single()

      if (data?.device_id) {
        localStorage.setItem('qsync_device_id', data.device_id)
        setDeviceId(data.device_id)
      }

      setLoading(false)
    }

    getDeviceId()
  }, [])

  const setDevice = (id) => {
    localStorage.setItem('qsync_device_id', id)
    setDeviceId(id)
  }

  return { deviceId, setDevice, loading }
}
