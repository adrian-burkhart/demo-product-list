import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { ProductList } from './product-list'
import { useFavorites } from '../hooks/use-favorites'

const MOCK_PRODUCTS = [
  {
    id: 1,
    title: 'Product 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    title: 'Product 2',
    price: 200,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Product 3',
    price: 300,
    image: 'https://via.placeholder.com/150',
  },
]

describe('ProductList', () => {
  render(<ProductList products={MOCK_PRODUCTS} />)

  const firstFavoriteButton = screen.getByRole('button', {
    name: `Add ${MOCK_PRODUCTS[0].title} to favorites`,
  })
  const secondFavoriteButton = screen.getByRole('button', {
    name: `Add ${MOCK_PRODUCTS[1].title} to favorites`,
  })

  it('should add a product to favorites', () => {
    fireEvent(
      firstFavoriteButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    fireEvent(
      secondFavoriteButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )

    const { retrieveFavorites } = useFavorites()
    const favorites = retrieveFavorites()
    expect(favorites).toEqual([{ id: 1 }, { id: 2 }])

    it('should remove a product from favorites', () => {
      fireEvent(
        firstFavoriteButton,
        new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
        })
      )
      const { retrieveFavorites } = useFavorites()
      const favorites = retrieveFavorites()
      expect(favorites).toEqual([{ id: 2 }])
    })
  })
})
