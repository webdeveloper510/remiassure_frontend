import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate, useParams} from 'react-router-dom';

import { toast } from "react-toastify";
import {API} from "../../config/API";
import axios from 'axios';
import UserContext from '../context/UserContext';
import './recent-style.scss';



const RecentPassword = () => {


    // const [token_forgot, setToken_forgot] = useState('');

    // useEffect(() => {
    // localStorage.setItem('dataKey', JSON.stringify(token_forgot));
    // }, [token_forgot]);


    const token_forgot = localStorage.getItem("token_forgot");
    console.log("Token_Forgot_password", token_forgot);


    const token_forgot_url = localStorage.getItem("token_forgot_url");
    console.log("token_forgot_url", token_forgot_url);


    const notify = () =>toast.success("Check your email to Reset Password");
    const wrongData = () =>toast.warm("This E-mail is not our records, please try again");

    const navigate = useNavigate();


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const {id} = useParams();

    const handlePassword =(e) =>{
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
    }

    const handleRecent = (event) => {
        event.preventDefault();
            axios.post(API.BASE_URL + `reset-password/${token_forgot}/`, {
                password: password,
                confirmPassword: confirmPassword,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                }}, {
            })
            .then(function(response) {
                console.log("Forget API" ,response);
                window.location.reload(false);
                navigate('/login')
                notify();
            })
            .catch(function(error) {
                console.log(error.response);
                if(error.response.status){
                    toast.error(error.response.data.detail);
                }
                // wrongData();
            })
        }
    
    return(
        <>
         {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
         <section className="why-us section-bgba recent_banner" data-aos="fade-up" date-aos-delay="200">
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
                        <div className="card card-recent-password">
                            <div className="card-body">
                                <h5 className="Sign-heading">Recent Password ?</h5>

                                <div className="form_login">
                                    <form>
                                      <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>New Password</Form.Label>
                                            <Form.Control 
                                            type="password"
                                            value={password}
                                            onChange={handlePassword}
                                             placeholder="Enter New Password" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Confirm Password</Form.Label>
                                            <Form.Control 
                                            type="password"
                                            value={confirmPassword}
                                            onChange={handleConfirmPassword}
                                             placeholder="Enter Confirm Password" />
                                        </Form.Group>

                                        <button variant="primary" 
                                       type="submit" 
                                       className="login_button"
                                       onClick={handleRecent}
                                       >
                                            Recent Password
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



export default RecentPassword;