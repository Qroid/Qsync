import PolicyPageLayout from './Layout'

export default function Terms() {
  return (
    <PolicyPageLayout>
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1a2e25] mb-4 sm:mb-6">Terms of Service</h1>
        <p className="text-xs text-gray-400 mb-6 sm:mb-8">Last updated: June 2026</p>

        <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">1. Acceptance of Terms</h2>
            <p>By accessing or using Qsync ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">2. Description of Service</h2>
            <p>Qsync is a couples transparency application that allows two consenting partners to mutually share their location, status, and activity information. The Service requires explicit consent from both partners before any data sharing begins.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">3. Eligibility</h2>
            <p>You must be at least 18 years old to use Qsync. By using the Service, you represent and warrant that you are at least 18 years of age.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">4. Account Registration</h2>
            <p>An account is created only upon purchasing a subscription. You must provide accurate and complete information during the subscription process. You are responsible for maintaining the confidentiality of your account credentials.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">5. Mutual Consent Requirement</h2>
            <p>Qsync requires both partners to explicitly consent to data sharing. Neither partner can monitor the other without their knowledge and agreement. Any attempt to use Qsync for non-consensual monitoring is a violation of these Terms.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">6. Subscription and Payment</h2>
            <p>Qsync offers subscription plans (Weekly, Monthly, Yearly). Payments are processed securely through Paystack. By subscribing, you authorize recurring charges to your payment method until you cancel.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">7. Cancellation and Refunds</h2>
            <p>You may cancel your subscription at any time. Refund eligibility is outlined in our Refund Policy. Accounts are only created upon subscription purchase.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">8. Acceptable Use</h2>
            <p>You agree not to use Qsync for any unlawful purpose, including but not limited to: stalking, harassment, non-consensual monitoring, or any activity that violates applicable laws.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">9. Limitation of Liability</h2>
            <p>Qsync is provided "as is" without warranties of any kind. We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">10. Changes to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. Continued use of the Service after changes constitutes acceptance of the modified Terms.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">11. Contact</h2>
            <p>For questions about these Terms, contact us at <a href="mailto:support@qsync.app" className="text-[#2d9c7a] hover:underline">support@qsync.app</a>.</p>
          </section>
        </div>
      </div>
    </PolicyPageLayout>
  )
}
