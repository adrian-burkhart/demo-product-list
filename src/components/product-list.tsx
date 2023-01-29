import React from 'react'

import { FavoritesContext } from '../context/favorites'
import { useProducts } from '../hooks/use-products'
import { useFavorites } from '../hooks/use-favorites'
import { ProductListItem } from './product-list-item'
import { ProductListUi } from '../ui/product-list'

export const ProductList = () => {
  const { errored, loading, products } = useProducts()

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
