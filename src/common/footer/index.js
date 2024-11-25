import React from 'react'
import './footer.scss';
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-div">
          <div className="footer-div-sign">
            <h2>Sign up for updates</h2>
            <form>
              <label htmlFor="email">Email *</label>
              <input type="email" id="email" placeholder="Enter your email" required />
              <div className="checkbox-div">
                <div className="checkbox">
                  <input type="checkbox" id="check" required />
                  <span for="check">
                    <svg viewBox="0,0,50,50">
                      <path d="M5 30 L 20 45 L 45 5"></path>
                    </svg>
                  </span>
                </div>
                <label htmlFor="check">I agree to the terms and conditions.</label>
              </div>
              <button>Subscribe</button>
            </form>
          </div>
          <div className="footer-div-links">
            <div className="footer-menu-links">
              <h3>Menu</h3>
              <NavLink><span>Overview</span></NavLink>
              <NavLink><span>Agenda</span></NavLink>
              <NavLink><span>Speakers</span></NavLink>
              <NavLink><span>Info</span></NavLink>
            </div>
            <div className="footer-menu-links">
              <h3>Socials</h3>
              <NavLink><span>Instagram</span></NavLink>
              <NavLink><span>Twitter</span></NavLink>
              <NavLink><span>Facebook</span></NavLink>
              <NavLink><span>Youtube</span></NavLink>
            </div>
            <div className="footer-menu-links">
              <button type="button">Contact Us</button>
              <NavLink><span>FAQ</span></NavLink>
              <NavLink><span>Code of conduct</span></NavLink>
              <NavLink><span>Sponsorship plans</span></NavLink>
            </div>
          </div>
        </div>
        <div className="copyright-div">©2035 by MV2. All rights reserved.</div>
      </div>
    </footer>
  )
}
