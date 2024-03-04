// LocationSetter.tsx
"use client"
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './styles.css'; // Import the styles
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

library.add(faCalendar);


const LocationSetter: React.FC = () => {
  const router = useRouter();
  const [checkInDate, setCheckInDate] = useState<null | Date>(null);
  const [checkOutDate, setCheckOutDate] = useState<null | Date>(null);
  const [location, setLocation] = useState<string>('');

  const handleSearch = () => {
    router.push(`/pages/search?location=${encodeURIComponent(location)}`);
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className='bg-yellow-500 flex flex-col md:flex-row items-center justify-center p-2 border-yellow-600 rounded-md shadow-md'>
        <input  type="text" className="p-3 mb-1 md:mr-1 md:mb-0 border border-gray-300 rounded-md shadow-md w-full md:w-9/12" placeholder="Where are you going?" value={location} onChange={(e) => setLocation(e.target.value)} />
        <div className="flex flex-col md:flex-row w-full">
          <DatePicker
            selected={checkInDate}
            onChange={(date) => setCheckInDate(date)}
            placeholderText="Check In"
            className="p-3 mb-1 md:mr-1 md:mb-0 border border-gray-300 rounded-md shadow-md w-full md:w-auto"
          />
          <DatePicker
            selected={checkOutDate}
            onChange={(date) => setCheckOutDate(date)}
            placeholderText="Check Out"
            className="p-3 mb-1 md:mr-1 md:mb-0 border border-gray-300 rounded-md shadow-md w-full md:w-auto"
          />
        </div>
        <input type="number" className="p-3 mb-1 md:mr-1 md:mb-0 border border-gray-300 rounded-md shadow-md w-full md:w-1/2" placeholder="Number of people" />
        <input type="number" className="p-3 mb-1 md:mr-1 md:mb-0 border border-gray-300 rounded-md shadow-md w-full md:w-1/2" placeholder="Number of rooms" />
        {/* <Link  href='/pages/search'><button onClick={handleSearch}  className="bg-sky-900 text-white p-4 rounded-md hover:bg-sky-950 shadow-md w-full md:w-auto">Search</button></Link> */}
        <button onClick={handleSearch}  className="bg-sky-900 text-white p-4 rounded-md hover:bg-sky-950 shadow-md w-full md:w-auto">Search</button>
        
      </div>
    </div>
  );
};

export default LocationSetter;
