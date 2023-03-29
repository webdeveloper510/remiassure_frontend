import React, { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import {Links, NavLink, useNavigate} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import Sidebar from './Sidebar';

const Profile = () => {
    
  const [loading, setLoading] = React.useState(false);
 /****************************  sender details data *******************/
 const [senderDetailData, setSenderDetailData] = React.useState('');

/****************************  Model Update page  *******************/
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);



 // Start page show hide condtion page 
 const token = localStorage.getItem("token");
 console.log("TOKEN", token);

 const verification_otp = localStorage.getItem("verification_otp");
 console.log("Verification Message", verification_otp)

 const signup_token = localStorage.getItem("signup_token")
 console.log("signup_token" ,signup_token);


  

 
/**************************************************************************
 * ************** Start Sender details Api *********************************
 * ***********************************************************************/
      useEffect(() => {
        setLoading(true); // Set loading before sending API request
        axios.post(API.BASE_URL + 'user-profile/',{}, {
            headers: {
                "Authorization" : `Bearer ${token}`,
              
            }
          })
          .then(function(response) {
              console.log("Recipients APIIIII", response.data);
              setSenderDetailData(response.data.data);
              console.log(senderDetailData, "senderDetailData")
              setLoading(false); // Stop loading
        
        
            //   if (response.status)
            // // notify();
          })
          .catch(function(error) {
              console.log(error);
              console.log(error.response);
              setLoading(false); // Stop loading in case of error
            
          })
      }, [])


       /**************************************************************************
       * ************** Start User Profile Update Api ****************************
       * ***********************************************************************/
      
         /* start-- useRef is used for focusing on inputbox */
         const handleUserProfileUpdate =(value) =>{
          console.log(value, "valueeeeeeeeeeee")
          // alert("hii")
            // event.preventDefault();
            setLoading(true); // Set loading before sending API request
            axios.patch(API.BASE_URL + `payment/recipient-update/${value}`, {
                headers: {
                  "Authorization" : `Bearer ${token}`,
                }, 
            })
            .then(function(response) {
                console.log(response);
                setLoading(false); // Stop loading 
                handleClose()
                // localStorage.setItem("RecipientUserName", response.data.recipint_data.first_name);
                // navigate('/');   
      
            })
            .catch(function(error, message) {
                console.log(error.response);
                setLoading(false); // Stop loading in case of error
              //   setBankNameText(error.response.data); 
                 
            })
        }
      // }


    return(
        <>

          {/* <!-- ======= help Remitassure Support-Section  start======= --> */}

          {  
          verification_otp || token != undefined || '' ? (
            <>
           
           <div  className="margin-set">
    <div  className="tabs-page">
            <Sidebar/>

            <div className="content-body">
            <div className="col-md-12">
            <section className="profile-page">
            
              <div class="form-head mb-4">
            <h2 class="text-black font-w600 mb-0"><b>Recipient Bank Details</b>
            </h2>
            </div>
                <div className="update-profile">
                    <form>
                    <div className="card">
                    <div className="card-body">
                      <h5>Basic Information</h5>
        <div className="row">
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">First Name<span style={{color: 'red'}} >*</span></p>
              <input
                type="text"
                className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Middle Name<span style={{color: 'red'}} >*</span></p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Last Name<span style={{color: 'red'}} >*</span></p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Customer ID<span style={{color: 'red'}} >*</span></p>
              <input
                type="text"
                className='rate_input form-control'
                value={senderDetailData.customer_id}
                  />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Date of birth<span style={{color: 'red'}} >*</span></p>
              <input type="date" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Gender<span style={{color: 'red'}} >*</span></p>
              <div className="inline-flex">
              <label className="container-new form-gender">
                    <span className="radio-tick">Male</span>
                    <input
                    className="form-check-input" 
                    type="radio" 
                    name="gender"
                    value=" Male"
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label class="container-new form-gender">
                    <span className="radio-tick">Female</span>
                    <input
                    className="form-check-input" 
                    type="radio" 
                    name="gender"
                    value=" Female" 
                    />
                    <span className="checkmark"></span>
                  </label>
                  </div>
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Country of Birth<span style={{color: 'red'}} >*</span></p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">ID Type<span style={{color: 'red'}} >*</span></p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Email<span style={{color: 'red'}} >*</span></p>
              <input
                type="email"
                value={senderDetailData.email}
                className='rate_input form-control'
                />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Mobile<span style={{color: 'red'}} >*</span></p>
              <input 
              type="text"
                className='rate_input form-control'
                value={senderDetailData.mobile}
                /> 
            
            </div>
          </div>
      

        </div>
        <div className="row each-row">
          <h5>Address</h5>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Flat/Unit No.</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Building No./Name</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Street</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Postcode</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">City/Town</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">State</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Country Code</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Country Name</p>
              <CountryDropdown 
              id="UNIQUE_ID"
                className='YOUR_CSS_CLASS rate_input form-control' 
                preferredCountries={['gb', 'us' ]}
                value={senderDetailData.location}
                //  value="" handleChange={e=> console.log(e.target.value)}
                >
                </CountryDropdown>

            </div>
          </div>
        </div>
            <div class="row each-row">
              <div className="col-md-6">
                  <button className="start-form-button">Cancel</button>
                </div>
                <div className="col-md-6">
                  <button className="profile-form-button">Save</button>
                  <button 
                  type="submit"
                  variant="primary" 
                  className="profile-form-button" 
                  onClick={handleShow}>Edit
                  </button>
                </div>
            </div>
            </div>
      </div>
      </form>



            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleUserProfileUpdate}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>

      
                </div>
             
          </section>
          </div>
          </div>
          </div>
          </div>











          </>

         ) : (
            <>
            
            </>
        )
        }


        {/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}
          
        </>
    )
}



export default Profile;