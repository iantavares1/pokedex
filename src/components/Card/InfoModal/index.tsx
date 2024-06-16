import { PokemonProps } from "@/types"

import { Details, MainInfo, Top } from "./components"
interface InfoModalProps {
  pokemon: PokemonProps
  onClose: () => void
}

export function InfoModal({ pokemon, onClose }: InfoModalProps) {
  return (
    <div
      className={
        "fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center bg-black/50"
      }
    >
      <div
        className={`${pokemon.types[0]}-background flex h-full w-full max-w-[48rem] flex-col items-center px-8 pt-8 md:h-[24rem] md:w-[90%] md:flex-row md:overflow-hidden md:rounded-2xl md:p-0`}
      >
        <div className="w-full md:w-auto md:flex-1 md:self-start md:p-4">
          <Top name={pokemon.name} onClose={onClose} />
          <MainInfo pokemon={pokemon} />
        </div>
        <Details pokemon={pokemon} />
      </div>
    </div>
  )
}
