import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
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
    <div className={`App ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome to the Shopping App! Browse our products and add them to your cart. Use the filter to view products by category.
      </p>

      <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      <ProductList products={filteredProducts} addToCart={addToCart} />
      <Cart cart={cart} />
    </div>
  )
}

export default App
