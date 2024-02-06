import React, { useState } from 'react';

const PropertyFilter = ({ onFilterChange }) => {
  const [priceRange, setPriceRange] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [address, setAddress] = useState('');

  const handleFilterChange = () => {
    // Pass the filter values to the parent component or perform filtering logic
    onFilterChange({
      priceRange,
      propertyType,
      address,
    });
  };

  return (
    <div>
      <label>
        Price Range:
        <input
          type="text"
          value={priceRange}
          onChange={(e) => setPriceRange(e.target.value)}
        />
      </label>
      <br />

      <label>
        Property Type:
        <input
          type="text"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
        />
      </label>
      <br />

      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <br />

      <button onClick={handleFilterChange}>Apply Filters</button>
    </div>
  );
};

export default PropertyFilter;
