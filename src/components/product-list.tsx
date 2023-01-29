import React from 'react'

import { FavoritesContext } from '../context/favorites'
import { useFavorites } from '../hooks/use-favorites'
import { ProductListItem } from './product-list-item'
import { ProductListUi } from '../ui/product-list'
import { Product } from '../hooks/use-products'

export const ProductList = ({
  errored = false,
  loading = false,
  products,
}: {
  errored?: boolean
  loading?: boolean
  products: Product[]
}) => {
  const { favorites, setFavorites } = React.useContext(FavoritesContext)
  const { retrieveFavorites } = useFavorites()

  // On mount, retrieve the favorites from localStorage
  React.useEffect(() => {
    const favorites = retrieveFavorites()
    setFavorites(favorites)
  }, [])

  return (
    (errored && <p>Something went wrong</p>) || (
      <ProductListUi>
        {products.map(product => (
          <ProductListItem
            isFavorite={favorites.some(favorite => favorite.id === product.id)}
            key={product.id}
            loading={loading}
            {...product}
          />
        ))}
      </ProductListUi>
    )
  )
}
