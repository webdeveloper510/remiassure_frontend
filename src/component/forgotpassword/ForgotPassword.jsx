import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import {API} from "../../config/API";
import axios from 'axios';
import UserContext from '../context/UserContext';

const ForgotPassword = () => {

    const notify = () =>toast.success("Check your email to Reset Password");
    const wrongData = () =>toast.warm("This E-mail is not our records, please try again");

   const navigate = useNavigate('');

    const [email, setEmail] = useState('');

    const token_forgot = localStorage.getItem("token_forgot");

    // const token_forgot_url = localStorage.getItem("token_forgot_url");

    const handleEmail =(e) =>{
        setEmail(e.target.value);
    }


    let sessionID;
    setTimeout(
        function() {
            sessionID = localStorage.getItem("SessionID");
            console.log("Login Session", sessionID);
        },3000
    );

    const handleForget = (event) => {
        event.preventDefault();
            axios.post(API.BASE_URL + 'send-password-reset-email/', {
                email: email,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }}, {
            })
            .then(function(response) {
                console.log("Forget API" ,response);
                localStorage.setItem("token_forgot", response.data.token);
                localStorage.setItem("token_forgot_url", `http://localhost:3000/resetpassword/${token_forgot}`);
                // navigate(`/resetpassword/${token_forgot}`);
                // window.location.reload(false);

                notify();
            })
            .catch(function(error) {
                console.log(error.response);
                if(error.response.status){
                    toast.error(error.response.data.message);
                }
                // wrongData();
            })
        }
        
    
    return(
        <>
         {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
         <section className="why-us section-bgba forgot_banner" data-aos="fade-up" date-aos-delay="200">
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
                        <div className="card card-forgot-password">
                            <div className="card-body">
                                <h5 className="Sign-heading">Forgot Password ?</h5>

                                <div className="form_login">
                                    <form>
                                      <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Email</Form.Label>
                                            <Form.Control 
                                            type="email"
                                            value={email}
                                            onChange={handleEmail}
                                             placeholder="Enter email" />
                                        </Form.Group>

                              
                                        <button variant="primary" 
                                       type="submit" 
                                       className="login_button"
                                       onClick={handleForget}
                                       >
                                            Forgot Password
                                        </button>
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



export default ForgotPassword;