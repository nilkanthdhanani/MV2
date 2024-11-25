import React from 'react';
import "./socialLine.scss";
import { NavLink } from 'react-router-dom';
import { facebook, instagram, twitter, youtube } from '../../assets/images/images';

export default function SocialLine() {
  return (
    <div className="social-line">
      <NavLink to={"https://www.instagram.com/"} target='_blank' aria-label='instagram'>
        <img src={instagram} alt="instagram" />
      </NavLink>
      <NavLink to={"https://x.com/"} target='_blank' aria-label='twitter'>
        <img src={twitter} alt="twitter" />
      </NavLink>
      <NavLink to={"https://www.facebook.com/"} target='_blank' aria-label='facebook'>
        <img src={facebook} alt="facebook" />
      </NavLink>
      <NavLink to={"https://www.youtube.com/"} target='_blank' aria-label='youtube'>
        <img src={youtube} alt="youtube" />
      </NavLink>
    </div>
  )
}
