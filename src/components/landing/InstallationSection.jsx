import { Download, Settings, Smartphone, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Download,
    step: '01',
    title: 'Download the APK',
    desc: 'Download the Qsync APK file from the link provided after your subscription is confirmed.',
  },
  {
    icon: Settings,
    step: '02',
    title: 'Enable Unknown Sources',
    desc: 'Go to your Android settings > Security > enable "Install from unknown sources" to allow the installation.',
  },
  {
    icon: Smartphone,
    step: '03',
    title: 'Install the App',
    desc: 'Open the downloaded APK file and tap Install. The app will appear on your home screen.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Log In & Connect',
    desc: 'Open Qsync, log in with your subscription email, and invite your partner to connect.',
  },
]

export default function InstallationSection() {
  return (
    <section className="py-8 sm:py-12">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2e25] mb-3">
          Installation Guide
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Step-by-step guide to install Qsync on your Android device after subscribing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-12">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} className="relative">
              <div className="bg-white rounded-2xl p-4 sm:p-5 lg:p-6 border border-gray-100 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-[#1a2e25]" strokeWidth={1.5} />
                  <div className="text-[10px] sm:text-xs text-gray-400 font-mono">{s.step}</div>
                </div>
                <h3 className="text-sm sm:text-base font-semibold text-[#1a2e25] mb-2">{s.title}</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gray-300" />
              )}
            </div>
          )
        })}
      </div>

      <div className="bg-white rounded-2xl p-5 sm:p-6 lg:p-8 border border-gray-100">
        <h3 className="text-base sm:text-lg font-semibold text-[#1a2e25] mb-4">Installation Requirements</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-[#1a2e25] mb-2">Device</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Android 8.0+
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                At least 50MB free space
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Internet connection required
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-[#1a2e25] mb-2">Before Installing</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Active subscription required
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                APK download link sent via email
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Enable "Unknown Sources" in settings
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
