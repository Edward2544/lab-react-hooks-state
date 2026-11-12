import React from 'react'

const Cart = ({ shoppingCart = [] }) => {
  return (
    <div>
      <h2>Shopping Cart ({shoppingCart.length})</h2>
      <ul>
        {shoppingCart.map((item, index) => (
          <li key={item.id ?? index}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
