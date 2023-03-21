import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import CountryDropdown from 'country-dropdown-with-flags-for-react';  
import { Navigate, useNavigate } from "react-router";
import { NavLink } from "react-router-dom";



const Verification = () => {

// start input feilds function
    const [firstnumber, setFirstnumber] = useState('');
    const [secondnumber, setSecondnumber] = useState('');
    const [thirednumber, setThirednumber] = useState('');
    const [fournumber, setFournumber] = useState('');
    const [fivenumber, setFivenumber] = useState('');
    const [sixnumber, setSixnumber] = useState('');
    const [email_otp, setEmail_otp] = useState('');

    //loader state
    const [loading, setLoading] = useState(false);


    //multiple store data in one variable
    const Allvalue = email_otp + firstnumber +secondnumber +thirednumber +fournumber  +fivenumber +sixnumber ;


    const handleVerificationFirst = (e) => {
       
        setFirstnumber(e.target.value);
        console.log(setFirstnumber, "setFirstnumbersetFirstnumbersetFirstnumbersetFirstnumber")
    }
    const handleVerificationSecond = (e) => {
        setSecondnumber(e.target.value);
    }
    const handleVerificationThired = (e) => {
        setThirednumber(e.target.value);
    }
    const handleVerificationFour = (e) => {
        setFournumber(e.target.value);
    }
    const handleVerificationFive = (e) => {
        setFivenumber(e.target.value);
    }
    const handleVerificationSix = (e) => {
        setSixnumber(e.target.value);
    }
    // const handleAllvalues = (e) =>{
    //     setAllValues(e.target.value); 
    // }
    const handleEmailOtp = (e) =>{
        setEmail_otp(e.target.value); 
    }
// End input feilds function

// passing variable in one string variable 



    // const token = localStorage.getItem("token");
    // console.log("TOKEN", token);

     const navigate = useNavigate();
     const notify = () => toast.success("Email Verified Successfully!");
     

/**************************************************************************
 * ************** Email Verification Api  **********************************
 * ***********************************************************************/

    const handleEmailVerification = (event) =>{
            event.preventDefault();
            setLoading(true) // set loading before  sending API request
            axios.post(API.BASE_URL + 'verify-email/', {
                email_otp: Allvalue
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(function(response) {
                console.log(response);
                localStorage.setItem("verification_otp", response.data.msg);
                setLoading(false)  //stop loading 
                if (response.status)
                    notify();
                    navigate('/sendMoney');   
            })
            .catch(function(error, message) {
                console.log(error.response)
                setLoading(false) // stop loading in case with error
                if(error.response.status){
                    toast.error(error.response.data.message);
                } 
                console.log(error, "klnklnklnknnnnnnnnnnnn");   
            })
    }

    return(
        <>
         {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
         <section className="why-us section-bgba verification_banner">
    <div className="container">
        <div className="row">
            
            <div className="col-lg-12">
                {/* start-- card */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-verification">
                            <div className="card-body">
                                <h5 className="Sign-heading">Verify your Account</h5>
                                <p>Please Write Verification code sent your Email</p>
                                <div className="form_verification">
                                    <form>
                                        <Form.Group className="mb-3 verification_input" controlId="formBasicEmail">
                                            <Form.Control type="text" 
                                            value={firstnumber}
                                            maxlength="1" 
                                            onChange= {handleVerificationFirst}
                                            placeholder="x"
                                            autoFocus="autofocus"
                                             />
                                      
                                            <Form.Control type="text" 
                                            value={secondnumber}
                                            maxlength="1" 
                                            onChange= {handleVerificationSecond}
                                            placeholder="x"
                                            autoFocus="autofocus"
                                             />
                                   
                                            <Form.Control type="text" 
                                            value={thirednumber}
                                            maxlength="1" 
                                            onChange= {handleVerificationThired}
                                            placeholder="x"
                                             />
                                       
                                            <Form.Control type="text" 
                                            value={fournumber}
                                            maxlength="1" 
                                            onChange= {handleVerificationFour}
                                            placeholder="x"
                                             />
                                      
                                            <Form.Control type="text" 
                                            value={fivenumber}
                                            maxlength="1" 
                                            onChange= {handleVerificationFive}
                                            placeholder="x"
                                             />
                                    
                                            <Form.Control type="text" 
                                            value={sixnumber}
                                            maxlength="1" 
                                            onChange= {handleVerificationSix}
                                            placeholder="x"
                                             />
                                        </Form.Group>
                                      <div class="col-md-12 align-center">
                                        <NavLink to="/sendMoney">
                                        <button variant="primary" 
                                        type="submit"
                                         className="continue_button"
                                         onClick={handleEmailVerification}
                                         >
                                            Continue
                                            {
                                                loading ?<>
                                                   <div class="loader-overly"> 
                                                       <div class="loader" > 
                                                       </div>
                                                    </div>
                                                </>:<></>
                                            }
                                        </button>
                                        </NavLink>

                                        </div>
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



export default Verification;