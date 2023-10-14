import './contact.css';

export default function Contact() {
    return(
        <div className='body_bg layout_padding'>
            <section className='contact_section'>
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
                    </div>
                </div>
            </section>
        </div>

    )
}