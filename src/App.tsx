import './App.css'
import { ProductList } from './components/product-list'
import { FavoritesContextProvider } from './context/favorites'
import { useProducts } from './hooks/use-products'

function App() {
  const { errored, loading, products } = useProducts()

  return (
    <div className='App'>
      <FavoritesContextProvider>
        <ProductList errored={errored} loading={loading} products={products} />
      </FavoritesContextProvider>
    </div>
  )
}

export default App
