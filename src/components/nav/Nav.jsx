import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BsBookmarkStar} from 'react-icons/bs'
import {BsChatRight} from 'react-icons/bs'
import {RiServiceLine} from 'react-icons/ri'
import { useState, useEffect } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;

    const handleMouseActivity = () => {
      setIsVisible(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setIsVisible(false);
      }, 3500); // Adjust the delay as needed
    };

    const handleMouseLeave = () => {
      clearTimeout(timeout);
      setIsVisible(false);
    };

    const handleScroll = () => {
      handleMouseActivity();
    };

    window.addEventListener('mousemove', handleMouseActivity);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseActivity);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav__items ${isVisible ? 'visible' : 'hidden'}`}>
      <a href="#" title="Home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2 /></a>
      <a href="#about" title="About" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" title="Experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkStar /></a>
      <a href="#services" title="Services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" title="Contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsChatRight /></a>
    </nav>
  )
}

export default Nav