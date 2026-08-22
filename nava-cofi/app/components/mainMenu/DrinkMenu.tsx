// app/components/mainMenu/DrinkMenu.tsx
'use client'

import DrinkButton from './DrinkButton'
import { DRINKS, DRINKS_BY_CATEGORY, DrinkType, Category } from '../Drinks'

export default function DrinkMenu({
  category,
  selected,
  onSelect,
}: {
  category: Category
  selected: DrinkType
  onSelect: (drink: DrinkType) => void
}) {
  const items = DRINKS_BY_CATEGORY[category]

  if (items.length === 0) {
    return <p className="text-cream/60 text-sm">Todavía no hay bebidas cargadas acá.</p>
  }

  return (
    <div className="flex flex-wrap gap-1">
      {items.map((key) => (
        <DrinkButton
          key={key}
          name={DRINKS[key].label}
          isActive={selected === key}
          onSelect={() => onSelect(key)}
        />
      ))}
    </div>
  )
}