import React from 'react';
import LocationSetter from '@/Components/LocationSetter';
import SearchResults from './SearchResults';
import SearchCard from './SearchCards';

function Main({ searchParams }: { searchParams: { location: string | undefined } }) {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="bg-gray-900 w-full h-60 md:h-96 flex items-center justify-center">
        <div className="relative w-full h-full">
          <img
            className="object-cover w-full h-full rounded-md"
            src="../rec.jpg"
            alt="Partial Image"
          />
        </div>
      </div>

      {/* Location Setter */}
      <div className="mt-8">
        <LocationSetter searchParams={{ location: '' }} />
      </div>

      {/* Search Results */}
      <div className="mt-8 flex flex-col items-center justify-center">
        <SearchResults />
      </div>
    </div>
  );
}

export default Main;
