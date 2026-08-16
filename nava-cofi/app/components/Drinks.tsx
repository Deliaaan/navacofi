export const DRINK_MODELS = {
  latte: '/models/latte/LatteV1.glb',
  // espresso: '/models/espresso/EspressoV1.glb',
  // capuchino: '/models/capuchino/CapuchinoV1.glb',
  // flatWhite: '/models/flat/FlatWhiteV1.glb',
} as const

export type DrinkType = keyof typeof DRINK_MODELS