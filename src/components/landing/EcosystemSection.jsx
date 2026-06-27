import { MapPin, Battery, Activity, Bell, Shield, Clock, Wifi, Smartphone, Eye, Radio, FileText, Users } from 'lucide-react'

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="bg-white rounded-xl border border-gray-200 p-8 lg:p-10">
      <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
        What You Get the Moment You Subscribe
      </h2>

      <div className="mt-8 space-y-8">
        {/* Feature 1 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Live Location Sharing</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            See your partner's real-time location on a shared map. Know when they arrive at work, leave the gym, or head home. No more "where are you?" texts.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> GPS coordinates, location history, arrival/departure notifications, and favorite places.
            </p>
          </div>
        </div>

        {/* Feature 2 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Battery className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Battery & Network Status</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            Know if your partner's phone is about to die or if they're on Wi-Fi vs. cellular. Never miss a call because their battery was at 2%.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> Battery percentage, charging status, network type, and low battery alerts.
            </p>
          </div>
        </div>

        {/* Feature 3 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Activity Feed</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            A shared timeline of what both of you are doing throughout the day. See when someone leaves home, arrives at a location, or connects to a new network.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> Location check-ins, device events, app usage, and custom status updates.
            </p>
          </div>
        </div>

        {/* Feature 4 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Safety Check-Ins</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            Send quick "I'm safe" check-ins when arriving at destinations. Your partner gets instant peace of mind without needing to call.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> One-tap check-ins, automatic arrival alerts, and SOS emergency mode.
            </p>
          </div>
        </div>

        {/* Feature 5 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Screen Time Together</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            See how much screen time you both have and when you're both online. Coordinate unplugged time or plan activities together.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> Daily/weekly screen time reports, app usage breakdowns, and focus mode coordination.
            </p>
          </div>
        </div>

        {/* Feature 6 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Shared Visibility</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            Both partners see exactly the same data. No hidden information, no secret logs. Full transparency is the foundation of trust.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> Identical dashboards, shared notifications, and equal access to all features.
            </p>
          </div>
        </div>

        {/* Feature 7 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Shield className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Privacy Controls</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            Control exactly what you share and when. Pause location sharing, hide specific activities, or go completely private with one tap.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> Per-feature toggles, scheduled privacy windows, and vacation mode.
            </p>
          </div>
        </div>

        {/* Feature 8 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Radio className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Push Notifications</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            Instant alerts for the moments that matter. Know when your partner arrives home, leaves work, or sends a check-in.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> Arrival/departure alerts, custom notifications, and emergency broadcasts.
            </p>
          </div>
        </div>

        {/* Feature 9 */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Users className="w-4 h-4 text-gray-400" />
            <h3 className="text-[14px] font-medium text-gray-900">Priority Support</h3>
          </div>
          <p className="mt-2 text-[13px] text-gray-500 leading-relaxed">
            Get help when you need it. Priority support means faster responses and dedicated assistance for any issues.
          </p>
          <div className="mt-3 pl-4 border-l border-gray-200">
            <p className="text-[12px] text-gray-400 leading-relaxed">
              <span className="font-medium text-gray-500">What's included:</span> 24/7 chat support, dedicated account manager, and guaranteed response within 2 hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
