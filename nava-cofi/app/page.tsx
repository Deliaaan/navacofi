"use client";

import { useState } from "react";
import { Doto, Moirai_One, Jersey_10, Krona_One } from "next/font/google";
import RecommendedTicker from './components/sidebar/RecommendedTicker'
import DrinkMenu from './components/mainMenu/DrinkMenu'
import { DRINKS, DRINKS_BY_CATEGORY, DrinkType, Category } from './components/Drinks'

const doto = Doto({ subsets: ["latin"] });
const moirai = Moirai_One({ weight: "400" });
const jersey10 = Jersey_10({ subsets: ['latin'], weight: '400' })
const kronaOne = Krona_One({ weight: "400" });

export default function Home() {
  const [category, setCategory] = useState<Category>('caliente')

  // Una selección independiente por categoría, para no perder
  // qué bebida tenías elegida al ir y volver entre calientes/frías
  const [selections, setSelections] = useState<Record<Category, DrinkType>>({
    caliente: DRINKS_BY_CATEGORY.caliente[0],
    fria: DRINKS_BY_CATEGORY.fria[0],
  })

  const selectedDrink = selections[category]
  const drink = selectedDrink ? DRINKS[selectedDrink] : null

  const toggleCategory = () => {
    setCategory((prev) => (prev === 'caliente' ? 'fria' : 'caliente'))
  }

  return (
    <div className={`min-h-screen flex bg-cofi-green text-black ${category === 'fria' ? 'theme-fria' : ''}`}>
      <aside className="w-18 shrink-0 border-r border-black flex flex-col justify-between p-1 bg-cream">
        <div className="flex flex-col gap-6 items-center">
          <div className={`text-cofi-green text-xl leading-tight font-bold ${doto.className}`}>
            Nava
            <br />
            Cofi
          </div>
          <h1 className={`text-6xl leading-[0.85] tracking-tight font-normal text-menu-black ${moirai.className}`}>
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

      <main className="flex-1 overflow-hidden relative">
        <div
          className={`flex w-[200%] transition-transform duration-500 ease-in-out ${
            category === 'fria' ? '-translate-x-1/2' : 'translate-x-0'
          }`}
        >
          {/* Panel Calientes */}
          <div className="w-1/2 shrink-0 p-4">
            <div className="flex flex-row justify-between text-cream items-center gap-1 mb-8">
              <div className={`flex flex-row items-center justify-start ${kronaOne.className}`}>
                <h1 className="text-2xl">Bebidas <br /> Calientes</h1>
              </div>

              <button onClick={toggleCategory} className="flex flex-row items-center justify-end">
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
              </button>
            </div>

            <DrinkMenu
              category="caliente"
              selected={selections.caliente}
              onSelect={(d) => setSelections((s) => ({ ...s, caliente: d }))}
            />

            {category === 'caliente' && drink && (
              <>
                <div id="canvas">
                  <video
                    key={drink.video}
                    src={drink.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-cream text-lg mt-4">
                  <p className="font-bold text-2xl">Descripción:</p>
                  <p>{drink.description}</p>
                  <p>______________________________</p>
                  <p className="font-bold text-2xl">Dulzor:</p>
                  <p>{drink.dulzor}</p>
                </div>
              </>
            )}
          </div>

          {/* Panel Frías */}
          <div className="w-1/2 shrink-0 p-4">
            <div className="flex flex-row justify-between text-cream items-center gap-1 mb-8">
              <div className={`flex flex-row items-center justify-start ${kronaOne.className}`}>
                <h1 className="text-2xl">Bebidas <br /> Frías</h1>
              </div>

              <button onClick={toggleCategory} className="flex flex-row items-center justify-end">
                <div
                  className="bg-cream w-8 h-8 scale-140"
                  style={{
                    WebkitMaskImage: 'url(/img/fire.svg)',
                    maskImage: 'url(/img/fire.svg)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                  }}
                />
                <div
                  className="bg-cream w-8 h-8 scale-200 rotate-180"
                  style={{
                    WebkitMaskImage: 'url(/img/arrow.svg)',
                    maskImage: 'url(/img/arrow.svg)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat',
                    WebkitMaskSize: 'contain',
                    maskSize: 'contain',
                  }}
                />
              </button>
            </div>

            <DrinkMenu
              category="fria"
              selected={selections.fria}
              onSelect={(d) => setSelections((s) => ({ ...s, fria: d }))}
            />

            {category === 'fria' && drink && (
              <>
                <div id="canvas">
                  <video
                    key={drink.video}
                    src={drink.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col text-cream text-lg mt-4">
                  <p className="font-bold text-2xl">Descripción:</p>
                  <p>{drink.description}</p>
                  <p>______________________________</p>
                  <p className="font-bold text-2xl">Dulzor:</p>
                  <p>{drink.dulzor}</p>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}