import React, { useContext, useRef, useState } from 'react';
import CartContext from '../../CartContext';
import './AddtoCart.css'; 
import Model from '../Services/Model';

export default function AddtoCart() {
  const { cart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const modelref = useRef();

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity);
      return total + price * quantity;
    }, 0);
  };

  const checkout = () => {
    setShowModal(true); 
  };

  const closeModel = (e) => {
    if (modelref.current === e.target) {
      cosole.log('heelo')
      console.log(modolref.current);
      setShowModal(false);
    console.log(showModal);
    }
  };

  return (
    <div  className="body">
      <div ref={modelref} onClick={closeModel} className="cart-container">
        <h2>Cart:</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity} = {item.price * item.quantity}
            </li>
          ))}
        </ul>
        <p>Total: {calculateTotal()}</p>
        <button onClick={checkout}>Checkout</button>
      </div>

      {showModal && <Model />} 
    </div>
    
  );
}
