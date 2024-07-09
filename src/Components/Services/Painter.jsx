import React from 'react'
import ServiceList from './ServicesList';
const painter = () => {

  const painterServices = [
    {
      name: "House Paint (outdoor)",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.1,
      action: "Add +",
      image: "/path/to/house-paint-outdoor.jpg"
    },
    {
      name: "House Paint (indoor)",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.4,
      action: "Add +",
      image: "/path/to/house-paint-indoor.jpg"
    },
    {
      name: "Furniture Polishing",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 3.8,
      action: "Add +",
      image: "/path/to/furniture-polishing.jpg"
    },
    {
      name: "Gray structure Paint",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.2,
      action: "Add +",
      image: "/path/to/gray-structure-paint.jpg"
    },
    {
      name: "Door Polish",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.6,
      action: "Add +",
      image: "/path/to/door-polish.jpg"
    },
    {
      name: "Tables Polish",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.2,
      action: "Add +",
      image: "/path/to/tables-polish.jpg"
    }
  ];
  






  return (
    <div>

<div className="Ac">
      <h1>Painter Services</h1>
      <ServiceList services={painterServices} />
    </div>      
    </div>
  )
}

export default painter
