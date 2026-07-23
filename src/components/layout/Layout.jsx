import { Outlet } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />

      <main className="flex-1">
        <div className="page-transition">
          <Outlet />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Layout