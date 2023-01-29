import './App.css'
import { ProductList } from './components/product-list'
import { FavoritesContextProvider } from './context/favorites'

function App() {
  return (
    <div className='App'>
      <FavoritesContextProvider>
        <ProductList />
      </FavoritesContextProvider>
    </div>
  )
}

export default App
