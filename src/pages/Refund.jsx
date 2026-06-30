import PolicyPageLayout from './Layout'

export default function Refund() {
  return (
    <PolicyPageLayout>
      <div className="max-w-3xl">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1a2e25] mb-4 sm:mb-6">Refund Policy</h1>
        <p className="text-xs text-gray-400 mb-6 sm:mb-8">Last updated: June 2026</p>

        <div className="space-y-6 sm:space-y-8 text-sm sm:text-base text-gray-600 leading-relaxed">
          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">30-Minute Free Trial</h2>
            <p>When you first subscribe to Qsync, you receive a 30-minute free trial period. During this time, you can evaluate the full features of your chosen plan. If you decide Qsync is not for you, cancel within 30 minutes for a full refund.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">Refund Amounts</h2>
            <p>After the 30-minute trial period, refunds are partially deducted to account for account setup costs and server resources already allocated:</p>

            <div className="mt-4 bg-[#f5f5f5] rounded-xl p-4 sm:p-5 space-y-3">
              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <div>
                  <span className="font-medium text-[#1a2e25]">Weekly Plan</span>
                  <span className="text-gray-400 text-xs ml-2">($3)</span>
                </div>
                <span className="font-medium text-[#2d9c7a]">Refund: $1.50</span>
              </div>

              <div className="flex items-center justify-between py-2 border-b border-gray-200">
                <div>
                  <span className="font-medium text-[#1a2e25]">Monthly Plan</span>
                  <span className="text-gray-400 text-xs ml-2">($8.50)</span>
                </div>
                <span className="font-medium text-[#2d9c7a]">Refund: $5.95</span>
              </div>

              <div className="flex items-center justify-between py-2">
                <div>
                  <span className="font-medium text-[#1a2e25]">Yearly Plan</span>
                  <span className="text-gray-400 text-xs ml-2">($65)</span>
                </div>
                <span className="font-medium text-[#2d9c7a]">Refund: $58.50</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-400">Note: No full (100%) refunds are available. Partial deductions account for account creation, server setup, and resource allocation costs incurred upon subscription.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">How to Request a Refund</h2>
            <p>To request a refund, contact us at <a href="mailto:support@qsync.app" className="text-[#2d9c7a] hover:underline">support@qsync.app</a> with your account email and reason for refund. Refunds are processed within 5-7 business days to the original payment method.</p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">Exceptions</h2>
            <p>Refunds may be denied if:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>The request is made after significant usage of the Service</li>
              <li>The account was used in violation of our Terms of Service</li>
              <li>The refund request is made more than 30 days after purchase</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-[#1a2e25] mb-3">Contact</h2>
            <p>For refund inquiries, contact us at <a href="mailto:support@qsync.app" className="text-[#2d9c7a] hover:underline">support@qsync.app</a>.</p>
          </section>
        </div>
      </div>
    </PolicyPageLayout>
  )
}
