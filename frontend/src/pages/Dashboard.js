import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const Dashboard = () => {
  const user = localStorage.getItem('user');
  return (
    <Box sx={{ direction: 'rtl', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', px: 2, py: 8 }}>
      <Paper elevation={3} sx={{ borderRadius: 3, p: 4, width: '100%', maxWidth: 600, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4" fontWeight={800} color="primary" align="right" gutterBottom>
          داشبورد {user}
        </Typography>
        <Typography variant="body1" color="text.secondary" align="right">
          آگهی‌های من و آگهی‌های ذخیره‌شده در اینجا نمایش داده می‌شوند.
        </Typography>
      </Paper>
    </Box>
  );
};

export default Dashboard;
