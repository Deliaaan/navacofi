"use client";

import { Doto, Moirai_One, Roboto } from "next/font/google";
import RecommendedTicker from './components/sidebar/RecommendedTicker'

const doto = Doto({
  subsets: ["latin"],
});

const moirai = Moirai_One({
  weight: "400",
});

const roboto = Roboto({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <div className="min-h-screen flex bg-[#FBF8EF] text-black">
      <aside className=" w-18 shrink-0 border-r border-black flex flex-col justify-between p-1">
        {/* Logo + título MENÚ */}
        <div className="flex flex-col gap-6 items-center">
          <div
            className={`text-blue-600 text-xl leading-tight font-bold ${doto.className}`}
          >
            Nava
            <br />  
            Cofi
          </div>
          <h1 className={`text-6xl leading-[0.85] tracking-tight font-normal ${moirai.className} `}>
            {"MENU".split("").map((letter, i) => (
              <span key={i} className="block">
                {letter}
              </span>
            ))}
          </h1>
        </div>

        {/* Recomendados, abajo */}
        <div className="flex flex-col items-center gap-4">
          <RecommendedTicker />
          <span className={`[writing-mode:vertical-rl] rotate-180 text-3xl font-bold text-black p-3 ${roboto.className}`}>
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
  );
}
