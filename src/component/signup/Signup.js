import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, Link, useNavigate } from "react-router-dom";

import {API} from "../../config/API";
import axios from 'axios';
import { toast } from 'react-toastify';


const Signup = () => {

    const [show, setShow] = React.useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [referral_code, setrReferral_code] = useState(null);
    const [promo_marketing, setPromo_marketing] = useState(false);

    const navigate = useNavigate();
    const notify = () => toast.success("Sign Up Successfully!");
    const emptyData = () => toast.warn("Please fill out all the fields");
    const emailExits = () => toast.error("User with this Email already exists!");

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

    const handlePromo_marketing = (e) => {
        const { checked } = e.target;
    
        console.log("checked " + checked);
    
        setPromo_marketing((promo_marketing) => ({
          ...promo_marketing, // <-- shallow copy previous state
          Active: checked // <-- set new Active checked value
        }));
      };


    const handleSignupApi = (event) => {
        event.preventDefault();
        axios.post(API.BASE_URL + 'register/', {
            email: email,
            password: password,
            location: location,
            referral_code: !referral_code? referral_code: null, 
            promo_marketing: promo_marketing.Active,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
          
        })
        .then(function(response) {
            console.log(response);
            if (response.status)
                notify();
                navigate('/login');   
        })
        .catch(function(error, message) {
            console.log(error.response)
            if(error.response.status){
                toast.error(error.response.data.message || error.response.data.password[0]);
            } 
            console.log(error, "klnklnklnknnnnnnnnnnnn");   
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
                    <img src="assets/img/help/help_img02.svg" alt="support_images" />
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
                                        onClick={() => setShow(!show)}
                                        value={referral_code}
                                        onChange={handleReferral_code}
                                        id="custom-switch" 
                                        label="Referred by a friend? Use the referral code below." 
                                        />
                                 {show && <div>
                                        <Form.Group  className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Referral Code</Form.Label>
                                            <Form.Control 
                                            type="text"
                                            value={referral_code}
                                            onChange={handleReferral_code}
                                            placeholder="Enter Referral Code" />
                                        </Form.Group>
                                        </div>}



                                        <Form.Group className="mb-3 form_checkbox" controlId="formBasicCheckbox">
                                            <Form.Check className="form_label"
                                                type="checkbox"
                                                value={promo_marketing}
                                                onChange={handlePromo_marketing}
                                                checked={promo_marketing.Active} // <-- set the checked prop of input

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