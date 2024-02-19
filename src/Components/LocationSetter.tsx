// LocationSetter.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css'; // Import the styles

const LocationSetter = () => {
  const [checkInDate, setCheckInDate] = useState<null | Date>(null);
  const [checkOutDate, setCheckOutDate] = useState<null | Date>(null);

  return (
    <div>
      <div className=' bg-yellow-500 flex items-center justify-center p-2 border-yellow-600  rounded-md shadow-md'>
        <input type="text" className="input-style shadow-md w-9/12 " placeholder="Where are you going?" />
        <DatePicker
          selected={checkInDate}
          onChange={(date) => setCheckInDate(date)}
          placeholderText="Check In"
          className="date-style shadow-md w-auto"
        />
        <DatePicker
          selected={checkOutDate}
          onChange={(date) => setCheckOutDate(date)}
          placeholderText="Check Out"
          className="date-style shadow-md w-auto "
        />
        
        <input type="number" className="input-style shadow-md w-1/2 " placeholder="Number of people" />
        <input type="number" className="input-style shadow-md w-1/2" placeholder="Number of rooms" />
        <button className="bg-sky-900 text-white p-4 rounded-md hover:bg-sky-950 shadow-sm">Search</button>
      </div>
    </div>
  );
};

export default LocationSetter;
