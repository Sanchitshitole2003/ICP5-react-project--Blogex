import { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from 'react-router-dom';
import Navbar from "../../components/Navbar/Navbar";


function SignUp() {

    const history = useNavigate();

    const [inputdata, setInputdata] = useState(
        {
            name: "",
            date: "",
            email: "",
            password: ""
        }
    )
    const [data, setData] = useState([]);

    const getData = (e) => {
        const { value, name } = e.target;
        // here above, the user's input will be fetched according to object destructuring
        // i.e., value entered for name = 'name', value entered for name ='email' and so on..
        // will be fetched in inputdata in format of [name]:value i.e., key-value pairs; 
        //name : 'mira' email :'mira@gmail.com', so on

        setInputdata({
            ...inputdata, [name]: value
        })
    }



    const addData = (e) => {
        e.preventDefault();

        // object destructuring below
        const { name, date, email, password } = inputdata;

        if (!name) {
            alert('Name is required');
        }
        else if (!date) {
            alert('Birth Date is required');
        }
        else if (!email) {
            alert('Email is required');
        }
        else if (!password) {
            alert('Password is required');
        }
        else if (password.length < 6) {
            alert('Password length must be more than 6');
        }

        else {
            console.log("data added succesfully");
            history("/login")
            localStorage.setItem('usersaveddata', JSON.stringify([...data, inputdata]));

        }

    }


    return (
        <>
            {/* <Navbar/> */}
            <div className="form-div">
                <h3>
                    CREATE YOUR ACCOUNT
                </h3>
                <form>
                    <label htmlFor="name">NAME</label>
                    <input type="text" name="name" onChange={getData} placeholder="Your Name" id="name" />

                    <label htmlFor="date">BIRTH DATE</label>
                    <input type="date" name="date" onChange={getData} placeholder="Birth Date" id="date" />

                    <label htmlFor="email">EMAIL ADDRESS</label>
                    <input type="email" name="email" onChange={getData} placeholder="Email Address" id="email" />

                    <label htmlFor="password">PASSWORD</label>
                    <input type="text" name="password" onChange={getData} placeholder="Password" id="password" />

                    <button className="signup-btn" onClick={addData} type="submit">
                        SIGNUP
                    </button>

                </form>

                <div className="lowbtn-div" style={{
                    display: 'flex', width: '35%', justifyContent: 'space-around'
                }}>
                    <Link to="/" className="back-btn" >
                        BACK
                    </Link>

                    <Link to="/login" className="back-btn">
                        LOGIN
                    </Link>
                </div>

            </div>
        </>
    )
};

export default SignUp;