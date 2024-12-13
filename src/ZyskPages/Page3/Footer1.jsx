import React from 'react';

import './Footer1.css' ;

function Footer1() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-column">
          <h4 className="footer-heading">Product</h4>
          <ul>
            <li><a href="#">Overview</a></li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Solutions <span className="new-tag">New</span></a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Releases</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Media kit</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Resources</h4>
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Help centre</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">Support</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Use Cases</h4>
          <ul>
            <li><a href="#">Startups</a></li>
            <li><a href="#">Enterprise</a></li>
            <li><a href="#">Government</a></li>
            <li><a href="#">SaaS centre</a></li>
            <li><a href="#">Marketplaces</a></li>
            <li><a href="#">Ecommerce</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Social</h4>
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">GitHub</a></li>
            <li><a href="#">AngelList</a></li>
            <li><a href="#">Dribbble</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4 className="footer-heading">Legal</h4>
          <ul>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">Licenses</a></li>
            <li><a href="#">Settings</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">
          <a href="#"><span>Untitled UI</span></a>
        </div>
        <div className="footer-copyright">
          © 2077 Untitled UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer1;