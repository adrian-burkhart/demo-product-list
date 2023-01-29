import { z } from 'zod'

const ProductIdSchema = z.object({
  id: z.number(),
})

export type ProductId = z.infer<typeof ProductIdSchema>

/**
 * A custom hook that manages the favorites in local storage.
 * @return {Object} An object containing functions add, remove and retrieve favorites.
 */
export const useFavorites = () => {
  return { retrieveFavorites, addToFavorites, removeFromFavorites }
}

const retrieveFavorites = (): ProductId[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

const updateFavorites = ({ favorites }: { favorites: ProductId[] }) => {
  localStorage.setItem('favorites', JSON.stringify(favorites))
}

const addToFavorites = ({
  product,
  setFavorites,
}: {
  product: ProductId
  setFavorites: (favorites: ProductId[]) => void
}) => {
  let favorites = retrieveFavorites()
  favorites.push(product)
  setFavorites(favorites)
  updateFavorites({ favorites })
}

const removeFromFavorites = ({
  product,
  setFavorites,
}: {
  product: ProductId
  setFavorites: (favorites: ProductId[]) => void
}) => {
  let favorites = retrieveFavorites()
  favorites = favorites.filter(
    (favorite: ProductId) => favorite.id !== product.id
  )
  setFavorites(favorites)
  updateFavorites({ favorites })
}
