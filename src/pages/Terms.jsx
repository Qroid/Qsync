import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function Terms() {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <Link to="/" className="inline-flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-gray-600 transition-colors mb-8">
          <ArrowLeft className="w-3 h-3" />
          Back to Qsync
        </Link>

        <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">Terms of Service</h1>
        <p className="mt-2 text-[12px] text-gray-400">Last updated: June 27, 2026</p>

        <div className="mt-10 space-y-8 text-[13px] text-gray-500 leading-relaxed">
          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">1. Acceptance of Terms</h2>
            <p>
              By accessing or using Qsync ("the Service"), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">2. Description of Service</h2>
            <p>
              Qsync provides a couples transparency platform that enables mutual location sharing, status updates, and activity feeds between consenting partners. Both parties must explicitly opt in and consent to data sharing.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">3. Consent Requirement</h2>
            <p>
              Qsync is designed exclusively for mutual, consensual data sharing. Both partners must install the application, create accounts, and explicitly consent to sharing their data. The Service does not support unilateral monitoring or surveillance of any individual.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">4. User Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials. You agree to use the Service only for its intended purpose and in compliance with applicable laws and regulations.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">5. Data Ownership</h2>
            <p>
              You retain full ownership of your data. Qsync does not sell, share, or monetize your personal data. You may delete your data and account at any time.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">6. Service Availability</h2>
            <p>
              We strive to maintain continuous service availability but do not guarantee uninterrupted access. Qsync reserves the right to modify, suspend, or discontinue the Service at any time with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">7. Limitation of Liability</h2>
            <p>
              Qsync shall not be held liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">8. Changes to Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of the Service after changes constitutes acceptance of the revised Terms. We will notify users of material changes via email or in-app notification.
            </p>
          </section>

          <section>
            <h2 className="text-[14px] font-medium text-gray-900 mb-2">9. Contact</h2>
            <p>
              For questions about these Terms, contact us at support@qsync.app.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
