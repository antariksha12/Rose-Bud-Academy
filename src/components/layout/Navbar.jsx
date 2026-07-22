import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { FaFacebookF } from 'react-icons/fa'
import { AnimatePresence, motion } from 'framer-motion'
import RosebudMark from '../ui/RosebudMark.jsx'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Student Life', href: '/student-life' },
  { label: 'Contact', href: '/contact' },
  { label: 'Join Our Team', href: '/join-our-team' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/95 backdrop-blur-[2px] transition-shadow duration-300 ease-soft ${
        scrolled
          ? 'shadow-subtle border-b border-line'
          : 'border-b border-transparent'
      }`}
    >
      <nav
        className="container-content h-16 sm:h-20 lg:h-24 flex items-center justify-between"
        aria-label="Primary"
      >
        <NavLink
          to="/"
          className="flex items-center gap-3 text-primary shrink-0"
          onClick={() => setMenuOpen(false)}
        >
          <RosebudMark className="w-8 h-8 sm:w-9 sm:h-9" />
          <span className="font-heading text-base sm:text-lg font-semibold text-ink leading-none whitespace-nowrap">
            Rose Bud <span className="text-primary">Academy</span>
          </span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-body text-[15px] tracking-[0.01em] text-ink-soft hover:text-primary transition-colors duration-200 ease-soft"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Facebook */}
        <a
          href="https://www.facebook.com/share/1Ha5mYiQbA/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hidden lg:inline-flex items-center justify-center w-10 h-10 rounded-full text-ink-soft hover:text-[#1877F2] hover:bg-primary/5 transition-all duration-200"
        >
          <FaFacebookF className="w-5 h-5" />
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-1 text-ink"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? (
            <X size={24} strokeWidth={1.6} />
          ) : (
            <Menu size={24} strokeWidth={1.6} />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="lg:hidden overflow-y-auto max-h-[calc(100vh-4rem)] border-t border-line bg-paper"
          >
            <ul className="container-content py-6 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 font-body text-[17px] text-ink-soft hover:text-primary transition-colors duration-200 ease-soft border-b border-line last:border-none"
                  >
                    {link.label}
                  </a>
                </li>
              ))}

              <li className="pt-5 flex justify-center">
                <a
                  href="https://www.facebook.com/share/1Ha5mYiQbA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full text-ink-soft hover:text-[#1877F2] transition-colors duration-200"
                >
                  <FaFacebookF className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar