import React from 'react'
import ServiceList from './ServicesList'
const carpenter = () => {

  const carpenterServices = [
    {
      name: "Wardrobe Repairing",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.3,
      action: "Add +",
      image: "/path/to/wardrobe-repairing.jpg"
    },
    {
      name: "Door Installation",
      description: "Starting From",
      price: "Rs:1500",
      rating: 4.3,
      action: "Add +",
      image: "/path/to/door-installation.jpg"
    },
    {
      name: "Door Repairing",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.2,
      action: "Add +",
      image: "/path/to/door-repairing.jpg"
    },
    {
      name: "Carpenter Work",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.3,
      action: "Add +",
      image: "/path/to/carpenter-work.jpg"
    },
    {
      name: "Drawer Repairing",
      description: "Vary After Inspection",
      price: "Rs:500",
      rating: 4.6,
      action: "Add +",
      image: "/path/to/drawer-repairing.jpg"
    },
    {
      name: "Furniture Repairing",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.6,
      action: "Add +",
      image: "/path/to/furniture-repairing.jpg"
    },
    {
      name: "Room Door Lock installation",
      description: "Vary After inspection",
      price: "Rs:1200",
      rating: 4.8,
      action: "Add +",
      image: "/path/to/room-door-lock-installation.jpg"
    },
    {
      name: "Drawer Lock installation",
      description: "Per Lock",
      price: "Rs:500",
      rating: 4,
      action: "Add +",
      image: "/path/to/drawer-lock-installation.jpg"
    },
    {
      name: "Catcher Replacement",
      description: "Per Catcher",
      price: "Rs:500",
      rating: 5,
      action: "Add +",
      image: "/path/to/catcher-replacement.jpg"
    }
  ];
  












  


  return (
    <div>
    <div className="Carpenter">
      <ServiceList services={carpenterServices} />
      </div>   
    </div>
  )
}

export default carpenter
