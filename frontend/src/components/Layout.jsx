import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const location = useLocation()
  const isAuthPage = ['/login', '/signup'].includes(location.pathname)

  if (isAuthPage) {
    return (
      <div className="flex min-h-screen flex-col gradient-hero">
        <Outlet />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col gradient-hero">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
