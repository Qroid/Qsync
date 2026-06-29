import { Download, UserPlus, LinkIcon, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Download,
    step: '01',
    title: 'Download Qsync',
    desc: 'Get the app from our website. Available for Android and iOS. Quick download, no account needed yet.',
  },
  {
    icon: UserPlus,
    step: '02',
    title: 'Create Your Account',
    desc: 'Sign up with your email. Set your display name and profile. Your account is created only after subscribing.',
  },
  {
    icon: LinkIcon,
    step: '03',
    title: 'Invite Your Partner',
    desc: 'Send an invitation link to your partner. They must accept and install Qsync too — transparency requires both.',
  },
  {
    icon: CheckCircle,
    step: '04',
    title: 'Start Sharing',
    desc: 'Once both partners are connected, location, status, and activity begin syncing in real-time.',
  },
]

export default function OnboardingSection() {
  return (
    <section className="py-6 sm:py-10">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1a2e25] mb-3">
          Get started in minutes
        </h2>
        <p className="text-sm sm:text-base text-gray-500 max-w-2xl mx-auto">
          Simple setup, no technical skills required. Both partners need to install Qsync.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8 sm:mb-12">
        {steps.map((s, i) => {
          const Icon = s.icon
          return (
            <div key={i} className="relative">
              <div className="bg-[#f5f5f5] rounded-2xl p-4 sm:p-5 lg:p-6 h-full">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1a2e25] flex items-center justify-center">
                    <Icon size={18} className="text-white" strokeWidth={1.5} />
                  </div>
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

      {/* System Requirements */}
      <div className="bg-[#f5f5f5] rounded-2xl p-5 sm:p-6 lg:p-8">
        <h3 className="text-base sm:text-lg font-semibold text-[#1a2e25] mb-4">Before you start</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-[#1a2e25] mb-2">Requirements</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Android 8.0+ or iOS 14+
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Internet connection required
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                GPS/Location services enabled
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-medium text-[#1a2e25] mb-2">Both partners need</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-500">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Qsync app installed
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Active subscription
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 bg-[#2d9c7a] rounded-full" />
                Mutual consent to share
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
