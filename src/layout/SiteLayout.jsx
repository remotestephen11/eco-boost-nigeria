import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import WhatsAppButton from '../components/WhatsAppButton'

function SiteLayout() {
  const location = useLocation()

  useEffect(() => {
    document.documentElement.dataset.motion = 'ready'

    const elements = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!elements.length) {
      return undefined
    }

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) {
      elements.forEach((element) => {
        element.setAttribute('data-reveal-visible', 'true')
      })
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-reveal-visible', 'true')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    elements.forEach((element) => {
      element.removeAttribute('data-reveal-visible')
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [location.pathname])

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-transparent text-text">
        <Navbar />
        <main className="page-container min-h-[calc(100vh-165px)] py-4 lg:py-6">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default SiteLayout
