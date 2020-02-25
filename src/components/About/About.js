import React from 'react';
import './About.scss';

import AboutInfo from './AboutInfo';
import AboutPictures from './AboutPictures';

function About() {
  return (
    <div class="about container" id="About">
      <div class="about-inner row">

      <AboutInfo />
      <AboutPictures />

      </div>
    </div>
  );
}

export default About;
