import React, { useEffect, useState } from 'react';
import "../styles/Card.css";
import ScrollReveal from 'scrollreveal';

const Card = ({ data }) => {
    const { id, title, image, github, live } = data;
    const [isHover, setIsHover] = useState(false)

    useEffect(() => {
        const sr1 = ScrollReveal({
            duration: 2000,
            delay: 200,
            easing: 'ease-in',
            origin: 'bottom',
            distance: '50px'
        });

        sr1.reveal('.card');
    }, []);

    return (
        <div className='card' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <div className='image-div'>
                <img src={image} alt='' />
            </div>

            {isHover && (
                <div className='details' id={id}>
                    <h2>{title}</h2>
                    <div className='details-btn'>
                        <a href={github} target='blank'><button>Code</button></a>
                        <a href={live} target='blank'><button>Live</button></a>
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default Card;