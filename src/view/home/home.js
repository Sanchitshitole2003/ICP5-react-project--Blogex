import './home.css';
import React, { useState, useEffect } from 'react';
import image1 from './image7.png';
import image2 from './image3.png';
import imaget1 from './imaget1.jpg';
import Navbar from '../../Components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer/Footer';
export default function Home() {
    return (
        <> <Navbar/>
        <div class="startdiv">
            <br/><br/><br/><br/><br/><br/>
         <h1 className='titlediv'>BLOGEX</h1>
         <h3 className='titlesubdiv'>Express your knowledge and Experience</h3>
        </div>
            <div className='parentdiv1'> 
                <div classname='container1'>
                    <h1 className='titlehome'>Create a blog</h1>
                    <div className='titletexthome'>Share your story with the world.
                        Stand out with a professionally-designed blog website that can be customized to fit your brand.
                        Build, manage, and promote your blog with blogex built-in suite of design and marketing tools.</div>
                    <button className='btnhm1'>Create Blog</button>
                </div>

               <div>
                    <img src={image1} className='imagediv1' />
                </div>
            </div>
             
            <div className='parentdiv2'>
                    <h1 className='titlehome2'>Explore<br/> Design options</h1>
                    <div className="parent2text">
                    Designing a blog involves considering both the visual and functional aspects of your website. 
                    A well-designed blog should be visually appealing, easy to navigate, and user-friendly. 
                    The design should enhance the content and help you achieve your blogging goals, 
                    whether that's sharing information, building a community, or generating income through your blog.
                    </div>
                    <div>
                        <img src={image2} className='imagediv2' />
                    </div>
                <div className='insidetemp'>
                       <div> <img src={imaget1} className='imagetemp' /></div>
                       <div>
                        <h2>Work From home</h2>
                        <h3>Work From home is an easy way to offer your availabilty without your physical presence in the office</h3> </div>
                    </div>
                   <Link to="/template"><button className='btnhm2'>Visit Template</button></Link>
            </div>
            
            
            <div className='parentdiv3'>
                <div className='creatediv'>
                    How to create a BLOG?
                    <button className='btnhm2'>Get Started</button>
                </div>
                <div className='orderedtext'>
                    <ol>
                        <li>Choose a website template to showcase your blog.</li><br/>
                        <li>Add a Blog Page and customize the layout and design of your blog.</li><br/>
                        <li>Create, publish, and manage content with blog and image editing tools.</li>
                    </ol>
                </div>
            </div>
            <Footer/>
        </>
    )
}