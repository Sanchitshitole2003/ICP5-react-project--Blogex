import './home.css';
import React, { useState, useEffect } from 'react';
import image1 from './image1.png';

export default function Home() {
    return (
        <>
            <div className='parentdiv1'>
                <div classname='containerdiv1'>
                    <h1 className='titlehome'>Create a blog</h1>
                    <div className='titletexthome'>Share your story with the world. 
                        Stand out with a professionally-designed blog website that can be customized to fit your brand. 
                        Build, manage, and promote your blog with blogex built-in suite of design and marketing tools.</div>
                        <button className='btnhm1'>Create Blog</button>
                    </div>
                    <img src={image1} className='imagediv1'/>
                <div>

                </div>
            </div>
        </>
    )
}