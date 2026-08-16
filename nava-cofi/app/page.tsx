'use client'

import { Doto } from 'next/font/google'

const doto = Doto({
  subsets: ['latin'],
})

export default function Home() {
  return (
    <div className="min-h-screen flex bg-[#FBF8EF] text-black">
      <aside className=" w-18 shrink-0 border-r border-black flex flex-col justify-between p-1">
        {/* Logo + título MENÚ */}
        <div className="flex flex-col gap-6 items-center">
          <div className={`text-blue-600 text-xl leading-tight font-bold ${doto.className}`}>
            Nava<br />Cofi
          </div>
          <h1 className="text-6xl font-extrabold leading-[0.85] tracking-tight">
            {'MENU'.split('').map((letter, i) => (
              <span key={i} className="block">{letter}</span>
            ))}
          </h1>
        </div>

        {/* Recomendados, abajo */}
        <div className="flex flex-col items-center gap-4 text-blue-600">
          <span className={`${doto.className} [writing-mode:vertical-rl] rotate-180 text-2xl tracking-widest`}>
            Iced ★ Spanish Latte
          </span>
          <span className="[writing-mode:vertical-rl] rotate-180 text-3xl font-mono text-black">
            Recomendados
          </span>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <div id="menuSeleccion">
          <div id="canvas"></div>
        </div>
      </main>
    </div>
  )
}