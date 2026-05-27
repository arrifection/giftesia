import { Link } from 'react-router-dom'
import { ArrowRight, Gift, Sparkles } from 'lucide-react'
import FeatureCard from '../components/FeatureCard'
import AIGiftAssistant from '../components/AIGiftAssistant'
import { featureCards } from '../data/dummyData'

export default function LandingPage() {
  return (
    <>
      <section className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pb-24 sm:pt-16 lg:px-8">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-rose-soft/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs font-medium text-gold-muted">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered gift assistant
            </div>

            <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight text-plum-deep sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
              Gift smarter.
              <br />
              <span className="bg-gradient-to-r from-plum via-plum-light to-gold-muted bg-clip-text text-transparent">
                Feel more thoughtful.
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-relaxed text-plum-light sm:text-lg">
              Describe someone&apos;s personality, relationship, and occasion — Giftesia suggests
              meaningful gifts, product links, birthday reminders, and beautiful personalized cards.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/find-gift"
                className="inline-flex items-center gap-2 rounded-full gradient-plum px-6 py-3 text-sm font-medium text-champagne shadow-soft transition-all hover:shadow-soft-lg hover:brightness-110"
              >
                Find a Gift
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/card"
                className="inline-flex items-center gap-2 rounded-full border border-rose-soft bg-white/60 px-6 py-3 text-sm font-medium text-plum-deep shadow-soft transition-all hover:border-gold/40 hover:bg-gold/5"
              >
                Create a Card
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-up stagger-2 opacity-0" style={{ animationFillMode: 'forwards' }}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rose-soft/30 via-champagne/40 to-gold/20 blur-xl" />

              <div className="relative overflow-hidden rounded-3xl border border-rose-soft/40 bg-white/50 p-6 shadow-soft-lg backdrop-blur-sm sm:p-8">
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-plum-deep">Today&apos;s picks</span>
                  <span className="rounded-full bg-gold/15 px-2.5 py-0.5 text-xs font-medium text-gold-muted">
                    Curated for you
                  </span>
                </div>

                <div className="space-y-3">
                  {[
                    { emoji: '🍵', name: 'Artisan Tea Set', price: '$48', tag: 'Cozy' },
                    { emoji: '📔', name: 'Leather Journal', price: '$38', tag: 'Creative' },
                    { emoji: '🌿', name: 'Herb Garden Kit', price: '$32', tag: 'Nature' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 rounded-xl border border-rose-soft/20 bg-cream/60 p-3 transition-all hover:border-gold/30 hover:shadow-soft"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-champagne to-rose-soft/40 text-xl">
                        {item.emoji}
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-plum-deep">{item.name}</p>
                        <p className="text-xs text-plum-light">{item.tag}</p>
                      </div>
                      <span className="font-elegant text-sm font-semibold text-plum">{item.price}</span>
                    </div>
                  ))}
                </div>

                <div className="animate-float absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-2xl gradient-gold shadow-soft-lg sm:-right-6 sm:-top-6 sm:h-20 sm:w-20">
                  <Gift className="h-8 w-8 text-plum-deep sm:h-9 sm:w-9" strokeWidth={1.5} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="font-display text-2xl font-semibold text-plum-deep sm:text-3xl">
              Everything you need to gift beautifully
            </h2>
            <p className="mt-2 text-sm text-plum-light sm:text-base">
              Thoughtful tools designed for meaningful moments
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((card, i) => (
              <FeatureCard key={card.id} {...card} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 text-center sm:mb-10">
            <h2 className="font-display text-2xl font-semibold text-plum-deep sm:text-3xl">
              AI Gift Assistant
            </h2>
            <p className="mt-2 text-sm text-plum-light sm:text-base">
              Chat with Giftesia for instant, personalized suggestions
            </p>
          </div>

          <div className="mx-auto max-w-2xl">
            <AIGiftAssistant compact />
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/assistant"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-plum hover:text-plum-deep"
            >
              Open full assistant
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl gradient-plum p-8 text-center shadow-soft-lg sm:p-12">
          <h2 className="font-display text-2xl font-semibold text-champagne sm:text-3xl">
            Ready to make someone feel special?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-champagne/80 sm:text-base">
            Start with a few details about who you&apos;re shopping for — we&apos;ll handle the rest.
          </p>
          <Link
            to="/find-gift"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-champagne px-6 py-3 text-sm font-medium text-plum-deep shadow-soft transition-all hover:bg-white"
          >
            Start Gift Finder
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
