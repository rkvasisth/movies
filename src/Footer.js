import React from 'react';
import { Link } from 'react-router-dom';


const Footer = ()=>{
return(
    <>
    <div className="footer">
        <div className="social-links">
            <a href=""><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-twitter" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-youtube-play" aria-hidden="true"></i></a>
            <a href=""><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>

        </div>
        <div className="f-links">
                    <Link to='/home' className="">Home</Link>
                   <Link to='/aboutus' className="">About Us</Link>
                   <Link to='contactus' className="">Contact Us</Link>
                   <Link to='faq' className="">FAQs</Link>

        </div>
        <div className="copyright">© 1990-2021 by raj.com, Inc.</div>

    </div>
    </>
)

}

export default Footer;