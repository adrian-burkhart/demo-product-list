import React from 'react'

import { Product } from '../hooks/use-products'

import { ProductListItemUi } from '../ui/'
import { AddToFavoritesButton } from './add-to-favorites-button'

interface ProductListItemProps extends Product {
  isFavorite: boolean
  loading: boolean
  handleFavoriteClick: (id: number) => void
}

export const ProductListItem = ({
  id,
  isFavorite,
  handleFavoriteClick,
  price,
  title,
  ...listItemProps
}: ProductListItemProps) => {
  // Replace the locale code with undefined to use the browser's locale
  const formattedPrice = React.useMemo(() => {
    const formattedPrice = new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
    return formattedPrice
  }, [price])

  return (
    <ProductListItemUi
      formattedPrice={formattedPrice}
      {...listItemProps}
      title={title}
    >
      <AddToFavoritesButton
        handleFavoriteClick={handleFavoriteClick}
        id={id}
        isFavorite={isFavorite}
        title={title}
      />
    </ProductListItemUi>
  )
}
