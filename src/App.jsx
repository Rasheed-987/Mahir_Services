import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import  Carpenter  from './Components/Services/Carpenter';
import  Ac  from './Components/Services/Ac';
import  Plumber from './Components/Services/Plumber';
import  Handyman  from './Components/Services/Handyman';
import  Electrician from './Components/Services/Electrician';
import  Painter from './Components/Services/Painter';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route  path="/Services" element={<Services/>} />
          
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
  
      <Route path="/Service/Ac" element={<Ac/>} />
      <Route path="/Service/Carpenter" element={<Carpenter/>} />
      <Route path="/Service/Plumber" element={<Plumber/>} />
      <Route path="/Service/Handyman" element={<Handyman/>} />
      <Route path="/Service/Electrician" element={<Electrician/>} />
      <Route path="/Service/Painter" element={<Painter/>} />
      
      
      
      
      
      
      
      </Routes>
    </Router>
  );
};

export default App;
