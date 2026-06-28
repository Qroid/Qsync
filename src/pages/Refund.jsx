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
              Qsync offers a 30-minute free trial with all subscription plans. This allows you to explore the app and its features before committing. To avoid being charged, you must cancel before the 30-minute trial period ends.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">2. Refund Policy</h2>
            <p>
              Due to the nature of our service, which includes secure account setup and dedicated server provisioning, we are unable to offer full refunds. However, we do offer partial refunds based on your subscription plan:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Weekly Plan ($3.99)</span>
                  <span className="font-medium text-gray-900">Refund $2.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Monthly Plan ($9.99)</span>
                  <span className="font-medium text-gray-900">Refund $6.99</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Yearly Plan ($79.99)</span>
                  <span className="font-medium text-gray-900">Refund $71.99</span>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">3. Why No Full Refunds?</h2>
            <p>
              When you subscribe, we immediately allocate resources for:
            </p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Secure account creation and configuration</li>
              <li>Dedicated server space allocation</li>
              <li>Real-time data synchronization setup</li>
              <li>Background service infrastructure</li>
            </ul>
            <p className="mt-3">
              These costs are incurred regardless of subscription duration, which is why partial refunds reflect the actual resources consumed.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">4. How to Request a Refund</h2>
            <p>
              To request a refund, contact us at support@qsync.app with:
            </p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Your email address used for subscription</li>
              <li>Date of purchase</li>
              <li>Reason for refund request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">5. Processing Time</h2>
            <p>
              Refund requests are processed within 5-10 business days. The refund will be credited to your original payment method. Depending on your bank or card issuer, it may take additional time for the refund to appear on your statement.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">6. Non-Refundable Items</h2>
            <p>
              The following are not eligible for refunds:
            </p>
            <ul className="mt-2 ml-4 space-y-1 list-disc">
              <li>Subscriptions cancelled after 30 days from purchase date</li>
              <li>Accounts terminated for violation of our Terms of Service</li>
              <li>Partial subscription periods beyond the refund window</li>
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
