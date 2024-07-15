import React from 'react';
import { useState } from 'react';

const SignUp = () => {

  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  
    localStorage.setItem('name', userDetails.name);
    localStorage.setItem('email', userDetails.email);
    localStorage.setItem('password', userDetails.password);
  
    setUserDetails({
      name: '',
      email: '',
      password: ''
    });
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
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                />
              </div>
              <div className="form-group">

                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={userDetails.email}
                  onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                  />
                  </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={userDetails.password}
                  onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })}
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

