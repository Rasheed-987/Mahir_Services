import React, { useState } from 'react';
import './Ui/Card.css';
import ServiceCard from './Ui/Card';
import './ServicesList.css';

const ServiceList = ({ services }) => {
  const [counts, setCounts] = useState(services.map(()=>0));
  // const [Cart,setCart]=useState({});
  console.log(counts);

const handleDecrement = (index) => {
  console.log(index);
  setCounts((prevCounts) => {
    const newCounts = [...prevCounts];
    newCounts[index] = Math.max(newCounts[index] - 1, 0); 
    return newCounts;
  });
addCart();
};


  const handleIncrement = (index) => {
    setCounts((prevCounts) => {
      const newCounts=[ ...prevCounts];  
      newCounts[index]=Math.max(newCounts[index]+1);
       return newCounts;
  });
  addCart();
  };

  // const addCart=()=>{
  //   const cart={};
  //   for(let i=0;i<services.length;i++){
  //     if(counts[i]>0){
  //       cart[services[i].name]=counts[i];
  //     }
  //   }
  //   setCart(cart);
  //   console.log(cart);
  // }
  return (
    <div className="services-list d-flex flex-wrap">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          image={service.image}
          name={service.name}
          description={service.description}
          price={service.price}
          rating={service.rating}
          handleDecrement={() => handleDecrement(index)}
          handleIncrement={() => handleIncrement(index)}
          count={counts[index]}
        />
      ))  }
    </div>
  );
};

export default ServiceList;
