import React, { Component } from 'react';
import './AboutInfo.scss';


class AboutInfo extends Component {
  render() {
    const title = "About Us";
    const subTitle = this.props.subTitle;
    const AboutText = [];

    const AboutTextData = [
      "Our mission at A&K Creations is to offer designer fashion at prices that everyone can feel good about! Our designer clothing, jewelry, handbags and accessories are unique items that won’t be found at department stores. We keep our merchandise rotating often so you’ll always see new items in our shop!",
      "A&K Creations offers a wide range of apparel to fit anyone's unique sense of style. Our clothing and accessories are carefully curated to provide our customers the latest fashions. To keep our customers in style we post new arrivals daily, as well as offer stylist picks to help any indecisive shoppers."
    ];

    AboutTextData.forEach(function (text){
      AboutText.push(
        <p>
        {text}
        </p>
      );
    });
    

    return (
      <div class="about-inner-col col-lg-6">
        
      <div class="about-title-wrapper">
        <div class="about-title">
          {title}
        </div>
        <div class="about-title-sub">
        {subTitle}
        </div>
      </div>
      <div class="about-text">
        {AboutText}
      </div>
  
  
      </div>
    );

  }
}

export default AboutInfo;
