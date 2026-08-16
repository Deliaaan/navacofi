'use client'

import { Doto, Roboto} from 'next/font/google'

const doto = Doto({ subsets: ['latin'] })


const RECOMMENDED = [
    'Iced brown latte',
    'Spanish latte',
    'Moka',
    'Iced spanish latte'
]

export default function RecommendedTicker() {
    const items = [...RECOMMENDED, ...RECOMMENDED]

    return (
        <div className="h-116 overflow-hidden">
            <div className="ticker-track flex flex-col items-center gap-4">
                {items.map((drink, i) => (
                    <span
                        key={i}
                        className={`${doto.className} [writing-mode:vertical-rl] rotate-180 text-2xl tracking-widest text-blue-600`}
                        >
                            {drink} ✦ 
                    </span>
                ))}
            </div>
        </div>
    )
}