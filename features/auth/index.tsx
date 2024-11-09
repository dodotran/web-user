// Auth.js
'use client'
import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@mui/material';
import LoginForm from './Login';
import RegisterForm from './Register';

export default function Auth() {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  // Function to toggle between login and register forms
  const handleSwitch = () => {
    setTab((prevTab) => (prevTab === 0 ? 1 : 0));
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', padding: 2 }}>
      <Tabs value={tab} onChange={handleChange} centered>
        <Tab label="Đăng nhập" />
        <Tab label="Đăng ký" />
      </Tabs>
      <Box sx={{ mt: 3 }}>
        {tab === 0 ? <LoginForm onSwitch={handleSwitch} /> : <RegisterForm onSwitch={handleSwitch} />}
      </Box>
    </Box>
  );
}
