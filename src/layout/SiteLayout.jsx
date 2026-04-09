import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ScrollToTop from '../components/ScrollToTop'
import WhatsAppButton from '../components/WhatsAppButton'

function SiteLayout() {
  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-transparent text-text">
        <Navbar />
        <main className="page-container min-h-[calc(100vh-165px)] py-6 lg:py-10">
          <Outlet />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}

export default SiteLayout
