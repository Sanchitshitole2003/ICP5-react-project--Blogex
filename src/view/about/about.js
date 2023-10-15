import './about.css'
import image1 from './image1.jpg';
import Navbar from '../../../src/Components/Navbar/Navbar';
import Footer from '../../../src/Components/Footer/Footer';
import image2 from './noor.jpg';
import image3 from './sachi.jpg';
import image4 from './ajinkya.jpg';
import image5 from './hemant.jpg';
import image6 from './sayli.jpg';
import image7 from './vaishnavi.jpg';
import image8 from './sanchit.jpg';
import image9 from './snehal.jpg';
import linkedin from './linkedin.png';
import github from './github.png';
export default function About() {
    return (
        <>
            <Navbar />
            <div>
                <div className='aparentdiv1'>
                    <div classname='acontainer1'>
                        <h1 className='atitlehome'>About us</h1>
                        <div className='atitletexthome'>Blogex is a blog website which contains many blog post within itself.
                            Blogex website is a site that is updated with new information on an ongoing basis and normally consists of a collection of posts.
                            One of the greatest benefits of blogging is that it helps you connect and build relationships with leads and customers.
                            If you are starting from scratch,the blogging platform 'BLOGEX' allow you to get started for free.</div>
                    </div>

                    <div>
                        <img src={image1} className='aimagediv1' />
                    </div>
                </div>
            </div>
            <h1 className='abouthead'>Our Team</h1>
            <div className='aboutdiv'>
                
               <div className='parentteam'>
                <div>
                    <img className='aboutimg' src={image2}/>
                </div>
                <h className='name'>Noor Shaikh</h>
               <div className='textabout'> 
               <div>
               <img src={linkedin} className='logo1'/>noorbanoshaikh</div>
               <div><img src={github} className='logo1'/>https://github.com/noorshaikh123</div>
               </div>
               </div>

               <div className='parentteam'>
                <div>
                    <img className='aboutimg' src={image3}/>
                </div>
                <h className='name'>Sachi Ramteke </h>
               <div className='textabout'> 
               <div><img src={linkedin} className='logo1'/> sachi-ramteke04182</div>
               <div><img src={github} className='logo1'/> https://github.com/Sachi-Ramteke</div>
               </div>
               </div>

               <div className='parentteam'>
                <div>
                    <img className='aboutimg' src={image4}/>
                </div>
                <h className='name'>Ajinkya Daf</h>
               <div className='textabout'> 
               <div><img src={linkedin} className='logo1'/>ajinkya-daf-0a5244285</div>
               <div><img src={github} className='logo1'/>https://github.com/AjinkyaDaf</div>
               </div>
               </div>

               <div className='parentteam'>
                <div>
                    <img className='aboutimg' src={image5}/>
                </div>
                <h className='name'>Hemant</h>
               <div className='textabout'> 
               <div><img src={linkedin} className='logo1'/>hemantgaikwad13</div>
               <div><img src={github} className='logo1'/>https://github.com/hemantgaikwad13</div>
               </div>
               </div>

               <div className='parentteam'>
                <div>
                    <img className='aboutimg' src={image6}/>
                </div>
                <h className='name'>Sayali Kohad</h>
               <div className='textabout'> 
               <div><img src={linkedin} className='logo1'/>sayali-kohad-7a7a47255</div>
               <div><img src={github} className='logo1'/>https://github.com/sayalikohad</div>
               </div>
               </div>

               <div className='parentteam'>
                <div>
                    <img className='aboutimg' src={image7}/>
                </div>
                <h className='name'>Vaishnavi Ambarte</h>
               <div className='textabout'> 
               <div><img src={linkedin} className='logo1'/>vaishnavi-ambarte-13259327b</div>
               <div><img src={github} className='logo1'/>https://github.com/vaishnaviambarte</div>
               </div>
               </div>

               <div className='parentteam'>
                <div>
                    <img className='aboutimg' src={image8}/>
                </div>
                <h className='name'>Sanchit Shitole</h>
               <div className='textabout'> 
               <div><img src={linkedin} className='logo1'/>sanchit-shitole</div>
               <div><img src={github} className='logo1'/>https://github.com/Sanchitshitole2003</div>
               </div>
               </div>

               <div className='parentteam'>
                <div>
                    <img className='aboutimg' src={image9}/>
                </div>
                <h className='name'>Snehal</h>
               <div className='textabout'> 
               <div><img src={linkedin} className='logo1'/>snehal-kalvar-396718273</div>
               <div><img src={github} className='logo1'/>https://github.com/hemantgaikwad13</div>
               </div>
               </div>
            </div>
            <Footer />
        </>
    )
}
