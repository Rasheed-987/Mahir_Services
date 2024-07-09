import React from 'react'
import ServiceList from './ServicesList';
const plumber = () => {

  const plumbingServices = [
    {
      name: "Mixer Tap Installation",
      description: "Per Tap",
      price: "Rs:850",
      rating: 4.7,
      action: "Add +",
      image: "path/to/mixer-tap-installation.jpg"
    },
    {
      name: "Single Tap Installation",
      description: "Starting From",
      price: "Rs:750",
      rating: 4.5,
      action: "Add +",
      image: "path/to/single-tap-installation.jpg"
    },
    {
      name: "Sink Spindle Change",
      description: "Starting From",
      price: "Rs:700",
      rating: 4.7,
      action: "Add +",
      image: "path/to/sink-spindle-change.jpg"
    },
    {
      name: "Muslim Shower Replacement",
      description: "Per Muslim Shower",
      price: "Rs:850",
      rating: 4.4,
      action: "Add +",
      image: "path/to/muslim-shower-replacement.jpg"
    },
    {
      name: "Water Motor Installation",
      description: "Vary After Inspection",
      price: "Rs:1200",
      rating: 4,
      action: "Add +",
      image: "path/to/water-motor-installation.jpg"
    },
    {
      name: "Kitchen Leakage Repairing",
      description: "Visit and Inspection Charges",
      price: "Rs:500",
      rating: 4.6,
      action: "Add +",
      image: "path/to/kitchen-leakage-repairing.jpg"
    },
    {
      name: "Commode Tank Machine Repairing",
      description: "Per Tank",
      price: "Rs:1200",
      rating: 4.2,
      action: "Add +",
      image: "path/to/commode-tank-machine-repairing.jpg"
    },
    {
      name: "Hot or Cold Water Piping",
      description: "Visit and Inspection Charges",
      price: "Rs:500",
      rating: 4.4,
      action: "Add +",
      image: "path/to/hot-cold-water-piping.jpg"
    },
    {
      name: "Washroom Accessory Installation",
      description: "Bathroom Shelves, Soap Dispensers, Towel Rails, Toothbrush Holders",
      price: "Rs:1500",
      rating: 4.8,
      action: "Add +",
      image: "path/to/washroom-accessory-installation.jpg"
    },
    {
      name: "Kitchen Drain Blockage",
      description: "Vary After Inspection",
      price: "Rs:1000",
      rating: 4.2,
      action: "Add +",
      image: "path/to/kitchen-drain-blockage.jpg"
    },
    {
      name: "Automatic Washing Machine Installation (With Wiring)",
      description: "Vary After inspection",
      price: "Rs:2500",
      rating: 4.6,
      action: "Add +",
      image: "path/to/automatic-washing-machine-installation-wiring.jpg"
    },
    {
      name: "Commode Tank Machine Replacement",
      description: "Per Tank",
      price: "Rs:1000",
      rating: 4.7,
      action: "Add +",
      image: "path/to/commode-tank-machine-replacement.jpg"
    },
    {
      name: "Water Motor Repairing",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.3,
      action: "Add +",
      image: "path/to/water-motor-repairing.jpg"
    },
    {
      name: "Oven Range Service",
      description: "Per Oven Range",
      price: "Rs:1500",
      rating: 4.2,
      action: "Add +",
      image: "path/to/oven-range-service.jpg"
    },
    {
      name: "Water Tank Supply Issue",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.3,
      action: "Add +",
      image: "path/to/water-tank-supply-issue.jpg"
    },
    {
      name: "Gas Pipe Wiring",
      description: "Visit and Inspection Charges",
      price: "Rs:500",
      rating: 4.4,
      action: "Add +",
      image: "path/to/gas-pipe-wiring.jpg"
    },
    {
      name: "House Plumbing Work",
      description: "Visit and Inspection Charges",
      price: "Rs:600",
      rating: 4.4,
      action: "Add +",
      image: "path/to/house-plumbing-work.jpg"
    },
    {
      name: "Commode Installation",
      description: "Vary After inspection",
      price: "Rs:2500",
      rating: 4.4,
      action: "Add +",
      image: "path/to/commode-installation.jpg"
    },
    {
      name: "Pipeline Water Leakage",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.5,
      action: "Add +",
      image: "path/to/pipeline-water-leakage.jpg"
    },
    {
      name: "Drain Pipe Installation",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.8,
      action: "Add +",
      image: "path/to/drain-pipe-installation.jpg"
    },
    {
      name: "Sink Installation",
      description: "Starting From",
      price: "Rs:1800 Rs:1500",
      rating: 4.5,
      action: "Add +",
      image: "path/to/sink-installation.jpg"
    },
    {
      name: "Sink Pipe Replacement",
      description: "Vary After Inspection",
      price: "Rs:700",
      rating: 4.6,
      action: "Add +",
      image: "path/to/sink-pipe-replacement.jpg"
    },
    {
      name: "Water Tank Installation",
      description: "Visit and Inspection Charges",
      price: "Rs:500",
      rating: 4.7,
      action: "Add +",
      image: "path/to/water-tank-installation.jpg"
    },
    {
      name: "Automatic Washing Machine Installation (Without Wiring)",
      description: "Vary After inspection",
      price: "Rs:1650",
      rating: 4.9,
      action: "Add +",
      image: "path/to/automatic-washing-machine-installation.jpg"
    },
    {
      name: "Handle Valve Replacement",
      description: "Vary After Inspection",
      price: "Rs:800",
      rating: 4.5,
      action: "Add +",
      image: "path/to/handle-valve-replacement.jpg"
    },
    {
      name: "Handle Valve Installation",
      description: "Vary After Inspection",
      price: "Rs:800",
      rating: 4.6,
      action: "Add +",
      image: "path/to/handle-valve-installation.jpg"
    },
    {
      name: "Bath Shower Installation",
      description: "Vary After Inspection",
      price: "Rs:1500",
      rating: 4.6,
      action: "Add +",
      image: "path/to/bath-shower-installation.jpg"
    },
    {
      name: "Washbasin Installation",
      description: "Starting From",
      price: "Rs:1500",
      rating: 4.5,
      action: "Add +",
      image: "path/to/washbasin-installation.jpg"
    }
  ];
  



  return (
<div className="Plumber">
      <h1>Our Services</h1>
      <ServiceList services={plumbingServices} />
    </div>  );
}

export default plumber
