import React from 'react'
import { ProductId } from './use-favorites'

const API_URL = 'https://fakestoreapi.com/products'

export interface Product extends ProductId {
  image: string
  price: number
  title: string
}

/**
 * A custom hook that fetches products from the fake store API.
 * @see https://fakestoreapi.com/
 * @return {Object} An object containing the products as well as the errored and loading states.
 */
export const useProducts = () => {
  const [loading, setLoading] = React.useState(false)
  const [errored, setErrored] = React.useState(false)
  const [products, setProducts] = React.useState<Product[]>([])

  const handleErrors = (response: Response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  }

  React.useEffect(() => {
    setLoading(true)
    fetch(API_URL)
      .then(handleErrors)
      .then(res => {
        return res.json()
      })
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false)
        setErrored(true)
      })
  }, [])

  return { errored, loading, products }
}
