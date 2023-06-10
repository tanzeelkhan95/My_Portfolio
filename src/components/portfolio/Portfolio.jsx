import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpeg'

const Data = [
  {
    id: 1,
    image: IMG1,
    title: 'Thesis Project',
    github: 'https://github.com/tanzeelkhan95/Thesis-Project'
  },
  {
    id: 1,
    image: IMG2,
    title: 'Java FX Project',
    github: 'https://github.com/tanzeelkhan95/javafx_project'
  },
  {
    id: 1,
    image: IMG3,
    title: 'Software Testing with Selenium',
    github: 'https://github.com/tanzeelkhan95/SoftwareTestingProject'
  },
  {
    id: 1,
    image: IMG4,
    title: 'My Portfolio in React',
    github: 'https://github.com/tanzeelkhan95/my_portfolio'
  },
]



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5 className='portfolioh5'>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container">
        {
          Data.map(({id, image, title, github}) => {
            return (
              <article key={id} className='portfolio__items'>
                <div className="portfolio__item-image">
                  <img src= {image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__items-cta">
                   <a href={github} className='btn' target='_blank'>Github</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio