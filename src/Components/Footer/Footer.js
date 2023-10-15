import React from 'react'
import Logo from "./../Navbar/logo.png"
import Linkedin from "./linkedin.png";
import Phone from "./telephone.png";
import "./Footer.css"

export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='website_info'>
                    <h2 className='name'><img src={Logo} alt='' className='logo'/>Blogex</h2>
                    <p>This is the basic Blog website</p>
                </div>
                <div className='Help_container'>
                    <ul>
                        <list> <span className="help_title">Help</span> </list>
                        <list> <span className="footer_component">Help Center</span> </list>
                        <list> <span className="footer_component">Help Forum</span> </list>
                        <list> <span className="footer_component">Video Tutorial</span> </list>
                    </ul>
                </div>
                <div className='info_container'>
                    <ul>
                        <list> <span className="info_title">Connect With Us</span> </list>
                        <list className='social_logo_container'> <img src={Linkedin} alt="" className='social_logo' /> www.linkedin.com</list>
                        <list className='social_logo_container'> <img src={Phone} alt="" className='social_logo' /> +91 8805****87 </list>
                    </ul>
                </div>
            </div>
            <div className='copyright'>
                Copyright © Blogex 2023
            </div>
        </div>
    )
}

