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
        <nav className="sticky top-0 z-10 bg-surface/80 backdrop-blur-md shadow-md border-b border-outline px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-4xl font-black text-primary drop-shadow-lg">آگهی‌جو</span>
            <span className="text-base text-on-surface font-medium hidden md:inline">پلتفرم خرید و فروش آنلاین به سبک مدرن</span>
          </div>
          <div className="flex gap-2">
            <a href="/login" className="flex items-center gap-2 bg-primary text-on-primary px-5 py-2 rounded-3xl shadow transition font-bold hover:bg-primary-dark">
              <MdLogin size={22} /> ورود / ثبت‌نام
            </a>
            <a href="/post-ad" className="flex items-center gap-2 bg-secondary text-on-secondary px-5 py-2 rounded-3xl shadow transition font-bold hover:bg-secondary-dark">
              <MdAddCircleOutline size={22} /> ثبت آگهی جدید
            </a>
          </div>
        </nav>
        <main className="flex-1 flex justify-center items-start pt-10 pb-10">
          <div className="w-full max-w-6xl mx-auto px-4">
            <div className="mb-8 text-center">
              <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-2 drop-shadow">خوش آمدید به آگهی‌جو</h1>
              <p className="text-lg text-on-surface-variant">سریع، امن و راحت آگهی خود را ثبت کنید یا آگهی‌های جدید را پیدا کنید</p>
            </div>
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
        <footer className="text-center py-6 text-on-surface-variant text-sm bg-surface/80 mt-auto border-t border-outline">
          © {new Date().getFullYear()} آگهی‌جو - تمامی حقوق محفوظ است
        </footer>
      </div>
    </Router>
  );
}

export default App;
