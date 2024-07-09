import React from 'react'
import ServiceList from './ServicesList';
import img1 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img1.png';
import img2 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img2.png';
import img3 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img3.png';
import img4 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img4.png';
import img5 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img5.png';
import img6 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img6.jpg';
import img7 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img7.png';
import img8 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img8.jpg';
import img9 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img9.png';
import img10 from '../../assets/Plumbing services _ Best plumber services _ Plumber services online _ Mahir Company/img10.jpg';


const plumber = () => {

  const plumbingServices = [
    {
      name: "Mixer Tap Installation",
      description: "Per Tap",
      price: "Rs:850",
      rating: 4.7,
      action: "Add +",
      image: img1
    },
    {
      name: "Single Tap Installation",
      description: "Starting From",
      price: "Rs:750",
      rating: 4.5,
      action: "Add +",
      image: img2

    },
    {
      name: "Muslim Shower Replacement",
      description: "Per Muslim Shower",
      price: "Rs:850",
      rating: 4.4,
      action: "Add +",
      image: img3
    },
    {
      name: "Water Motor Installation",
      description: "Vary After Inspection",
      price: "Rs:1200",
      rating: 4,
      action: "Add +",
      image: img4
    },
    {
      name: "Kitchen Leakage Repairing",
      description: "Visit and Inspection Charges",
      price: "Rs:500",
      rating: 4.6,
      action: "Add +",
      image: img5
    },
    {
      name: "Kitchen Drain Blockage",
      description: "Vary After Inspection",
      price: "Rs:1000",
      rating: 4.2,
      action: "Add +",
      image: img6
    },
    {
      name: "Automatic Washing Machine Installation (With Wiring)",
      description: "Vary After inspection",
      price: "Rs:2500",
      rating: 4.6,
      action: "Add +",
      image: img7
    },
    {
      name: "Water Tank Supply Issue",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.3,
      action: "Add +",
      image: img8
    },
    
    {
      name: "Pipeline Water Leakage",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.5,
      action: "Add +",
      image: img9
    },
    {
      name: "Sink Installation",
      description: "Starting From",
      price: "Rs:1800 Rs:1500",
      rating: 4.5,
      action: "Add +",
      image: img10
    },
  ];
  



  return (
<div className="Plumber">
      <h1>Plubmer Services</h1>
      <ServiceList services={plumbingServices} />
    </div>  );
}

export default plumber
