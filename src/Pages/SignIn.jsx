import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function SignIn() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
  
    const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedDetails && storedDetails.email === Email && storedDetails.password === Password) {
      // Grant access
      console.log('Access granted');
      setErrorMessage('');
    } else {
      // Show error message
      // console.log(storedDetails)
      setErrorMessage('Invalid credentials');
    }
  }

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-email"
        label="Email"
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
      />
      <TextField
        id="outlined-password"
        label="Password"
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        variant="outlined"
      />
      <button onClick={handleSignIn}>Sign In</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </Box>
  );
}
