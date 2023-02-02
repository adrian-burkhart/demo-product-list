import React from 'react'
import { ProductId } from '../hooks/use-favorites'

interface FavoritesContextState {
  favorites: ProductId[]
  setFavorites: React.Dispatch<React.SetStateAction<ProductId[]>>
}

export const FavoritesContext = React.createContext<FavoritesContextState>({
  favorites: [],
  setFavorites: () => {},
})

interface FavoritesContextProviderProps {
  children: React.ReactNode
}

export const FavoritesContextProvider = ({
  children,
}: FavoritesContextProviderProps) => {
  const [favorites, setFavorites] = React.useState<ProductId[]>([])

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  )
}
