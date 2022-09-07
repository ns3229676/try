import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>

    <div>
    <img className='header__img' src='https://jncx.io/static/media/logo_white.a9e91fc8.svg'/>
    </div>


    <div className='header__nav'>
    <p className='header__nav__heading'>About</p>
    <p className='header__nav__heading'>Services</p>
    <p className='header__nav__heading'>Contact</p>
    </div>

    </div>
  )
}

export default Header;