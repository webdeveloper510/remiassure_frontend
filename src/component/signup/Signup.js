import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, Link, useNavigate } from "react-router-dom";

import {API} from "../../config/API";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [referral_code, setrReferral_code] = useState('');

    const navigate = useNavigate();
    const notify = () => toast.success("Sign Up Successfully!");
    const emptyData = () => toast.warn("Please fill out all the fields");

    const handleEmail =(e) => {
        setEmail(e.target.value);
    }
    const handlePassword =(e) => {
        setPassword(e.target.value);

    }
    const handeleLocation =(e) => {
        setLocation(e.target.value);
    } 
    const handleReferral_code = (e) =>{
        setrReferral_code(e.target.value);
    }

    const handleSignupApi = (event) => {
        alert("hii")
        event.preventDefault();
        axios.post(API.BASE_URL + 'register/', {
            email: email,
            password: password,
            location: location,
            referral_code: referral_code, 
        }, {
            headers: {
                // 'X-Oc-Merchant-Id': 'xuiYaBcFyxJqIyYixVpAoQ1xXdWtrNUc',
                'Accept': 'application/json',
                // 'X-Oc-Session': '8246a4ee18765745ded60b8310',
                'Content-Type': 'application/json',
                'mode': 'no-cors',
            },
          
        })
        .then(function(response) {
            // alert(";,fopsdmfodmommgv")
            console.log(response, "responseresponseresponseresponseresponse");
            console.log(response);
            notify();
            navigate('/login');
        })

        .catch(function(error) {
            console.log(error);
            emptyData();
        })
    }

    

    return(
        <>
         {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
         <section className="why-us section-bgba signup_banner" data-aos="fade-up" date-aos-delay="200">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="support_image">
                    <img src="assets/img/help/help_img02.png" alt="support_images" />
                </div>
            </div>

            <div className="col-lg-6">
                {/* start-- card */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-signup">
                            <div className="card-body">
                                <h5 className="Sign-heading">Sign Up</h5>
                                <div className="form_signup">

                                    <form>
                                        <Form.Label>Where are you sending money from?</Form.Label>
                                        <Form.Select 
                                        aria-label="Where are you sending money from?"
                                         value={location}
                                         onClick={handeleLocation}
                                        >
                                            <option >Where are you sending money from?</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </Form.Select>

                                        <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Email</Form.Label>
                                            <Form.Control 
                                            type="email"
                                            value={email}
                                            onChange={handleEmail}
                                            placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 form_label" controlId="formBasicPassword">
                                            <Form.Label> Your Password</Form.Label>
                                            <Form.Control 
                                            type="password"
                                            value={password}
                                            onChange={handlePassword}
                                            placeholder="Password" />
                                        </Form.Group>

                                        <Form.Check  className="form_switch"
                                        type="switch" 
                                        
                                        id="custom-switch" 
                                        label="Referred by a friend? Use the referral code below." 
                                        />

                                        <Form.Group  className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Referral Code</Form.Label>
                                            <Form.Control 
                                            type="text"
                                            value={referral_code}
                                            onChange={handleReferral_code}
                                            placeholder="Enter Referral Code" />
                                        </Form.Group>



                                        <Form.Group className="mb-3 form_checkbox" controlId="formBasicCheckbox">
                                            <Form.Check className="form_label"
                                                type="checkbox"
                                                label="If you DO NOT wish to receive marketing information 
                                                        about out products and special offers, please check this box"
                                            />
                                        </Form.Group>

                                        <button variant="primary"
                                         type="submit" 
                                         onClick={handleSignupApi}
                                         className="signup_button">
                                            Sign Up
                                        </button>
                                        <p className="already_content">Already have an account? 
                                          <NavLink to="/login"> Sign in</NavLink>
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



export default Signup;