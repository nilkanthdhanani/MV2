import React from 'react';
import Conference from './conference';
import TimeLocation from './timeLocation';

export default function BuyTicket() {
    return (
        <main>
            <div className="container">
                <Conference />
                <TimeLocation />
            </div>
        </main>
    )
}
