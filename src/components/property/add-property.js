import { useState } from 'react';

const AddProperty = () => {
  //
  const [homeType, setHomeType] = useState('');
  const [propertyType, setPropertyType] = useState('');
  const [price, setPrice] = useState('');
  const [line1, setLine1] = useState('');
  const [line2, setLine2] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [state, setState] = useState('');

  const statesList = [
    { code: 'AL', name: 'Alabama' },
    { code: 'AK', name: 'Alaska' },
    { code: 'AZ', name: 'Arizona' },
    { code: 'AR', name: 'Arkansas' },
    // Add more states as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Do something with the form data, e.g., send it to a server

    // For demonstration purposes, log the data to the console
    console.log({
      homeType,
      propertyType,
      price,
      address: {
        line1,
        line2,
        city,
        postalCode,
        state,
      },
    });

    // You can reset the form after submission if needed
    setHomeType('');
    setPropertyType('');
    setPrice('');
    setLine1('');
    setLine2('');
    setCity('');
    setPostalCode('');
    setState('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Home Type:
        <input
          type="text"
          value={homeType}
          onChange={(e) => setHomeType(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Property Type:
        <input
          type="text"
          value={propertyType}
          onChange={(e) => setPropertyType(e.target.value)}
          required
        />
      </label>
      <br />

      <label>
        Price:
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        Address Line 1:
        <input
          type="text"
          value={line1}
          onChange={(e) => setLine1(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        Address Line 2:
        <input
          type="text"
          value={line2}
          onChange={(e) => setLine2(e.target.value)}
        />
      </label>

      <br />

      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        Postal Code:
        <input
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          required
        />
      </label>

      <br />

      <label>
        State:
        <select
          value={state}
          onChange={(e) => setState(e.target.value)}
          required
        >
          <option value="">Select State</option>
          {statesList.map((stateData) => (
            <option key={stateData.code} value={stateData.code}>
              {stateData.name}
            </option>
          ))}
        </select>
      </label>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProperty;
