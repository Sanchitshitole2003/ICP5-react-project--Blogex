import React from 'react'
import { Link } from "react-router-dom";
import Linkedin from "./linkedin.png";
import Phone from "./telephone.png";

export default function Footer() {
    return (
        <div>
            <div>
                <h3>Help</h3>
                <ul>
                    <list> <Link to="/help" className="footer_component">Help Center</Link> </list>
                    <list> <Link to="/help" className="footer_component">Help Forum</Link> </list>
                    <list> <Link to="/help" className="footer_component">Video Tutorial</Link> </list>
                </ul>
            </div>
            <div>
                <h3>Coonect With Us</h3>
                <ul>
                    <list> <img src={Linkedin} alt="" /> www.linkedin.com</list>
                    <list> <img src={Phone} alt="" /> +91 9130390335 </list>
                </ul>
            </div>
            <div>
                Copyright © Blogex 2023
            </div>
        </div>
    )
}
