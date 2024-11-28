import React from 'react';
import "./location.scss";

export default function Location() {
    return (
        <main className='location'>
            <div className="container">
                <section>
                    <div className="location-div">
                        <h2>Location</h2>
                        <p>500 Terry Francine Street</p>
                        <p>San Francisco, CA 94158</p>
                    </div>
                </section>
            </div>
            <div className="location-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3153.8390563320827!2d-122.38712480000001!3d37.7703718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzfCsDQ2JzEzLjMiTiAxMjLCsDIzJzEzLjciVw!5e0!3m2!1sen!2sin!4v1732793484660!5m2!1sen!2sin" title="location map" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </main>
    )
}
