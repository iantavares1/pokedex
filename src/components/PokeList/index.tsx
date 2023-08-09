import { usePokeList } from './hooks/usePokeList'

import { Skeleton } from '@mui/material'

import { Container } from '../common/Container'

import { PokeCard } from '../PokeCard'
import { Message } from '../common/Message'

type PokeListProps = {
  searchValue: string
}

export const PokeList = ({ searchValue }: PokeListProps) => {
  const { pokemons, isLoading } = usePokeList(searchValue)

  if (isLoading) {
    const skeletons = Array.from({ length: 150 }, (_, index) => (
      <Skeleton
        key={index}
        variant="rounded"
        sx={{
          bgcolor: '#444',
          borderRadius: '1rem',
          width: '100%',
          height: '9rem',
        }}
      />
    ))

    return <Container>{skeletons}</Container>
  }

  if (pokemons.length <= 0) {
    return (
      <Container display="flex">
        <Message>Pokemon Not Found!</Message>
      </Container>
    )
  }

  return (
    <Container>
      {pokemons?.map(
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
