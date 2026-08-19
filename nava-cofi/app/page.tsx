"use client";

import { useState } from "react";
import { Doto, Moirai_One, Jersey_10, Krona_One } from "next/font/google";
import RecommendedTicker from './components/sidebar/RecommendedTicker'
import DrinkMenu from './components/mainMenu/DrinkMenu'
import { DRINKS, DrinkType } from './components/Drinks'

const doto = Doto({ subsets: ["latin"] });
const moirai = Moirai_One({ weight: "400" });
const jersey10 = Jersey_10({ subsets: ['latin'], weight: '400' })
const kronaOne = Krona_One({ weight: "400" });


export default function Home() {

  const [selectedDrink, setSelectedDrink] = useState<DrinkType>('latte')

  return (
    <div className="min-h-screen flex bg-cofi-green text-black">
      <aside className="w-18 shrink-0 border-r border-black flex flex-col justify-between p-1 bg-cream">
        <div className="flex flex-col gap-6 items-center">
          <div className={`text-cofi-green text-xl leading-tight font-bold ${doto.className}`}>
            Nava
            <br />
            Cofi
          </div>
          <h1 className={`text-6xl leading-[0.85] tracking-tight font-normal text-black ${moirai.className}`}>
            {"MENU".split("").map((letter, i) => (
              <span key={i} className="block">{letter}</span>
            ))}
          </h1>
        </div>

        <div className="flex flex-col items-center gap-4">
          <RecommendedTicker />
          <span className={`[writing-mode:vertical-rl] rotate-180 text-3xl font-bold text-cofi-green p-3 ${jersey10.className}`}>
            Favoritos:
          </span>
        </div>
      </aside>

      <main className="flex-1 p-4">
        <div className="flex flex-row justify-between text-cream items-center gap-1 mb-8">
          <div className={`flex flex-row items-center justify-start ${kronaOne.className}`}>
            <h1 className={`text-2xl`}>Bebidas <br /> Calientes</h1>
          </div>

          <div className="flex flex-row items-center justify-end">
            <div
              className="bg-cream w-8 h-8 scale-140"
              style={{
                WebkitMaskImage: 'url(/img/ice.svg)',
                maskImage: 'url(/img/ice.svg)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
              }}
            />
            <div
              className="bg-cream w-8 h-8 scale-200"
              style={{
                WebkitMaskImage: 'url(/img/arrow.svg)',
                maskImage: 'url(/img/arrow.svg)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
              }}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <DrinkMenu selected={selectedDrink} onSelect={setSelectedDrink} />
        </div>

        <div id="canvas">
          <video
            key={DRINKS[selectedDrink].video}
            src={DRINKS[selectedDrink].video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover place-items-center"
          />
        </div>
      </main>
    </div>
  );
}