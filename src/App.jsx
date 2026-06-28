import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'sonner'
import { AuthProvider } from '@/contexts/AuthContext'
import { ScrollToTop } from '@/components/ScrollToTop'
import { Home } from '@/pages/Home'
import { Layout } from '@/pages/Layout'
import { Terms } from '@/pages/Terms'
import { Privacy } from '@/pages/Privacy'
import { Refund } from '@/pages/Refund'
import { Plan } from '@/pages/Plan'
import { Payment } from '@/pages/Payment'
import { Success } from '@/pages/Success'

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/payment" element={<Payment />} />
            <Route element={<Layout />}>
              <Route path="/plan" element={<Plan />} />
              <Route path="/plan/:tier" element={<Plan />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/refund" element={<Refund />} />
            </Route>
          </Routes>
          <Toaster position="top-right" richColors />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider>
  )
}
