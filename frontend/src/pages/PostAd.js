import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AdForm from '../components/AdForm';
import axios from '../api';

const PostAd = () => {
  const handleSubmit = form => {
    const formData = new FormData();
    Object.keys(form).forEach(key => formData.append(key, form[key]));
    axios.post('/ads/', formData, { headers: { 'Content-Type': 'multipart/form-data' } }).then(() => {
      window.location.href = '/';
    });
  };

  return (
    <Box sx={{ direction: 'rtl', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', px: 2, py: 8, bgcolor: 'background.default' }}>
      <Paper elevation={6} sx={{ borderRadius: 5, p: { xs: 2, md: 5 }, width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 3, boxShadow: '0 8px 32px 0 rgba(0,30,80,0.12)' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          <Box sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: '50%', width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 2 }}>
            <span style={{ fontSize: 32, fontWeight: 900 }}>+</span>
          </Box>
          <Typography variant="h4" fontWeight={900} color="primary" align="right" sx={{ letterSpacing: 1, textShadow: '0 2px 8px #b3e5fc' }}>
            ثبت آگهی جدید
          </Typography>
        </Box>
        <Typography variant="subtitle1" color="text.secondary" align="right" sx={{ mb: 2, fontWeight: 500 }}>
          اطلاعات خود را با دقت وارد کنید تا آگهی شما بهتر دیده شود.
        </Typography>
        <AdForm onSubmit={handleSubmit} />
      </Paper>
    </Box>
  );
};

export default PostAd;
