import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom'
import "./blogdisplay.css"


function Blogdisplay() {

    const history = useNavigate();
   
    useEffect(
        () => {
            // Birthday();
            const currentTime = new Date();
            const hours = currentTime.getHours();

            let message = "Happy Motivated Morning";
            if (hours >= 12 && hours < 17) {
                message = "Happy Productive Afternoon";
            }
            else if (hours >= 17 && hours <= 5) {
                message = "Have a Relaxed Night";
            }

            toast(message, {
                position: 'top-center',
                autoClose: 3000,
                width: '40%'
            
            });
        },
        []);

    const userlogout = () => {
        localStorage.removeItem("userlogininfo");
        history("/");
    }

    return (
        <>
            <Navbar />
            <ToastContainer
                position={'top-center'}
                closeOnClick={true}
                pauseOnHover={false}
                autoClose={2000}
            />

            <button className='logout-btn' onClick={userlogout}>
                LogOut
            </button>
        </>
    )
}

export default Blogdisplay;
