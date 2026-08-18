
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
      onMouseEnter={() => {/* acá va el preload del modelo/webm, como charlamos antes */}}
      className={`text-2xl transition-colors ${
        isActive
          ? 'bg-cream text-cofi-green'
          : 'bg-cofi-green text-cream'
      }`}
    >
      {name}
    </button>
  )
}