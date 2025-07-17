import React from 'react';
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
    <div className="rtl p-8">
      <h1 className="text-2xl font-bold text-right mb-4">ثبت آگهی جدید</h1>
      <AdForm onSubmit={handleSubmit} />
    </div>
  );
};

export default PostAd;
