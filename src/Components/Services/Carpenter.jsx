import React from 'react'
import ServiceList from './ServicesList'
import img1 from '../../assets/Carpenter Services _ Carpenter Services in Pakistan _ Mahir Company/img1.png';
import img2 from '../../assets/Carpenter Services _ Carpenter Services in Pakistan _ Mahir Company/img2.png';
import img3 from '../../assets/Carpenter Services _ Carpenter Services in Pakistan _ Mahir Company/img3.png';
import img4 from '../../assets/Carpenter Services _ Carpenter Services in Pakistan _ Mahir Company/img4.png';
import img5 from '../../assets/Carpenter Services _ Carpenter Services in Pakistan _ Mahir Company/img5.png';
import img6 from '../../assets/Carpenter Services _ Carpenter Services in Pakistan _ Mahir Company/img6.png';
import img7 from '../../assets/Carpenter Services _ Carpenter Services in Pakistan _ Mahir Company/img7.png';




const carpenter = () => {

  const carpenterServices = [
  
    {
      name: "Door Installation",
      description: "Starting From",
      price: "Rs:1500",
      rating: 4.3,
      action: "Add +",
      image: img1

    },
    {
      name: "Door Repairing",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.2,
      action: "Add +",
      image: img2
    },
    {
      name: "Carpenter Work",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.3,
      action: "Add +",
      image: img3
    },
    {
      name: "Drawer Repairing",
      description: "Vary After Inspection",
      price: "Rs:500",
      rating: 4.6,
      action: "Add +",
      image: img4
    },
    {
      name: "Furniture Repairing",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.6,
      action: "Add +",
      image: img5
    },
    {
      name: "Room Door Lock installation",
      description: "Vary After inspection",
      price: "Rs:1200",
      rating: 4.8,
      action: "Add +",
      image: img6
    },
    {
      name: "Drawer Lock installation",
      description: "Per Lock",
      price: "Rs:500",
      rating: 4,
      action: "Add +",
      image: img7
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
