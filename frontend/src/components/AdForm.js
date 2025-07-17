import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';

const AdForm = ({ onSubmit }) => {
  const [form, setForm] = useState({ title: '', description: '', price: '', city: '', category: '', images: null });

  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3, p: 3, direction: 'rtl' }}>
      <Typography variant="h6" fontWeight={700} color="primary" align="right" gutterBottom>
        اطلاعات آگهی
      </Typography>
      <TextField name="title" value={form.title} onChange={handleChange} label="عنوان" variant="outlined" fullWidth inputProps={{ style: { textAlign: 'right' } }} />
      <TextField name="description" value={form.description} onChange={handleChange} label="توضیحات" variant="outlined" multiline rows={3} fullWidth inputProps={{ style: { textAlign: 'right' } }} />
      <TextField name="price" value={form.price} onChange={handleChange} label="قیمت" variant="outlined" fullWidth inputProps={{ style: { textAlign: 'right' } }} />
      <TextField name="city" value={form.city} onChange={handleChange} label="شهر" variant="outlined" fullWidth inputProps={{ style: { textAlign: 'right' } }} />
      <TextField name="category" value={form.category} onChange={handleChange} label="دسته‌بندی" variant="outlined" fullWidth inputProps={{ style: { textAlign: 'right' } }} />
      <FormControl fullWidth>
        <InputLabel shrink htmlFor="images">تصویر</InputLabel>
        <input type="file" name="images" id="images" onChange={handleChange} style={{ marginTop: 8 }} />
      </FormControl>
      <Stack direction="row" justifyContent="flex-end">
        <Button type="submit" variant="contained" color="success" size="large" sx={{ borderRadius: 2, fontWeight: 700 }}>
          ثبت آگهی
        </Button>
      </Stack>
    </Box>
  );
};

export default AdForm;
