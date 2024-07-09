import React from 'react'
import ServiceList from './ServicesList';
const electrician = () => {
  
  const electricianServices = [
    {
      name: "Ceiling Fan Installation",
      description: "Per Fan",
      price: "Rs:750",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/ceiling-fan-installation.jpg"
    },
    {
      name: "SMD Lights Installation (Without Wiring)",
      description: "Per Light (Discount on more than 2)",
      price: "Rs:500",
      rating: 4.8,
      action: "Add +",
      image: "/path/to/smd-lights-installation.jpg"
    },
    {
      name: "32-42 Inch LED TV or LCD Mounting",
      description: "Per LED/LCD",
      price: "Rs:1250",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/led-tv-mounting.jpg"
    },
    {
      name: "Switchboard Button Replacement",
      description: "Vary After Inspection",
      price: "Rs:500",
      rating: 4.4,
      action: "Add +",
      image: "/path/to/switchboard-button-replacement.jpg"
    },
    {
      name: "Change Over Switch Installation",
      description: "Vary After Inspection",
      price: "Rs:1000",
      rating: 4.1,
      action: "Add +",
      image: "/path/to/change-over-switch-installation.jpg"
    },
    {
      name: "Pressure Motor Installation",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/pressure-motor-installation.jpg"
    },
    {
      name: "Single Phase Breaker Replacement",
      description: "Starting From",
      price: "Rs:650",
      rating: 4.6,
      action: "Add +",
      image: "/path/to/single-phase-breaker-replacement.jpg"
    },
    {
      name: "Single Phase Distribution Box Installation",
      description: "Starting From",
      price: "Rs:2000",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/single-phase-distribution-box.jpg"
    },
    {
      name: "Water Tank Automatic Switch Installation",
      description: "Vary After Inspection",
      price: "Rs:800",
      rating: 5.0,
      action: "Add +",
      image: "/path/to/water-tank-automatic-switch.jpg"
    },
    {
      name: "Manual Washing Machine Repairing",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.3,
      action: "Add +",
      image: "/path/to/manual-washing-machine-repair.jpg"
    },
    {
      name: "Fan Dimmer Switch Installation",
      description: "Vary After Inspection",
      price: "Rs:600",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/fan-dimmer-switch-installation.jpg"
    },
    {
      name: "UPS Repairing",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.4,
      action: "Add +",
      image: "/path/to/ups-repair.jpg"
    },
    {
      name: "UPS Installation (Without Wiring)",
      description: "Vary After Inspection",
      price: "Rs:1300",
      rating: 4.4,
      action: "Add +",
      image: "/path/to/ups-installation.jpg"
    },
    {
      name: "Exhaust Fan Installation",
      description: "Per Fan",
      price: "Rs:800",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/exhaust-fan-installation.jpg"
    },
    {
      name: "New House Wiring",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 3.7,
      action: "Add +",
      image: "/path/to/new-house-wiring.jpg"
    },
    {
      name: "Water Pump Repairing",
      description: "Visit and Inspection Charges",
      price: "Rs:500",
      rating: 4.8,
      action: "Add +",
      image: "/path/to/water-pump-repair.jpg"
    },
    {
      name: "Electrical Wiring",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.3,
      action: "Add +",
      image: "/path/to/electrical-wiring.jpg"
    },
    {
      name: "House Electric Work",
      description: "Visit and Inspection Charges",
      price: "Rs:500",
      rating: 4.3,
      action: "Add +",
      image: "/path/to/house-electric-work.jpg"
    },
    {
      name: "Door Pillar Lights",
      description: "Vary After inspection",
      price: "Rs:600",
      rating: 4.1,
      action: "Add +",
      image: "/path/to/door-pillar-lights.jpg"
    },
    {
      name: "Fancy Light Installation (Without Wiring)",
      description: "Per Light (Discount on more than 2)",
      price: "Rs:800",
      rating: 4.4,
      action: "Add +",
      image: "/path/to/fancy-light-installation.jpg"
    },
    {
      name: "UPS Wiring",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.4,
      action: "Add +",
      image: "/path/to/ups-wiring.jpg"
    },
    {
      name: "LED TV Dismounting",
      description: "Per LED/LCD",
      price: "Rs:750",
      rating: 4.6,
      action: "Add +",
      image: "/path/to/led-tv-dismounting.jpg"
    },
    {
      name: "Kitchen Hood Repairing",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/kitchen-hood-repair.jpg"
    },
    {
      name: "Automatic Washing Machine Repairing",
      description: "Visit and Inspection Charges",
      price: "Rs:800",
      rating: 4.6,
      action: "Add +",
      image: "/path/to/automatic-washing-machine-repair.jpg"
    },
    {
      name: "Kitchen Hood Installation",
      description: "Visit and Inspection charges",
      price: "Rs:500",
      rating: 3.5,
      action: "Add +",
      image: "/path/to/kitchen-hood-installation.jpg"
    },
    {
      name: "Fancy Light Installation (With Wiring)",
      description: "Per Light (Discount on more than 2)",
      price: "Rs:1000",
      rating: 5.0,
      action: "Add +",
      image: "/path/to/fancy-light-installation-wiring.jpg"
    },
    {
      name: "SMD Lights Installation (With Wiring)",
      description: "Per Light (Discount on more than 2)",
      price: "Rs:700",
      rating: 4.7,
      action: "Add +",
      image: "/path/to/smd-lights-installation-wiring.jpg"
    },
    {
      name: "Switchboard Socket Replacement",
      description: "Per Socket",
      price: "Rs:500",
      rating: 4.6,
      action: "Add +",
      image: "/path/to/switchboard-socket-replacement.jpg"
    },
    {
      name: "Power Plug Installation (Without Wiring)",
      description: "Per Plug",
      price: "Rs:800",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/power-plug-installation.jpg"
    },
    {
      name: "Power Plug Installation (With Wiring)",
      description: "Vary After Inspection",
      price: "Rs:900",
      rating: 4.8,
      action: "Add +",
      image: "/path/to/power-plug-installation-wiring.jpg"
    },
    {
      name: "Light Plug (With Wiring)",
      description: "Vary After Inspection",
      price: "Rs:700",
      rating: 5.0,
      action: "Add +",
      image: "/path/to/light-plug-installation.jpg"
    },
    {
      name: "Light Plug (Without Wiring)",
      description: "Per Plug",
      price: "Rs:650",
      rating: 4.8,
      action: "Add +",
      image: "/path/to/light-plug-installation-no-wiring.jpg"
    },
    {
      name: "Ceiling Fan Repairing",
      description: "Visit & Inspection Charges",
      price: "Rs:500",
      rating: 4.5,
      action: "Add +",
      image: "/path/to/ceiling-fan-repair.jpg"
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
