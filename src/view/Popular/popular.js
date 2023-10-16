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
import { Link } from 'react-router-dom';

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
    <Link to="/tea"><button className='btnpo'>Read Blog</button></Link>
</div>

<div className='divparent'>
    <div>
      <img src={image1} className='popimg'/>  
    </div>
    <div className='title'>Is Coding a boon?</div>
    <Link to="/coding"><button className='btnpo'>Read Blog</button></Link>
</div>

<div className='divparent'>
    <div>
      <img src={image2} className='popimg'/>  
    </div>
    <div className='title'>Unconditional love of mother</div>
    <button className='btnpo'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image3} className='popimg'/>  
    </div>
    <div className='title'>AI v/s human</div>
    <Link to="/ai"><button className='btnpo'>Read Blog</button></Link>
</div>

<div className='divparent'>
    <div>
      <img src={image4} className='popimg'/>  
    </div>
    <div className='title'>The love of CAR's</div>
    <button className='btnpo'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image5} className='popimg'/>  
    </div>
    <div className='title'>Can burger be a life threat?</div>
    <button className='btnpo'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image6} className='popimg'/>  
    </div>
    <div className='title'>The day of Graduation</div>
    <button className='btnpo'>Read Blog</button>
</div>

<div className='divparent'>
    <div>
      <img src={image7} className='popimg'/>  
    </div>
    <div className='title'>Make money through business</div>
    <button className='btnpo'>Read Blog</button>
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
                    
                </h>
            </div>
            </div>
        </div>*/
       
    )
}
