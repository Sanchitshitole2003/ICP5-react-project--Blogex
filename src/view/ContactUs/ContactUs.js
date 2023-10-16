import './ContactUs.css';
import Navbar from '../../../src/components/Navbar/Navbar';
import Footer from '../../../src/components/Footer/Footer';
import Github from './github.png';
import Linkedin from './linkedin.jpg';
import Twitter from './twitter-2.png';
import Instagram from './in.jpg';

export default function ContactUs() {
    return(
        <>
        <Navbar/>
        <div className='body_bg layout_padding'>
            <div className='contact_section'>
                <div className='container'>
                <h1 className='m-3 p-1 text-center fs-15'>Contact Us</h1>
                <p className='text-center from-control-lg m-0 p-0'>Let's Get In Touch!</p>
                </div>

                <div className='container text-left main'>
                    <div className='row'>
                        <div className='col m-3'>
                            <h2 className='mt-3 ms-5 heading'>Give Your Suggestions:</h2>
                            <input type='text' placeholder='Enter Your Name:' className='text'/><br></br>
                            <input type="text" placeholder="Enter Phone Number:" className="text"/><br></br>
                            <input type="text" placeholder="Enter Your Email-id:" className="text"/><br></br>
                            <input type="text" placeholder="Enter Your Organisation:" className="text"/><br></br>
                            <input type="text" placeholder="Enter Your Massage (Optional):" className="text textarea"/>
                            <button class="btn-size" onclick="submit()">Submit</button>
                        </div>

                        <div className='col m-3'>
                            <h2 className='mt-3 heading'>Reach Us:</h2>
                            <p className='para mt-3'>Head Office 🏡</p><br></br>
                            <p className='para para-1'>404, Laxmi Heights, Above Lotus Multi-speciality Hospital Manjari  BK, Pune - 412307</p><br></br>
                            <p className="para para-1">📱 8805803087, 7020407429</p><br></br>
                            <p className='para para-1'>📩https://www.roadtocode.org/</p><br></br>
                        </div>

                        <div>
                            <h3 className='mt-1 heading'>Social</h3>
                            <ul>
                                <list> <img src={Github} alt="" /> www.linkedin.com</list> 

                                <list> <img src={Linkedin} alt="" /> www.linkedin.com</list>
                                
                                <link><img src={Twitter} alt="" />www.twitter.com</link>

                                <list><img src={Instagram} alt="" />www.instagram.com</list>
                            </ul>
                        </div>
                    </div>
                </div>
          </div>
            </div>
            <Footer />
</>
    )
}