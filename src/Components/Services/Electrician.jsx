import React from 'react'
import ServiceList from './ServicesList';
import img1 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img1.png';
import img2 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img2.png';
import img4 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img4.png';
import img5 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img5.png';
import img6 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img6.png';
import img7 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img7.png';
// import img8 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img8.png';
import img9 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img9.png';
import img10 from '../../assets/Electrician Service in Pakistan _ Electrician in Pakistan _ Electrician near me _ Mahir Company/img10.jpg';


const electrician = () => {

  

  const electricianServices = [
    {
      name: "Ceiling Fan Installation",
      description: "Per Fan",
      price: "Rs:750",
      rating: 4.5,
      action: "Add +",
      image: img1
    },
    
    {
      name: "Switchboard Button Replacement",
      description: "Vary After Inspection",
      price: "Rs:500",
      rating: 4.4,
      action: "Add +",
      image: img2
    },
    {
      name: "Pressure Motor Installation",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.5,
      action: "Add +",
      image: img5
    },
    {
      name: "Single Phase Breaker Replacement",
      description: "Starting From",
      price: "Rs:650",
      rating: 4.6,
      action: "Add +",
      image: img6
    },
    {
      name: "Single Phase Distribution Box Installation",
      description: "Starting From",
      price: "Rs:2000",
      rating: 4.5,
      action: "Add +",
      image: img7
    },
    {
      name: "Manual Washing Machine Repairing",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.3,
      action: "Add +",
      image: img4
    
    },
    
    {
      name: "UPS Repairing",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.4,
      action: "Add +",
      image: img10
    },
     
    {
      name: "Automatic Washing Machine Repairing",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.6,
      action: "Add +",
      image: img9
    }
  ];
  
  
  return (
      <div>
        <div className="Electrician">
        <h1>Electrician Services</h1>
           <ServiceList services={electricianServices}/>
        </div>
    </div>
  )
}

export default electrician
