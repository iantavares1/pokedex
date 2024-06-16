"use client"

import { PokemonProps } from "@/types"
import { formatString } from "@/utils"
import { CSSProperties } from "react"
import { useDetails } from "./hooks"

export function Details({ pokemon }: { pokemon: PokemonProps }) {
  const { details, section, description, handleChangeSection } = useDetails(
    pokemon.name,
    pokemon.id,
  )

  return (
    details && (
      <div className="relative mt-28 flex h-full w-screen flex-col gap-8 rounded-t-3xl bg-black p-8 xsHeight:mt-16 xsHeight:gap-6 md:m-0 md:flex-1 md:gap-6 md:rounded-none">
        <div className="absolute -top-36 left-1/2 z-[999] h-40 -translate-x-1/2 sm:-top-40 sm:h-48 md:-left-24 md:bottom-4 md:top-auto md:h-52">
          <img
            className="h-full w-full"
            src={pokemon.imgPaths[0] || pokemon.imgPaths[1]}
            alt={pokemon.name}
          />
        </div>

        <div className="flex min-w-full justify-between">
          <button
            className={`cursor-pointer text-sm ${section === 0 && "border-b-[0.25rem] font-bold"}`}
            onClick={() => handleChangeSection(0)}
          >
            About
          </button>

          <button
            className={`cursor-pointer text-sm ${section === 1 && "border-b-[0.25rem] font-bold"}`}
            onClick={() => handleChangeSection(1)}
          >
            Stats
          </button>
        </div>

        {section === 0 && (
          <>
            <span>{description}</span>
            {pokemon && (
              <div
                className={`${pokemon.types[0]}-background flex justify-between rounded-lg p-4`}
              >
                <div className="flex gap-2 text-sm font-semibold">
                  <span>Height</span>
                  <span>{details.height / 10}m</span>
                </div>

                <div className="flex gap-2 text-sm font-semibold">
                  <span>Weight</span>
                  <span>{details.weight / 10}kg</span>
                </div>
              </div>
            )}
          </>
        )}

        {section === 1 && (
          <>
            {details?.stats?.map((stat, i) => (
              <div key={i} className="flex items-center justify-between">
                <span>
                  {stat.stat.name.includes("special")
                    ? stat.stat.name
                        .replace("-", " ")
                        .replace("special", "Sp.")
                        .replace("attack", "Atk")
                        .replace("defense", "Def")
                    : formatString(stat.stat.name)}
                </span>

                <div className="relative ml-6 h-[0.6rem] w-[70%] overflow-hidden rounded-2xl bg-slate-900">
                  <div className={`absolute h-full w-full `} />

                  <div
                    className={`h-full animate-grow ${
                      pokemon.types[0] !== "dark"
                        ? `${pokemon.types[0]}-background`
                        : "bg-[#808080]"
                    }`}
                    style={
                      {
                        "--target-width": `calc(${stat.base_stat}% * 0.5`,
                      } as CSSProperties
                    }
                  />
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    )
  )
}
