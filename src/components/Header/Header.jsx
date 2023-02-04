import React from 'react'
import './Header.css'
import CTA from './CTA'
import JAY from '../../assets/client images/JAY.jpg'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello there!</h5>
        <h1>I'm oluwachike Jaywalker</h1>
        <h5 className="text-light">
          A front-end Web Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="JAY">
            <img src={JAY} alt="Me" />
            
            </div>
        </div>

    </header>
  )
}

export default header