import React, { useEffect } from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn'
import { Link, useNavigate } from 'react-router-dom';

function Footer() {

  // useEffect(()=>{
  //   window.scrollTo(0, 0)
  // })

  return (
    <footer className='footer'>
    

    
    <div className='foorter__firstDiv'>

    <div className='foorter__firstDiv__first'>
    <Link to={'/'}><img className='foorter__firstDiv__first__logo' /></Link>
    <p className='foorter__firstDiv__first__details'>Paropkaar is a non-profit organization to support people worldwide and keep an eye in the future Support.</p>
    </div>

    <div className="foorter__firstDiv__second__socialMedia">
    <FacebookIcon className='foorter__firstDiv__second__socialMedia__facebook'/>
    <TwitterIcon className='foorter__firstDiv__second__socialMedia__twitter'/>
    <InstagramIcon className='foorter__firstDiv__second__socialMedia__instagram'/>
    <YouTubeIcon className='foorter__firstDiv__second__socialMedia__youtube'/>
    </div>

    </div>



    <div className='foorter__secondDiv'>
    <p className='footer__secondDiv__firstHeading'>Explore</p>
    <p className='footer__secondDiv__heading'>About</p>
    <p className='footer__secondDiv__heading'>Donation</p>
    <p className='footer__secondDiv__heading'>Fundraiser</p>
    </div>

    


    


    <div className='foorter__thirdDiv'>
    <p className='foorter__thirdDiv__heading'>Contact</p>

    <div className='foorter__thirdDiv__first'>
    <CallIcon className='foorter__thirdDiv__first__icon'/>
    <p className='foorter__thirdDiv__first__detail'>+91-9910679045</p>
    </div>

    <div className='foorter__thirdDiv__second'>
    <EmailIcon className='foorter__thirdDiv__second__icon' />
    <p className='foorter__thirdDiv__second__detail'>ehirix@gmail.com</p>
    </div>

    <div className='foorter__thirdDiv__third'>
    <LocationOnIcon className='foorter__thirdDiv__third__icon'/>
    <p className='foorter__thirdDiv__third__detail'>ETT Tower, Sec-132, Noida, UP, INDIA</p>
    </div>

    </div>


   
    

    


    </footer>
  )
}

export default Footer




// <div className='foorter__fourthDiv'>
// <p className='foorter__fourthDiv__heading'>Support</p>
// <p className='foorter__fourthDiv__second__detail'>With enthusiastic employees and volunteers, we are ready to support you no matter any time.</p>
// <button className='foorter__fourthDiv__third__button' onClick={donate}>Donate</button>
// </div>