import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostAd from './pages/PostAd';

function App() {
  return (
    <Router>
      <div className="flex justify-end items-center p-4 gap-2 bg-gray-100 rtl">
        <a href="/login" className="bg-green-600 text-white px-4 py-2 rounded">ورود / ثبت‌نام</a>
        <a href="/post-ad" className="bg-blue-600 text-white px-4 py-2 rounded">ثبت آگهی جدید</a>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/post-ad" element={<PostAd />} />
      </Routes>
    </Router>
  );
}

export default App;
