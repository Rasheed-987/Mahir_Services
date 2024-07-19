import React from 'react';
import { useState } from 'react';

const SignUp = () => {

 const [name,setName]=useState('');
 const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      name: name,
      email: email,
      password: password}

    localStorage.setItem('userDetails', JSON.stringify(userDetails));

  console.log(userDetails);
 
  
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
  
      <div className="container">
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
        </div>      
      </form>
    </div>
  );
}

export default SignUp;

