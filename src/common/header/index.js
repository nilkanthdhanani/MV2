import React, { useState } from 'react'
import './header.scss';
import { NavLink } from 'react-router-dom';
import InstagramIco from '../../assets/images/svg/instagram';
import TwitterIco from '../../assets/images/svg/twitter';
import FacebookIco from '../../assets/images/svg/facebook';
import YoutubeIco from '../../assets/images/svg/youtube';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toogleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-div">
        <div className="header-div-main">
          <div className="logo">
            <NavLink to={"/"}>MV2</NavLink>
          </div>
          <nav className={isOpen ? "open" : "close"}>
            <NavLink to={"/"}>Overview</NavLink>
            <NavLink to={"/agenda"}>Agenda</NavLink>
            <NavLink to={"/speakers"}>Speakers</NavLink>
            <NavLink to={"/info"}>Info</NavLink>
          </nav>
          <div className={isOpen ? "social-lines open" : "social-lines"}>
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
        </div>
        <div className="get-ticket">
          <NavLink to={"/get-ticket"}>Get Ticket</NavLink>
        </div>
        <div className='menu-icon'>
          <label for="check">
            <input type="checkbox" id="check" checked={isOpen} onChange={toogleNav} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div >
    </header >
  )
}
