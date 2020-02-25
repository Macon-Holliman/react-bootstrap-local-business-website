import React from 'react';
import './NavLinks.scss';

function NavLinks() {
  return (
    <div class="col-9 col-md-4 col-lg-3">
      <div id="navbarSupportedContent">
        <ul class="navbar-nav nav-adjust">
          <li class="nav-item home-mobile">
            <a class="nav-link" href="/">A
            <span class="ampersand-adjust-logo">{'&'}</span>
            K</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/explore">Explore</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavLinks;
