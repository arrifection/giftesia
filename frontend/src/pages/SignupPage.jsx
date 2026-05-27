import { Link } from 'react-router-dom'
import { Gift, Mail, Lock, User } from 'lucide-react'

function AuthCard({ title, subtitle, children, footerText, footerLink, footerLabel }) {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl gradient-plum shadow-soft">
              <Gift className="h-5 w-5 text-champagne" />
            </div>
            <span className="font-display text-2xl font-semibold text-plum-deep">Giftesia</span>
          </Link>
        </div>

        <div className="rounded-2xl border border-rose-soft/30 bg-white/75 p-8 shadow-soft-lg backdrop-blur-sm">
          <h1 className="font-display text-2xl font-semibold text-plum-deep">{title}</h1>
          <p className="mt-1 text-sm text-plum-light">{subtitle}</p>
          {children}
        </div>

        <p className="mt-6 text-center text-sm text-plum-light">
          {footerText}{' '}
          <Link to={footerLink} className="font-medium text-plum hover:text-plum-deep">
            {footerLabel}
          </Link>
        </p>
      </div>
    </div>
  )
}

export default function SignupPage() {
  return (
    <AuthCard
      title="Create your account"
      subtitle="Join Giftesia and never gift without inspiration again"
      footerText="Already have an account?"
      footerLink="/login"
      footerLabel="Log in"
    >
      <form className="mt-6 space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-plum-light">
            Full name
          </label>
          <div className="relative">
            <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-plum-light/50" />
            <input
              id="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-rose-soft/40 bg-cream/50 py-3 pl-10 pr-4 text-sm focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-plum-light">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-plum-light/50" />
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-rose-soft/40 bg-cream/50 py-3 pl-10 pr-4 text-sm focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="mb-1.5 block text-xs font-medium text-plum-light">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-plum-light/50" />
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-xl border border-rose-soft/40 bg-cream/50 py-3 pl-10 pr-4 text-sm focus:border-gold/50 focus:ring-2 focus:ring-gold/20"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-full gradient-plum py-3 text-sm font-medium text-champagne shadow-soft transition-all hover:brightness-110"
        >
          Create account
        </button>
      </form>
    </AuthCard>
  )
}
