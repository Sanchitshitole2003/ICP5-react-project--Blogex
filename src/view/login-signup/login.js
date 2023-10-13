import "./signup";
import { useState } from "react";
import {Link, useNavigate } from 'react-router-dom';
import "./login.css"

function Login() {
    const history = useNavigate();
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

    const addData = (e) => {
        e.preventDefault();

        const getUserArray = localStorage.getItem('usersaveddata');
        console.log(getUserArray);

        // object destructuring below
        const { email, password } = inputdata;

        if (!email) {
            alert('Email is required');

        }
        else if (!password) {
            alert('Password is required');

        }
        else if (password.length < 6) {
            alert('Password length must be more than 6');
        }

        else {
            if (getUserArray && getUserArray.length) {
                const userdata = JSON.parse(getUserArray);
                const userlogin = userdata.filter((element, _i) => {
                    return element.email === email && element.password === password
                });

                if (userlogin.length === 0) {
                    alert('inavalid information')
                }
                else {
                    console.log('logged in successfully');

                    localStorage.setItem('userlogininfo', JSON.stringify(userlogin))
                    history('/');
                }

            }

        }

    }


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

                    <button className="signup-btn" onClick={addData} type="submit" >
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
        </>
    )
};

export default Login;