import React, { useEffect } from 'react';
import "../styles/Services.css";
import frontendImg from "../assets/frontend.png";
import backendImg from "../assets/backend.png";
import fullstackImg from "../assets/fullstack.png";
import ScrollReveal from 'scrollreveal';

const Services = () => {

    useEffect(() => {
        const sr1 = ScrollReveal({
            duration: 2000,
            delay: 200,
            easing: 'ease-out',
            origin: 'bottom',
            distance: '60px'
        });
        sr1.reveal('.service-box');
    })

    return (
        <section className='services' id='services'>
            <h1><span className='text-span'>Services</span></h1>
            <div className='service'>
                <div className='service-box'>
                    <img src={frontendImg} alt='app-icon' />
                    <h3>Frontend Development</h3>
                    <p>I've expertise of turning a problem into beautiful and elegant design through precise code. So far made 40+ projects in HTML & CSS, Vanilla JS, Tailwind CSS and React JS.</p>
                </div>
                <div className='service-box'>
                    <img src={backendImg} alt='app-icon' />
                    <h3>Backend Development</h3>
                    <p>Proficiency in designing, building and maintaining the server side of web applications. I've experiences of managing database (mongodb) and implementing user authentication, token and cookies etc</p>
                </div>
                <div className='service-box'>
                    <img src={fullstackImg} alt='app-icon' />
                    <h3>Full Stack Development</h3>
                    <p>I'm experienced in writing scalable code on the frontend with handling api's with managing server and database operations on the backend. In short, I design, develop, and maintain fully-fledged and functioning platforms with databases or servers.</p>
                </div>
            </div>

        </section>
    )
}

export default Services;