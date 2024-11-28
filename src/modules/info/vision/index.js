import React from 'react';
import './vision.scss';
import { NavLink } from 'react-router-dom';
import { infoImg1 } from '../../../assets/images/images';

export default function Vision() {
    return (
        <section className='vision'>
            <div className="container">
                <div className="vision-div">
                    <div className="vision-div-content">
                        <div className="vision-div-title">
                            <h2>Modern Vision - Designing the Digital Future</h2>
                            <p>At Modern Vision, we redefine innovation by creating cutting-edge digital solutions tailored for a tech-savvy world. Our expertise blends creativity and strategy to empower businesses, foster growth, and ensure seamless integration into a rapidly evolving digital landscape.</p>
                            <p>Our vision is to inspire and deliver transformative ideas that challenge the norm. By focusing on user-centric design and cutting-edge technology, we aim to create seamless experiences that resonate with audiences worldwide. Modern Vision is committed to driving progress, fostering meaningful connections, and redefining technological excellence. Our approach ensures that every industry we touch benefits from innovative ideas, practical strategies, and a forward-thinking mindset.</p>
                        </div>
                    </div>
                    <div className="vision-div2-content">
                        <div className="vision-div2-div">
                            <div className="vision-div2-add">
                                <h3>500 Terry Francine Street, San Francisco, CA 94158</h3>
                                <NavLink>Via Subway:</NavLink>
                                <p>Take the N-Line towards Caltrain. Get off at the Mission Bay stop, and our office is a short 5-minute walk from there.</p>
                                <NavLink>Via Bus:</NavLink>
                                <p>Hop on the 22-Fillmore and get off at the Mission Bay Station. Our building is right across the street.</p>
                            </div>
                            <div className="see-map-btn">
                                <button type="button">See Map</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visio-img">
                    <img src={infoImg1} alt="Our Location" />
                </div>
            </div>
        </section>
    );
}
