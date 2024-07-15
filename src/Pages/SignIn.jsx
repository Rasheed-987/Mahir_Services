import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';






export default function BasicTextFields() {


  const [Email,setEmail]=useState('');

  const [Password,setPassword]=useState('');
  






  const handleSignIn = (e) => {

    e.preventDefault();
  
    const storedDetails = JSON.parse(localStorage.getItem('userDetails'));
    if (storedDetails && storedDetails.username === Email && storedDetails.password === Password) {
        // Grant access
        console.log(storedDetails);
    } else {
        // Show error message
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
      <TextField id="outlined-basic" label="" type='email' placeholder='Email' onChange={(e)=>{
        setEmail(e.target.value)
      }}   variant="outlined" />
      <TextField id="outlined-basic" label="" type='password' placeholder='Password' onChange={(e)=>{
        setPassword(e.target.value)
      }} variant="outlined" />
      <button onClick={handleSignIn}>Sign In</button>
    </Box>
  );
}
// 