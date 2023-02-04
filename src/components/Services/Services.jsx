import React from 'react'
import './Services.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const services = () => {
  return (
   <section id='Services'>
     <h5> What i do</h5>
     <h2> Services</h2>

     <div className="container services__container">

       {/* SEO CARD */}
      <article className="service">
        <div className="service__head">
         <h3>Search Engine Optimization</h3> 
        </div>

        <ul className="service__list">
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
           Maintaining active Social media accounts 
           </p>
           </li> 
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
           On Page optimization for faster load times and driving traffic.
           </p>
           </li> 
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
            Networking with high quality sites
           </p>
           </li> 
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
             Extensive keyword research and implementation
           </p>
           </li> 
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
           Minimizing redirects as well as reducing bounce rates.
           </p>
           </li> 
          </ul>
        </article>
      {/* END OF UI/UX */}


      {/* BEGIN web development CARD */}
      <article className="service">
        <div className="service__head">
         <h3>Web Development</h3> 
        </div>

        <ul className="service__list">
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
             Building and designing fully functional websites that best represents your profile as a small start-up or an individual.
           </p>
           </li> 
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
            Designing stimulating UIs for better user experience. 
           </p>
           </li> 
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
             Building and designing interactive Web Apps for your products and/or services for quick deployment. 
           </p>
           </li> 
         
          </ul>
        </article>
      {/* END OF web development CARD */}

       {/* BEGIN Graphic design CARD */}
       <article className="service">
        <div className="service__head">
         <h3>Graphic Design & Video Editing</h3> 
        </div>

        <ul className="service__list">
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
             Product mock-up designs.
           </p>
           </li> 
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
             Illustrations for digital banners,fliers as well as book covers. 
           </p>
           </li> 
         <li>
           < AiOutlineCheckCircle className= 'service__list-icon'/>
           <p>
             Editing video footages for vloggers, Youtubers and product campaign Ads.
           </p>
           </li>  
          </ul>
        </article>
      {/* END Graphic design UI/UX */}

      </div>
   </section>
  )
}

export default services