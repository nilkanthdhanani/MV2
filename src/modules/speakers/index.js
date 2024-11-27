import React from 'react';
import "./speakers.scss"
import SpeakersList from './speakersList';

export default function Speakers() {
  return (
    <main className='speakers'>
      <div className="container">
        <div className="speakers-head">
          <h2>The Speakers</h2>
        </div>
        <SpeakersList />
      </div>
    </main>
  )
}
