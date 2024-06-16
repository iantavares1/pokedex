"use client"

import { PokemonProps } from "@/types"
import { formatId, formatString } from "@/utils"
import Image from "next/image"
import { InfoModal } from "./InfoModal"
import { useCard } from "./hooks"

export function Card(props: PokemonProps) {
  const { id, imgPaths, name, types } = props
  const { openModal, handleOpenModal, handleCloseModal } = useCard()

  return (
    <>
      {types[0] && (
        <div
          className={`${types[0]}-background relative flex h-36 w-full cursor-pointer select-none flex-col items-center rounded-2xl`}
          onClick={handleOpenModal}
        >
          <Image
            className="pointer-events-none absolute -top-12 right-1/2 z-30 w-28 translate-x-1/2"
            width={0}
            height={0}
            sizes="100"
            src={(imgPaths[0] || imgPaths[1]) ?? ""}
            alt={name}
          />

          <div className="relative flex h-40 w-full flex-col items-center justify-end overflow-hidden rounded-2xl">
            <Image
              width={0}
              height={0}
              sizes="100"
              src="./poke-ball.svg"
              alt="PokeBall"
              className="absolute -right-16 -top-8 h-[150%] w-[150%] opacity-10"
            />

            <div className="text-bold flex flex-col items-center p-3 text-sm">
              <span className="text-2xl font-semibold leading-none">
                {formatString(name)}
              </span>

              <span className="font-semibold">{formatId(id)}</span>

              <span className="flex gap-1">
                <span className="flex items-center justify-center rounded-2xl bg-black/25 px-3 py-1 text-xs font-semibold">
                  {formatString(types[0])}
                </span>

                {types[1] && (
                  <span className="flex items-center justify-center rounded-2xl bg-black/25 px-3 py-1 text-xs font-semibold">
                    {formatString(types[1])}
                  </span>
                )}
              </span>
            </div>
          </div>
        </div>
      )}

      {openModal && <InfoModal onClose={handleCloseModal} pokemon={props} />}
    </>
  )
}
