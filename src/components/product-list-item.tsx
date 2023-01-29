import React from 'react'

import { Product } from '../hooks/use-products'

import { ProductListItemUi } from '../ui/'
import { AddToFavoritesButton } from './add-to-favorites-button'

interface ProductListItemProps extends Product {
  isFavorite: boolean
  loading: boolean
}

export const ProductListItem = ({
  id,
  isFavorite,
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
      title={title}
      {...listItemProps}
      formattedPrice={formattedPrice}
    >
      <AddToFavoritesButton id={id} isFavorite={isFavorite} title={title} />
    </ProductListItemUi>
  )
}
