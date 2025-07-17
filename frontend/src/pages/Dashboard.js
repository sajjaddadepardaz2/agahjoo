import React from 'react';

const Dashboard = () => {
  const user = localStorage.getItem('user');
  return (
    <div className="rtl p-8">
      <h1 className="text-2xl font-bold text-right mb-4">داشبورد {user}</h1>
      <p className="text-right">آگهی‌های من و آگهی‌های ذخیره‌شده در اینجا نمایش داده می‌شوند.</p>
    </div>
  );
};

export default Dashboard;
