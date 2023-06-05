import React from 'react'
import './nav.css'
import {BiHomeAlt2} from 'react-icons/bi'
import {BiUser} from 'react-icons/bi'
import {BsBookmarkStar} from 'react-icons/bs'
import {MdMiscellaneousServices} from 'react-icons/md'
import {BsChatRight} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt2 /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BiUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsBookmarkStar /></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdMiscellaneousServices /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsChatRight /></a>
    </nav>
  )
}

export default Nav