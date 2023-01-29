import { StarIcon } from '@chakra-ui/icons'

export interface AddToFavoritesButtonUiProps {
  isFavorite?: boolean
  title: string
  onClick: () => void
}

export const AddToFavoritesButtonUi = ({
  isFavorite = false,
  title,
  onClick,
}: AddToFavoritesButtonUiProps) => {
  return (
    <StarIcon
      aria-label={`Add ${title} to favorites`}
      role='button'
      color={isFavorite ? 'red' : 'black'}
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    />
  )
}
