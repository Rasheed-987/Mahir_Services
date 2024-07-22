import React, { useState } from 'react';
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
    if (storedDetails && storedDetails.email === email && storedDetails.password === password) {
      console.log('Access granted');
      setUser(storedDetails);
      setErrorMessage('');
      navigate('/'); // Navigate to home page after successful sign-in
    } 
    else if(storedDetails.email !== email){
      setErrorMessage('Invalid Email');
    }
    else if(storedDetails.password!==password){
      setErrorMessage('Invalid Password');
    }
    else{
      setErrorMessage('Invalid Both Credentials');
    }
    console.log(storedDetails.email);
    console.log(storedDetails);
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
