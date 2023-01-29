import React from 'react'
import { StarIcon } from '@chakra-ui/icons'
import { ProductId, useFavorites } from '../hooks/use-favorites'
import { FavoritesContext } from '../context/favorites'

export const AddToFavoritesButton = ({
  id,
  isFavorite,
}: {
  id: ProductId
  isFavorite: boolean
}) => {
  const { addToFavorites, removeFromFavorites } = useFavorites()
  const { setFavorites } = React.useContext(FavoritesContext)

  const onClick = () => {
    if (isFavorite) {
      removeFromFavorites({
        product: id,
        setFavorites,
      })
    } else {
      addToFavorites({
        product: id,
        setFavorites,
      })
    }
  }

  return (
    <StarIcon
      aria-label='Add this product to Favorites'
      color={isFavorite ? 'red' : 'black'}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  )
}
