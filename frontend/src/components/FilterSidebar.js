import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const FilterSidebar = ({ filters, onChange }) => (
  <Paper elevation={3} sx={{ borderRadius: 3, p: 3, direction: 'rtl', position: 'sticky', top: 64, display: 'flex', flexDirection: 'column', gap: 2 }}>
    <Typography variant="h6" fontWeight={800} color="primary" align="right" gutterBottom>فیلترها</Typography>
    <TextField name="city" value={filters.city} onChange={onChange} label="شهر" variant="outlined" size="small" sx={{ mb: 2 }} fullWidth inputProps={{ style: { textAlign: 'right' } }} />
    <TextField name="category" value={filters.category} onChange={onChange} label="دسته‌بندی" variant="outlined" size="small" sx={{ mb: 2 }} fullWidth inputProps={{ style: { textAlign: 'right' } }} />
    <TextField name="price_min" value={filters.price_min} onChange={onChange} label="حداقل قیمت" variant="outlined" size="small" sx={{ mb: 2 }} fullWidth inputProps={{ style: { textAlign: 'right' } }} />
    <TextField name="price_max" value={filters.price_max} onChange={onChange} label="حداکثر قیمت" variant="outlined" size="small" sx={{ mb: 2 }} fullWidth inputProps={{ style: { textAlign: 'right' } }} />
    <TextField name="text" value={filters.text} onChange={onChange} label="جستجو" variant="outlined" size="small" sx={{ mb: 2 }} fullWidth inputProps={{ style: { textAlign: 'right' } }} />
  </Paper>
);

export default FilterSidebar;
