import React from 'react';

const AdCard = ({ ad }) => (
  <div className="bg-white rounded shadow p-4 flex flex-col rtl">
    <img src={ad.images} alt={ad.title} className="w-full h-48 object-cover mb-2 rounded" />
    <h2 className="text-lg font-bold text-right">{ad.title}</h2>
    <p className="text-right text-gray-700">{ad.description}</p>
    <div className="flex justify-between items-center mt-2">
      <span className="text-right text-sm text-gray-500">{ad.city.name}</span>
      <span className="text-right text-sm text-gray-500">{ad.category.name}</span>
      <span className="text-right text-green-600 font-bold">{ad.price} تومان</span>
    </div>
    <span className="text-xs text-right text-gray-400 mt-1">{ad.date_posted}</span>
  </div>
);

export default AdCard;
