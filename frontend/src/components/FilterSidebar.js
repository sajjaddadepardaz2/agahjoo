import React from 'react';

const FilterSidebar = ({ filters, onChange }) => (
  <div className="bg-gray-100 p-4 rounded shadow rtl">
    <h3 className="font-bold mb-2 text-right">فیلترها</h3>
    <input name="city" value={filters.city} onChange={onChange} placeholder="شهر" className="mb-2 p-2 border rounded text-right w-full" />
    <input name="category" value={filters.category} onChange={onChange} placeholder="دسته‌بندی" className="mb-2 p-2 border rounded text-right w-full" />
    <input name="price_min" value={filters.price_min} onChange={onChange} placeholder="حداقل قیمت" className="mb-2 p-2 border rounded text-right w-full" />
    <input name="price_max" value={filters.price_max} onChange={onChange} placeholder="حداکثر قیمت" className="mb-2 p-2 border rounded text-right w-full" />
    <input name="text" value={filters.text} onChange={onChange} placeholder="جستجو" className="mb-2 p-2 border rounded text-right w-full" />
  </div>
);

export default FilterSidebar;
