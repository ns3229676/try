import React from 'react'
import './Home.css'
import HOMEGRAPHIC from './images/homeGraphic.jpg'
import REGISTRATION2 from './images/registration2.jpg'
import LISTINGSETUP from './images/listingSetup.jpg'
// import ACCOUNTMANAGEMENT from './images/accountManagement.jpg'
import ACCOUNT from './images/account.jpg'
import BRAND from './images/brand.jpg'


function Home() {
  return (
    <div className='home'>

    <div className='header__top'>
    <div className='home__left'>
    <p className='home__left__details'>Writing a exciting and thoughtful speech requires one to select a good topic, research it thoroughly and formation of individual opinions to express on the same. School students are usually asked to speak on a contemporary topic in order to help them become good public speakers as well as learn the art of expressing oneself in front of an audience. While many speech competitions often allot topics beforehand, you might also have heard of extempore where topics are given on the spot for speech. This blog brings you a list of common English speech topics as well as some helpful tips and tricks that can assist you in expressing your thoughts and opinions in an effective manner in front of an audience.</p>
    </div>

    <div className='home__right'>
    <img className='home__right__img' src={HOMEGRAPHIC}/>
    </div>

    </div>

    <div className='home__bottom'>
    <p className='home__bottom__details'>Writing a exciting and thoughtful speech requires one to select a good topic, research it thoroughly and formation of individual opinions to express on the same. School students are usually asked to speak on a contemporary topic in order to help them become good public speakers as well as learn the art of expressing oneself in front of an audience. While many speech competitions often allot topics beforehand, you might also have heard of extempore where topics are given on the spot for speech. This blog brings you a list of common English speech topics as well as some helpful tips and tricks that can assist you in expressing your thoughts and opinions in an effective manner in front of an audience.

    </p>

    <div className='home__bottom__accountRegistration'>


    <div className='home__bottom__accountRegistration__left'>
    <img className='home__bottom__accountRegistration__left__img' src={REGISTRATION2}/>
    </div>

    <div className='home__bottom__accountRegistration__right'>
    <h1 className='home__bottom__accountRegistration__heading'>Recent Trade</h1>
    <p className='home__bottom__accountRegistration__details'>Writing a exciting and thoughtful speech requires one to select a good topic, research it thoroughly and formation of individual opinions to express on the same. School students are usually asked to speak on a contemporary topic in order to help them become good public speakers as well as learn the art of expressing oneself in front of an audience. While many speech competitions often allot topics beforehand, you might also have heard of extempore where topics are given on the spot for speech. This blog brings you a list of common English speech topics as well as some helpful tips and tricks that can assist you in expressing your thoughts and opinions in an effective manner in front of an audience.</p>
    </div>

    
    
    </div>


    <div className='home__bottom__listingSetup'>

    <div className='home__bottom__listingSetup__left'>
    <h1 className='home__bottom__listingSetup__heading'>Latest Trade</h1>
    <p className='home__bottom__listingSetup__details'>Writing a exciting and thoughtful speech requires one to select a good topic, research it thoroughly and formation of individual opinions to express on the same. School students are usually asked to speak on a contemporary topic in order to help them become good public speakers as well as learn the art of expressing oneself in front of an audience. While many speech competitions often allot topics beforehand, you might also have heard of extempore where topics are given on the spot for speech. This blog brings you a list of common English speech topics as well as some helpful tips and tricks that can assist you in expressing your thoughts and opinions in an effective manner in front of an audience.</p>
    </div>

    <div className='home__bottom__listingSetup__right'>
    <img src={LISTINGSETUP} className='home__bottom__listingSetup__right__img'/>
    </div>

    </div>


    <div className='home__bottom__accountManagement'>

    <div className='home__bottom__accountManagement__left'>
    <img src={ACCOUNT} className='home__bottom__accountManagement__left__img'/>
    </div>

    <div className='home__bottom__accountManagement__right'>
    <h1 className='home__bottom__accountManagement__right__heading'>Latest Trade</h1>
    <p className='home__bottom__accountManagement__right__details'>Writing a exciting and thoughtful speech requires one to select a good topic, research it thoroughly and formation of individual opinions to express on the same. School students are usually asked to speak on a contemporary topic in order to help them become good public speakers as well as learn the art of expressing oneself in front of an audience. While many speech competitions often allot topics beforehand, you might also have heard of extempore where topics are given on the spot for speech. This blog brings you a list of common English speech topics as well as some helpful tips and tricks that can assist you in expressing your thoughts and opinions in an effective manner in front of an audience.</p>
    </div>

    
    </div>



    <div className='home__bottom__enhancedBrand'>

    <div className='home__bottom__enhancedBrand__left'>
    <h1 className='home__bottom__enhancedBrand__left__heading'>Last Trade</h1>
    <p className='home__bottom__enhancedBrand__left__details'>Writing a exciting and thoughtful speech requires one to select a good topic, research it thoroughly and formation of individual opinions to express on the same. School students are usually asked to speak on a contemporary topic in order to help them become good public speakers as well as learn the art of expressing oneself in front of an audience. While many speech competitions often allot topics beforehand, you might also have heard of extempore where topics are given on the spot for speech. This blog brings you a list of common English speech topics as well as some helpful tips and tricks that can assist you in expressing your thoughts and opinions in an effective manner in front of an audience.</p>
    </div>

    <div className='home__bottom__enhancedBrand__right'>
    <img src={BRAND} className='home__bottom__enhancedBrand__right__img'/>
    </div>

  
    </div>



    <div className='home__bottom__catalouging'>

    <div className='home__bottom__catalouging__right'>
    <h1 className='home__bottom__catalouging__right__heading'>Open Trade</h1>
    <p className='home__bottom__catalouging__right__details'>Writing a exciting and thoughtful speech requires one to select a good topic, research it thoroughly and formation of individual opinions to express on the same. School students are usually asked to speak on a contemporary topic in order to help them become good public speakers as well as learn the art of expressing oneself in front of an audience. While many speech competitions often allot topics beforehand, you might also have heard of extempore where topics are given on the spot for speech. This blog brings you a list of common English speech topics as well as some helpful tips and tricks that can assist you in expressing your thoughts and opinions in an effective manner in front of an audience.</p>
    </div>

  
    </div>



    </div>

    </div>
  )
}

export default Home