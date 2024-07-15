import React from 'react'
import style from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faInstagram , faTwitter , faLinkedin } from '@fortawesome/free-brands-svg-icons';
function Footer() {
  return (
    <>
    <hr className={style.hr}/>
    <div className={style.footer}>
<div className={style.footer_left}> 
dfhgjhgjlhk
</div>
<div className={style.footer_right}>
<FontAwesomeIcon className={style.footer_right_icon} icon={faFacebook}/>
<FontAwesomeIcon  className={style.footer_right_icon}  icon={faInstagram}/>
<FontAwesomeIcon  className={style.footer_right_icon}  icon={faTwitter}/>
<FontAwesomeIcon  className={style.footer_right_icon}  icon={faLinkedin}/>
</div>
    </div>
    </>
  )
}

export default Footer