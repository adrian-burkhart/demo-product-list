import React from 'react'
import { z } from 'zod'

const API_URL = 'https://fakestoreapi.com/products'

const ProductSchema = z.object({
  id: z.number(),
  image: z.string(),
  price: z.number(),
  title: z.string(),
})

export type Product = z.infer<typeof ProductSchema>

export type ProductsState = 'loading' | 'errored' | 'success' | undefined
/**
 * A custom hook that fetches products from the fake store API.
 * @see https://fakestoreapi.com/
 * @return {Object} An object containing the products as well as the errored and loading states.
 */
export const useProducts = () => {
  const [productsState, setProductsState] =
    React.useState<ProductsState>(undefined)

  const [products, setProducts] = React.useState<Product[]>([])

  const handleErrors = (response: Response) => {
    if (!response.ok) {
      throw Error(response.statusText)
    }
    return response
  }

  React.useEffect(() => {
    setProductsState('loading')
    fetch(API_URL)
      .then(handleErrors)
      .then(res => {
        return res.json()
      })
      .then(data => {
        const parsedData = z.array(ProductSchema).parse(data)
        setProducts(parsedData)
        setProductsState('success')
      })
      .catch(e => {
        setProductsState('errored')
      })
  }, [])

  return { productsState, products }
}
