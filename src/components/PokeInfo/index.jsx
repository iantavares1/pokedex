import { useState, useEffect, useContext } from 'react'

import * as S from './styles'

import { FavContext } from '../../contexts/favContext'

import { bgColors } from '../../utils/bgColors'
import { BackIcon } from '../common/BackIcon'
import { formatString } from '../../utils/formatString'
import { fetchPokemon } from '../../api/fetchPokemon'
import { formatId } from '../../utils/formatId'
import { typeIcons } from '../../utils/typeIcons'
import { HeartIcon } from '../common/HeartIcon'

export const PokeInfo = ({ info, isOpen }) => {
  const favoritesContext = useContext(FavContext)

  const { name, id, type, type2, imgUrl, imgUrl2 } = info
  const TypeIcon = typeIcons[type]
  const TypeIcon2 = typeIcons[type2]

  const [pokemon, setPokemon] = useState({})
  const [isFavorite, setIsFavorite] = useState(false)
  const [detailsPage, setDetailsPage] = useState('about')

  const loadIsFavorite = () =>
    setIsFavorite(!!favoritesContext.favorites.includes(name))

  const handleIsFavorite = () => {
    favoritesContext.updateFavorites(name)
    loadIsFavorite()
  }

  const handleClosePokeInfo = () => {
    isOpen(false)
  }

  const handleDetailsPage = (page) => setDetailsPage(page)

  useEffect(() => {
    loadIsFavorite()
  })

  useEffect(() => {
    const getPokemon = async () => {
      try {
        const response = await fetchPokemon(name)
        setPokemon(response)
      } catch (error) {
        console.log(`Erro: ${error}`)
      }
    }
    getPokemon()
  }, [isOpen, name])

  return (
    <S.Container bg={bgColors[type]}>
      <div className="top-buttons">
        <S.Button onClick={handleClosePokeInfo}>
          <BackIcon fill={'white'} />
        </S.Button>

        <S.Button onClick={handleIsFavorite}>
          <HeartIcon fill={isFavorite && 'white'} />
        </S.Button>
      </div>
      <TypeIcon />

      <S.Main>
        <div className="top">
          <h1>{formatString(name)}</h1>
          <span>{formatId(id)}</span>
        </div>
        <div className="types-wrapper">
          <S.Type bg={bgColors[type]}>
            <TypeIcon />
            {formatString(type)}
          </S.Type>
          {type2 && (
            <S.Type bg={bgColors[type2]}>
              <TypeIcon2 />
              {formatString(type2)}
            </S.Type>
          )}
        </div>
        <S.Img src={imgUrl || imgUrl2} />
      </S.Main>
      <S.DetailsWrapper>
        <header>
          <span className="buttons">
            <div className="button-wrapper">
              <S.DetailButton
                active={detailsPage === 'about'}
                onClick={() => handleDetailsPage('about')}
              >
                About
              </S.DetailButton>
            </div>
            <div className="button-wrapper">
              <S.DetailButton
                active={detailsPage === 'stats'}
                onClick={() => handleDetailsPage('stats')}
              >
                Stats
              </S.DetailButton>
            </div>
            <div className="button-wrapper">
              <S.DetailButton
                active={detailsPage === 'evolution'}
                onClick={() => handleDetailsPage('evolution')}
              >
                Evolution
              </S.DetailButton>
            </div>
          </span>
        </header>
        {detailsPage === 'about' && (
          <S.Details>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span className="metrics">
              <div className="height">
                <span>Height</span>
                <span>{pokemon.height / 10}m</span>
              </div>
              <div className="weight">
                <span>Weight</span>
                <span>{pokemon.weight / 10}Kg</span>
              </div>
            </span>
          </S.Details>
        )}
        {detailsPage === 'stats' && <S.Details>oi</S.Details>}
        {detailsPage === 'evolution' && <S.Details>Seila</S.Details>}
      </S.DetailsWrapper>
    </S.Container>
  )
}
