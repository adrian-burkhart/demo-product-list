import { StarIcon } from '@chakra-ui/icons'

export interface AddToFavoritesButtonUiProps {
  isFavorite?: boolean
  onClick: () => void
}

export const AddToFavoritesButtonUi = ({
  isFavorite = false,
  onClick,
}: AddToFavoritesButtonUiProps) => {
  return (
    <StarIcon
      aria-label='Add this product to Favorites'
      color={isFavorite ? 'red' : 'black'}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  )
}
