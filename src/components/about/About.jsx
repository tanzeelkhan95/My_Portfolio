import React from 'react'
import './about.css'
import ME from '../../assets/me2.jpeg'
import {FaAward} from 'react-icons/fa'
import {BsPersonCircle} from 'react-icons/bs'

const About = () => {
  return (
    <section id='about'>
      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <h5 className='sabout'>Get To Know</h5>
          <h5 className='aboutme'>About Me</h5>
          <p>
              Hello! My name is Mohammad Tanzeel Ur Rehman, and I am 22 years old.
               By the way, you can call me Tanzeel. I have a Bachelor's degree in
              Computer Science from the University of Debrecen, Hungary. I have 
              experience in a wide range of programming languages. Currently, I am 
              working as a Software Developer Intern at the Security and Exchange
              Commission of Pakistan (SECP). During my leisure time, 
              I enjoy playing video games and playing the guitar.
          </p>
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Skills</h5>
              <ul>Java Programming</ul>
              <ul>Fullstack Web Development</ul>
              <ul>Database Systems SQL/NoSQL</ul>
              <ul>Automation Testing</ul>
              <ul>Machine / Reinforcement Learning</ul>
              <ul>Networking</ul>
            </article>
            <article className='about__card'>
              <BsPersonCircle className='about__icon'/>
              <h5>Personal Information</h5>
              <ul><b>Name:</b> Mohammad Tanzeel Ur Rehman</ul>
              <ul><b>Email:</b> mohammadtanzeel.ur@gmail.com</ul>
              <ul><b>Phone 1:</b> +36-30-735-4381</ul>
              <ul><b>Phone 2:</b> +92-326-0750391</ul>
            </article>
          </div>
          <div className="button">
          <a href="#contact" className='btn btn-primary'>Contact Me Now!</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About