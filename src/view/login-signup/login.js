import "./signup";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/ReactToastify.css';
import "./login.css"

function Login() {
    const history = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false)

    const [inputdata, setInputdata] = useState(
        {
            email: '',
            password: ''
        }
    )


    const getData = (e) => {
        const { value, name } = e.target;

        setInputdata(() => {
            return {
                ...inputdata, [name]: value
            }
        })
    }

    // const [data, setData] = ([]);
    const handleLogin = () => {

        // const addData = () => {
        // e.preventDefault();

        const getUserArray = localStorage.getItem('usersaveddata');
        console.log(getUserArray);

        // object destructuring below
        const { email, password } = inputdata;

        if (!email) {
            toast.error('email field is requred', {
                position: "top-center",
            });

        }
        else if (!password) {
            toast.error('email field is requred', {
                position: "top-center",
            });

        }
        else if (password.length < 6) {
            toast.error('Password length must be more than 6', {
                position: "top-center",
            });
        }

        else {
            if (getUserArray && getUserArray.length) {
                const userdata = JSON.parse(getUserArray);
                const userlogin = userdata.filter((element, _i) => {
                    return element.email === email && element.password === password
                });

                if (userlogin.length === 0) {
                    toast.error('Invalid Details', {
                        position: "top-center",
                    });
                }

                else {
                    toast.success('Logged In Successfully', {
                        position: "top-center",
                    });

                    localStorage.setItem('userlogininfo', JSON.stringify(userlogin))
                    history('/blogdisplay');
                    setLoggedIn(true);
                }

            }

        }

    }

    // const handleLogout = () => {
    //     localStorage.removeitem('userlogininfo')
    //     history('/');
    //     setLoggedIn(false);
    // }
// 

    return (
        <>
            <div className="form-div login-div">
                <h3>
                    LOG IN INTO YOUR ACCOUNT
                </h3>
                <form>

                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" name="email" onChange={getData} placeholder="Email Address" id="email" />

                    <label htmlFor="password">PASSWORD</label>
                    <input type="text" name="password" onChange={getData} placeholder="Password" id="password" />

                    <button className="signup-btn" onClick={handleLogin} type="submit" >
                        LOGIN
                    </button>



                </form>

                <div style={{
                    display: 'flex', width: '35%', justifyContent: 'space-around'
                }}>
                    <Link to="/" className="back-btn" >
                        BACK
                    </Link>

                    <Link to="/signup" className="back-btn">
                        SIGNUP
                    </Link>
                </div>

            </div>
            <ToastContainer/>
        </>
    )
};

export default Login;