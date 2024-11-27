import React from 'react';
import './sponsor.scss';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { sponsor1, sponsor2, sponsor3, sponsor4, sponsor5 } from '../../../assets/images/images';

export default function Sponsore() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        draggable: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    return (
        <section className='sponsor'>
            <div className="container">
                <h2>Sponsors</h2>
                <div className="sponsor-slider">
                    <Slider {...settings}>
                        <div>
                            <div className='sponsor-box'>
                                <img src={sponsor1} alt="sponsor1" />
                            </div>
                        </div>
                        <div>
                            <div className='sponsor-box'>
                                <img src={sponsor2} alt="sponsor2" />
                            </div>
                        </div>
                        <div>
                            <div className='sponsor-box'>
                                <img src={sponsor3} alt="sponsor3" />
                            </div>
                        </div>
                        <div>
                            <div className='sponsor-box'>
                                <img src={sponsor4} alt="sponsor4" />
                            </div>
                        </div>
                        <div>
                            <div className='sponsor-box'>
                                <img src={sponsor5} alt="sponsor5" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
