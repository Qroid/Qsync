import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      const container = document.getElementById('scroll-container')
      if (container) {
        setIsVisible(container.scrollTop > 300)
      }
    }

    const container = document.getElementById('scroll-container')
    if (container) {
      container.addEventListener('scroll', toggleVisibility)
      return () => container.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    const container = document.getElementById('scroll-container')
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 sm:bottom-8 right-4 sm:right-6 z-30 w-10 h-10 sm:w-11 sm:h-11 bg-[#2d9c7a] text-white rounded-full shadow-lg hover:bg-[#1a7a5c] transition-all duration-200 flex items-center justify-center hover:scale-105"
      aria-label="Scroll to top"
    >
      <ChevronUp size={18} />
    </button>
  )
}
