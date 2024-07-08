import React from 'react';
import img6 from '../assets/aboutus-bg.png';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div  className="about-us-container">
      <img src={img6} className='pak-image' alt="" />
      
      <h2>Who is Mahir Company?</h2>
      <p>
        Mahir Company is Pakistan’s no.1 online marketplace connecting service providers and seekers in a hassle-free and safe way. With our state-of-the-art website, Mahir Company App, and Mahir Partner App, we are bridging the gap between our customers (consumers and vendors). Now they can connect more efficiently, reliably, safely, and affordably, to enjoy a better living style.
      </p>
      <h2>Mahir Company Website & App</h2>
      <p>
        These are designed to make the life of the common man and woman easy by providing them with a few-clicks everything-fix solution. From home maintenance to cleaning to personal care, our consumer apps help book and pre-book services with a 100% quality, security, and cost-effectiveness guarantee.
      </p>
      <h2>Mahir Partner App</h2>
      <p>
        To empower our service providers, we get them registered on Mahir Partner App after due diligence that includes but is not limited to verification and training sessions for soft and technical skills.
      </p>
      <h2>Our Empowerment Mission</h2>
      <p>
        Our goal is to help thousands of local technicians find reliable earning opportunities for a good livelihood. They register with us through the Mahir Partner App and get training and support from the CS department, which make order-taking and order-completion easier for them. Through the implementation of all SOPs, we make them the 1st choice of service seekers, enabling them to earn better and live with integrity.
      </p>
      <h2>Our Achievements</h2>
      <p>
        Launched as Mr. Mahir, Mahir Company has grown exponentially over three years. Indicators like service-wise growth, geographical expansion, number of downloads on the apps, and monthly traffic on the website validate the above claim.
      </p>
      <ul>
        <li><strong>Service-wise Growth:</strong> Starting with a few Maintenance Services, we now offer 161+ Home Maintenance Services, 38+ Personal Care Services, 8 Cleaning Services, five fumigation services, and our Monthly Home Maintenance Subscription Packages.</li>
        <li><strong>Geographical Expansion:</strong> Starting from Lahore with home maintenance services only, we now offer home maintenance services in the four major cities of Pakistan (Lahore, Karachi, Islamabad, and Rawalpindi). Personal care services are provided in Lahore, Islamabad, and Rawalpindi.</li>
        <li><strong>Customer Acquisition & Retention:</strong> We have 450K signups on our Customer App, 9k registrations on Mahir Partner App, 50k monthly traffic on the website, and 100,000 active users.</li>
      </ul>
    </div>
  );
};

export default AboutUs;
