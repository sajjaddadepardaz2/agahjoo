import React from 'react';
import './App.css';
import { MdLogin, MdAddCircleOutline } from 'react-icons/md';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostAd from './pages/PostAd';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

function App() {
  return (
    <Router>
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', direction: 'rtl', fontFamily: 'Vazirmatn', display: 'flex', flexDirection: 'column' }}>
        <AppBar position="fixed" elevation={1} sx={{ bgcolor: '#f5f7fa', color: '#222', boxShadow: '0 4px 16px rgba(60,60,60,0.08)', borderBottom: '1px solid #e0e3e7', zIndex: 100 }}>
          <Toolbar sx={{ px: { xs: 2, sm: 4 }, minHeight: '64px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                href="/login"
                startIcon={<MdLogin size={22} />}
                variant="contained"
                sx={{ bgcolor: 'primary.main', color: 'white', borderRadius: 99, px: 3, py: 1.5, fontFamily: 'Vazirmatn', fontWeight: 600, boxShadow: '0 2px 8px rgba(33, 150, 243, 0.12)', letterSpacing: '0.03em', textTransform: 'none', mr: 2 }}
              >
                ورود / ثبت‌نام
              </Button>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                href="/post-ad"
                startIcon={<MdAddCircleOutline size={22} />}
                variant="contained"
                sx={{ bgcolor: 'success.main', color: 'white', borderRadius: 99, px: 3, py: 1.5, fontFamily: 'Vazirmatn', fontWeight: 600, boxShadow: '0 2px 8px rgba(76, 175, 80, 0.12)', letterSpacing: '0.03em', textTransform: 'none', ml: 2 }}
              >
                ثبت آگهی جدید
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar /> {/* Spacer for fixed AppBar */}
        <Box component="main" sx={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', pt: 10, pb: 10 }}>
          <Container maxWidth="lg" sx={{ px: 2 }}>
            <Paper elevation={3} sx={{ borderRadius: 6, p: 4, backdropFilter: 'blur(4px)', border: '1px solid #e0e3e7' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/post-ad" element={<PostAd />} />
              </Routes>
            </Paper>
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
