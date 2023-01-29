import React from 'react'
import { useFavorites } from '../hooks/use-favorites'
import { FavoritesContext } from '../context/favorites'
import { AddToFavoritesButtonUi, AddToFavoritesButtonUiProps } from '../ui'

interface AddToFavoritesButtonProps
  extends Omit<AddToFavoritesButtonUiProps, 'onClick'> {
  id: number
}

export const AddToFavoritesButton = ({
  id,
  isFavorite = false,
}: AddToFavoritesButtonProps) => {
  const { addToFavorites, removeFromFavorites } = useFavorites()
  const { setFavorites } = React.useContext(FavoritesContext)

  const onClick = () => {
    if (isFavorite) {
      removeFromFavorites({
        product: { id },
        setFavorites,
      })
    } else {
      addToFavorites({
        product: { id },
        setFavorites,
      })
    }
  }

  return <AddToFavoritesButtonUi isFavorite={isFavorite} onClick={onClick} />
}
