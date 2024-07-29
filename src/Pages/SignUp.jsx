import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {

 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate('');
// const [Service,setServices]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser={
      name:name,
      email:email,
      password:password
    };


    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(newUser)      
    localStorage.setItem('users', JSON.stringify(users));
  console.log(users);
  navigate('/signin');
  };

  const handleClick = () => {
    navigate('/ServicesProvider')
  }


  return (
    
      <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
      <form onSubmit={handleSubmit}>
      <div className="container1 d-flex justify-content-center align-content-center flex-column">
              <h3>SignUp</h3>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                  
                  onChange={(e) => setName(e.target.value )}
                />
              </div>
              <div className="form-group">

                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail( e.target.value )}
                  />
                  </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(  e.target.value )}
                  />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
              <div  >
              <a  className='custom' onClick={handleClick} >Want to become Service Provider</a>
              </div>

        </div>      
      </form>
    </div>
  );
}

export default SignUp;

