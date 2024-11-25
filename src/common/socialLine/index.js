import React from 'react';
import "./socialLine.scss";
import { NavLink } from 'react-router-dom';
import InstagramIco from '../../assets/images/svg/instagram';
import TwitterIco from '../../assets/images/svg/twitter';
import FacebookIco from '../../assets/images/svg/facebook';
import YoutubeIco from '../../assets/images/svg/youtube';

export default function SocialLine() {
  return (
    <div className="social-line">
      <NavLink to={"https://www.instagram.com/"} target='_blank' aria-label='instagram'>
        <InstagramIco />
      </NavLink>
      <NavLink to={"https://x.com/"} target='_blank' aria-label='twitter'>
        <TwitterIco />
      </NavLink>
      <NavLink to={"https://www.facebook.com/"} target='_blank' aria-label='facebook'>
        <FacebookIco />
      </NavLink>
      <NavLink to={"https://www.youtube.com/"} target='_blank' aria-label='youtube'>
        <YoutubeIco />
      </NavLink>
    </div>
  )
}
