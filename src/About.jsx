import React from 'react'
import './About.css'
import ABOUTUS from './images/aboutus.jpg'

function About() {
  return (
    <div className='about'>

    <img className='about__img' src={ABOUTUS}/>
    </div>
  )
}

export default About