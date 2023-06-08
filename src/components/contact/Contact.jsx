import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'
import {GrInstagram} from 'react-icons/gr'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            < AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5 className='mh'>mohammadtanzeel.ur@gmail.com</h5>
            <a href="mailto:mohammadtanzeel.ur@gmail.com" target="_blank">Message me</a>
          </article>
          <article className='contact__option'>
            < BsMessenger className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5>Tanzeel Ur Rehman</h5>
            <a href="https://m.me/tanzeel.urrahman.967" target="_blank">Message Me</a>
          </article>
          <article className='contact__option'>
            < GrInstagram className='contact__option-icon' />
            <h4>Instagram</h4>
            <h5>@tanzeelkhan95</h5>
            <a href="https://www.instagram.com/tanzeelkhan95/" target="_blank">Message Me</a>
          </article>
        </div>
        {/*END OF CONTACT OPTION */}
        <form action="">
          <input type="text" name='text' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='message' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact