"use client"

import { PokemonProps } from "@/types"
import { formatId, formatString } from "@/utils"
import { useEffect, useState } from "react"

export function Card(props: PokemonProps) {
  const { id, imgPaths, name, types } = props
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"

      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setOpen(false)
        }
      }

      window.addEventListener("keydown", handleEsc)

      return () => {
        document.body.style.overflow = ""
        window.removeEventListener("keydown", handleEsc)
      }
    } else {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {types[0] && (
        <div
          className={`${types[0]}-background relative flex h-36 w-full cursor-pointer select-none flex-col items-center rounded-2xl`}
          onClick={() => setOpen(true)}
        >
          <img
            src={imgPaths[0] || imgPaths[1]}
            alt={name}
            className="pointer-events-none absolute -top-12 right-1/2 z-30 w-28 translate-x-1/2"
          />

          <div className="relative flex h-40 w-full flex-col items-center justify-end overflow-hidden rounded-2xl">
            <img
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

      {/* {open && <InfoModal onClose={() => setOpen(false)} pokemon={props} />} */}
    </>
  )
}
