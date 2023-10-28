import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { PokemonProps } from '../../types/pokemon/PokemonProps'
import { PokeInfo } from '.'

const pokemonInfo: PokemonProps = {
  id: 4,
  name: 'charmander',
  type: 'fire',
  imgUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/4.png',
}

describe('PokeInfo', () => {
  it('should render correctly', () => {
    const { imgUrl } = pokemonInfo

    const { getByText, getByAltText } = render(
      <PokeInfo
        onClose={() => console.log('')}
        open
        pokemonInfo={pokemonInfo}
      />,
    )

    expect(getByText('#004')).toBeInTheDocument()
    expect(getByText(/charmander/i)).toBeInTheDocument()
    expect(getByText(/fire/i)).toBeInTheDocument()

    expect(getByAltText(/charmander/i)).toBeInTheDocument()
    expect(getByAltText(/charmander/i)).toHaveAttribute('src', imgUrl)
  })
})
