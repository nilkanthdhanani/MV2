import React, { useEffect } from 'react';
import './fair.scss'
import { infoImg2, infoImg3 } from '../../../assets/images/images';
import Aos from 'aos';

export default function Fair() {
    useEffect(() => {
        Aos.init({
          duration: 1000,
          once: false,
        });
        Aos.refresh();
    }, []);

    return (
        <section className='fair'>
            <div className="container">
                <div className="fair-div">
                    <div className="fair-title">
                        <h3>The Design Fair</h3>
                        <p>Discover the latest in design innovation at the Modern Vision Design Conference's Design Fair. Explore cutting-edge ideas, connect with industry leaders, and experience interactive exhibits showcasing creative solutions. From groundbreaking products to revolutionary concepts, the fair celebrates the future of design. Don't miss this opportunity to ignite your imagination and network with the design community.</p>
                    </div>
                    <div className="fair-image">
                        <div className="fair-image1" data-aos="fade-right">
                            <img src={infoImg2} alt="infoImg2" />
                        </div>
                        <div className="fair-image2" data-aos="fade-left">
                            <img src={infoImg3} alt="infoImg3" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
