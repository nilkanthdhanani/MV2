import React from 'react';
import "./venue.scss";

export default function Venue() {
    return (
        <section className='venue'>
            <div className="container">
                <div className="venue-div">
                    <div className="venue-div-main">
                        <div className="venue-div-content">
                            <span>The Venue</span>
                            <p>The Modern Vision Design Conference will take place at the iconic Downtown Convention Center, a hub of creativity and inspiration. Nestled in the heart of the city, the venue offers state-of-the-art facilities, immersive spaces, and a vibrant atmosphere, creating the perfect setting for innovation, networking, and transformative design experiences</p>
                            <div className="venue-div-title">
                                <p>500 Terry Francine Street</p>
                                <h2>San Fransisco</h2>
                            </div>
                            <div className="venue-div-button">
                                <button type="button">Get Tickets</button>
                                <button type="button">See Map</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
