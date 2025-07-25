import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt='' />
        <p>SHISIRA</p>
      </div>

      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="footer-social-icons">
        <div className="footer-icon-container">
          <img src={instagram_icon} alt='' />
        </div>
        <div className="footer-icon-container">
          <img src={pintester_icon} alt='' />
        </div>
        <div className="footer-icon-container">
          <img src={whatsapp_icon} alt='' />
        </div>
      </div>

      <hr className="footer-line" />

      <p className="footer-copy">Copyright @ 2025 - All Rights Reserved.</p>
    </div>
  );
};
