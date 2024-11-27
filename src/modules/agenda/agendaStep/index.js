import React from 'react'
import "./agendaStep.scss"
import { NavLink } from 'react-router-dom'

const day2steps = [
    {
        title: "Breakfast",
        time: "9:30am",
        link: "",
        discription: "",
    },
    {
        title: "New Era of Design",
        time: "10am - 11am",
        link: "Vanessa Carson",
        discription: "Design Lead, Topia Technologies",
    },
    {
        title: "Digital Times",
        time: "11am - 12pm",
        link: "Kya Rawlings",
        discription: "Head of Product Design, Ways",
    },
    {
        title: "Lunch Time",
        time: "12pm - 1pm",
        link: "",
        discription: "",
    },
    {
        title: "Creative Confidence",
        time: "1pm - 2pm",
        link: "Joan McGowan",
        discription: "CEO, Starquake",
    },
    {
        title: "Mind Tricks",
        time: "2pm - 3pm",
        link: "Olivier Bisset",
        discription: "Creative Director, Sharkz",
    },
    {
        title: "AR & VR Shake up Reality",
        time: "3pm - 4pm",
        link: "Erin Wells",
        discription: "Designer & Creative Director, Bowl",
    },
    {
        title: "Drinks & Networking",
        time: "7pm - 10pm",
        link: "",
        discription: "",
    },
]

const day3steps = [
    {
        title: "Design in the Virtual World",
        time: "10am - 11am",
        link: "Corbin Donnelly",
        discription: "Creative Director, Leap",
    },
    {
        title: "Magic Touch",
        time: "11am - 12pm",
        link: "Arya Meza",
        discription: "Digital Art Director, Paper",
    },
    {
        title: "Lunch Time",
        time: "12pm - 1pm",
        link: "",
        discription: "",
    },
    {
        title: "VR Booster creative",
        time: "1pm - 2pm",
        link: "Tri Tmms",
        discription: "Digital Art Director, Paper",
    },
    {
        title: "Closing Party",
        time: "7pm - 10pm",
        link: "",
        discription: "",
    },
]

export default function AgendaStep() {
    return (
        <section>
            <div className="container">
                <div className="agenda-step">
                    <div className="agenda-step1">
                        <div className="agenda-step1-content">
                            <h2>Learn & Be Inspired at the 2nd Annual Modern Vision</h2>
                            <p>Discover a platform where creativity meets innovation. Learn from industry leaders, explore groundbreaking ideas, and ignite your passion for modern design. Get inspired to transform visions into impactful realities.</p>
                        </div>
                    </div>
                    <div className="agenda-step2">
                        <div className="agenda-step2-content">
                            <div className="agenda-day-div">
                                <div className="agenda-day-title">
                                    <h3>Day One</h3>
                                </div>
                                <div className="agenda-day-date">
                                    <span>14/05</span>
                                </div>
                            </div>
                            <div className="agenda-day-list">
                                <div className="agenda-day-list1">
                                </div>
                                <div className="agenda-day-list2">
                                    <h4>Kickoff Party</h4>
                                    <span>7:45 pm</span>
                                    <p>Location - Venue ABC</p>
                                    <p>I'm a paragraph. Click here to add your own text and edit me.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="agenda-step2">
                        <div className="agenda-step2-content">
                            <div className="agenda-day-div">
                                <div className="agenda-day-title">
                                    <h3>Day Two</h3>
                                </div>
                                <div className="agenda-day-date">
                                    <span>15/05</span>
                                </div>
                            </div>
                            <div className="agenda-day-list">
                                <div className="agenda-day-list1">
                                </div>
                                {day2steps.map((name, index) => (
                                    <div className="agenda-day-list2" key={index}>
                                        <h4>{name.title}</h4>
                                        <span>{name.time}</span>
                                        <NavLink>{name.link}</NavLink>
                                        <p>{name.discription}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="agenda-step2">
                        <div className="agenda-step2-content">
                            <div className="agenda-day-div">
                                <div className="agenda-day-title">
                                    <h3>Day Three</h3>
                                </div>
                                <div className="agenda-day-date">
                                    <span>16/05</span>
                                </div>
                            </div>
                            <div className="agenda-day-list">
                                <div className="agenda-day-list1">
                                </div>
                                {day3steps.map((name, index) => (
                                    <div className="agenda-day-list2" key={index}>
                                        <h4>{name.title}</h4>
                                        <span>{name.time}</span>
                                        <NavLink>{name.link}</NavLink>
                                        <p>{name.discription}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
