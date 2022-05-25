import React from 'react';
import './Footer.css';
import Facebook from './assets/facebook.png';
import Youtube from './assets/youtube.png';
import Linkedin from './assets/linkedin.png';
import Instagram from './assets/instagram.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer-list">
        <ul>
          <h2>COMPANY</h2>
          <li>TEAM</li>
          <li>CONTACT US</li>
          <li>HOW SERVICE WORKS</li>
          <li>PREMIUM SERVICES</li>
        </ul>
        <ul>
          <h2>SUPPORT</h2>
          <li>FAQ</li>
          <li>TERMS OF SERVICE</li>
          <li>PRIVACY POLICY</li>
          <li>BLOG</li>
        </ul>
      </div>
      <div className="footer-social">
        <ul>
          <li><img src={Facebook} alt="facebook" /></li>
          <li><img src={Youtube} alt="youtube" /></li>
          <li><img src={Linkedin} alt="linkedin" /></li>
          <li><img src={Instagram} alt="instagram" /></li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
