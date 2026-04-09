import { Navigate, Route, Routes } from 'react-router-dom'
import SiteLayout from './layout/SiteLayout'
import AboutPage from './pages/AboutPage'
import CapabilitiesPage from './pages/CapabilitiesPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'
import HseCompliancePage from './pages/HseCompliancePage'
import OperationalExperiencePage from './pages/OperationalExperiencePage'
import ServicesPage from './pages/ServicesPage'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route
          path="operational-experience"
          element={<OperationalExperiencePage />}
        />
        <Route path="hse-compliance" element={<HseCompliancePage />} />
        <Route path="capabilities" element={<CapabilitiesPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
