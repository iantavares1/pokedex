import styled from '@emotion/styled'

import { usePokeList } from '../../hooks/usePokeList'

import { PokeCard } from '../PokeCard/index'

const Container = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13.5rem, 1fr));
  gap: 4rem 2rem;
`

type PokeListProps = {
  searchValue: string
}

export const PokeList = ({ searchValue }: PokeListProps) => {
  const pokemonData = usePokeList(searchValue)

  return (
    <Container>
      {pokemonData.map(
        (pokemon) =>
          pokemon.id < 1000 && (
            <PokeCard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
              secondaryType={pokemon.types[1]?.type.name}
              imgUrl={pokemon.sprites.other.home.front_default}
              secondaryImgUrl={pokemon.sprites.front_default}
            />
          ),
      )}
    </Container>
  )
}
