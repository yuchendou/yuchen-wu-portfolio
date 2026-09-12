import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ScrollToTop } from './components/ScrollToTop'
import { Home } from './pages/Home'
import { AccessibleCamera } from './pages/projects/AccessibleCamera'
import { AIPrivacy } from './pages/projects/AIPrivacy'
import { FarmLink } from './pages/projects/FarmLink'
import { SecurityLab } from './pages/projects/SecurityLab'
import { YulonSecurity } from './pages/projects/YulonSecurity'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/farmlink" element={<FarmLink />} />
        <Route path="/projects/security-lab" element={<SecurityLab />} />
        <Route path="/projects/yulon-security" element={<YulonSecurity />} />
        <Route path="/projects/accessible-camera" element={<AccessibleCamera />} />
        <Route path="/projects/ai-privacy" element={<AIPrivacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
