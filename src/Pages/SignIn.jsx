import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css'
export default function SignIn({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const storedDetails = JSON.parse(localStorage.getItem('users'));
          
    let User=storedDetails.find(user=> user.email==email && user.password==password);

    
    if(User)
    {
      console.log('Access granted');
      setUser(User);
      setErrorMessage('');
      navigate('/');
        localStorage.setItem('LogInUser',JSON.stringify(User));      
    }
else{

  if(storedDetails.some(user=>user.email!=email)){
    setErrorMessage('Invalid Email or Password');
  }
  else{
    setErrorMessage('Invalid Password');
  }
}    
  };
  
  return (
    <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh', backgroundColor: '#f5f5f5' }}>
      <form onSubmit={handleSignIn} className="p-4 rounded shadow-sm bg-white" style={{ width: '300px' }}>
        <h3 className="text-center mb-3">Sign In</h3>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
      </form>
    </div>
  );
}
