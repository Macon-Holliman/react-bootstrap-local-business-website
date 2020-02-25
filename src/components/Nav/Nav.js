import React from 'react';
import './Nav.scss';


import NavLinks from './NavLinks'
import Logo from './Logo'
import FacebookSocial from './FacebookSocial'

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="row jusify-content-lg-center inner-nav">

        <NavLinks />


        <Logo />


        <FacebookSocial />

      </div>
</nav>
  );
}

export default Nav;
