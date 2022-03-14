import './Header.css'
import CTA from './CTA'
import ME from '../../assets/img_2.png'
import HeaderSocials from './HeaderSocials'
import {BsMouse} from 'react-icons/bs'


const Header = () => {

    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };
    return ( 

        <header>
            <div className="container header__container">
                <h5> Hello i'm</h5>
                <h1> Anoop Kiran A M</h1>
                <h5 className='text-light'>Full Stack Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="me">
                    <img 
                    style={{height: "450px", width:"300px", marginLeft:"0.5rem"}}
                    src={ME} alt="me" />
                </div>
                <a href='#contact'><BsMouse className='scroll__down mouse__icon' /></a>
                <a href='#contact' className='scroll__down'>Scroll Down</a>
            </div>

        </header>
        
     );
}
 
export default Header;