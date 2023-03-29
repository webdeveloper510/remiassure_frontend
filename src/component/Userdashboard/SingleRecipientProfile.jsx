
import React, { useState, useContext, useEffect,useRef } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate,useParams} from 'react-router-dom';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import UserRecipient from "../Userdashboard/UserRecipient";
import norecipients from '../../assets/img/userdashboard/hidden.avif';
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";
import Sidebar from './Sidebar';

// start css
const myStyle ={
  color: "red",
}

const SingleRecipientProfile = () => {
 /*************data get ************/
 let { id } = useParams();
 // alert(id)
   console.log("========================>",id) ;


       /************ Start -Recipient Bank Details state***************/
       const [error,setError]=useState(false);
       const [loading, setLoading] = React.useState(false);
   
       /************ Start -messageText state***************/
       const [senderDetailData, setSenderDetailData] = React.useState('');
       // const [userRecipientData, setUserRecipientData] = useState('');
       
       /************ Start -Recipient Bank Details state***************/
     
       const [formValue, setFormValue] = React.useState ({
         bankName:'',accountName:'', accountNumber:'',firstName:'', middleName:'',
       lastName:'',email:'',mobile:'',address:'',reasonMoney:''});
     
       /************ Start -Recipient Bank Details function***************/
         const handleStep2InputChange =(e,key) =>{
           console.log(e.target.value)
           console.log(key)
           let valueForm = formValue
           valueForm[key] = e.target.value
           setFormValue(valueForm)
           console.log(formValue)
         }
       /************ Start - Cancel Recipient Bank Details function***************/
         const handlRecipientBankDetails =(e) => {
           e.preventDefault();
           window.location.reload(false);
         
           console.log("handle request ");
         }
     
         // Start page show hide condtion page 
         const token = localStorage.getItem("token");
         console.log("TOKEN", token);
     
         const verification_otp = localStorage.getItem("verification_otp");
         console.log("Verification Message", verification_otp)
   
         const RecipientUserName = localStorage.getItem("RecipientUserName");
         console.log("RecipientUserName", RecipientUserName);

       
     
     // Start page show hide condtion page
      
     const navigate = useNavigate('');


     // const search = useLocation()
     
     
       /**********************Design function************ */
         const [isActive, setActive] = useState("false");
     
         const handleToggle = () => {
           setActive(!isActive);
         };

         
    /**************************************************************************
      * ************** Start  Recipient Bank Details ****************************
      * ***********************************************************************/
     
        /* start-- useRef is used for focusing on inputbox */
        useEffect(()=>{
         console.log("Data=========>",id)

             // event.preventDefault();
            //  setLoading(true); // Set loading before sending API requestssss
             axios.get(API.BASE_URL + `payment/recipient-update/${id}`,{
                 headers: {
                   "Authorization" : `Bearer ${token}`,
                 }, 
             })
             .then(function(response) {
                 console.log(response);
                 setSenderDetailData(response.data.data);
                //  setLoading(false); // Stop loading   
             })
             .catch(function(error, message) {
                 console.log(error.response);
                //  setLoading(false); // Stop loading in case of error
                 // setBankNameText(error.response.data); 
                  
             })

        }, [])



          
    

    return(
        <>
  <div  className="margin-set">
            <div  className="tabs-page">
                    <Sidebar/>
                    <div className="content-body">
                    <section className="edit_recipient_section">

                    <div class="form-head mb-4">
            <h2 class="text-black font-w600 mb-0"><b>Profile</b>
            </h2>
            <NavLink to="/userrecipients">
                <button className="form-button addsingle_recepient" ><BsFillPersonPlusFill /> Recipients Lists</button>
            </NavLink>
            </div>
       

            <div className="row">
            <div className="col-lg-8">
                <div className="profile card card-body px-3 pt-3 pb-0">
                    <div className="profile-head">
                        <div className="photo-content">
                          <h1>Rohit</h1>
                        </div>

                 <form className="single-recipient">
              <div className="row">
              <h5>Single Profile Data </h5>
                  <div className="col-md-4">
                      <div className="input_field">
                        <p className="get-text">Bank Name<span style={{color: 'red'}} >*</span></p>
                          <input
                          type="text" 
                          className="rate_input form-control"
                          name="bankName"
                          Value={senderDetailData.bank_name}
                          />  
                      </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">Account Name<span style={{color: 'red'}} >*</span></p>
                      <input 
                      type="text"
                        className='rate_input form-control'
                        Value={senderDetailData.account_name}
                        />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">Account number<span style={{color: 'red'}} >*</span></p>
                      <input 
                      type="text"
                      name="accountNumber"
                      className='rate_input form-control'
                      Value={senderDetailData.account_number}
                      />
                    </div>
                  </div>
                  </div>
                <div className="row each-row">
                  <h5>Recipient Details</h5>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">First Name<span style={{color: 'red'}} >*</span></p>
                      <input
                        type="text" 
                        className='rate_input form-control'
                        name="firstName"
                        Value={senderDetailData.first_name}
                        />
                 
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">Middle Name<span style={{color: 'red'}} >*</span></p>
                      <input
                        type="text"
                        className='rate_input form-control' 
                        name="middleName"
                        Value={senderDetailData.middle_name}
                        />

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">Last Name<span style={{color: 'red'}} >*</span></p>
                      <input 
                      type="text"
                      className='rate_input form-control'
                      name="lastName"
                      Value={senderDetailData.last_name}
                        />

                    </div>
                  </div>
                </div>
                <div className="row each-row">
                  <div className="col-md-6">
                    <div className="input_field">
                      <p className="get-text">Email<span style={{color: 'red'}} >*</span></p>
                      <input
                        type="email" 
                        className='rate_input form-control'
                        name="email"
                        Value={senderDetailData.email}
                        />
                  
                        
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_field">
                      <p className="get-text">Mobile<span style={{color: 'red'}} >*</span></p>
                      <input 
                      type="text" 
                      className='rate_input form-control'
                      name="mobile"
                      Value={senderDetailData.mobile}
                        />
                     
                    </div>
                  </div>
                </div>
                
                <div className="row each-row">
                    <h5>Address</h5>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Flat/Unit No.</p>
                          <Form.Control 
                          type="text" 
                          className='rate_input form-control'
                          Value={senderDetailData.flast}
                            />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                            <p className="get-text">Building/Unit No.</p>              
                            <Form.Control 
                            type="text" 
                            className='rate_input form-control'
                            Value={senderDetailData.building}
                              />
                        </Form.Group>
                    </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Street</p>
                            <Form.Control 
                            type="text"
                             className='rate_input form-control' 
                             Value={senderDetailData.street}
                             />
                        </Form.Group>
                      </div>
                </div>
                <div className="row each-row">
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Postcode</p>
                          <Form.Control 
                          type="text"
                           className='rate_input form-control'
                           Value={senderDetailData.postcode}
                            />
                        </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">City/Town</p>
                      <Form.Control 
                      type="text" 
                      className='rate_input form-control'
                      Value={senderDetailData.city}
                       />
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">State</p>
                          <Form.Control
                           type="text"
                            className='rate_input form-control' 
                            Value={senderDetailData.state}
                            />
                          </Form.Group>
                      </div>
                </div>
                <div className="row each-row">
                    <div className="col-md-4">
                      <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Country Code</p>
                      <Form.Control 
                      type="text"
                       className='rate_input form-control'
                       Value={senderDetailData.country_code}
                        />
                      </Form.Group>
                    </div>
                  <div className="col-md-4">
                    <Form.Group className="form_label" controlId="Firstname">
                    <p className="get-text">Country</p>
                      <CountryDropdown 
                      id="UNIQUE_ID" 
                      className='YOUR_CSS_CLASS rate_input form-control'
                       preferredCountries={['gb', 'us' ]}
                       Value={senderDetailData.country}
                        ></CountryDropdown>
                    </Form.Group>
                  </div>
              </div>
                <div className="row each-row">
                  <div className="col-md-12">
                    <div className="input_field">
                      <p className="get-text">Reason For Sending Money</p>
                      <select
                        className="form-select rate_input form-control"
                        aria-label="Select a reason"
                        name="reasonMoney"
                        > 
                        <option selected>Select a reason</option>
                        <option value="Family Support">Family Support</option>
                        <option value="Education">Education</option>
                        <option value="Tax Payment">Tax Payment</option>
                        <option value="Loan Payment">Loan Payment</option>
                        <option value="Travel Payment">Travel Payment</option>
                        <option value="Utility Payment">Utility Payment</option>
                      </select>

                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <button 
                    type="submit" 
                    className="start-form-button"
                    onClick={handlRecipientBankDetails}
                    >
                      Cancel
                    </button>
                  </div>
                  <div className="col-md-8">
                    <button
                    type="button" 
                    className="form-button"
                
                    >
                    Save
                      
                    {/* {loading ? <>
                        <div class="loader-overly"> 
                          <div class="loader" > 
                                                    
                        </div>
                                                    
                      </div>
                    </> : <></>} */}
                     
                    </button>
                  </div>
                
                </div>
            </form>
                    </div>
                </div>
            </div>
        </div>

        
            </section>
            </div>
            </div>
            </div>
        </>
    )
}



export default SingleRecipientProfile;