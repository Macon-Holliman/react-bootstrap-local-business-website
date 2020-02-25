import React from 'react';
import './Logo.scss';


import TextSwipeLeft from './TextSwipeLeft';
import TextSwipeRight from './TextSwipeRight';

function Logo() {
  return (
    <div class="col d-none d-md-block col-12 col-md-5 col-lg-6">

    <TextSwipeLeft />
    <a class="logo" href="/">
      A
      <span class="ampersand-adjust-logo">{'&'}</span>
      K
    </a> 
    <TextSwipeRight />


    </div>
  );
}

export default Logo;
