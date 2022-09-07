import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className='footer'>
    

    
    <div className='foorter__firstDiv'>

    <div className='foorter__firstDiv__first'>
    <Link to={'/'}><img className='foorter__firstDiv__first__logo' src='https://jncx.io/static/media/logo_white.a9e91fc8.svg'/></Link>
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
    <p className='footer__secondDiv__heading'>Ser</p>
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
    <p className='foorter__thirdDiv__second__detail'>support@paropkaar.com</p>
    </div>

    <div className='foorter__thirdDiv__third'>
    <LocationOnIcon className='foorter__thirdDiv__third__icon'/>
    <p className='foorter__thirdDiv__third__detail'>ETT Tower, Sec-132, Noida, UP, INDIA</p>
    </div>

    </div>


    <div className='foorter__fourthDiv'>
    <p className='foorter__fourthDiv__heading'>Support</p>
    <p className='foorter__fourthDiv__second__detail'>With enthusiastic employees and volunteers, we are ready to support you no matter any time.</p>
    <button className='foorter__fourthDiv__third__button' onClick={donate}>Donate</button>
    </div>
    

    


    </footer>
  )
}

export default Footer