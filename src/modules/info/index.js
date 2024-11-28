import React from 'react';
import Vision from './vision';
import Tickets from './tickets';
import Sponsore from '../home/sponsor';
import Fair from './fair';

export default function Info() {
    return (
        <main>
            <Vision />
            <Tickets />
            <Fair />
            <Sponsore />
        </main>
    )
}
