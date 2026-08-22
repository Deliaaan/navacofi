// app/components/Drinks.ts

export type Category = 'caliente' | 'fria'

export const DRINKS = {
  latte: {
    label: 'Latte',
    video: '/models/latte/verdeLatte.webm',
    dulzor: '■ ■ ■ □ □',
    description: 'Clasico café con leche, preparado con espresso y leche vaporizada. Proporcion 1 cafe : 2 leche',
    category: 'caliente',
  },
  flatWhite: {
    label: 'Flat White',
    video: '/models/latte/',
    dulzor: '■ ■ ■ □ □',
    description: 'Clasico café con leche, preparado con espresso y leche vaporizada. Proporcion 1 cafe : 2 leche',
    category: 'caliente',
  },
  capuchino: {
    label: 'Capuchino',
    video: '/models/latte/',
    dulzor: '■ ■ ■ □ □',
    description: 'Clasico café con leche, preparado con espresso y leche vaporizada. Proporcion 1 cafe : 2 leche',
    category: 'caliente',
  },
  moka: {
    label: 'Moka',
    video: '/models/latte/',
    dulzor: '■ ■ ■ □ □',
    description: 'Clasico café con leche, preparado con espresso y leche vaporizada. Proporcion 1 cafe : 2 leche',
    category: 'caliente',
  },
  latteEspanol: {
    label: 'Latte Español',
    video: '/models/latte/',
    dulzor: '■ ■ ■ □ □',
    description: 'Clasico café con leche, preparado con espresso y leche vaporizada. Proporcion 1 cafe : 2 leche',
    category: 'caliente',
  },
  americano: {
    label: 'Americano',
    video: '/models/latte/',
    dulzor: '■ ■ ■ □ □',
    description: 'Clasico café con leche, preparado con espresso y leche vaporizada. Proporcion 1 cafe : 2 leche',
    category: 'caliente',
  },

  // TODO: reemplazá estas por tus bebidas frías reales
  icedLatte: {
    label: 'Iced Latte',
    video: '/models/latte/',
    dulzor: '■ ■ □ □ □',
    description: 'Versión fría del latte clásico, servido con hielo.',
    category: 'fria',
  },

} as const

export type DrinkType = keyof typeof DRINKS

// Se calcula una sola vez al cargar el módulo, no en cada render
export const DRINKS_BY_CATEGORY: Record<Category, DrinkType[]> = {
  caliente: (Object.keys(DRINKS) as DrinkType[]).filter((k) => DRINKS[k].category === 'caliente'),
  fria: (Object.keys(DRINKS) as DrinkType[]).filter((k) => DRINKS[k].category === 'fria'),
}