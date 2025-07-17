import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from '../api';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);

  const requestOtp = () => {
    axios.post('/auth/request-otp/', { phone }).then(() => setStep(2));
  };

  const verifyOtp = () => {
    axios.post('/auth/verify-otp/', { phone, otp }).then(res => {
      if (res.data.message === 'تایید شد.') {
        // Store phone as user session (for demo)
        localStorage.setItem('user', phone);
        window.location.href = '/dashboard';
      }
    });
  };

  return (
    <Box sx={{ direction: 'rtl', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', px: 2, py: 8 }}>
      <Paper elevation={3} sx={{ borderRadius: 3, p: 4, width: '100%', maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 2 }}>
        {step === 1 ? (
          <>
            <TextField value={phone} onChange={e => setPhone(e.target.value)} label="شماره تلفن" variant="outlined" size="medium" sx={{ mb: 3 }} fullWidth inputProps={{ style: { textAlign: 'right' } }} />
            <Button onClick={requestOtp} variant="contained" color="success" sx={{ py: 1.5, fontWeight: 'bold' }} fullWidth>دریافت کد تایید</Button>
          </>
        ) : (
          <>
            <TextField value={otp} onChange={e => setOtp(e.target.value)} label="کد تایید" variant="outlined" size="medium" sx={{ mb: 3 }} fullWidth inputProps={{ style: { textAlign: 'right' } }} />
            <Button onClick={verifyOtp} variant="contained" color="primary" sx={{ py: 1.5, fontWeight: 'bold' }} fullWidth>ورود</Button>
          </>
        )}
      </Paper>
    </Box>
  );
};

export default Login;
