// app/components/Drinks.ts
export const DRINKS = {
  latte: {
    label: 'Latte',
    video: '/models/latte/verdeLatte.webm',
  },
  // sumás acá cada bebida nueva con su .webm correspondiente
} as const

export type DrinkType = keyof typeof DRINKS