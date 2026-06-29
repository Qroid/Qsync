import { Link } from 'react-router-dom'
import { Mail, Shield, FileText } from 'lucide-react'
import Logo from '../Logo'

export default function SiteFooter() {
  return (
    <footer className="bg-[#0d0f12] border-t border-white/5 text-gray-400 text-[10px] sm:text-xs mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Logo + Copyright */}
          <div className="flex items-center gap-3">
            <Logo className="w-5 h-5 sm:w-6 sm:h-6 opacity-50" />
            <div className="text-gray-600">© 2026 Qsync</div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link to="/terms" className="hover:text-white transition-colors flex items-center gap-1.5">
              <FileText size={12} />
              Terms
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Shield size={12} />
              Privacy
            </Link>
            <Link to="/refund" className="hover:text-white transition-colors flex items-center gap-1.5">
              <Mail size={12} />
              Refunds
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
