import './about.css';
import Navbar from '../../components/Navbar/Navbar';
export default function About() {
    return(
        <>
        <Navbar/>
        <div className='page-title-wrapper text-center'>
            <h1 class="page-title mb-25">About Us </h1>
            <ul className='trail-items'>
                <li className='trail-item trail-begin'>
                    <a href="/">
                        <span>Home</span>
                    </a>
                    
                </li>
                <li class="trail-item trail-end">
                    <span>About Us</span>
                </li>

            </ul>
        </div>
</>
    )
}