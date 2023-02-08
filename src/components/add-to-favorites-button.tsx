import { AddToFavoritesButtonUi, AddToFavoritesButtonUiProps } from '../ui'

interface AddToFavoritesButtonProps
  extends Omit<AddToFavoritesButtonUiProps, 'onClick'> {
  handleFavoriteClick: (id: number) => void
  id: number
}

export const AddToFavoritesButton = ({
  handleFavoriteClick,
  id,
  isFavorite = false,
  title,
}: AddToFavoritesButtonProps) => {
  const onClick = () => {
    handleFavoriteClick(id)
  }

  return (
    <AddToFavoritesButtonUi
      isFavorite={isFavorite}
      onClick={onClick}
      title={title}
    />
  )
}
