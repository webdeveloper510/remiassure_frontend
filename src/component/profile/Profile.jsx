<<<<<<< HEAD
import React, { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";


const Profile = () => {
    

  const [isDisabled, setIsDisabled] = useState(true);

  const handleClick = () => {
    setIsDisabled(false);
  };
  const handleClickNew = () => {
    setIsDisabled(true);
  };




 // Start page show hide condtion page 
    const token = localStorage.getItem("token");
    console.log("TOKEN", token);

    const verification_otp = localStorage.getItem("verification_otp");
    //console.log("Verification Message", verification_otp)

// Start page show hide condtion page

    // const token = localStorage.getItem("token");
    // console.log("TOKEN", token);


    const name = localStorage.getItem("firstname");
    // alert(name)
    //console.log("firstname", name);


    const [First_name, setFirst_name] = useState('');
    const [Last_name, setLast_name] = useState('');
    const [mobile, setMobile] = useState('');
    const [loading, setLoading] = useState(false);
 
    const navigate = useNavigate();

    const notify = () => toast.success("Profile Updated Successfully!");
 
  
    const handleFirstName =(e) => {
        setFirst_name(e.target.value);
    }
    const handleLastName =(e) => {
        setLast_name(e.target.value);

    }
    const handeleMobile =(e) => {
        setMobile(e.target.value);
    } 

    
    const handleProfileApi = (event) => {
        event.preventDefault();
        setLoading(true) // Set loading before sending API request
        axios.post(API.BASE_URL + 'update-profile/', {
            First_name: First_name,
            Last_name: Last_name,
            mobile: mobile
        }, {
            headers: {
                "Authorization" : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
          
        })
        .then(function(response) {
            console.log(response);
            setLoading(false) //stop loading
            if (response.status)
                notify();
                navigate('/');   
        })
        .catch(function(error, message) {
            console.log(error.response)
            setLoading(false) //stop loading in case with error 
            if(error.response.status){
                toast.error(error.response.data.message);
            } 
            console.log(error, "klnklnklnknnnnnnnnnnnn");   
        })
    }


    return(
        <>

          {/* <!-- ======= help Remitassure Support-Section  start======= --> */}

          {  
          verification_otp || token != undefined || '' ? (

          <section className="why-us section-bgba profile_banner">
    <div className="container">
        <div className="row">
            {/* <div className="col-lg-6">
                <div className="support_image">
                    <img src="assets/img/help/help_img02.png" alt="support_images" />
                </div>
            </div> */}

            


     
            <section class="profile-page">
   
      <div className="header">
        <h1>User Profile</h1>
      </div>

<div className="update-profile">
 <div className="row each-row">
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">First Name</p>
       <input type="text" className='rate_input form-control'  disabled={isDisabled} />
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Middle Name</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled} />
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Last Name</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
 </div>
 <div className="row each-row">
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Customer ID</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled} />
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Date of birth</p>
       <input type="date" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Gender</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled} />
     </div>
   </div>
 </div>
 <div className="row each-row">
   <div className="col-md-6">
     <div className="input_field">
       <p className="get-text">Country of Birth</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-6">
     <div className="input_field">
       <p className="get-text">ID Type</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
 </div>
 <div className="row each-row">
   <div className="col-md-6">
     <div className="input_field">
       <p className="get-text">Email</p>
       <input type="email" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-6">
     <div className="input_field">
       <p className="get-text">Mobile</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
 </div>
 <div className="row each-row">
  <h5>Change Password</h5>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Current Password</p>
       <input type="password" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">New Password</p>
       <input type="password" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Confirm Password</p>
       <input type="password" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
 </div>
 <div className="row each-row">
  <h5>Address</h5>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Flat/Unit No.</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled} />
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Building No./Name</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Street</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
 </div>
 <div className="row each-row">
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Postcode</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">City/Town</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">State</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
 </div>
 <div className="row each-row">
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Country Code</p>
       <input type="text" className='rate_input form-control' disabled={isDisabled}/>
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Country</p>
       <CountryDropdown id="UNIQUE_ID" className='YOUR_CSS_CLASS rate_input form-control' preferredCountries={['gb', 'us' ]} value="" handleChange={e=> console.log(e.target.value)}></CountryDropdown>

     </div>
   </div>
 </div>

 </div>
      <div class="row each-row">
        <div className="col-md-6">
          <button className="start-form-button">Cancel</button>
        </div>
        <div className="col-md-6">
        <button className="profile-form-button" onClick={handleClickNew} >Save</button>
          <button className="profile-form-button" onClick={handleClick}>Edit</button>
          
        </div>
      </div>
  
    </section>
        </div>
    </div>
 </section>


         ) : (
            <>
            
            </>
        )
        }


        {/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}
          
        </>
    )
}



