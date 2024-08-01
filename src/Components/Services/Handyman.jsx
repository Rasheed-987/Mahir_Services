import React from 'react'
import ServiceList from './ServicesList'
import img1 from '../../assets/Handyman Services in Pakistan _ Handyman near me _ Mahir Company/img1.png';
import img2 from '../../assets/Handyman Services in Pakistan _ Handyman near me _ Mahir Company/img2.png';
import img3 from '../../assets/Handyman Services in Pakistan _ Handyman near me _ Mahir Company/img3.png';
import img4 from '../../assets/Handyman Services in Pakistan _ Handyman near me _ Mahir Company/img4.png';
import img5 from '../../assets/Handyman Services in Pakistan _ Handyman near me _ Mahir Company/img5.png';
import img6 from '../../assets/Handyman Services in Pakistan _ Handyman near me _ Mahir Company/img6.png';


const handyman = () => {
  const handymanServices = [
    {
      name: "Curtain Rod Installation",
      description: "Per Rod",
      price: "650",
      rating: 4.2,
      action: "Add +",
      image: img1
    },
    {
      name: "Art Hanging",
      description: "Per Piece",
      price: "400",
      rating: 5.0,
      action: "Add +",
      image: img2
    },
    {
      name: "Mirror Hanging",
      description: "Vary After Inspection",
      price: "500",
      rating: 4.5,
      action: "Add +",
      image: img3
    },
    {
      name: "Picture Hanging",
      description: "Per Picture",
      price: "400",
      rating: 5.0,
      action: "Add +",
      image: img4
    },
    {
      name: "Shelf Hanging",
      description: "Vary After Inspection",
      price: "650",
      rating: 5.0,
      action: "Add +",
      image: img5

    },
    {
      name: "LED TV or LCD Mounting",
      description: "Vary After Inspection",
      price: "1600",
      rating: 4.8,
      action: "Add +",
      image: img6
    }
  ];
  
 
 
  return (

<div className="Ac">
      <h1>HandyMan Services</h1>
      <ServiceList services={handymanServices} />
    </div>  
  )
}

export default handyman
