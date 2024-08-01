import React from 'react'
import ServiceList from './ServicesList';
import img1 from '../../assets/AC Services _ AC Repairing _ AC Installation _ Mahir Company/img1.png';
import img2 from '../../assets/AC Services _ AC Repairing _ AC Installation _ Mahir Company/img2.png';
import img3 from '../../assets/AC Services _ AC Repairing _ AC Installation _ Mahir Company/img3.png';
import img4 from '../../assets/AC Services _ AC Repairing _ AC Installation _ Mahir Company/img4.png';
import img5 from '../../assets/AC Services _ AC Repairing _ AC Installation _ Mahir Company/img5.png';
import img6 from '../../assets/AC Services _ AC Repairing _ AC Installation _ Mahir Company/img6.png';
const ac = () => {

  const acServices = [
    {
      name: "AC General Service",
      description: "Per AC (1 to 2.5 tons)",
      price: "3500 ",
      rating: 4.3,
      action: "Add +",
      image: img1
    },
    {
      name: "AC Installation",
      description: "Installation with 10 Feet pipe (1 to 2.5 tons)",
      price: "3500",
      rating: 4.4,
      action: "Add +",
      image: img2
    },
    {
      name: "AC Repairing",
      description: "Visit and Inspection Charges",
      price: "800",
      rating: 4.3,
      action: "Add +",
      image: img3
    },
    {
      name: "AC Mounting and Dismounting",
      description: "Per AC (1 to 2.5 tons)",
      price: "4200",
      rating: 4.6,
      action: "Add +",
      image: img4
    },
    {
      name: "AC Dismounting",
      description: "Per AC (1 to 2.5 tons)",
      price: "1200 ",
      rating: 4.8,
      action: "Add +",
      image: img5
    },
    {
      name: "AC Mounting and Dismounting + AC General Service",
      description: "Per AC (1 to 2.5 tons)",
      price: "7500",
      rating: 4.5,
      action: "Add +",
      image: img6
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
