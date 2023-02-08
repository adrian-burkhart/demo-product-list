import React from 'react'

import { useFavorites } from '../hooks/use-favorites'
import { ProductListItem } from './product-list-item'
import { ProductListUi } from '../ui/product-list'
import { Product, ProductsState } from '../hooks/use-products'
import { SortMethod, SortSelector } from './sort-selector'
import { FilterMethod, FilterSelector } from './filter-selector'
import { SelectorUiProps } from '../ui'
import { Heading } from '@chakra-ui/react'

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
  products,
  productsState,
}: {
  products: Product[]
  productsState: ProductsState
}) => {
  const [selectedSortMethod, setSelectedSortMethod] =
    React.useState<SortMethod>('default')
  const [selectedFilterMethod, setSelectedFilterMethod] =
    React.useState<FilterMethod>('default')

  const { addToFavorites, removeFromFavorites, retrieveFavorites } =
    useFavorites()

  const favoritesFromLocalStorage = retrieveFavorites()
  const [favorites, setFavorites] = React.useState(favoritesFromLocalStorage)

  const handleFavoriteClick = (id: number) => {
    const isFavorite = favorites.some(favorite => favorite.id === id)
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
    (productsState === 'errored' && <p>Something went wrong</p>) || (
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
          {filteredProducts.length === 0 ? (
            <Heading my={40}>Keine Produkte gefunden</Heading>
          ) : (
            filteredProducts.map(product => (
              <ProductListItem
                isFavorite={favorites.some(
                  favorite => favorite.id === product.id
                )}
                handleFavoriteClick={handleFavoriteClick}
                key={product.id}
                loading={productsState === 'loading'}
                {...product}
              />
            ))
          )}
        </ProductListUi>
      </>
    )
  )
}
