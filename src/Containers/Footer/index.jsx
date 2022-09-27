import React, { useState } from 'react';
import './styles.css';
import { FaGithubSquare, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';

const Footer = () => {

  const [logoHover, setLogoHover] = useState('none');

  // const txtHover = (logo) =>{
  //   setLogoHover(logo);
  //   setTimeout(() => {
  //     setLogoHover('none')
  //   }, 5000);
  // }

  return (
    <div className='footerContainer'>
      <div className='smTextCont'>
        {
          logoHover === 'linkedin' ?
            <p className='smText logo'>CONNECT WITH ME ON LINKEDIN</p>:
            logoHover === 'github' ?
            <p className='smText logo'>CHECK OUT MY WORK ON GITHUB</p>:
            logoHover === 'whatsapp' ?
            <p className='smText logo'>SAY HI!</p>:
            <p className='smText'></p>
            }
      </div>
      <div className='socialMContainer'>
        <a href='https://www.linkedin.com/in/tobias-mancini-152388120/' target="_blank"><FaLinkedin className='smLogo' onMouseEnter={()=>setLogoHover('linkedin')} onMouseLeave={()=>setLogoHover('none')} /></a>
        <a href='https://github.com/tobimancini?tab=repositories' target="_blank"><FaGithubSquare className='smLogo' onMouseEnter={()=>setLogoHover('github')} onMouseLeave={()=>setLogoHover('none')}/></a>
        <a href='https://api.whatsapp.com/send?phone=541132344651' target="_blank"><FaWhatsappSquare className='smLogo' onMouseEnter={()=>setLogoHover('whatsapp')} onMouseLeave={()=>setLogoHover('none')}/></a>
      </div>
      <div className='logoContainer'>
        <p className='logoText'>© 2021-2022 - </p>
        <p className='mainLogo'>tm</p>
      </div>
    </div>
  )
}

export default Footer