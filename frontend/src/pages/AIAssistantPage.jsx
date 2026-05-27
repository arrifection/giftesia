import { Sparkles } from 'lucide-react'
import AIGiftAssistant from '../components/AIGiftAssistant'

export default function AIAssistantPage() {
  return (
    <div className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-soft/30 px-3 py-1 text-xs font-medium text-plum">
            <Sparkles className="h-3.5 w-3.5" />
            AI Gift Assistant
          </div>
          <h1 className="font-display text-3xl font-semibold text-plum-deep sm:text-4xl">
            Chat with Giftesia
          </h1>
          <p className="mt-2 text-sm text-plum-light sm:text-base">
            Describe who you&apos;re shopping for and get instant, thoughtful gift suggestions.
          </p>
        </div>

        <AIGiftAssistant />
      </div>
    </div>
  )
}
