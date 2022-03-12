import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {GrInstagram} from 'react-icons/gr';
import {FaGithub} from 'react-icons/fa';


function HeaderSocials() {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" rel="noreferrer" target="_blank">
            <BsLinkedin />
        </a>
        <a href="https://github.com" rel="noreferrer" target="_blank">
        <FaGithub></FaGithub> 
        </a>
        <a href="https://instagram.com" rel="noreferrer" target="_blank">
           
           <GrInstagram></GrInstagram>
        </a>
        
    </div>
  )
}

export default HeaderSocials