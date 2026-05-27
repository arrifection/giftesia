import { Bookmark } from 'lucide-react'
import GiftCard from '../components/GiftCard'
import { initialSavedGifts } from '../data/dummyData'

export default function SavedGiftsPage() {
  return (
    <div className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-rose-soft/30 px-3 py-1 text-xs font-medium text-plum">
            <Bookmark className="h-3.5 w-3.5" />
            Saved Gifts
          </div>
          <h1 className="font-display text-3xl font-semibold text-plum-deep sm:text-4xl">
            Your saved gift ideas
          </h1>
          <p className="mt-2 text-sm text-plum-light sm:text-base">
            Keep track of gifts you love — ready when you need them.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {initialSavedGifts.map((gift) => (
            <GiftCard key={gift.id} gift={gift} isSaved showActions />
          ))}
        </div>
      </div>
    </div>
  )
}
