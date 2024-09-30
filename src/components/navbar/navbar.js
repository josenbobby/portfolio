import React from 'react';
import '../../style.css';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contact from '../../assets/bubbles.jpg';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="logo" className='logo'/>
        <div className='desktopMenu'>
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Portfolio</Link>
            <Link className='desktopMenuListItem'>Clients</Link>
        </div>
        <button className='desktopMenuButton'>
            <img src={contact} alt="menu" className='desktopMenuImage'/>Contact Me</button>
    </nav>
  )
}

export default Navbar;