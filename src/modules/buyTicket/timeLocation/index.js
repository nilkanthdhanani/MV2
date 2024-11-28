import React from 'react';
import "./timeLocation.scss"

export default function TimeLocation() {
    return (
        <section className='time-location'>
            <div className="time-location-head">
                <h2>Time & Location</h2>
                <p>May 14, 2035, 9:30 AM - May 16, 2035, 6:00 PM</p>
                <p>Conference Venue, San Francisco</p>
            </div>
            <div className="time-location-head">
                <h2>About The Event</h2>
                <p>Welcome to the Modern Vision Design Conference, where creativity meets innovation! This premier event brings together visionaries, industry leaders, and design enthusiasts to explore the latest trends and future possibilities in modern design. Through inspiring talks, interactive workshops, and networking opportunities, we aim to spark ideas, foster collaboration, and redefine the boundaries of design. Join us for this transformative experience!</p>
            </div>
            <div className="time-ticket-head">
                <h2>Tickets</h2>
                <div className="time-ticket-grid">
                    <div className="time-ticket-grid1">
                        <p>Ticket Type</p>
                        <h3>Early Bird</h3>
                        <p>I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event.</p>
                    </div>
                    <div className="time-ticket-grid2">
                        <p>Price</p>
                        <h3>$150.00</h3>
                        <span>+$3.75 service fee</span>
                        <p>On Sale</p>
                    </div>
                </div>
                <div className="time-ticket-grid">
                    <div className="time-ticket-grid1">
                        <p>Ticket Type</p>
                        <h3>Regular Ticket</h3>
                        <p>I’m an event description. Click here to open up the Event Editor and change my text. I’m a great place for you to say a little more about your upcoming event.</p>
                    </div>
                    <div className="time-ticket-grid2">
                        <p>Price</p>
                        <h3>$170.00</h3>
                        <span>+$4.25 service fee</span>
                        <p>On Sale</p>
                    </div>
                </div>
                <div className="time-ticket-button">
                    <button type="button">Select Tickets</button>
                </div>
            </div>
        </section>
    )
}
