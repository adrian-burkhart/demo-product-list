import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { ProductList } from '../product-list'
import { useFavorites } from '../../hooks/use-favorites'

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
  {
    id: 4,
    title: 'Product 4',
    price: 400,
    image: 'https://via.placeholder.com/150',
  },
]

describe('ProductList', () => {
  it('should add a product to favorites', () => {
    render(<ProductList productsState='success' products={MOCK_PRODUCTS} />)
    let firstFavoriteButton = screen.getByRole('button', {
      name: `Add ${MOCK_PRODUCTS[0].title} to favorites`,
    })
    const secondFavoriteButton = screen.getByRole('button', {
      name: `Add ${MOCK_PRODUCTS[1].title} to favorites`,
    })
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
    let favorites = retrieveFavorites()

    expect(favorites).toEqual([{ id: 1 }, { id: 2 }])
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'favorites',
      '[{"id":1},{"id":2}]'
    )

    fireEvent(
      firstFavoriteButton,
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      })
    )
    favorites = retrieveFavorites()

    expect(favorites).toEqual([{ id: 2 }])
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'favorites',
      '[{"id":2}]'
    )
  })
})
