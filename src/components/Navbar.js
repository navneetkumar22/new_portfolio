import React, { useEffect, useState } from 'react';
import "../styles/Navbar.css";

const Navbar = () => {

    const [navSticky, setNavSticky] = useState(false);
    const [navLink, setNavLink] = useState('');

    const selectNavLink = (e) => {
        setNavLink(e.target.innerHTML);
    }

    useEffect(() => {
        const navScroll = () => {
            const top = window.scrollY;
            if (top > 0 && !navSticky) {
                setNavSticky(true);
            } else if (top === 0 && navSticky) {
                setNavSticky(false);
            }
        }

        window.addEventListener('scroll', navScroll);

        return () => {
            window.removeEventListener('scroll', navScroll)
        };
    }, [navSticky])


    return (
        <section className={`navbar ${navSticky ? "sticky" : ""}`}>
            <div className='logo'>
                <h1>Portfolio</h1>
            </div>
            <div className='nav-items'>
                <ul>
                    <li><a onClick={selectNavLink} className={navLink === 'Home' ? 'cyan' : ''} href='#home'>Home</a></li>
                    <li><a onClick={selectNavLink} className={navLink === 'About' ? 'cyan' : ''} href='#about'>About</a></li>
                    <li><a onClick={selectNavLink} className={navLink === 'Services' ? 'cyan' : ''} href='#services'>Services</a></li>
                    <li><a onClick={selectNavLink} className={navLink === 'Projects' ? 'cyan' : ''} href='#projects'>Projects</a></li>
                    <li><a onClick={selectNavLink} className={navLink === 'Contact' ? 'cyan' : ''} href='#contact'>Contact</a></li>
                </ul>
            </div>
        </section>
    )
}

export default Navbar;