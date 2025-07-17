import React, { useEffect, useState } from 'react';
import AdList from '../components/AdList';
import FilterSidebar from '../components/FilterSidebar';
import axios from '../api';

const Home = () => {
  const [ads, setAds] = useState([]);
  const [filters, setFilters] = useState({ city: '', category: '', price_min: '', price_max: '', text: '' });

  useEffect(() => {
    axios.get('/ads/', { params: filters }).then(res => setAds(res.data));
  }, [filters]);

  const handleFilterChange = e => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex flex-row-reverse rtl">
      <div className="w-1/4"><FilterSidebar filters={filters} onChange={handleFilterChange} /></div>
      <div className="w-3/4"><AdList ads={ads} /></div>
    </div>
  );
};

export default Home;
