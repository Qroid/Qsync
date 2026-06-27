import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function Privacy() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-gray-600 transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" />
          Back to Qsync
        </Link>

        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Privacy Policy</h1>
        <p className="mt-2 text-[12px] text-gray-400">Last updated: June 27, 2026</p>

        <div className="mt-10 space-y-8 text-[13px] text-gray-500 leading-relaxed">
          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">1. Information We Collect</h2>
            <p>
              Qsync collects only the data that you explicitly choose to share with your partner. This may include:
            </p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Location data (when enabled)</li>
              <li>Device status (battery, network)</li>
              <li>Activity feed entries</li>
              <li>Account information (email or phone number)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">2. How We Use Your Data</h2>
            <p>
              Your data is used solely to provide the Service. We do not use your data for advertising, profiling, or any purpose other than enabling the features you have activated.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">3. Data Sharing</h2>
            <p>
              Your data is shared only with your connected partner. We do not share your data with third parties, advertisers, or data brokers. We may disclose data only when required by law.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">4. Data Security</h2>
            <p>
              All data is encrypted in transit using TLS 1.3 and at rest using AES-256. We implement industry-standard security measures to protect your information from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">5. Data Retention</h2>
            <p>
              We retain your data only as long as your account is active. When you delete your account, all associated data is permanently removed from our servers within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data at any time. You can export your data or deactivate your account through the application settings.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">7. Children's Privacy</h2>
            <p>
              Qsync is not intended for use by individuals under the age of 18. We do not knowingly collect data from children.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">8. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Material changes will be communicated via email or in-app notification. Continued use of the Service after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">9. Contact</h2>
            <p>
              For privacy-related inquiries, contact us at privacy@qsync.app.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
