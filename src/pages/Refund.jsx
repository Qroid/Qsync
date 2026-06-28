import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function Refund() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-gray-600 transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" />
          Back to Qsync
        </Link>

        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Refund Policy</h1>
        <p className="mt-2 text-[12px] text-gray-400">Last updated: June 29, 2026</p>

        <div className="mt-10 space-y-8 text-[13px] text-gray-500 leading-relaxed">
          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">1. Free Trial</h2>
            <p>
              Qsync offers a 7-day free trial with all subscription plans. You may cancel at any time during the trial period without being charged. Cancellation must be made before the trial ends to avoid billing.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">2. Subscription Refunds</h2>
            <p>
              If you cancel your subscription within the first 7 days of a paid billing cycle, you are eligible for a full refund. After 7 days, refunds are granted on a case-by-case basis.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">3. How to Request a Refund</h2>
            <p>
              To request a refund, contact us at support@qsync.app with the following information:
            </p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Your email address used for subscription</li>
              <li>Date of purchase</li>
              <li>Reason for refund request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">4. Processing Time</h2>
            <p>
              Refund requests are typically processed within 5-10 business days. The refund will be credited to your original payment method. Please note that depending on your bank or card issuer, it may take additional time for the refund to appear on your statement.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">5. Non-Refundable Items</h2>
            <p>
              The following are not eligible for refunds:
            </p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Subscriptions cancelled after 7 days of the billing cycle (unless exceptional circumstances apply)</li>
              <li>Partial subscription periods</li>
              <li>Accounts terminated for violation of our Terms of Service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">6. Exceptional Circumstances</h2>
            <p>
              We understand that situations vary. We may issue refunds outside the standard policy for:
            </p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Technical issues preventing use of the service</li>
              <li>Billing errors or unauthorized charges</li>
              <li>Significant service disruptions</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">7. Contact</h2>
            <p>
              For refund inquiries, contact us at support@qsync.app. We aim to respond to all requests within 24 hours.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
