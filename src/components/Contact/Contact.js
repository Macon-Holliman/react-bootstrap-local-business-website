import React from 'react';
import './Contact.scss';

import ContactInfo from './ContactInfo';
import GoogleMap from './GoogleMap';



function Contact() {
  return (
    <div class="contact container">

      <div class="contact-title-wrapper">
        <div class="contact-title">
          Contact Us 
        </div>
      </div>

      <GoogleMap />
      <ContactInfo />

    </div>
  );
}

export default Contact;
