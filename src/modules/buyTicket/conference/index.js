import React from 'react';
import "./conference.scss";
import { infoImg1 } from '../../../assets/images/images';

export default function Conference() {
  return (
    <section className='conference'>
      <div className="conference-head">
        <h2>MV2 Conference</h2>
        <p>Mon, May 14  |  Conference Venue</p>
        <p>Secure your spot at the Modern Vision Design Conference! Explore groundbreaking ideas, connect with industry leaders, and immerse yourself in innovative design concepts. Don't miss out—buy your tickets today to join this transformative experience!</p>
        <div className="buy-tck-btn">
            <button type="button">Buy Tickets</button>
        </div>
      </div>
      <div className="conference-img">
        <img src={infoImg1} alt="infoImg1" />
      </div>
    </section>
  )
}
