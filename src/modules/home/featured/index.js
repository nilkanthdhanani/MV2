import React from 'react';
import './featured.scss';

import profileBg from '../../../assets/videos/profileBg.mp4';
import { NavLink } from 'react-router-dom';
import { speaker1, speaker2 } from '../../../assets/images/images';

export default function Featured() {
    return (
        <section className='featured'>
            <div className="container">
                <div className="featured-div">
                    <span>Featured Speakers</span>
                    <div className="featured-grid">
                        <div className="featured-grid-div1">
                            <video src={profileBg} autoPlay loop muted></video>
                        </div>
                        <div className="featured-grid-div2">
                            <div className="featured-grid-content">
                                <h2>Corbin Donnelly</h2>
                                <p>Creative Director, Leap</p>
                            </div>
                        </div>
                        <div className="featured-grid-div3">
                            <div className="featured-grid-image">
                                <img src={speaker1} alt="speaker1" />
                            </div>
                        </div>
                        <div className="featured-grid-div4">
                            <div className="featured-grid-nav">
                                <NavLink>Design in the Virtual World</NavLink>
                                <p>Expert in crafting impactful visuals, they lead projects with passion, delivering exceptional designs that captivate audiences.</p>
                            </div>
                        </div>
                    </div>
                    <div className="featured-grid">
                        <div className="featured-grid-div2">
                            <div className="featured-grid-content">
                                <h2>Vanessa Carson</h2>
                                <p>Design Lead, Topia Technologies</p>
                            </div>
                        </div>
                        <div className="featured-grid-div1">
                            <video src={profileBg} autoPlay loop muted></video>
                        </div>
                        <div className="featured-grid-div4">
                            <div className="featured-grid-nav">
                                <NavLink>New Era of Design</NavLink>
                                <p>With innovative strategies and visionary ideas, they revolutionize modern design, inspiring creativity across industries.</p>
                            </div>
                        </div>
                        <div className="featured-grid-div3">
                            <div className="featured-grid-image">
                                <img src={speaker2} alt="speaker2" />
                            </div>
                        </div>
                    </div>
                    <div className="featured-div-btn">
                        <button>See All Speakers</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
