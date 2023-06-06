import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './headerSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Mohammad Tanzeel Ur Rehman</h1>
        <h5 className="text-light">Software Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
            <img src={ME} alt="me" />
        </div>
        <a href="#about" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header