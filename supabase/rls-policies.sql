-- ============================================
-- QSYNC ROW LEVEL SECURITY POLICIES
-- Run this in Supabase SQL Editor
-- ============================================

-- Helper function: check if user owns a device
CREATE OR REPLACE FUNCTION public.user_owns_device(target_device_id TEXT)
RETURNS BOOLEAN AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.device_registry
    WHERE device_id = target_device_id
    AND user_id = auth.uid()
  );
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- Helper function: get user's linked device IDs
CREATE OR REPLACE FUNCTION public.user_device_ids()
RETURNS SETOF TEXT AS $$
  SELECT device_id FROM public.device_registry
  WHERE user_id = auth.uid();
$$ LANGUAGE sql SECURITY DEFINER STABLE;

-- ============================================
-- DEVICE_REGISTRY - users can manage their own devices
-- ============================================
ALTER TABLE public.device_registry ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own devices"
  ON public.device_registry FOR SELECT
  USING (user_id = auth.uid());

CREATE POLICY "Users can link devices"
  ON public.device_registry FOR INSERT
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "Users can update own devices"
  ON public.device_registry FOR UPDATE
  USING (user_id = auth.uid());

CREATE POLICY "Users can unlink devices"
  ON public.device_registry FOR DELETE
  USING (user_id = auth.uid());

-- ============================================
-- LOCATIONS - users can only see their linked devices
-- ============================================
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own device locations"
  ON public.locations FOR SELECT
  USING (user_owns_device(device_id));

CREATE POLICY "Android can insert locations"
  ON public.locations FOR INSERT
  WITH CHECK (true);

-- ============================================
-- SMS_LOGS
-- ============================================
ALTER TABLE public.sms_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own device SMS"
  ON public.sms_logs FOR SELECT
  USING (user_owns_device(device_id));

CREATE POLICY "Android can insert SMS"
  ON public.sms_logs FOR INSERT
  WITH CHECK (true);

-- ============================================
-- CALL_LOGS
-- ============================================
ALTER TABLE public.call_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own device calls"
  ON public.call_logs FOR SELECT
  USING (user_owns_device(device_id));

CREATE POLICY "Android can insert calls"
  ON public.call_logs FOR INSERT
  WITH CHECK (true);

-- ============================================
-- CONTACTS
-- ============================================
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own device contacts"
  ON public.contacts FOR SELECT
  USING (user_owns_device(device_id));

CREATE POLICY "Android can insert contacts"
  ON public.contacts FOR INSERT
  WITH CHECK (true);

-- ============================================
-- APP_USAGE
-- ============================================
ALTER TABLE public.app_usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own device app usage"
  ON public.app_usage FOR SELECT
  USING (user_owns_device(device_id));

CREATE POLICY "Android can insert app usage"
  ON public.app_usage FOR INSERT
  WITH CHECK (true);

-- ============================================
-- APP_INVENTORY
-- ============================================
ALTER TABLE public.app_inventory ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own device apps"
  ON public.app_inventory FOR SELECT
  USING (user_owns_device(device_id));

CREATE POLICY "Android can insert apps"
  ON public.app_inventory FOR INSERT
  WITH CHECK (true);

-- ============================================
-- WEB_HISTORY
-- ============================================
ALTER TABLE public.web_history ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own device web history"
  ON public.web_history FOR SELECT
  USING (user_owns_device(device_id));

CREATE POLICY "Android can insert web history"
  ON public.web_history FOR INSERT
  WITH CHECK (true);

-- ============================================
-- COMMANDS - users can read commands for their devices
-- ============================================
ALTER TABLE public.commands ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view commands for own devices"
  ON public.commands FOR SELECT
  USING (user_owns_device(target_device_id));

CREATE POLICY "Android can read pending commands"
  ON public.commands FOR SELECT
  USING (true);

CREATE POLICY "Android can update command status"
  ON public.commands FOR UPDATE
  USING (true);

CREATE POLICY "Users can send commands to own devices"
  ON public.commands FOR INSERT
  WITH CHECK (user_owns_device(target_device_id));

-- ============================================
-- KNOWN_PLACES
-- ============================================
ALTER TABLE public.known_places ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own device places"
  ON public.known_places FOR ALL
  USING (user_owns_device(device_id));

-- ============================================
-- GEOFENCE_ZONES
-- ============================================
ALTER TABLE public.geofence_zones ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own device geofences"
  ON public.geofence_zones FOR SELECT
  USING (user_owns_device(device_id));

CREATE POLICY "Android can read geofences"
  ON public.geofence_zones FOR SELECT
  USING (true);

-- ============================================
-- APP_USAGE_LIMITS
-- ============================================
ALTER TABLE public.app_usage_limits ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage own device limits"
  ON public.app_usage_limits FOR ALL
  USING (user_owns_device(device_id));

-- ============================================
-- DOWNLOADS - users can only see their own
-- ============================================
ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own downloads"
  ON public.downloads FOR SELECT
  USING (email = auth.email());

-- ============================================
-- SUBSCRIPTIONS (if table exists)
-- ============================================
DO $$
BEGIN
  IF EXISTS (SELECT FROM pg_tables WHERE tablename = 'subscriptions') THEN
    EXECUTE 'ALTER TABLE public.subscriptions ENABLE ROW LEVEL SECURITY';
    EXECUTE 'CREATE POLICY "Users can view own subscription" ON public.subscriptions FOR SELECT USING (user_id = auth.uid())';
    EXECUTE 'CREATE POLICY "Users can update own subscription" ON public.subscriptions FOR UPDATE USING (user_id = auth.uid())';
  END IF;
END $$;

-- ============================================
-- PARTNERS (if table exists)
-- ============================================
DO $$
BEGIN
  IF EXISTS (SELECT FROM pg_tables WHERE tablename = 'partners') THEN
    EXECUTE 'ALTER TABLE public.partners ENABLE ROW LEVEL SECURITY';
    EXECUTE 'CREATE POLICY "Users can view own partnerships" ON public.partners FOR SELECT USING (owner_user_id = auth.uid() OR partner_user_id = auth.uid())';
  END IF;
END $$;
