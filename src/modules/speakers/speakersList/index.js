import React, { useEffect } from 'react';
import "./speakersList.scss";

import profileBg from '../../../assets/videos/profileBg.mp4';
import { speaker1, speaker2, speaker3, speaker4, speaker5, speaker6, speaker7, speaker8 } from '../../../assets/images/images';
import { NavLink, useLocation } from 'react-router-dom';
import FacebookIco from '../../../assets/images/svg/facebook';
import InstagramIco from '../../../assets/images/svg/instagram';
import TwitterIco from '../../../assets/images/svg/twitter';

const speakers = [
    {
        id: "corbin",
        name: "Corbin Donnelly",
        title: "Creative Director, Leap",
        topic: "Design in the Virtual World",
        description: "Corbin Donnelly is a talented and passionate designer who has dedicated her life to creating innovative and sustainable solutions. She has a background in graphic design, animation, and user experience design. Corbin has worked with various organizations and clients, including Leap, Pixar, and Microsoft.",
        image: speaker1,
    },
    {
        id: "vanessa",
        name: "Vanessa Carson",
        title: "Design Lead, Topia Technologies",
        topic: "New Era of Design",
        description: "Vanessa Carson is a visionary designer with expertise in creating functional and aesthetic designs. She has a strong background in graphic and UI/UX design and has contributed significantly to projects that elevate user experiences globally.",
        image: speaker2,
    },
    {
        id: "kya",
        name: "Kya Rawlings",
        title: "Head of Product Design, Ways",
        topic: "Digital Times",
        description: "Kya Rawlings brings a wealth of experience in digital product design, combining creativity and technical expertise to create intuitive interfaces. Her work has impacted millions of users worldwide, driving engagement and innovation.",
        image: speaker3,
    },
    {
        id: "erin",
        name: "Erin Wells",
        title: "Designer & Creative Director, Bowl",
        topic: "AR & VR Shake Up Reality",
        description: "Erin Wells specializes in designing immersive AR and VR experiences that blur the lines between the virtual and real worlds. Her innovative projects redefine how people interact with digital environments.",
        image: speaker4,
    },
    {
        id: "joan",
        name: "Joan Mcgwan",
        title: "CEO, Starquake",
        topic: "Creative Confidence",
        description: "Joan Mcgwan leads Starquake with a vision to empower creative minds. She has inspired teams to embrace innovation and has developed strategies that turn creative ideas into impactful realities.",
        image: speaker5,
    },
    {
        id: "oliver",
        name: "Oliver Bisset",
        title: "Creative Director, Sharkz",
        topic: "Mind Tricks",
        description: "Oliver Bisset's work focuses on creative problem-solving and storytelling. As a Creative Director, he excels in blending design with psychology to captivate audiences and leave a lasting impact.",
        image: speaker6,
    },
    {
        id: "arya",
        name: "Arya Meza",
        title: "Digital Art Director, Paper",
        topic: "Magic Touch",
        description: "Arya Meza is known for her artistic flair and mastery of digital tools. Her innovative approach to digital art has set new standards in creativity and has been celebrated in industry exhibitions worldwide.",
        image: speaker7,
    },
    {
        id: "tri",
        name: "Tri Tmms",
        title: "CTO, Alligator Studio",
        topic: "VR Booster Creative",
        description: "Tri Tmms is a technology visionary who leverages VR to enhance creative workflows. As CTO of Alligator Studio, his work bridges the gap between technology and artistic expression.",
        image: speaker8,
    },
];

export default function SpeakersList() {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, [location]);

    return (
        <section>
            {speakers.map((speaker, index) => (
                <div className="speakers-list" key={index} id={speaker.id}>
                    <div className="speakers-div-video">
                        <video src={profileBg} autoPlay loop muted></video>
                    </div>
                    <div className="speakers-div">
                        <div className="speakers-div-main">
                            <div className="speakers-div-image">
                                <img src={speaker.image} alt={speaker.name} />
                            </div>
                            <div className="speakers-div-content">
                                <div className="speakers-div-title">
                                    <h2>{speaker.name}</h2>
                                    <p>{speaker.title}</p>
                                </div>
                                <div className="speakers-div-description">
                                    <NavLink>{speaker.topic}</NavLink>
                                    <p>{speaker.description}</p>
                                </div>
                                <div className="speakers-div-nav">
                                    <NavLink>Website</NavLink>
                                    <div className="media-link">
                                        <NavLink to={"https://www.facebook.com/"} target='_blank' aria-label='facebook'>
                                            <FacebookIco />
                                        </NavLink>
                                        <NavLink to={"https://x.com/"} target='_blank' aria-label='twitter'>
                                            <TwitterIco />
                                        </NavLink>
                                        <NavLink to={"https://www.instagram.com/"} target='_blank' aria-label='instagram'>
                                            <InstagramIco />
                                        </NavLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
