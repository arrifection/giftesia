import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage'
import GiftFinderPage from './pages/GiftFinderPage'
import CardGeneratorPage from './pages/CardGeneratorPage'
import RemindersPage from './pages/RemindersPage'
import SavedGiftsPage from './pages/SavedGiftsPage'
import AIAssistantPage from './pages/AIAssistantPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="find-gift" element={<GiftFinderPage />} />
          <Route path="assistant" element={<AIAssistantPage />} />
          <Route path="card" element={<CardGeneratorPage />} />
          <Route path="reminders" element={<RemindersPage />} />
          <Route path="saved" element={<SavedGiftsPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
