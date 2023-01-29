import React from 'react'

import { FavoritesContext } from '../context/favorites'
import { useFavorites } from '../hooks/use-favorites'
import { ProductListItem } from './product-list-item'
import { ProductListUi } from '../ui/product-list'
import { Product } from '../hooks/use-products'
import { SortMethod, SortSelector } from './sort-selector'
import { FilterMethod, FilterSelector } from './filter-selector'
import { SelectorUiProps } from '../ui'

const sortOptions: SelectorUiProps['options'] = [
  { label: 'Standard', value: 'default' },
  { label: 'Preis: Aufsteigend', value: 'ascending' },
  { label: 'Preis: Absteigend', value: 'descending' },
]

const sortLabel = 'Sortieren nach:'

const filterOptions: SelectorUiProps['options'] = [
  { label: 'Alle Produkte', value: 'default' },
  { label: 'Nur Favoriten', value: 'favorites' },
]

const filterLabel = 'Filtern:'

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
  const [selectedFilterMethod, setSelectedFilterMethod] =
    React.useState<FilterMethod>('default')

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

  const filteredProducts = React.useMemo(() => {
    if (selectedFilterMethod === 'favorites') {
      return sortedProducts.filter(product =>
        favorites.some(favorite => favorite.id === product.id)
      )
    }
    return sortedProducts
  }, [favorites, selectedFilterMethod, sortedProducts])

  return (
    (errored && <p>Something went wrong</p>) || (
      <>
        <SortSelector
          label={sortLabel}
          options={sortOptions}
          selectedSortMethod={selectedSortMethod}
          setSelectedSortMethod={setSelectedSortMethod}
        />
        <FilterSelector
          label={filterLabel}
          options={filterOptions}
          selectedFilterMethod={selectedFilterMethod}
          setSelectedFilterMethod={setSelectedFilterMethod}
        />
        <ProductListUi>
          {filteredProducts.map(product => (
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
