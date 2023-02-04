import React from 'react'
import './Footer.css'
import Logo from '../../assets/portfolio logo/logo.png'
import {FiFacebook} from 'react-icons/fi'
import {BsInstagram} from 'react-icons/bs'
import {FiTwitter} from 'react-icons/fi'
import { getByPlaceholderText } from '@testing-library/react'

const footer = () => {
  return (
    <footer>

      <a href="#" className='footer__logo'><img src={Logo} alt="" /></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#Contact">Contact</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com"><FiFacebook/></a>
        <a href="https://twitter.com"><FiTwitter/></a>
        <a href="https://instagram.com"><BsInstagram/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; All rights reserved.
        </small> <p> {new Date().getFullYear()}</p>
      </div>
       
    </footer>
  )
}

export default footer