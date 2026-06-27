import { Shield, Heart, Eye } from 'lucide-react'

export function MissionSection() {
  return (
    <section id="mission" className="bg-white rounded-xl border border-gray-200 p-8 lg:p-10">
      <h2 className="text-lg font-semibold text-gray-900 tracking-tight">
        Our Mission
      </h2>
      <p className="mt-3 text-gray-400 leading-relaxed text-[14px] max-w-xl">
        Strong relationships are rooted in transparency, not guesswork. Qsync gives
        couples a shared space to stay connected — no secrets, no surveillance.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-lg border border-gray-100 p-5">
          <Shield className="w-5 h-5 text-gray-400" />
          <h3 className="mt-3 text-[13px] font-medium text-gray-900">Mutual Consent Only</h3>
          <p className="mt-2 text-[12px] text-gray-400 leading-relaxed">
            Both partners must explicitly agree to share data. No one-sided tracking, no hidden installs. Trust is the foundation.
          </p>
        </div>

        <div className="rounded-lg border border-gray-100 p-5">
          <Heart className="w-5 h-5 text-gray-400" />
          <h3 className="mt-3 text-[13px] font-medium text-gray-900">Built for Couples</h3>
          <p className="mt-2 text-[12px] text-gray-400 leading-relaxed">
            Designed specifically for partners who want to stay in sync — knowing where each other is, how they're doing, and when they need support.
          </p>
        </div>

        <div className="rounded-lg border border-gray-100 p-5">
          <Eye className="w-5 h-5 text-gray-400" />
          <h3 className="mt-3 text-[13px] font-medium text-gray-900">Full Transparency</h3>
          <p className="mt-2 text-[12px] text-gray-400 leading-relaxed">
            Every feature is visible to both partners. Shared location, shared status, shared activity — nothing is hidden from either side.
          </p>
        </div>
      </div>

      <div className="mt-6 rounded-lg bg-gray-50 p-5">
        <p className="text-[13px] text-gray-500 leading-relaxed">
          We believe technology should strengthen relationships, not create distrust. Qsync is built on the principle that when both partners choose transparency, they build something stronger than surveillance could ever provide.
        </p>
      </div>
    </section>
  )
}
