'use client'
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css';

const booking = () => {
    const [arrivalDate, setArrivalDate] = useState<Date | null>(null);
  const [departureDate, setDepartureDate] = useState<Date | null>(null);

  return (
    <div className='w-full flex flex-col gap-y-4 items-center justify-center'>

      <form className='max-w-fit p-20 border-spacing-1 border-solid bg-[#fcd34d] rounded-xl' method="post" action="//submit.form">
        
        <div className='w-full flex items-center justify-center font-bold text-lg'>
            ✈ goTravelot
        </div>

        <div className='w-full flex items-center justify-center text-xl mx-2 mt-2 mb-4 underline'>
            Hotel Room Reservation
        </div>
        
        <div className='flex pb-4 max-w-full'>

          <div className='ml-0 mr-1'>
            First name<span style={{ color: 'red' }}> *</span><br/>
            <input type="text" id="data_2" name="data_2" style={{ maxWidth: '100%' }} className="form-control"/>
          </div>
          
          <div className='mr-0 ml-1'>
            Last name<span style={{ color: 'red' }}> *</span><br/>
            <input type="text" id="data_2" name="data_2" style={{ maxWidth: '100%' }} className="form-control"/>
          </div>

        </div>


        <div className='flex pb-4 max-w-full'>

        <div className='pb-4 max-w-full mr-1'>
            Email<span style={{ color: 'red' }}> *</span><br/>
            <input type="text" id="data_5" name="data_5" style={{ maxWidth: '100%' }} className="form-control"/>
        </div>

        <div className='pb-4 max-w-full ml-1'>
            Phone<span style={{ color: 'red' }}> *</span><br/>
            <input type="text" id="data_4" name="data_4" style={{ maxWidth: '100%' }} className="form-control"/>
        </div>

        </div>

        <div className='flex pb-4 max-w-full'>

            <div className='relative'>
                <div className='pb-4 max-w-full mr-1'>
                    Arrival date<span style={{ color: 'red' }}> *</span><br/>
                    <ReactDatePicker
                    selected={arrivalDate}
                    onChange={(date: Date | null) => setArrivalDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                />
                <FontAwesomeIcon icon={faCalendarAlt} className=' absolute right-4 top-2/4 transform: -translate-y-1/2 cursor-pointer'/>
                </div>
            </div>

            <div className='relative'>
                <div className='pb-4 max-w-full ml-1'>
                    Departure date<span style={{ color: 'red' }}> *</span><br/>
                    <ReactDatePicker
                    selected={departureDate}
                    onChange={(date: Date | null) => setDepartureDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="form-control"
                />
                <FontAwesomeIcon icon={faCalendarAlt} className=' absolute right-4 top-2/4 transform: -translate-y-1/2 cursor-pointer'/>
                </div>
            </div>

        </div>

        <div className='flex pb-4 max-w-full'>

        <div className='pb-4 max-w-full mr-1'>Number of adults<span style={{ color: 'red' }}> *</span><br/>
          <input type="number" id="data_8" name="data_8" style={{ maxWidth: '250px' }} className="form-control"/>
        </div>

        <div className='pb-4 max-w-full ml-1'>Number of children<br/>
          <input type="number" id="data_9" name="data_9" style={{ maxWidth: '250px' }} className="form-control"/>
        </div>

        </div>

        <div className='pb-4 max-w-full'>Questions / Comments<br/>
          <textarea id="data_10" name="data_10" style={{ width: '100%' }} rows={6} className="form-control"></textarea>
        </div>

        {/* <div className='pb-4 max-w-full'><input name="skip_Submit" value="Submit" type="submit"/></div> */}
        <Button className=' font-mono bg-[#e2932c] white p-3 m-auto border-none cursor-pointer w-auto flex items-center rounded-2xl' type='submit'>Submit</Button>
      </form>
    </div>
  )
}

export default booking
