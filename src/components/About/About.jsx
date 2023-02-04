import React from 'react'
import './About.css'
import Jay2 from '../../assets/client images/Jay2.jpg'
import {FaToolbox} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {FaFolderOpen} from 'react-icons/fa'

const about = () => {
  return (
  <section id="about">
    <h5>Get To Know</h5>
    <h2>Me</h2>

    <div className="container about__container">
      <div className="about__me">
      <div className="about__me-image">
      <img src={Jay2} alt="me" />
      </div>
      </div>

      <div className="about__content">
      <div className="about__cards">
      <article className="about__card">
      <FaToolbox className='about__icons' />
      <h5>Experience</h5>
      <small>3+ Years Working</small>
      </article>

      <article className="about__card">
      <FaUsers className='about__icons' />
      <h5> Clients </h5>
      <small>23+ Clients Worldwide</small>
      </article>

      <article className="about__card">
      < FaFolderOpen className='about__icons' />
      <h5>Projects</h5>
      <small>20+ Projects Completed</small>
      </article>
      </div>
      <p>
      Hey there, i'm Chike AKA Jaywalker. i'm currently based in Abuja, Nigeria. i've got a penchant for taking a peek under the hood just to see   what  makes the machine growl (and maybe make it even better). Thinking of building and launching your products? then bring your ideas and i'll   bring the tools to give life to your imaginations.
      </p>
      <a href="#Contact" className='btn btn-primary'>Lets talk</a>
      </div>

    </div>
    </section>
  
)
}

export default about