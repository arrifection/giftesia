import { Link } from 'react-router-dom'
import { Gift, Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-rose-soft/30 bg-cream-dark/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-plum">
                <Gift className="h-4 w-4 text-champagne" strokeWidth={1.75} />
              </div>
              <span className="font-display text-lg font-semibold text-plum-deep">Giftesia</span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-plum-light">
              Thoughtful gifting, powered by AI. Find the perfect present and create beautiful moments.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-plum">Explore</h4>
            <ul className="mt-4 space-y-2.5">
              {[
                { to: '/find-gift', label: 'Gift Finder' },
                { to: '/assistant', label: 'AI Assistant' },
                { to: '/card', label: 'Card Generator' },
                { to: '/reminders', label: 'Reminders' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-sm text-plum-light transition-colors hover:text-plum-deep">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-plum">Account</h4>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link to="/saved" className="text-sm text-plum-light transition-colors hover:text-plum-deep">
                  Saved Gifts
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-sm text-plum-light transition-colors hover:text-plum-deep">
                  Log in
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-sm text-plum-light transition-colors hover:text-plum-deep">
                  Sign up
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-plum">Made with care</h4>
            <p className="mt-4 flex items-center gap-1.5 text-sm text-plum-light">
              <Heart className="h-3.5 w-3.5 fill-rose-muted text-rose-muted" />
              For thoughtful gift-givers everywhere
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-rose-soft/20 pt-8 sm:flex-row">
          <p className="text-xs text-plum-light/80">
            &copy; {new Date().getFullYear()} Giftesia. All rights reserved.
          </p>
          <p className="text-xs text-plum-light/60">Frontend preview — no backend connected yet.</p>
        </div>
      </div>
    </footer>
  )
}
