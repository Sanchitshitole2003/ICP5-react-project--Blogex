import React from 'react'
import Logo from "./../Navbar/logo.png"
import Linkedin from "./linkedin.png";
import Phone from "./telephone.png";
import "./Footer.css"
import './Footer.css';
export default function Footer() {
    return (
        <div className='footer'>
            <div className='footer_container'>
                <div className='website_info'>
                    <img src={Logo} alt='' className='logo' /> <span className='name'>BlogUs</span>
                    <p>Express your knowledge and experience</p>
                </div>
                <div className='Help_container'>

                    <ul type="disc">
                        <span className="help_title">Help</span>
                        <li> <span className="footer_component">Help Center</span> </li>
                        <li> <span className="footer_component">Help Forum</span> </li>
                        <li> <span className="footer_component">Video Tutorial</span> </li>
                    </ul>
                </div>
                <div className='info_container'>
                    <ul>
                        <span className="info_title">Connect With Us</span>
                        <li className='social_logo_container'> <img src={Linkedin} alt="" className='social_logo' /> www.linkedin.com</li>
                        <li className='social_logo_container'> <img src={Phone} alt="" className='social_logo' /> +91 91********35 </li>
                    </ul>
                </div>
            </div>
            <div className='copyright'>
                Copyright © BlogUs 2023
            </div>
        </div>
    )
}

