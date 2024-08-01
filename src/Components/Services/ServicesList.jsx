// ServicesList.jsx
import React, { useState, useContext } from 'react';
import './Ui/Card.css';
import ServiceCard from './Ui/Card';
import './ServicesList.css';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../CartContext'; // Correct import

const ServiceList = ({ services }) => {
  const [counts, setCounts] = useState(services.map(() => 0));
  const { cart, setCart } = useContext(CartContext); // Access cart and setCart from context
  const navigate = useNavigate();

  const handleDecrement = (index, service) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = Math.max(newCounts[index] - 1, 0);
      return newCounts;
    });
    removeItemFromCart(service);
  };

  const handleIncrement = (index, service) => {
    setCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      newCounts[index] = newCounts[index] + 1;
      return newCounts;
    });
    addItemToCart(service);
  };

  const addItemToCart = (service) => {
    const existingItem = cart.find((item) => item.name === service.name);
    if (existingItem) {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        const index = newCart.indexOf(existingItem);
        newCart[index] = { ...existingItem, quantity: existingItem.quantity + 1 };
        return newCart;
      });
    } else {
      setCart((prevCart) => [...prevCart, { ...service, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (service) => {
    const existingItem = cart.find((item) => item.name === service.name);
    if (existingItem) {
      if (existingItem.quantity === 1) {
        setCart((prevCart) => prevCart.filter((item) => item.name !== service.name));
      } else {
        setCart((prevCart) => {
          const newCart = [...prevCart];
          const index = newCart.indexOf(existingItem);
          newCart[index] = { ...existingItem, quantity: existingItem.quantity - 1 };
          return newCart;
        });
      }
    }
  };

  return (
    <>
<div className="services-list d-flex flex-wrap">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          name={service.name}
          description={service.description}
          price={service.price}
          rating={service.rating}
          handleDecrement={() => handleDecrement(index, service)}
          handleIncrement={() => handleIncrement(index, service)}
          count={counts[index]}
        />
      ))}
    </div>
    <div className="button-container">
        <button className="btn btn-primary" onClick={() => navigate('/AddtoCart')}>
          View Cart
        </button>
      </div>
    </>
    // </div>
  );
};

export default ServiceList;
