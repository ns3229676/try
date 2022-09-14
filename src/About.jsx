import React, { useEffect } from 'react'
import './About.css'
import ABOUTUS from './images/aboutus.jpg'

function About() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  })

  return (
    <div className='about'>

    <div className='about__left'>
    <img className='about__img' src={ABOUTUS}/>
    </div>

    <div className='about__right'>

    <h1 className='about__right__heading'>About JNCX</h1>

    <p className='about__right__details'>
    Founded in 2021 JNC TechLabs is emerging as the best Blockchain technology service provider and advisor in India. The goal is to deliver winning business outcomes through our deep industry experience and a 360-degree view of business through technology to help clients create successful and adaptive businesses.

With security and scalability at the forefront of its operations JNC TechLabs is here to revolutionize blockchain technology.
    </p>

    </div>
    
    </div>
  )
}

export default About