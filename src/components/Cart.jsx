import React from 'react'

const Cart = ({ shoppingCart = [] }) => {
  return (
    <div>
      <h2>Shopping Cart ({shoppingCart.length})</h2>
      <ul>
        {shoppingCart.map((item) => (
          <li key={item.id}>{item.name} is in your cart.</li>
        ))}
      </ul>
    </div>
  )
}

export default Cart
