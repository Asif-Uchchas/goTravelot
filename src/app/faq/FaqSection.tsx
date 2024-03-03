"use client";
import React, { useState } from "react";

const FaqSection = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      id="faq"
      className="bg-gradient-to-b from-amber-300 to-amber-500 py-16 sm:px-6 lg:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Frequently Asked Questions
        </p>
        <div className="flex flex-col gap-4" onClick={() => handleOpen()}>
          <div className="bg-white rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-slate-700">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
              How do I book a hotel? <span className=" ml-5">👇</span>
            </p>
            {open && (
              <>
                <p className="text-lg md:text-xl lg:text-2xl text-amber-600">
                  Booking a hotel with us is easy! Just follow these steps:
                </p>
                <ul className="list-disc pl-5 mt-3">
                  <li className="text-lg md:text-xl lg:text-2xl text-gray-800">
                    1. Search for hotels in your desired location and dates.
                  </li>
                  <li className="text-lg md:text-xl lg:text-2xl text-gray-800">
                    2. Select the hotel that fits your preferences.
                  </li>
                  <li className="text-lg md:text-xl lg:text-2xl text-gray-800">
                    3. Choose your room type and any additional options.
                  </li>
                  <li className="text-lg md:text-xl lg:text-2xl text-gray-800">
                    4. Enter your payment details and confirm your booking.
                  </li>
                </ul>
              </>
            )}
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-slate-700">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
              What payment methods do you accept? <span className=" ml-5">👇</span>
            </p>
            {open && (
              <>
                <p className="text-lg md:text-xl lg:text-2xl text-amber-600">
                  We accept various payment methods including credit cards, PayPal,
                  and more.
                </p>
              </>
              )}
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-slate-700">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
              Can I cancel or change my booking? <span className=" ml-5">👇</span>
            </p>
            {open && (
              <>
                <p className="text-lg md:text-xl lg:text-2xl text-amber-600">
                  Yes, you can cancel or modify your booking depending on the
                  hotel's policies. Check the details when making your reservation.
                </p>
              </>
            )}
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg cursor-pointer hover:shadow-slate-700">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-4">
              Do I need to create an account to book? <span className=" ml-5">👇</span>
            </p>
            {open && (
              <>
            <p className="text-lg md:text-xl lg:text-2xl text-amber-600">
              While it's not required, creating an account allows you to manage
              your bookings easily and receive exclusive offers.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
