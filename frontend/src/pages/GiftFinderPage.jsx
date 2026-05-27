import { useState } from 'react'
import { Sparkles } from 'lucide-react'
import StepForm from '../components/StepForm'
import GiftCard from '../components/GiftCard'
import { giftFinderSteps, dummyGiftResults } from '../data/dummyData'

export default function GiftFinderPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState(null)
  const [savedIds, setSavedIds] = useState(new Set())

  const handleChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleNext = () => setCurrentStep((s) => s + 1)
  const handleBack = () => setCurrentStep((s) => s - 1)

  const handleSubmit = () => {
    setLoading(true)
    setResults(null)
    setTimeout(() => {
      setLoading(false)
      setResults(dummyGiftResults)
    }, 2200)
  }

  const handleSave = (gift) => {
    setSavedIds((prev) => {
      const next = new Set(prev)
      if (next.has(gift.id)) next.delete(gift.id)
      else next.add(gift.id)
      return next
    })
  }

  const handleReset = () => {
    setCurrentStep(0)
    setFormData({})
    setResults(null)
    setSavedIds(new Set())
  }

  return (
    <div className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-soft/30 px-3 py-1 text-xs font-medium text-plum">
            <Sparkles className="h-3.5 w-3.5" />
            Gift Finder
          </div>
          <h1 className="font-display text-3xl font-semibold text-plum-deep sm:text-4xl">
            Find the perfect gift
          </h1>
          <p className="mt-2 text-sm text-plum-light sm:text-base">
            Answer a few questions — we&apos;ll suggest thoughtful ideas tailored to them.
          </p>
        </div>

        {!results && !loading && (
          <StepForm
            steps={giftFinderSteps}
            currentStep={currentStep}
            formData={formData}
            onChange={handleChange}
            onNext={handleNext}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        )}

        {loading && (
          <div className="mx-auto max-w-md rounded-2xl border border-rose-soft/30 bg-white/70 p-10 text-center shadow-soft">
            <div className="mx-auto mb-6 h-16 w-16 animate-shimmer rounded-2xl" />
            <div className="flex items-center justify-center gap-2">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-2 w-2 rounded-full bg-gold animate-pulse-soft"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
            <p className="mt-4 font-display text-lg font-medium text-plum-deep">
              Finding thoughtful gifts…
            </p>
            <p className="mt-1 text-sm text-plum-light">
              Matching personality, interests, and budget
            </p>
          </div>
        )}

        {results && (
          <div className="animate-fade-in-up">
            <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold text-plum-deep">
                  Your gift suggestions
                </h2>
                <p className="mt-1 text-sm text-plum-light">
                  {results.length} curated ideas based on what you shared
                </p>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="rounded-full border border-rose-soft px-4 py-2 text-sm font-medium text-plum-light transition-colors hover:border-gold/40 hover:text-plum-deep"
              >
                Start over
              </button>
            </div>

            <div className="grid gap-5">
              {results.map((gift) => (
                <GiftCard
                  key={gift.id}
                  gift={gift}
                  onSave={handleSave}
                  isSaved={savedIds.has(gift.id)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
