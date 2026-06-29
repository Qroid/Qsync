import { useState, useEffect } from 'react'
import { ChevronUp } from 'lucide-react'

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#2d9c7a] flex items-center justify-center shadow-lg hover:bg-[#248a6a] transition-colors lg:hidden"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </button>
  )
}

export function DesktopScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const container = document.querySelector('.scroll-container')
    if (!container) return

    const handleScroll = () => {
      setVisible(container.scrollTop > 300)
    }
    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    const container = document.querySelector('.scroll-container')
    if (container) container.scrollTop = 0
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#2d9c7a] flex items-center justify-center shadow-lg hover:bg-[#248a6a] transition-colors hidden lg:flex"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-6 h-6 text-white" />
    </button>
  )
}
