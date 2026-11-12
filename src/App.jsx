import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [shoppingCart, setShoppingCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  return (
    <div className={darkMode ? styles.darkMode : styles.lightMode}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList
        products={sampleProducts.filter(
          (product) =>
            selectedCategory === 'all' ||
            product.category === selectedCategory
        )}
        onAddToCart={(product) =>
          setShoppingCart((currentCart) => [...currentCart, product])
        }
      />

      <Cart shoppingCart={shoppingCart} />
    </div>
  )
}

export default App
