import React from 'react'
import './Portfolio.css'
import Item1 from '../../assets/Portfolio items/Responsive admin dash.jpg'
import Item2 from '../../assets/Portfolio items/skysurf website.jpg'
import Item3 from '../../assets//Portfolio items/moby slick upgrade.jpg'
import Item4 from '../../assets/Portfolio items/item-4.jpg'
import Item5 from '../../assets/Portfolio items/item-5.jpg'
import Item6 from '../../assets/Portfolio items/item-6.jpg'
import Item7 from '../../assets/Portfolio items/item-7.jpg'
import Item8 from '../../assets/Portfolio items/item-8.jpg'

/* array map item method */

const data = [
      
  {

    id:1,
    image:Item1,
    title: 'Responsive Admin DashBoard',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
   },


  {

    id:2,
    image:Item2,
    title: 'Company landing page built with Bootstrap and Sass',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
   },

   {

    id:3,
    image:Item3,
    title: 'wallpaper design for mobile',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
    youtube:'https//youtube.com/almostdaylight',
   },
     
   {

    id:4,
    image:Item4,
    title: 'Work in Progress',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
   },

    {

    id:5,
    image:Item5,
    title: 'Work in progress',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
   },


    {

    id:6,
    image:Item6,
    title: 'Work in progress',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
   },
    
    {

    id:7,
    image:Item7,
    title: 'Work in progress',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
   },


    {
    id:8,
    image:Item8,
    title: 'Work in progress',
    github: 'https://github.com',
    demo: 'https://digitalocean.com/home',
   },


 ]


const portfolio = () => {
  return (
   <section id='Portfolio'>
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">

     {
      data.map(({id, image, title, github, demo ,youtube})=>{
        return(
         

            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
                </div>

                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                  
                 
                  
                  </div>
              </article> 
        )
      })


     }

      </div>
    </section>
  )
}

export default portfolio