import React from 'react';
import './ContactInfo.scss';


function ContactInfo() {
  return (
        <div class="contact-box row">

            <div class="contact-item col-12 col-md-4">
              <div class="contact-picture">
                <img class="contact-picture-inner" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/phone-512.png"></img>
              </div>
              <div class="contact-inner-title">
                Phone
              </div>
              <div class="contact-text">
                (601) 792-0361
              </div>
            </div>
            
            <div class="contact-item col-12 col-md-4">
              <div class="contact-picture"> 
                <img class="contact-picture-inner" src="https://cdn4.iconfinder.com/data/icons/cv-resume-2/32/mail2-512.png"></img>
              </div>
              <div class="contact-inner-title">
                Email
              </div>
              <div class="contact-text">
              aandkcreationsms@gmail.com
              </div>
            </div>
            
            <div class="contact-item col-12 col-md-4">
              <div class="contact-picture">
                <img class="contact-picture-inner" src="https://cdn2.iconfinder.com/data/icons/map-pins-and-navigation-solid/32/zone_area_location_map_pin_address_origin_address_chek_point-512.png"></img>
              </div>
              <div class="contact-inner-title">
                Address
              </div>
              <div class="contact-text">
              1245 N Frontage Rd<br/>
              Prentiss, MS 39474
              </div>
            </div>

        </div>
  );
}

export default ContactInfo;
