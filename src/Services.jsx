import React, { useEffect } from 'react'
import './Services.css'
import SERVICES from './images/services.jpg'


function Services() {

  useEffect(()=>{
    window.scrollTo(0, 0)
  })

  return (
    <div className='services'>

    <div className='services__hiringServices'>

    <div className='services__hiringServices__left'>

    <img className='services__hiringServices__img' src={SERVICES}/>
    </div>

    <div className='services__hiringServices__right'>

    <h1 className='services__hiringServices__right__heading'>Hiring Services</h1>

    <p className='services__hiringServices__right__details'>We are emerging as the best blockchain technology specialist in the nation and abroad. Our services cover a whole programming improvement life cycle that meets different 
    business needs.With our expertise and experience in Blockchain-as-a-service, JNC TechLabs assists you with the development of your blockchain-based decentralized applications (dApps), 
    smart contracts, and a wide range of blockchain structures and their oversight.</p>

    </div>


    </div>


    <div className='services__boxes'>

    <div className='services__boxes__box1'>

    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>
    <p className='services__boxes__box1__details'> blockchain-based</p>

    </div>

    <div className='services__boxes__box2'>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    <p className='services__boxes__box2__details'> blockchain-based</p>
    </div>

    <div className='services__boxes__box3'>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    <p className='services__boxes__box3__details'> blockchain-based</p>
    </div>

    </div>


    </div>
  )
}

export default Services