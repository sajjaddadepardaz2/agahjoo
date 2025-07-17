import React from 'react';
import AdCard from './AdCard';

const AdList = ({ ads }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 rtl">
    {ads.map(ad => <AdCard key={ad.id} ad={ad} />)}
  </div>
);

export default AdList;
