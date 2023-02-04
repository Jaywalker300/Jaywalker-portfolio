import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {RiUser3Line} from 'react-icons/ri'
import {VscTools} from 'react-icons/vsc'
import {CgToolbox} from 'react-icons/cg'
import {BiPhoneOutgoing} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={()=> setActiveNav('#')}className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
    <a href="#about" onClick={()=> setActiveNav('#about')}className={activeNav === '#about' ? 'active' : ''}>< RiUser3Line/></a>
    <a href="#Experience"onClick={()=> setActiveNav('#Experience')}className={activeNav === '#Experience' ? 'active' : ''}>< VscTools/></a>
    <a href="#Services"onClick={()=> setActiveNav('#Services')}className={activeNav === '#Services' ? 'active' : ''}>< CgToolbox/></a>
    <a href="#Contact"onClick={()=> setActiveNav('#Contact')}className={activeNav === '#Contact' ? 'active' : ''}><BiPhoneOutgoing /></a>

   </nav>
  )
}

export default Nav