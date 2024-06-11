import { PokemonProps } from "@/types"

import { Details, MainInfo, Top } from "./components"
interface InfoModalProps {
  pokemon: PokemonProps
  onClose: () => void
}

export function InfoModal({ pokemon, onClose }: InfoModalProps) {
  return (
    <div
      className={`${pokemon.types[0]}-background fixed left-0 top-0 z-40 flex h-screen w-screen flex-col items-center bg-black/90 px-8 pt-8`}
    >
      <Top name={pokemon.name} onClose={onClose} />
      <MainInfo pokemon={pokemon} />
      <Details pokemon={pokemon} />
    </div>
  )
}
