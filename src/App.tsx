import { Heading } from '@chakra-ui/react'
import './App.css'
import { ProductList } from './components/product-list'
import { FavoritesContextProvider } from './context/favorites'
import { useProducts } from './hooks/use-products'

function App() {
  const { errored, loading, products } = useProducts()

  return (
    <main className='App'>
      <FavoritesContextProvider>
        <Heading as='h1' mb={4}>
          Demo Product List
        </Heading>
        <ProductList errored={errored} loading={loading} products={products} />
      </FavoritesContextProvider>
    </main>
  )
}

export default App
