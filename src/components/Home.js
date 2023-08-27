import React, { useEffect } from 'react';
import "../styles/Home.css";
import picture from "../assets/picture.jpeg";
import ScrollReveal from 'scrollreveal';

const Home = () => {

    useEffect(() => {
        const sr1 = ScrollReveal({
            duration: 2000,
            delay: 200,
            easing: 'ease-out',
            origin: 'left',
            distance: '50px'
        });
        sr1.reveal('.text');
        sr1.reveal('.resume');
    });

    return (
        <section className='home' id='home'>
            <div className='text'>
                <div className='hero-text'>
                    <h3>Hello, It's Me</h3>
                    <h1>Navneet Kumar</h1>
                    <h2>I'm a <span className='text-span'> Full Stack </span>JavaScript Engineer</h2>
                    <p>A Passionate Full Stack Engineer who enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                </div>
                <div className='social'>

                </div>
                <div className='resume'>
                    <a href='https://drive.google.com/file/d/1eyFt8P8dC6ZV9bs8w0d3wPDaASzKfTEg/view?usp=sharing' target='blank'><button>Download CV</button></a>
                </div>
            </div>
            <div className='photo'>
                <img src={picture} alt='selfie' />
            </div>

        </section>
    )
}

export default Home;