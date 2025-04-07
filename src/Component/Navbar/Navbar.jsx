import React, { useEffect, useState } from 'react'
import {Link, Element} from 'react-scroll';
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    })
  },[])


  return (
    <nav className={`container ${sticky ? 'drak-nav' : ''}`}>
      <img src={logo} alt=""  className='logo'/>
      <ul>
        <li><Link to='hero' smooth={true} duration={500} offset={0}>Home</Link></li>
        <li><Link to='programs' smooth={true} duration={500} offset={-260}>Program</Link></li>
        <li><Link to='about' smooth={true} duration={500} offset={-150}>About us</Link></li>
        <li><Link to='campus' smooth={true} duration={500} offset={-260}>Campus</Link></li>
        <li><Link to='testimonials' smooth={true} duration={500} offset={-260}>Testimonials</Link></li>
        <li><Link to='contactus' smooth={true} duration={500} offset={-260}><button className='btn'>Contact us</button></Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
