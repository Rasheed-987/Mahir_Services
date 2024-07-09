import React from 'react'
import ServiceList from './ServicesList'
const handyman = () => {
  const handymanServices = [
    {
      name: "Curtain Rod Installation",
      description: "Per Rod",
      price: "Rs:650",
      rating: 4.2,
      action: "Add +",
      image: "/path/to/curtain-rod-installation.jpg"
    },
    {
      name: "Art Hanging",
      description: "Per Piece",
      price: "Rs:400",
      rating: 5.0,
      action: "Add +",
      image: "/path/to/art-hanging.jpg"
    },
    {
      name: "Mirror Hanging",
      description: "Vary After Inspection",
      price: "Rs:500",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/mirror-hanging.jpg"
    },
    {
      name: "Picture Hanging",
      description: "Per Picture",
      price: "Rs:400",
      rating: 5.0,
      action: "Add +",
      image: "/path/to/picture-hanging.jpg"
    },
    {
      name: "Shelf Hanging",
      description: "Vary After Inspection",
      price: "Rs:650",
      rating: 5.0,
      action: "Add +",
      image: "/path/to/shelf-hanging.jpg"
    },
    {
      name: "Room Clock Hanging",
      description: "Per Clock",
      price: "Rs:600",
      rating: 4.2,
      action: "Add +",
      image: "/path/to/room-clock-hanging.jpg"
    },
    {
      name: "LED TV or LCD Mounting",
      description: "Vary After Inspection",
      price: "Rs:1600",
      rating: 4.8,
      action: "Add +",
      image: "/path/to/led-tv-mounting.jpg"
    },
    {
      name: "LED TV or LCD Dismounting",
      description: "Fixed Charges",
      price: "Rs:650",
      rating: 4.8,
      action: "Add +",
      image: "/path/to/led-tv-dismounting.jpg"
    }
  ];
  
 
 
  return (

<div className="Ac d-flex flex-row">
      <h1>HandyMan Services</h1>
      <ServiceList services={handymanServices} />
    </div>  
  )
}

export default handyman
