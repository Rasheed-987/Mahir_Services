import React from 'react'
import ServiceList from './ServicesList';

const ac = () => {

  const acServices = [
    {
      name: "AC General Service",
      description: "Per AC (1 to 2.5 tons)",
      price: "Rs:3500 Rs:2300",
      rating: 4.3,
      action: "Add +",
      image: "/path/to/ac-general-service.jpg"
    },
    {
      name: "AC Installation",
      description: "Installation with 10 Feet pipe (1 to 2.5 tons)",
      price: "Rs:3500 Rs:2800",
      rating: 4.4,
      action: "Add +",
      image: "/path/to/ac-installation.jpg"
    },
    {
      name: "AC Repairing",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.3,
      action: "Add +",
      image: "/path/to/ac-repairing.jpg"
    },
    {
      name: "AC Mounting and Dismounting",
      description: "Per AC (1 to 2.5 tons)",
      price: "Rs:4200 Rs:3600",
      rating: 4.6,
      action: "Add +",
      image: "/path/to/ac-mounting-dismounting.jpg"
    },
    {
      name: "AC Dismounting",
      description: "Per AC (1 to 2.5 tons)",
      price: "Rs:1200 Rs:1000",
      rating: 4.8,
      action: "Add +",
      image: "/path/to/ac-dismounting.jpg"
    },
    {
      name: "AC Mounting and Dismounting + AC General Service",
      description: "Per AC (1 to 2.5 tons)",
      price: "Rs:7500 Rs:5000",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/ac-mounting-dismounting-general-service.jpg"
    }
  ];
  



  return (
<div className="Ac">
      <h1>AC Services</h1>
      <ServiceList services={acServices} />
    </div>
  )
}

export default ac
