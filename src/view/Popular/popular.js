import './popular.css';
import image8 from './image4.jpg';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import image1 from './imagep1.jpg';
import image2 from './imagep2.jpg';
import image3 from './imagep3.jpg';
import image4 from './imagep4.png';
import image5 from './imagep5.jpg';
import image6 from './imagep6.jpg';
import image7 from './imagep7.png';
export default function Popular() {
    return (


<>
<Navbar/>
<div className='parent'>
<div className='divparent'>
    <div>
      <img src={image8} className='popimg'/>  
    </div>
    <div className='title'>Tea is life</div>
    <button className='btn'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image1} className='popimg'/>  
    </div>
    <div className='title'>Is Coding going a boon?</div>
    <button className='btn'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image2} className='popimg'/>  
    </div>
    <div className='title'>Unconditional love of mother</div>
    <button className='btn'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image3} className='popimg'/>  
    </div>
    <div className='title'>AI v/s human</div>
    <button className='btn'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image4} className='popimg'/>  
    </div>
    <div className='title'>The love of CAR's</div>
    <button className='btn'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image5} className='popimg'/>  
    </div>
    <div className='title'>Can burger be a life threat?</div>
    <button className='btn'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image6} className='popimg'/>  
    </div>
    <div className='title'>The day of Graduation</div>
    <button className='btn'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image7} className='popimg'/>  
    </div>
    <div className='title'>Make money through business</div>
    <button className='btn'>Read Blog</button>
</div>
</div>
<Footer/>
</>

       /* <div>
            <span className='tempsubheading'><h1>Title</h1>
            <h3>By: xyz surname</h3></span>
            <div className='tempsub1'>
            <div>   
                <img src={image4} className='imagePopular' />
            </div>
            <div>    
                <h className='textPopular'>
                    Tea is the most popular beverage in the world after water.
                    It’s a simple preparation of pouring hot water over cured leaves of the Camellia sinensis plant.
                    The first recording of tea described it as a medicinal beverage in China in the 3rd century AD.
                    Merchants helped its popularity to spread quickly across continents.
                    In the early 19th century, Great Britain popularized the concept of afternoon tea,
                    a break from one’s routine in which tea is served alongside sandwiches and baked goods such as scones.
                    The flavor of tea varies by where the tea leaves are harvested and how they are grown and processed.
                    Black tea is the most popular worldwide, followed by green, oolong, and white tea
                </h>
            </div>
            </div>
        </div>*/
       
    )
}
