import React from 'react'
import ContactInfo from './ContactInfo'

const Contact = () => {
  return (
    <div>
      <ContactInfo
        address='1234 Some Street, Some City, Some Country'
        phone='+8801 999 999 999'
        email='gotravelot@gmail.com'
      />
    </div>
  )
}

export default Contact
