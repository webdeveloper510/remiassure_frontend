<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, Link, useNavigate } from "react-router-dom";
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import {useLocation} from "react-router-dom";

import {API} from "../../config/API";
import axios from 'axios';
import { toast } from 'react-toastify';


const Signup = () => {

    const token = localStorage.getItem("token");
    console.log("TOKEN", token);

    const [show, setShow] = React.useState(false);
    const [loading, setLoading] = useState(false);


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [referral_code, setrReferral_code] = useState();
    const [referral_value, setrReferral_value] = useState();
    const [promo_marketing, setPromo_marketing] = useState(false);
    const [mobile, setMobile] = useState('');
    const search = useLocation()
    const [checkBoxValue, setCheckBoxvalue] = useState(false);

    const navigate = useNavigate();

    const notify = () => toast.success("Sign Up Successfully!");
    const emptyData = () => toast.warn("Please fill out all the fields");
    const emailExits = () => toast.error("User with this Email already exists!");

    const handleEmail =(e) => {
        setEmail(e.target.value);
    }
    const handleMobile =(e) =>{
        setMobile(e.target.value);
    }
    const handlePassword =(e) => {
        setPassword(e.target.value);

    }
    const handeleLocation =(e) => {
        setLocation(e.target.value);
    } 

    // const handleCheckBox =(e) =>{
    //     if(e.target.checked){
    //         setCheckBoxvalue(true);
    //     }
    // else{
    //     setCheckBoxvalue(false);
    //     }
    // }
  
        
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

      let keyword;

    //   if(switch==!checked)
    //   {
        
    //   } else{
        
    //   }
  
    const handleSignupApi = (event) => {
        event.preventDefault();
        setLoading(true); // Set loading before sending API request

        axios.post(API.BASE_URL + 'register/', {
            email: email,
            mobile: mobile,
            password: password,
            location: location,
            referral_code: referral_code,
            promo_marketing: promo_marketing.Active,
            params: { keyword },
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
          
        })
        .then(function(response) {
            console.log(response);
            // localStorage.setItem("signup_message", response.data.msg);
            // setShow(!show)
            setLoading(false); // Stop loading
                notify();
                navigate('/verification');   
                // console.log(navigate, "jkfjkdkvnfkvnfkvnfkvnvknvknvkvnkvnvknknvknvknk")
        })
        .catch(function(error, message) {
            console.log(error.response)
            setLoading(false); // Stop loading in case of error
            if(error.response.data.status){
                toast.error(error.response.data.message || error.response.data.password[0]);
            } 
            console.log(error, "klnklnklnknnnnnnnnnnnn");   
        })
    }
    

//Start get value Url
    // useEffect(()=> {

        // const queryParams = new URLSearchParams(window.location.search);
        // const term = queryParams.get('ref');
        // console.log(term, "termtermtermterm");
        // alert("hii")

        // const search1 = search.search;
        // const term = new URLSearchParams(search).get('ref');
        // console.log(term, "termterm")
        // var  url =window.location.search
        // console.log(url, "urlurlurlurlurlurlurlurl")
        // const queryParams = new URLSearchParams(url)
        // const term = queryParams.get("ref");
        // console.log(term)
        // if(true){
        //     // setrReferral_code(term)
        //     setShow(true)
        //     // console.log(referral_code, "referral_codereferral_code")
          
        // }
       
    // },[])
    

    useEffect(() => {
         const search1 = search.search;
        const term = new URLSearchParams(search1).get('ref');
        console.log(term, "termterm")
        if(term){
            setrReferral_value(term)
            setShow(true)
            console.log(referral_code, "referral_codereferral_codereferral_code");
        

        }
       
      },[]);

//End get value Urls

    let checked;

    //Start Referal code Api
    //
    // const myReferalCode =(value)=> {   
    //     // useEffect(() => {
    //         // setrReferral_code(checked==true);
    //         axios.post(API.BASE_URL + 'referral-link/',{}, {
    //             headers: {
    //                 "Authorization" : `Bearer ${token}`,
    //             }
    //         })
    //         .then(function(response) {
    //             console.log(response);
    //             localStorage.setItem("referral_link",response.data.referral_link);
    //                 // notify();
    //                 // navigate('/verification');   
    //                 // console.log(navigate, "jkfjkdkvnfkvnfkvnfkvnvknvknvkvnkvnvknknvknvknk")
    //         })
    //         .catch(function(error, message) {
    //             console.log(error.response)
    //             if(error.response.data.status){
    //                 toast.error(error.response.data.message);
    //             } 
    //             console.log(error, "klnklnklnknnnnnnnnnnnn");   
    //         })

    //     // }, [true])
    // }
    //End Referal code ApI


 





    return(
        <>
         {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
         <section className="why-us section-bgba signup_banner">
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
                                        <Form.Label>Where are you sending money from?<span style={{color: 'red'}} >*</span></Form.Label>
                                        <CountryDropdown
                                         id="UNIQUE_ID" 
                                         className='YOUR_CSS_CLASS rate_input form-control'
                                         // preferredCountries={['gb', 'us' ]} 
                                          value={location}
                                          handleChange={handeleLocation}
                                        //   handleChange={e=> console.log(e.target.value)}
                                          >
                                        </CountryDropdown>
                                        {/* <Form.Select 
                                         value={location}
                                         onChange={handeleLocation}
                                         >   
                                            <option value="">--- Select Location ---</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Canada">Canada</option>
                                            <option value="China">China</option>
                                        </Form.Select> */}
                                        <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Email<span style={{color: 'red'}} >*</span> </Form.Label>
                                            <Form.Control 
                                            type="email"
                                            value={email}
                                            onChange={handleEmail}
                                            placeholder="Enter email" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Phone<span style={{color: 'red'}} >*</span> </Form.Label>
                                            <Form.Control 
                                            type="mobile"
                                            value={mobile}
                                            onChange={handleMobile}
                                            placeholder="Enter Phone" />
                                        </Form.Group>

                                        <Form.Group className="mb-3 form_label" controlId="formBasicPassword">
                                            <Form.Label> Your Password<span style={{color: 'red'}} >*</span> </Form.Label>
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
                                        checked={show ? true : false}
                                        // onChange={(e)=> {myReferalCode(e.target.value);setrReferral_code(e.target.value)}}
                                        //   onChange={(e)=> {setrReferral_code(e.target.value)}}
                                        id="custom-switch" 
                                        label="Referred by a friend? Use the referral code below." 
                                       
                                        />
                                    {show && <div>
                                        <Form.Group  className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Referral Code</Form.Label>
                                            <Form.Control 
                                            type="text"
                                            value={referral_value}
                                            onChange={handleReferral_code}
                                            placeholder="Enter Referral Code" />
                                        </Form.Group>
                                        </div>}

                                        <Form.Group className="mb-3 form_checkbox" controlId="formBasicCheckbox">
                                           
                                            <Form.Check className="form_label"
                                                type="checkbox"
                                                value={promo_marketing}
                                                onChange={handlePromo_marketing}
                                                checked={promo_marketing.Active} // <-- set the checked prop of input\

                                                label="If you DO NOT wish to receive marketing information 
                                                        about out products and special offers, please check this box"
                                            />
                                        </Form.Group>

                                        <button variant="primary"
                                         type="submit" 
                                         onClick={handleSignupApi}
                                         className="signup_button ">
                                            Signup
                                          {loading ? <>
                                                <div class="loader-overly"> 
                                                <div class="loader" > 
                                                
                                                </div>
                                                
                                                </div>
                                              </> : <></>}
                                        </button>
                                        <p className="already_content">Already have an account? 
                                          <NavLink to="/login">Sign in</NavLink>
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



=======
import React, { useEffect, useState , useRef,useMemo} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, Link, useNavigate } from "react-router-dom";
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import {useLocation} from "react-router-dom";
import Select from "react-select";


import countryList from 'react-select-country-list'




import {API} from "../../config/API";
import axios from 'axios';
import { toast } from 'react-toastify';

{/* start -- css*/}
const myStyle= {
    color: "red",
 }
 {/* End -- css*/}


const Signup = () => {

    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error,setError]=useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [referral_code, setrReferral_code] = useState('');
    const [referral_value, setrReferral_value] = useState('');
    const [promo_marketing, setPromo_marketing] = useState(false);
    const [mobile, setMobile] = useState('');

    const [sucessText, setSucessText] = useState('');

    const [locationText, setLocationText] = useState('');
    const [emailText, setEmailleText] = useState('');
    const [emailExistText, setEmailExistText] = useState('');
    const [emailvalidAddress,setEmailvalidAddress ] = useState('');
    const [mobileText, setMobileText] = useState('');
    const [mobileValidText, setMobileValidText] = useState('');
    const [passwordText, setPasswordText] = useState('');
    const [referralText, setReferralText] = useState('');
    const [referralInvalidText, setReferralInvalidText] = useState('');
   
 
    

    const search = useLocation()
    const [checkBoxValue, setCheckBoxvalue] = useState(false);
    
    const [countryValue, setcountryValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])

    const changeHandler = countryValue => {
        setcountryValue(countryValue)
    }


    console.log("Show",show)

    useEffect(() => {
        console.log('show=============>',show)
        if(show == false) {
            setrReferral_code("")
            
        }
        
    })
    console.log("REF", referral_code)



   /* start-- useRef is used for focusing on inputbox */
   const input_location = useRef(null);
   const input_email = useRef(null);
   const input_mobile = useRef(null);
   const input_password = useRef(null);
   const input_refferal_code = useRef(null);
   


   //Token get 
    const token = localStorage.getItem("token");
    console.log("TOKEN", token);

    const navigate = useNavigate();

    // const notify = () => toast.success("Sign Up Successfully!");
    // const emptyData = () => toast.warn("Please fill out all the fields");
    // const emailExits = () => toast.error("User with this Email already exists!");

    const handleEmail =(e) => {
        setEmail(e.target.value);
    }
    const handleMobile =(e) =>{
        setMobile(e.target.value);
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




/**************************************************************************
 * ************** Start -Signup Api call **********************************
 * ***********************************************************************/
  
    const handleSignupApi = (event) => {
        event.preventDefault();
        //useRef is used for focusing on inputbox
    //    if (mobile.length==0){
    //         input_mobile.current.focus();
    //         setError(true);
    //     } else if (password.length==0){
    //         input_password.current.focus();
    //         setError(true);
    //     } else if (countryValue.length==0){
    //         countryValue.current.focus();
    //         setError(true);
    //     } 
        // else if (referral_code.length==0){
        //     referral_code.current.focus();
        //     setError(true);
        // } 

        // else{

        setLoading(true); // Set loading before sending API request
        let data = {
            email: email,
            mobile: mobile,
            password: password,
            // location: location,
            location: countryValue.label,
            referral_code: referral_code,
            promo_marketing: promo_marketing.Active,
        }
        if (!show)
         delete data['referral_code'] 
        axios.post(API.BASE_URL + 'register/', data, {
            headers: {
                'Content-Type': 'application/json',
            },
          
        })
        .then(function(response) {
            console.log(response);
            localStorage.setItem("signup_token", response.data.tokens.access);
            //validation
            setSucessText(response.data.data.message && response.data.data.msg)
            setMobileText(response.data.Mobile);
            console.log(mobileText, "mobileTextmobileTextmobileText");
         
          
            setLoading(false); // Stop loading
                // notify();
                navigate('/verification');   
                // console.log(navigate, "jkfjkdkvnfkvnfkvnfkvnvknvknvkvnkvnvknknvknvknk")
        })
        .catch(function(error, message) {
            setLoading(false); // Stop loading
            if(error.toJSON().message === 'Network Error'){
                console.log('Please check your internet connection!!')
            }
            
            else{
                    if(error.response.data.status){
                    
                    } 
                    setSucessText(error.response.data.message || error.response.data.msg)
                    setLocationText(error.response.data.Location);
                    setEmailleText(error.response.data.Enteremail);
                    setEmailExistText(error.response.data.Emailexist);
                    setPasswordText(error.response.data.Password);
                    setReferralText(error.response.data.Enterreferralcode);
                    setReferralInvalidText(error.response.data.Invalidreferralcode);
                    setMobileText(error.response.data.Entermobile);
                    setMobileValidText(error.response.data.Checkmobile);
                    setEmailvalidAddress(error.response.data.email)
            }
           
        })
    }
// }
    

/**************************************************************************
 * ************** Start-- get value Url **********************************
 * ***********************************************************************/

    useEffect(() => {
         const search1 = search.search;
        const term = new URLSearchParams(search1).get('ref');
        console.log(term, "termterm")
        if(term){
            setrReferral_code(term)
            setShow(true)
            console.log(referral_code, "referral_codereferral_codereferral_code");
        

        }

        console.log(show)
       
      },[]);

//End get value Urls


//Multiple Api call function 
  function handleSignupData() {
    // handleSignupApi();
    // handleDataStore()

  }

 

  


    return(
        <>
         {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
         <section className="why-us section-bgba signup_banner">
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
                                    <Form.Label>Where are you sending money from?<span style={{color: 'red'}} >*</span></Form.Label>
                                    <Select
                                     ref={input_location}
                                     options={options} 
                                     value={countryValue} 
                                     onChange={changeHandler}
                                      />
                                       {/* {error&&countryValue.length<=0?
				                          <span style={myStyle}>Please select the Location </span>:""} */}
                                             <span  style={myStyle}>{locationText? locationText: ""}</span> 
                                       
    
                                        {/* <Form.Label>Where are you sending money from?<span style={{color: 'red'}} >*</span></Form.Label>
                                        <CountryDropdown
                                       
                                         className='YOUR_CSS_CLASS rate_input form-control'
                                          preferredCountries={['gb', 'us' ]} 
                                          ref={input_location}
                                          value={location}
                                          handleChange={handeleLocation}
                                        //   handleChange={e=> console.log(e.target.value)}
                                          >
                                             {error&&location.length<=0?
				                          <span style={myStyle}>Please check the Location </span>:""}
                                        </CountryDropdown> */}
                                        
                                        {/* <Form.Select 
                                         value={location}
                                         onChange={handeleLocation}
                                         >   
                                            <option value="">--- Select Location ---</option>
                                            <option value="Austria">Austria</option>
                                            <option value="Canada">Canada</option>
                                            <option value="China">China</option>
                                        </Form.Select> */}
                                        <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Email<span style={{color: 'red'}} >*</span> </Form.Label>
                                            <Form.Control 
                                            type="email"
                                            ref={input_email}
                                            value={email}
                                            onChange={handleEmail}
                                            placeholder="Enter email"
                                             />
                                            {/* {error&&email.length<=0?
				                          <span style={myStyle}>Please Enter the Email </span>:""}	 */}
                                           <span  style={myStyle}>{emailText? emailText: ""}</span> 
                                           <span  style={myStyle}>{emailExistText? emailExistText: ""}</span> 
                                           <span  style={myStyle}>{emailvalidAddress? emailvalidAddress: ""}</span> 
                
                                        </Form.Group>
                                        

                                        <Form.Group className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Phone<span style={{color: 'red'}} >*</span> </Form.Label>
                                            <Form.Control 
                                            type="mobile"
                                            ref={input_mobile}
                                            value={mobile}
                                            onChange={handleMobile}
                                            placeholder="Enter Phone"
                                             />
                                               {/* {error&&mobile.length<=0?
				                          <span style={myStyle}>Please Enter the Mobile </span>:""}	 */}
                                            <span  style={myStyle}>{mobileText? mobileText: ""}</span>  
                                            <span  style={myStyle}>{mobileValidText? mobileValidText: ""}</span>  
                                        </Form.Group>

                                        <Form.Group className="mb-3 form_label" controlId="formBasicPassword">
                                            <Form.Label> Your Password<span style={{color: 'red'}} >*</span> </Form.Label>
                                            <Form.Control 
                                            type="password"
                                            ref={input_password}
                                            value={password}
                                            onChange={handlePassword}
                                            placeholder="Password" 
                                            />
                                            {/* {error&&password.length<=0?
				                          <span style={myStyle}>Please Enter the Password </span>:""}	 */}
                                          <span  style={myStyle}>{passwordText? passwordText: ""}</span>  
                                           
                                        </Form.Group>

                                        <Form.Check  className="form_switch"
                                        type="switch" 
                                        onClick={() => setShow(!show)}
                                        // value={referral_code}
                                        checked={show ? true : false}
                                        // onChange={(e)=> {myReferalCode(e.target.value);setrReferral_code(e.target.value)}}
                                        //   onChange={(e)=> {setrReferral_code(e.target.value)}}
                                        id="custom-switch" 
                                        label="Referred by a friend? Use the referral code below." 
                                       
                                        />
                                    {show && <div>
                                        <Form.Group  className="mb-3 form_label" controlId="formBasicEmail">
                                            <Form.Label>Your Referral Code</Form.Label>
                                            <Form.Control 
                                            type="text"
                                            ref={input_refferal_code}
                                            value={referral_code}
                                            onChange={handleReferral_code}
                                            placeholder="Enter Referral Code" 
                                            />
                                              {/* {error&&referral_code.length<=0?
				                          <span style={myStyle}>Please Enter the Referralcode </span>:""}	 */}
                                            <span  style={myStyle}>{referralText? referralText: ""}</span> 
                                            <span  style={myStyle}>{referralInvalidText? referralInvalidText: ""}</span> 
                                        </Form.Group>
                                        </div>}

                                        <Form.Group className="mb-3 form_checkbox" controlId="formBasicCheckbox">
                                           
                                            <Form.Check className="form_label"
                                                type="checkbox"
                                                value={promo_marketing}
                                                onChange={handlePromo_marketing}
                                                checked={promo_marketing.Active} // <-- set the checked prop of input\

                                                label="If you DO NOT wish to receive marketing information 
                                                        about out products and special offers, please check this box"
                                            />
                                        </Form.Group>

                                        <button variant="primary"
                                         type="submit" 
                                         onClick={handleSignupApi}
                                         className="signup_button ">
                                            Signup
                                          {loading ? <>
                                                <div class="loader-overly"> 
                                                <div class="loader" > 
                                                
                                                </div>
                                                
                                                </div>
                                              </> : <></>}
                                        </button>
                                        <p className="already_content">Already have an account? 
                                          <NavLink to="/login">Sign in</NavLink>
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



>>>>>>> e8a2ec44fb783062fde35a4a03f1316a956ca67c
export default Signup;