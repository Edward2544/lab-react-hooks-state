import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'
import './App.css'

const App = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [cart, setCart] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product])
  }

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  return (
    <div className={`${styles[darkMode ? 'darkMode' : 'lightMode']} App`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome to the Shopping App! Browse our products and add them to your cart. Use the filter to view products by category.
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

      <ProductList products={filteredProducts} onAddToCart={addToCart} />
      <Cart shoppingCart={cart} />
    </div>
  )
}

export default App
