import React from 'react'
import './Contact.css'
import {MdOutlineMarkEmailRead} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {useRef} from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xntnk9s', 'template_zcvtndd', form.current, 'GSpDpy004GzXFLZ6s')
    
    e.target.reset()
  };

  return (
    <section id='Contact'>
      <div className="container contact__container">
        <div className="contact__options">

           {/* email */}
          <article className="contact__option">
            < MdOutlineMarkEmailRead className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>chiketravis300@gmail.com</h5>
            <a href="mailto:chiketravis300@gmail.com" target="_blank">Send a message</a>
            </article>
            {/* end email */}

           {/* messenger */}
          <article className="contact__option">
            < RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>chiketravis300@gmail.com</h5>
            <a href="https://m.me/oluwachike.jaywalker" target="_blank">Send a message</a>
            </article>
            {/* end messenger */}

           {/* whatsapp */}
          <article className="contact__option">
            < BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>(+234)8032322255</h5>
            <a href="https://api.whatsapp.com/send?phone=+2348032322255">Send a message</a>
            </article>
            {/* end whatsapp */}
          </div>
          {/* End of contact options */}

          {/* forms */}
          <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your full name' required />
            <input type="text" name='email' placeholder='Your Email' required />
            <textarea name="message" placeholder='Your Message' rows="7"></textarea>
            <button type='submit'className='btn btn-primary'> Send Message</button>
            
            </form>


        </div>
      
      </section>
  )
}

export default Contact