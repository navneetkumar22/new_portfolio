import React, { useEffect } from 'react';
import "../styles/Contact.css";
import ScrollReveal from 'scrollreveal';

const Contact = () => {

    useEffect(() => {
        const sr1 = ScrollReveal({
            duration: 1500,
            delay: 200,
            easing: 'ease-out',
            origin: 'bottom',
            distance: '80px'
        });
        sr1.reveal('.contact-box div');
        sr1.reveal('.contact-btn');
    })
    return (
        <section className='contacts' id='contact'>
            <h1>Contact <span className='text-span'>Me!</span></h1>

            <div className='contact-box'>
                <div className='first'>
                    <input type='text' id='name' name='name' placeholder='Full Name' />
                    <input type='email' id='email' name='email' placeholder='Email Address' />
                </div>
                <div className='second'>
                    <input type='text' id='number' name='number' placeholder='Mobile Number' />
                    <input type='text' id='subject' name='subject' placeholder='Email Subject' />
                </div>
                <div className='third'>
                    <textarea typeof='text' placeholder='Your Message' />
                </div>
            </div>

            <div className='contact-btn'>
                <button>Send Message</button>
            </div>

        </section>
    )
}

export default Contact;