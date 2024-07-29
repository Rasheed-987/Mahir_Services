import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SignUp.css';

export default function SignIn({ setUser }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const User = users.find(u => u.email === email);
console.log(User);
    if (email.length === 0) {
      setErrorMessage('Please enter Email');
    } else if (password.length === 0) {
      setErrorMessage('Please enter Password');
    } else if (User && User.password === password) {
      console.log('Access granted');
      setUser(User);
      localStorage.setItem('LogInUser', JSON.stringify(User));
      navigate('/');
      setErrorMessage('');
    } else if (User && User.password !== password) {
      setErrorMessage('Invalid Password');
    } else if (!User) {
      setErrorMessage('Invalid Email or Password');
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
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">Sign In</button>
        {errorMessage && <div className="alert alert-danger mt-3">{errorMessage}</div>}
      </form>
    </div>
  );
}
