import React from 'react';
import Logo from './assets/logo.png';
import Fi from './assets/finland.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-container-logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="header-container-menu">
          <ul>
            <li>Add Job</li>
            <li>My Account</li>
            <li>Logout</li>
            <li><img src={Fi} alt="fin-flag" /></li>
            <li>profile</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
