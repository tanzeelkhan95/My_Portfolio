import React from 'react'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Full Stack Development</h3>
          </div>
          <ul className='service__list'>
            <p>
            As a full stack developer, I offer end-to-end Web Development and Mobile Development services. 
            From designing user-friendly interfaces to implementing robust 
            back-end functionality, I provide comprehensive solutions to create 
            dynamic and engaging websites and applications. With expertise in various 
            programming languages, frameworks, and databases, I deliver scalable and 
            secure solutions tailored to meet your specific needs. Let's collaborate 
            to enhance your online presence and bring your digital vision to life.
            </p>
          </ul>
        </article>
        <article className='service'>
          <div className="service__head">
            <h3>Automation Testing</h3>
          </div>
          <ul className='service__list'>
            <p>
            As a Selenium automation tester, I provide 
            efficient and reliable solutions to optimize software testing. 
            With expertise in Selenium, I develop robust test scripts, execute 
            comprehensive test suites, and generate detailed reports. By 
            leveraging the power of Selenium and my programming skills, I accelerate 
            testing cycles, improve software quality, and ensure seamless performance 
            across multiple browsers and platforms. Let me help you enhance your 
            testing efficiency and deliver high-quality software through Selenium 
            automation.
            </p>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services