=======
import React, { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";


const Profile = () => {
    

  const initialProfileValue = {
    firstName: '',
    middleName: '',
    lastName: '',
    customerID: '',
    date: '',
    gender: '',
    countryofBirth: '',
    IDType: '',
    email: '',
    mobile: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    flatNo: '',
    buildingNo: '',
    street: '',
    postCode: '',
    city: '',
    state: '',
    countryCode: '',
    countryName: '',
  }

  const [profileDetaills, setProfileDetaills] = useState(initialProfileValue);
  const {
    firstName,
    middleName,
    lastName,
    customerID,
    date,
    gender,
    countryofBirth,
    IDType,
    email,
    mobile,
    currentPassword,
    newPassword,
    confirmPassword,
    flatNo,
    buildingNo,
    street,
    postCode,
    city,
    state,
    countryCode,
    countryName,

  } = profileDetaills;

  const handlePtrofileDetails = (e) => {
    console.log(e.target.name)
    console.log(e.target.defaultValue)

    setProfileDetaills(profileItem => ({...profileItem, [e.target.name]: e.target.defaultValue}));
  }

 // Start page show hide condtion page 
 const token = localStorage.getItem("token");
 console.log("TOKEN", token);

 const verification_otp = localStorage.getItem("verification_otp");
 console.log("Verification Message", verification_otp)

  

  /**************************************************************************
 * ************** Start -Profile Api CAll ***********************************
 * *************************************************************************/
    // const handleProfileDetaills =(event) =>{
    //   event.preventDefault();
    useEffect(() =>{
      axios.post(API.BASE_URL + 'user-profile/', {

      }, {
        headers: {
          "Authorization": `Bearer ${token}`,
        }
      })
      .then(function(response){
        console.log(response);
      })
      .catch(function(error, response){
        console.log(error.response);

      })

    }, [])
    
    // }

    return(
        <>

          {/* <!-- ======= help Remitassure Support-Section  start======= --> */}

          {  
          verification_otp || token != undefined || '' ? (

            <section className="profile-page">
            <div className="container">
              <div className="row">
                <div className="header">
                  <h1>User Profile</h1>
                </div>
                <div className="update-profile">
                  <form>
                    <div className="row each-row">
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Your Name </p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter First Name" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Middle Name </p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Middle Name" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Last Name </p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Last Name" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Customer ID </p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Customer ID" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Date </p>
                          <Form.Control type="date" className='rate_input form-control' placeholder="Enter Date" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Gender </p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Gender" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <div className="col-md-6">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Country of Birth </p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Country of Birth" />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">ID Type</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter ID Type" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <div className="col-md-6">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Email</p>
                          <Form.Control type="email" className='rate_input form-control' placeholder="Enter Email" />
                        </Form.Group>
                      </div>
                      <div className="col-md-6">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Mobile</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Mobile" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <h5>Change Password</h5>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Current Password</p>
                          <Form.Control type="password" className='rate_input form-control' placeholder="Enter Current Password" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">New Password</p>
                          <Form.Control type="password" className='rate_input form-control' placeholder="Enter New Password" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Confirm Password</p>
                          <Form.Control type="password" className='rate_input form-control' placeholder="Enter Confirm Password" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <h5>Address</h5>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Flat/Unit No.</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Flat/Unit No." />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Building/Unit No.</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Building/Unit No." />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Street</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Street" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Postcode</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Postcode" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">City/Town</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter City/Town" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">State</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter State" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Country Code</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Country Code" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="mb-3 form_label" controlId="Firstname">
                        <p className="get-text">Country</p>
                          <CountryDropdown id="UNIQUE_ID" className='YOUR_CSS_CLASS rate_input form-control' preferredCountries={['gb', 'us' ]} value="" handleChange={e=> console.log(e.target.value)}></CountryDropdown>
                        </Form.Group>
                      </div>
                    </div>
                    <div class="row each-row">
                      <div className="col-md-6">
                        <button className="start-form-button">Cancel</button>
                      </div>
                      <div className="col-md-6">
                        <button className="profile-form-button">Save</button>
                        <button className="profile-form-button">Edit</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>


         ) : (
            <>
            
            </>
        )
        }


        {/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}
          
        </>
    )
}



>>>>>>> e8a2ec44fb783062fde35a4a03f1316a956ca67c
export default Profile;