import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const steps = [
  {
    number: 1,
    title: 'Disable Google Play Protect',
    subtitle: 'Target Device',
    content: 'Google Play Protect automatically flags and blocks applications installed outside of the official store. This must be turned off before downloading the file.',
    instructions: [
      'Open the Google Play Store app on the target device.',
      'Tap the Profile Icon / Avatar in the top-right corner.',
      'Select Play Protect from the menu.',
      'Tap the Settings (Gear Icon) in the upper-right corner.',
      'Turn OFF both toggles: Scan apps with Play Protect and Improve harmful app detection.',
    ],
  },
  {
    number: 2,
    title: 'Enable Restricted App Permissions',
    subtitle: 'Authorize Side-Loading',
    content: 'Android restricts applications from installing software downloaded directly via a browser or file manager. You must explicitly authorize the source:',
    instructions: [
      'Open the device Settings.',
      'Navigate to Apps (or Apps & Notifications).',
      'Tap Special App Access (often under advanced settings or accessible via the three dots in the top right).',
      'Select Install Unknown Apps.',
      'Choose the browser or file manager you will use to download the application (e.g., Google Chrome or My Files).',
      'Switch the Allow from this source toggle to ON.',
    ],
  },
  {
    number: 3,
    title: 'Install and Link the Application',
    subtitle: 'Establish WebSocket Uplink',
    content: 'Follow these steps to install the app and connect it to your dashboard:',
    instructions: [
      'Open the authorized browser on the target device, navigate to your private download link, and download the .apk file.',
      'Open the downloaded file and select Install.',
      'Launch the newly installed application.',
      'Enter your specific Supabase URL and Anonymous Key (copied from your administrator command center dashboard) to establish the secure WebSocket connection.',
      'Note down the unique Device ID displayed on the screen; you will link this ID to your control panel.',
    ],
  },
  {
    number: 4,
    title: 'Configure Background Persistence',
    subtitle: 'Bypass Battery Optimization',
    content: 'Modern mobile operating systems aggressively terminate background applications to save power. To ensure the application remains active:',
    instructions: [
      'Long-press the application icon on the device home screen and tap App Info (the "i" icon).',
      'Tap Battery or Battery Usage.',
      'Change the restriction tier from Optimized to Unrestricted.',
      'Return to the main App Info menu, scroll down, and ensure the toggle for Remove permissions if app is unused (or Pause app activity if unused) is turned OFF.',
      'Manufacturer Note: On Xiaomi, OnePlus, or Samsung devices, search the system settings for Autostart or Background Usage Limits and explicitly allow the application to launch automatically on device reboots.',
    ],
  },
]

export default function InstallationSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="installation" className="bg-white rounded-xl border border-gray-200 p-8 lg:p-10">
      <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
        Installation Guide
      </h2>
      <p className="mt-2 text-[13px] text-gray-400 max-w-xl leading-relaxed">
        Because this application runs as a persistent background service to ensure a continuous data uplink, it must be side-loaded and configured manually. Follow these steps in exact order.
      </p>

      <div className="mt-8 space-y-4">
        {steps.map((step, i) => (
          <div key={step.number} className="flex gap-4">
            <div className="shrink-0 w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center text-[11px] font-medium text-gray-400">
              {step.number}
            </div>
            <div className="flex-1 min-w-0">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full text-left"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-[14px] font-medium text-gray-900">{step.title}</h3>
                    <p className="text-[11px] text-gray-400 italic mt-0.5">{step.subtitle}</p>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-300 transition-transform shrink-0 ${open === i ? 'rotate-180' : ''}`}
                  />
                </div>
              </button>

              {open === i && (
                <div className="mt-3 pb-2">
                  <p className="text-[13px] text-gray-500 leading-relaxed mb-3">
                    {step.content}
                  </p>
                  <ol className="space-y-2 ml-1">
                    {step.instructions.map((inst, j) => (
                      <li key={j} className="flex gap-2 text-[12px] text-gray-500 leading-relaxed">
                        <span className="text-gray-300 font-mono text-[10px] mt-0.5 shrink-0">{j + 1}.</span>
                        <span dangerouslySetInnerHTML={{
                          __html: inst.replace(/\*\*(.*?)\*\*/g, '<strong class="font-medium text-gray-700">$1</strong>')
                            .replace(/`(.*?)`/g, '<code class="text-[11px] bg-gray-100 px-1 py-0.5 rounded font-mono">$1</code>')
                        }} />
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
