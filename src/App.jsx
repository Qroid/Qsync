import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Home from './pages/Home'
import Plan from './pages/Plan'
import Payment from './pages/Payment'
import Success from './pages/Success'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'

const queryClient = new QueryClient()

export default function App() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home activeSection={activeSection} setActiveSection={setActiveSection} />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/plan/:tier" element={<Plan />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/success" element={<Success />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}
