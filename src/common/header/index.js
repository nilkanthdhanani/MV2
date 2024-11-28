import React, { useState, useEffect, useRef, useCallback } from "react";
import "./header.scss";
import { NavLink } from "react-router-dom";
import InstagramIco from "../../assets/images/svg/instagram";
import TwitterIco from "../../assets/images/svg/twitter";
import FacebookIco from "../../assets/images/svg/facebook";
import YoutubeIco from "../../assets/images/svg/youtube";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  const menuIconRef = useRef(null);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleClickOutside = useCallback((event) => {
    if (
      navRef.current &&
      !navRef.current.contains(event.target) &&
      menuIconRef.current &&
      !menuIconRef.current.contains(event.target)
    ) {
      closeNav();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <header>
      <div className="header-div">
        <div className="header-div-main">
          <div className="logo">
            <NavLink to={"/"} onClick={closeNav}>MV2</NavLink>
          </div>
          <nav ref={navRef} className={isOpen ? "open" : "close"}>
            <NavLink to={"/"} onClick={closeNav}>Overview</NavLink>
            <NavLink to={"/agenda"} onClick={closeNav}>Agenda</NavLink>
            <NavLink to={"/speakers"} onClick={closeNav}>Speakers</NavLink>
            <NavLink to={"/info"} onClick={closeNav}>Info</NavLink>
          </nav>
          <div className={isOpen ? "social-lines open" : "social-lines"}>
            <NavLink to={"https://www.instagram.com/"} target="_blank" aria-label="instagram" onClick={closeNav}>
              <InstagramIco />
            </NavLink>
            <NavLink to={"https://x.com/"} target="_blank" aria-label="twitter" onClick={closeNav}>
              <TwitterIco />
            </NavLink>
            <NavLink to={"https://www.facebook.com/"} target="_blank" aria-label="facebook" onClick={closeNav}>
              <FacebookIco />
            </NavLink>
            <NavLink to={"https://www.youtube.com/"} target="_blank" aria-label="youtube" onClick={closeNav}>
              <YoutubeIco />
            </NavLink>
          </div>
        </div>
        <div className="get-ticket">
          <NavLink to={"/get-ticket"}>Get Ticket</NavLink>
        </div>
        <div className="menu-icon" ref={menuIconRef}>
          <label>
            <input type="checkbox" checked={isOpen} onChange={toggleNav} />
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
      </div>
    </header>
  );
}
