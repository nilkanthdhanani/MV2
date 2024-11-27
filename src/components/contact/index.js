import React from 'react';
import './contact.scss';
import CloseIco from '../../assets/images/svg/closeIco';

export default function Contact({ closeModal }) {
    return (
        <div className='contact'>
            <div className="container2">
                <div className="contact-head">
                    <h2>Contact Us</h2>
                    <div className="close" onClick={closeModal}>
                        <CloseIco />
                    </div>
                </div>
                <form>
                    <div className="input-name-first">
                        <div className="input-name">
                            <label htmlFor="f-name">First Name *</label>
                            <input type="text" id="f-name" required />
                        </div>
                        <div className="input-name">
                            <label htmlFor="l-name">Last Name *</label>
                            <input type="text" id="l-name" required />
                        </div>
                    </div>
                    <div className="input-name">
                        <label htmlFor="email">Email *</label>
                        <input type="text" id="email" required />
                    </div>
                    <div className="input-name">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows={4}></textarea>
                    </div>
                    <div className="submit-btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
