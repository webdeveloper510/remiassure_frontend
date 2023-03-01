import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import {API} from "../../config/API";
import axios from 'axios';
import UserContext from '../context/UserContext';



const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [promo_marketing, setPromo_marketing] = useState(false);
    // const {setAuth, userauth}= useContext(UserContext);
    const [loading, setLoading] = useState(false);


    const navigate = useNavigate();

    const notify = () => toast.success("Logged In Successfully!");
    const wrongData = () => toast.warn("Login or Password is Wrong!");
    const emailExits = () => toast.error("Please fill out all the fields");

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    
    const handlePromo_marketing = (e) => {
        const { checked } = e.target;
    
        console.log("checked " + checked);
    
        setPromo_marketing((promo_marketing) => ({
          ...promo_marketing, // <-- shallow copy previous state
          Active: checked // <-- set new Active checked value
        }));
      };


    let sessionID;
    setTimeout(
        function() {
            sessionID = localStorage.getItem("SessionID");
            console.log("Login Session", sessionID);
        },3000
    );
    let keyword;

    const handleLogin = (event) => {
        event.preventDefault();
        setLoading(true); // Set loading before sending API request
        axios.post(API.BASE_URL + 'login/', {
            email: email,
            password: password,
            params: { keyword },
        }, {
            headers: {
                'Content-Type': 'application/json',
            }}, {
        })
        .then(function(response) {
            console.log("Login API" ,response);
            localStorage.setItem("token", response.data.token.access);
            setLoading(false); // Stop loading
            if (response.status)
                notify();
                navigate('/');  
        })

        .catch(function(error, message) {
            console.log(error.response)
            setLoading(false); // Stop loading in case of error

            if(error.response.status){
                toast.error(error.response.data.message);
            }
            console.log(error, "klnklnklnknnnnnnnnnnnn");   
        })

      
    }

    
    return(
        <>
         {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
         <section className="why-us section-bgba login_banner">
    <div className="container">
        <div className="row">
            {/* <div className="col-lg-6">
                <div className="support_image">
                    <img src="assets/img/help/help_img02.png" alt="support_images" />
                </div>
            </div> */}

            <div className="col-lg-12">
                {/* start-- card */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-login">
                            <div className="card-body">
                                <h5 className="Sign-heading">Login</h5>

                                <div className="form_login">
                                    <form>
                                        <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Email</Form.Label>
                                            <Form.Control type="email" 
                                            value={email}
                                            onChange= {handleEmail}
                                            placeholder="Enter email"
                                             />
                                        </Form.Group>

                                        <Form.Group className="mb-3 form_label" controlId="formBasicPassword">
                                            <Form.Label> Your Password</Form.Label>
                                            <Form.Control type="password" 
                                             value={password}
                                             onChange= {handlePassword}
                                            placeholder="Password"
                                             />
                                        </Form.Group>
                                      
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                                    <Form.Check 
                                                    type="checkbox" 
                                                    value={promo_marketing}
                                                    onChange={handlePromo_marketing}
                                                    checked={promo_marketing.Active} // <-- set the checked prop of input    
                                                    label="Remember me " />
                                                </Form.Group>
                                            </div>
                                            <div className="col-lg-6">
                                               <NavLink className="forgot_pass" to="/forgotpassword"> Forgot password?</NavLink>
                                            </div>
                                        </div>

                                        <button variant="primary" 
                                        type="submit"
                                         className="login_button"
                                         onClick={handleLogin}
                                         >
                                            Login
                                            
                                              {loading ? <>
                                                <div class="loader-overly"> 
                                                <div class="loader" > 
                                                
                                                </div>
                                                
                                                </div>
                                              </> : <></>}
                                        </button>
                                        
                                        <p className="already_content">Don't have account? 
                                          <NavLink to="/signup"> Sign up</NavLink>
                                        </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End-- card */}
            </div>
        </div>
    </div>
</section>

        {/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}


        </>

    )
}



export default Login;