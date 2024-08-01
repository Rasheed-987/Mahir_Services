import React from 'react'
import ServiceList from './ServicesList';
import img2 from '../../assets/Painter Services in Pakistan _ Interior_ Exterior Paint Services Pakistan _ Mahir Company/img2.png';
import img3 from '../../assets/Painter Services in Pakistan _ Interior_ Exterior Paint Services Pakistan _ Mahir Company/img3.png';
import img4 from '../../assets/Painter Services in Pakistan _ Interior_ Exterior Paint Services Pakistan _ Mahir Company/img4.png';
import img5 from '../../assets/Painter Services in Pakistan _ Interior_ Exterior Paint Services Pakistan _ Mahir Company/img5.png';
import img7 from '../../assets/Painter Services in Pakistan _ Interior_ Exterior Paint Services Pakistan _ Mahir Company/img7.png';

const painter = () => {

  const painterServices = [
    {
      name: "House Paint (outdoor)",
      description: "Visit & Inspection Charges",
      price: "500",
      rating: 4.1,
      action: "Add +",
      image: img7
    },
    {
      name: "House Paint (indoor)",
      description: "Visit & Inspection Charges",
      price: "500",
      rating: 4.4,
      action: "Add +",
      image: img2
    },
    {
      name: "Furniture Polishing",
      description: "Visit & Inspection Charges",
      price: "500",
      rating: 3.8,
      action: "Add +",
      image: img4
    },
    
    {
      name: "Door Polish",
      description: "Visit & Inspection Charges",
      price: "500",
      rating: 4.6,
      action: "Add +",
      image: img5}
    ,{
      name: "Tables Polish",
      description: "Visit & Inspection Charges",
      price: "500",
      rating: 4.2,
      action: "Add +",
      image: img3
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
