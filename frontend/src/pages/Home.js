import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AdList from '../components/AdList';
import FilterSidebar from '../components/FilterSidebar';
import axios from '../api';

const Home = () => {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({ city: '', category: '', price_min: '', price_max: '', text: '' });

  useEffect(() => {
    axios.get('/ads/', { params: filters }).then(res => setAds(res.data));
  }, [filters]);

  const handleFilterChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 2, py: 4, direction: 'rtl' }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
          <FilterSidebar filters={filters} onChange={handleFilterChange} />
        </Grid>
        <Grid item xs={12} md={9}>
          <AdList ads={ads} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
