import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohammad-tanzeel-ur-rehman-3b3414216/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/tanzeelkhan95" target="_blank"><FaGithub/></a>
        <a href="https://www.instagram.com/tanzeelkhan95/" target="_blank"><GrInstagram/></a>
    </div>
  )
}

export default headerSocials