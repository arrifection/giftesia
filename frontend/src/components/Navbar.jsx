import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Gift, Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/find-gift', label: 'Find a Gift' },
  { to: '/assistant', label: 'AI Assistant' },
  { to: '/card', label: 'Create a Card' },
  { to: '/reminders', label: 'Reminders' },
  { to: '/saved', label: 'Saved Gifts' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 glass shadow-soft">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <div className="flex h-9 w-9 items-center justify-center rounded-xl gradient-plum shadow-soft transition-transform group-hover:scale-105">
            <Gift className="h-4.5 w-4.5 text-champagne" strokeWidth={1.75} />
          </div>
          <span className="font-display text-xl font-semibold tracking-tight text-plum-deep">
            Giftesia
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 ${
                isActive(to)
                  ? 'bg-plum/10 text-plum-deep'
                  : 'text-plum-light hover:bg-rose-soft/30 hover:text-plum-deep'
              }`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            to="/login"
            className="rounded-full px-4 py-2 text-sm font-medium text-plum-light transition-colors hover:text-plum-deep"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="rounded-full gradient-plum px-4 py-2 text-sm font-medium text-champagne shadow-soft transition-all hover:shadow-soft-lg hover:brightness-110"
          >
            Sign up
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-plum md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-rose-soft/30 bg-cream/95 px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                  isActive(to) ? 'bg-plum/10 text-plum-deep' : 'text-plum-light hover:bg-rose-soft/20'
                }`}
              >
                {label}
              </Link>
            ))}
            <hr className="my-2 border-rose-soft/40" />
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-plum-light"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              onClick={() => setOpen(false)}
              className="rounded-xl gradient-plum px-4 py-3 text-center text-sm font-medium text-champagne"
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
