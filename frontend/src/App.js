import React from 'react';
import './App.css';
import { MdLogin, MdAddCircleOutline } from 'react-icons/md';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import PostAd from './pages/PostAd';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-200 rtl flex flex-col">
        <nav className="sticky top-0 z-10 bg-white/90 backdrop-blur-md shadow-sm border-b border-blue-100 px-6 py-3 flex items-center justify-between" style={{ fontFamily: 'Vazirmatn' }}>
          <a href="/login" style={{ textDecoration: 'none' }}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-3xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold shadow-none border border-blue-200 transition" style={{ fontFamily: 'Vazirmatn' }}>
              <MdLogin size={22} /> ورود / ثبت‌نام
            </button>
          </a>
          <div></div>
          <a href="/post-ad" style={{ textDecoration: 'none' }}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-3xl bg-green-50 hover:bg-green-100 text-green-700 font-bold shadow-none border border-green-200 transition" style={{ fontFamily: 'Vazirmatn' }}>
              <MdAddCircleOutline size={22} /> ثبت آگهی جدید
            </button>
          </a>
        </nav>
        <main className="flex-1 flex justify-center items-start pt-10 pb-10">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="bg-surface rounded-3xl shadow-lg p-6 backdrop-blur-md border border-outline">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/post-ad" element={<PostAd />} />
              </Routes>
            </div>
          </div>
        </main>
        {/* Footer removed as requested */}
      </div>
    </Router>
  );
}

export default App;
