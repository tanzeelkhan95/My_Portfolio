import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {GrInstagram} from 'react-icons/gr'

const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/mohammad-tanzeel-ur-rehman-3b3414216/" title="Linkedin" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/tanzeelkhan95" title="Github" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/tanzeelkhan95/" title="Instagram" target="_blank" rel="noopener noreferrer"><GrInstagram/></a>
    </div>
  )
}

export default headerSocials