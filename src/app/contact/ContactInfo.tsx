import { ContactInfoProps } from '@/types';
import React from 'react';

const ContactInfo = ({address, phone, email}: ContactInfoProps) => {
  return (
    <div id='contact' className="w-screen bg-gradient-to-b from-amber-300 to-amber-500 px-4 py-16 md:px-10 lg:px-20 flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Contact Us
        </p>
        <p className="text-lg md:text-xl lg:text-2xl text-white mb-10">
          Feel free to reach out to us for any inquiries or questions!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Email</p>
            <p className="text-lg md:text-xl lg:text-2xl text-amber-600">
              <a href={email} target="_blank" rel="noopener noreferrer" className="break-words">
                {email}
              </a>
            </p>
          </div>
          {/* Phone */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Phone</p>
            <p className="text-lg md:text-xl lg:text-2xl text-amber-600">
              <a href="tel:+1234567890" target="_blank" rel="noopener noreferrer">
                {phone}
              </a>
            </p>
          </div>
          {/* Address */}
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">Address</p>
            <p className="text-lg md:text-xl lg:text-2xl text-amber-600">
              {address}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;