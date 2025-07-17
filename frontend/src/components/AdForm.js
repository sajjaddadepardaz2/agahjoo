import React, { useState } from 'react';

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
    <form className="bg-white p-4 rounded shadow flex flex-col rtl" onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="عنوان" className="mb-2 p-2 border rounded text-right" />
      <textarea name="description" value={form.description} onChange={handleChange} placeholder="توضیحات" className="mb-2 p-2 border rounded text-right" />
      <input name="price" value={form.price} onChange={handleChange} placeholder="قیمت" className="mb-2 p-2 border rounded text-right" />
      <input name="city" value={form.city} onChange={handleChange} placeholder="شهر" className="mb-2 p-2 border rounded text-right" />
      <input name="category" value={form.category} onChange={handleChange} placeholder="دسته‌بندی" className="mb-2 p-2 border rounded text-right" />
      <input type="file" name="images" onChange={handleChange} className="mb-2" />
      <button type="submit" className="bg-green-600 text-white py-2 rounded">ثبت آگهی</button>
    </form>
  );
};

export default AdForm;
