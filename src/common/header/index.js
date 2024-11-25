import React, { useState } from 'react'
import './header.scss';
import { NavLink } from 'react-router-dom';

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
