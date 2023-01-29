import React from 'react'

import { FavoritesContext } from '../context/favorites'
import { useFavorites } from '../hooks/use-favorites'
import { ProductListItem } from './product-list-item'
import { ProductListUi } from '../ui/product-list'
import { Product } from '../hooks/use-products'
import { SortSelector } from './sort-selector'

type SortMethod = 'ascending' | 'descending' | 'default'

export const ProductList = ({
  errored = false,
  loading = false,
  products,
}: {
  errored?: boolean
  loading?: boolean
  products: Product[]
}) => {
  const [selectedSortMethod, setSelectedSortMethod] =
    React.useState<SortMethod>('default')
  const { favorites, setFavorites } = React.useContext(FavoritesContext)
  const { retrieveFavorites } = useFavorites()

  // On mount, retrieve the favorites from localStorage
  React.useEffect(() => {
    const favorites = retrieveFavorites()
    setFavorites(favorites)
  }, [])

  const sortedProducts = React.useMemo(() => {
    let sortedProducts = [...products]
    if (selectedSortMethod === 'ascending') {
      return sortedProducts.sort((a, b) => a.price - b.price)
    }
    if (selectedSortMethod === 'descending') {
      return sortedProducts.sort((a, b) => b.price - a.price)
    }
    return sortedProducts
  }, [products, selectedSortMethod])

  return (
    (errored && <p>Something went wrong</p>) || (
      <>
        <SortSelector
          selectedSortMethod={selectedSortMethod}
          setSelectedSortMethod={setSelectedSortMethod}
        />
        <ProductListUi>
          {sortedProducts.map(product => (
            <ProductListItem
              isFavorite={favorites.some(
                favorite => favorite.id === product.id
              )}
              key={product.id}
              loading={loading}
              {...product}
            />
          ))}
        </ProductListUi>
      </>
    )
  )
}
