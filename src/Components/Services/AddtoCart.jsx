// AddtoCart.jsx
import React, { useContext } from 'react';
import CartContext from '../../CartContext';
import './AddtoCart.css'; 

export default function AddtoCart() {
  const { cart } = useContext(CartContext);

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);
      return total + price * quantity;
    }, 0);
  };

  return (
  <div className="body">

    <div className="cart-container">
      <h2>Cart:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} x {item.quantity} = {item.price * item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal()}</p>
    </div>
        </div>
  );
}
