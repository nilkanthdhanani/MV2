import React from 'react';
import "./heroBanner.scss"

import heroVideo from "../../../assets/videos/heroVideo.mp4";
import { NavLink } from 'react-router-dom';

export default function HeroBanner() {
    return (
        <section className='hero-banner'>
            <div className="hero-banner-video">
                <video src={heroVideo} autoPlay loop muted></video>
            </div>
            <div className="hero-banner-content">
                <div className="container">
                    <div className="modern-vision">
                        <div className="modern-vision-div">
                            <div className="modern-vision-div-title">
                                <h1>Modern Vision Design Conference</h1>
                            </div>
                            <div className="modern-vision-div-date">
                                <h1>May 14-16</h1>
                                <p>Grand Hall</p>
                                <p>San Francisco</p>
                            </div>
                        </div>
                        <div className="get-ticket-btn">
                            <NavLink to={"/info"}>
                                <button>Get Tickets</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
