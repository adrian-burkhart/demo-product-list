import { Flex } from '@chakra-ui/react'
import React from 'react'

import { FavoritesContext } from '../context/favorites'
import { useProducts } from '../hooks/use-products'
import { useFavorites } from '../hooks/use-favorites'
import { ListItem } from '../ui/list-item'

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
      <>
        <Flex
          align='center'
          direction={'row'}
          gap='1rem'
          justify={'center'}
          wrap='wrap'
        >
          {products.map(product => (
            <ListItem
              isFavorite={favorites.some(
                favorite => favorite.id === product.id
              )}
              key={product.id}
              loading={loading}
              {...product}
            />
          ))}
        </Flex>
      </>
    )
  )
}
