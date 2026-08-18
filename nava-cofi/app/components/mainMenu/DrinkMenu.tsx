// app/components/mainMenu/DrinkMenu.tsx
'use client'

import DrinkButton from './DrinkButton'
import { DRINKS, DrinkType } from '../Drinks'

export default function DrinkMenu({
  selected,
  onSelect,
}: {
  selected: DrinkType
  onSelect: (drink: DrinkType) => void
}) {
  return (
    <div className="flex flex-col gap-2">
      {(Object.keys(DRINKS) as DrinkType[]).map((key) => (
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