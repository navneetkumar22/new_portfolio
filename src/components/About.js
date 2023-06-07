import React, { useEffect } from 'react';
import "../styles/About.css";
import picture from "../assets/picture.jpeg";
import hashnodeImg from "../assets/hashnode.png";
import githubImg from "../assets/github.png";
import linkedinImg from "../assets/linkedin.png";
import ScrollReveal from 'scrollreveal';

const About = () => {

    useEffect(() => {
        const sr1 = ScrollReveal({
            duration: 2000,
            delay: 200,
            easing: 'ease-out',
            origin: 'bottom',
            distance: '60px'
        });
        sr1.reveal('.about-div div');
    })
    return (
        <section className='about' id='about'>
            <div className='photo'>
                <img src={picture} alt='selfie' />
            </div>
            <div className='about-div'>
                <div className='about-text'>
                    <h2>About <span className='text-span'>Me</span></h2>
                    <h4>Full Stack Engineer!</h4>
                    <p>I'm a certified Full Stack JavaScript Developer (certified from iNeuron.ai, now PW Skills) with an experience of around 01 year of learning and developing various aspects of fullstack web development. So far made 45+ projects in frontend and backend.</p>
                </div>
                <div className='about-btn'>
                    <a href='https://navneet90.hashnode.dev' target='blank'><img src={hashnodeImg} alt='social' /></a>
                    <a href='https://www.linkedin.com/in/navneetkumar22/' target='blank'><img src={githubImg} alt='social' /></a>
                    <a href='https://github.com/navneetkumar22' target='blank'><img src={linkedinImg} alt='social' /></a>
                </div>
            </div>


        </section>
    )
}

export default About;