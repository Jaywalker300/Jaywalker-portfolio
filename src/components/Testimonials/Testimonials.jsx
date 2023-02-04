import React from 'react'
import './Testimonials.css'
import client1 from '../../assets/client images/client-1.jpg'
import client2 from '../../assets/client images/client-2.png'
import client3 from '../../assets/client images/client-3.png'
import client4 from '../../assets/client images/client-4.jpg'
  // import Swiper core and required modules
  import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
  
 // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


 


const data = [
  
  { avatar: client1,
    name :  'oluwachike jaywalker',
    review :' I must say working with oluwachike has given my business that much needed development in terms of conversion rates and marketing insights.'
  },

   { avatar: client2,
    name :  'Lindsey stirling',
    review : " I'm loving every part of this experience."
  },
  
   { avatar: client3,
    name :  'Anastasia chisom',
    review : " Blogging is a big part of my daily routine and i cannot thank jaywalker enough for pointing out how much i can attract the right audience and draw traffic."
  },

   { avatar: client4,
    name :  'Chike Travis',
    review :"if you are still not sure of how to get your products or ideas of the ground then you should definitely give jaywalker a call."
  },

  ]





const testimonials = () => {
  return (
   <section id="testimonials">
    <h5>Client Reviews</h5>
    <h2>Testimonials</h2>

    


    <Swiper className="container testimonials__container"
    // install Swiper modules
    modules={[ Pagination]}
    spaceBetween={40}
    slidesPerView={1}
    pagination={{ clickable: true }}
    >
    {

data.map(({avatar, name, review}, index)=> {

    return(
          <SwiperSlide key={index} className="testimonial" >
            <div className="client__avatar">
              <img src={avatar} alt="client-1" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">
                {review}</small>
            </SwiperSlide>
      
    )


})
}
      </Swiper>
     
     </section>
  )
}

export default testimonials