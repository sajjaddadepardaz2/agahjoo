import React from 'react';
import AdCard from './AdCard';
import Grid from '@mui/material/Grid';

const AdList = ({ ads }) => (
  <Grid container spacing={3} sx={{ direction: 'rtl', py: 2, px: 1 }}>
    {ads.length === 0 ? (
      <Grid item xs={12}>
        <div style={{ textAlign: 'center', color: '#888', fontSize: '1.25rem', padding: '3rem 0' }}>هیچ آگهی‌ای پیدا نشد.</div>
      </Grid>
    ) : (
      ads.map(ad => (
        <Grid item xs={12} sm={6} md={4} xl={3} key={ad.id}>
          <AdCard ad={ad} />
        </Grid>
      ))
    )}
  </Grid>
);

export default AdList;
