import { Heading } from '@chakra-ui/react'
import './App.css'
import { ProductList } from './components/product-list'
import { useProducts } from './hooks/use-products'

function App() {
  const { productsState, products } = useProducts()

  return (
    <main className='App'>
      <Heading as='h1' mb={4}>
        Demo Product List
      </Heading>
      <ProductList productsState={productsState} products={products} />
    </main>
  )
}

export default App
