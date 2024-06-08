"use client"

import { Top } from "@/components"

export default function Favorites() {
  return (
    <>
      <Top />
    </>
  )
}

// const { favorites } = useContext(FavoritesContext)

// const [pokemonData, setPokemonData] = useState<Pokemon[] | null>(null)

// useEffect(() => {
//   if (favorites.length > 0) {
//     const getPokemonData = async () => {
//       const response = favorites.map((name) => fetchPokemon(name))
//       const pokemons = await Promise.all(response)
//       setPokemonData(pokemons)
//     }
//     getPokemonData()
//   }
//   setPokemonData(null)
// }, [favorites])

// return (
//   <Page>
//     <Header>
//       <Button
//         onClick={() => onOpen('home')}
//         sx={{ minWidth: 'fit-content', padding: 0 }}
//       >
//         <ArrowBackIosTwoTone sx={{ fontSize: 30, color: '#fff' }} />
//       </Button>
//       <Typography
//         variant="h2"
//         style={{ fontSize: '2.6rem', fontWeight: 600 }}
//       >
//         Favorites
//       </Typography>
//     </Header>
//     {pokemonData && (
//       <Container display="flex" style={{ paddingTop: '1rem' }}>
//         {pokemonData.map(
//           (pokemon) =>
//             pokemon.id < 1000 && (
//               <PokeCard
//                 key={pokemon.id}
//                 id={pokemon.id}
//                 name={pokemon.name}
//                 type={pokemon.types[0].type.name}
//                 secondaryType={pokemon.types[1]?.type.name}
//                 imgUrl={pokemon.sprites.other.home.front_default}
//                 secondaryImgUrl={pokemon.sprites.front_default}
//               />
//             ),
//         )}
//       </Container>
//     )}
//     {!pokemonData && (
//       <Container display="flex">
//         <Message>No Favorite Pokemons!</Message>
//       </Container>
//     )}
//   </Page>
