import React from 'react';
import './tickets.scss'
import { NavLink } from 'react-router-dom';

export default function Tickets() {
    return (
        <section className='tickets'>
            <div className="container">
                <div className="tickets-div">
                    <div className="tickets-div1">
                        <div className="tickets-div1-content">
                            <h2>Early Bird Tickets</h2>
                            <p>Grab discounted tickets early and secure your spot at the Modern Vision Design Conference.</p>
                            <NavLink to={"/buy-ticket"}>
                                <button type="button">Buy Tickets</button>
                            </NavLink>
                        </div>
                    </div>
                    <div className="tickets-div2">
                        <div className="tickets-div2-content">
                            <h2>Full Price Tickets</h2>
                            <p>Experience the full event access and join the excitement conference ticket rate.</p>
                            <NavLink to={"/buy-ticket"}>
                                <button type="button">Buy Tickets</button>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="dicount-bar">
                    <p>*Group Discount starts from 5 participants</p>
                </div>
            </div>
        </section>
    )
}
