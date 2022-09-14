import React from 'react'
import './Header.css'
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>

    <div>
    <img className='header__img' src='' />
    </div>


    <div className='header__nav'>
    <Link to={'/'} className='nav__links' ><p className='header__nav__heading'> Home </p></Link>
    <Link to={'/about'} className='nav__links' ><p className='header__nav__heading'> About </p></Link>
    <Link to={'/services'} className='nav__links' ><p className='header__nav__heading'>Services</p></Link>
    <Link to={'/contact'} className='nav__links' ><p className='header__nav__heading'>Contact</p></Link>
    </div>

    </div>
  )
}

export default Header;