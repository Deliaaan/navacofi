
'use client'

export default function DrinkButton({
  name,
  isActive,
  onSelect,
}: {
  name: string
  isActive: boolean
  onSelect: () => void
}) {
  return (
    <button
      onClick={onSelect}
      className={`text-2xl transition-colors rounded-4xl w-fit p-3 h-fit item-center ${
        isActive
          ? 'bg-cream text-cofi-green'
          : 'bg-cofi-green text-cream'
      }`}
    >
      {name}
    </button>
  )
}