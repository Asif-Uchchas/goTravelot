import { useRouter } from 'next/router';
import hotels from '../../data/hotels'; // Sample hotel data
import ContactInfo from '@/app/contact/ContactInfo';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from 'react';
import { string } from 'zod';

const HotelPage = () => {
  const router = useRouter();
    const { id } = router.query;
  const hotel = hotels.find((hotel: { id: number; }) => hotel.id === parseInt(id));

  if (!hotel) {
    return <div>Hotel not found</div>;
  }

  const { name, description, rooms, address, phone, email } = hotel;

  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <div className="bg-gradient-to-b from-gray-300 to-gray-500 px-4 py-16 md:px-10 lg:px-20 flex flex-col items-center justify-center">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {name}
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white mb-10">
              {description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {rooms.map((room: {
                      id: Key | null | undefined; type: string | number | boolean | ReactElement<any, // Sample hotel data
                          string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; description: string | number | boolean | ReactElement<any, // Sample hotel data
                              string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; price: string | number | boolean | ReactElement<any, // Sample hotel data
                                  string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
                  }) => (
                <div key={room.id} className="bg-white rounded-lg p-6 shadow-lg">
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">{room.type}</p>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                    {room.description}
                  </p>
                  <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mt-4 mb-2">Price</p>
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-600">
                    ${room.price} per night
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactInfo address={address} phone={phone} email={email} />
    </div>
  );
};

export default HotelPage;
