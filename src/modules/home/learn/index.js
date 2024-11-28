import React from 'react';
import "./learn.scss";

import learnVideo from '../../../assets/videos/learnVideo.mp4';
import { NavLink } from 'react-router-dom';

export default function Learn() {
    return (
        <section className='learn'>
            <div className='learn-div'>
                <div className="container">
                    <div className="learn-inspired">
                        <div className="learn-inspired-detail">
                            <div className="learn-inspired-detail-div">
                                <h2>Learn & Get Inspired</h2>
                                <p>Discover a platform where creativity meets innovation. Learn from industry leaders, explore groundbreaking ideas, and ignite your passion for modern design. Get inspired to transform visions into impactful realities.</p>
                                <NavLink to={'/agenda'}>
                                    <button type="button">Learn More</button>
                                </NavLink>
                            </div>
                        </div>
                        <div className="learn-inspired-video">
                            <video src={learnVideo} autoPlay loop muted></video>
                        </div>
                    </div>
                    <div className="design-future">
                        <p>Designing the Digital Future</p>
                        <h3>Designers</h3>
                        <h3>Creatives</h3>
                        <h3>Developers</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}
