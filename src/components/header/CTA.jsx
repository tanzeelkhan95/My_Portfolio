import React from 'react'
import resume from '../../assets/My Resume.pdf'
import Cv from '../../assets/My CV.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={resume} download='Tanzeel-Resume.pdf' className='btn'>Download Resume</a>
        <a href={Cv} download='Tanzeel-CV.pdf' id='cv' className='btn'>Download CV</a>
        <a href="#contact" id='lc' className='btn btn-primary'>Let's Chat</a>
    </div>
  )
}

export default CTA