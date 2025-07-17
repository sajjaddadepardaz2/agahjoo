import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';

const AdCard = ({ ad }) => (
  <Card sx={{ borderRadius: 3, boxShadow: 3, display: 'flex', flexDirection: 'column', gap: 2, direction: 'rtl', border: 1, borderColor: 'grey.100', p: 2 }}>
    <CardMedia
      component="img"
      height="192"
      image={ad.images}
      alt={ad.title}
      sx={{ borderRadius: 2, objectFit: 'cover', mb: 2, bgcolor: 'grey.50' }}
    />
    <CardContent sx={{ p: 0 }}>
      <Typography variant="h6" fontWeight={800} color="primary" gutterBottom noWrap align="right">
        {ad.title}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="right" sx={{ mb: 1 }}>
        {ad.description}
      </Typography>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 1, mt: 1 }}>
        <Chip label={ad.city.name} size="small" sx={{ bgcolor: 'grey.100', color: 'grey.700' }} />
        <Chip label={ad.category.name} size="small" sx={{ bgcolor: 'grey.100', color: 'grey.700' }} />
        <Chip label={ad.price + ' تومان'} size="medium" sx={{ bgcolor: 'green.50', color: 'green.700', fontWeight: 'bold' }} />
      </Box>
      <Typography variant="caption" color="text.disabled" align="right" sx={{ mt: 2, display: 'block' }}>
        {ad.date_posted}
      </Typography>
    </CardContent>
  </Card>
);

export default AdCard;
