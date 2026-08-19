// app/components/Drinks.ts
export const DRINKS = {
  latte: {
    label: 'Latte',
    video: '/models/latte/verdeLatte.webm',
    description: 'Un clásico café con leche, suave y cremoso.',
  },
  flatWhite: {
    label: 'Flat White',
    video: '/models/latte/',
  },
  moka: {
    label: 'Moka',
    video: '/models/latte/',
  },
  americano: {
    label: 'Americano',
    video: '/models/latte/',
  },
  capuchino: {
    label: 'Capuchino',
    video: '/models/latte/',
  },
  latteEspanol: {
    label:'Latte Español',
    video: '/models/latte/',
  }
  
  // sumás acá cada bebida nueva con su .webm correspondiente
} as const

export type DrinkType = keyof typeof DRINKS