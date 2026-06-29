import PolicyPageLayout from './Layout'

export default function Privacy() {
  return (
    <PolicyPageLayout>
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1a2e25] mb-4 sm:mb-6">Privacy Policy</h1>
        <p className="text-xs text-gray-400 mb-6 sm:mb-8">Last updated: June 2026</p>

        <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">1. Information We Collect</h2>
            <p>Qsync collects the following information when you use the Service:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Account information (email, display name)</li>
              <li>Location data (GPS coordinates, when shared)</li>
              <li>Device information (battery level, connection status)</li>
              <li>Activity data (status updates, location history)</li>
              <li>Payment information (processed securely via Paystack)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Provide the Qsync Service to you and your partner</li>
              <li>Process payments and manage subscriptions</li>
              <li>Improve and optimize the Service</li>
              <li>Send important service-related notifications</li>
              <li>Ensure security and prevent abuse</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">3. Data Sharing</h2>
            <p>Your data is shared only with your connected partner through the Qsync app. We do not sell your data to third parties. Location and activity data are visible only to the two connected partners.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">4. Data Storage and Security</h2>
            <p>All data is encrypted in transit and at rest. We use industry-standard security measures to protect your information. Location history is retained according to your subscription plan.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">5. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Export your data</li>
              <li>Pause or stop data sharing at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">6. Data Retention</h2>
            <p>We retain your data for as long as your account is active. Location history retention varies by plan: Weekly (7 days), Monthly (14 days), Yearly (30 days). Upon account deletion, data is removed within 30 days.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">7. Children's Privacy</h2>
            <p>Qsync is not intended for users under 18 years of age. We do not knowingly collect data from children.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through the Service.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">9. Contact</h2>
            <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@qsync.app" className="text-[#2d9c7a] hover:underline">privacy@qsync.app</a>.</p>
          </section>
        </div>
      </div>
    </PolicyPageLayout>
  )
}
