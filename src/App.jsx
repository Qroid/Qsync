import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './contexts/AuthContext'
import Home from './pages/Home'
import Plan from './pages/Plan'
import Payment from './pages/Payment'
import Success from './pages/Success'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Login from './pages/Login'
import AccountCreation from './pages/AccountCreation'
import DashboardLayout from './layouts/DashboardLayout'
import ProtectedRoute from './components/dashboard/ProtectedRoute'
import Overview from './pages/dashboard/Overview'
import LocationTracker from './pages/dashboard/LocationTracker'
import ActivityFeed from './pages/dashboard/ActivityFeed'
import SmsReader from './pages/dashboard/SmsReader'
import CallLog from './pages/dashboard/CallLog'
import NotificationHistory from './pages/dashboard/NotificationHistory'
import ScreenViewer from './pages/dashboard/ScreenViewer'
import AccountSettings from './pages/dashboard/AccountSettings'

const queryClient = new QueryClient()

export default function App() {
  const [activeSection, setActiveSection] = useState('overview')

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Marketing Routes */}
            <Route path="/" element={<Home activeSection={activeSection} setActiveSection={setActiveSection} />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/plan/:tier" element={<Plan />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/success" element={<Success />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />

            {/* Auth Route */}
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<AccountCreation />} />

            {/* Dashboard Routes (Protected) */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Overview />} />
              <Route path="overview" element={<Overview />} />
              <Route path="location" element={<LocationTracker />} />
              <Route path="activity" element={<ActivityFeed />} />
              <Route path="sms" element={<SmsReader />} />
              <Route path="calls" element={<CallLog />} />
              <Route path="notifications" element={<NotificationHistory />} />
              <Route path="screen" element={<ScreenViewer />} />
              <Route path="settings" element={<AccountSettings />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  )
}
