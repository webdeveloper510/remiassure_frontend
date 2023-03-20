import { faL, faSlash, faUnsorted } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate} from 'react-router-dom';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import UserRecipient from "../Userdashboard/UserRecipient";
import norecipients from '../../assets/img/userdashboard/hidden.avif';
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsFillPencilFill } from "react-icons/bs";

const Addnewrecipient = () => {


    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    

    return(
        <>
        {/* <Recipients /> */}

        <div className={isActive ? "add-recipent-section" : "remove-add-recipent-section"}>
    
   <UserRecipient />
  {/* <ul>
  <li><a href="#">William </a> <button className="form-button"><BsFillPencilFill /> Edit</button></li>
  <li><a href="#">Josh</a> <button className="form-button"><BsFillPencilFill /> Edit</button></li>
  <li><a href="#">Mike </a> <button className="form-button"><BsFillPencilFill /> Edit</button></li>
  <li><a href="#">William </a> <button className="form-button"><BsFillPencilFill /> Edit</button></li>
  <li><a href="#">Josh </a> <button className="form-button"><BsFillPencilFill /> Edit</button></li>
  <li><a href="#">Mike</a> <button className="form-button"><BsFillPencilFill /> Edit</button></li>
  </ul> */}
  <div className="add-rec-new">
      <button className="form-button" onClick={handleToggle}><BsFillPersonPlusFill /> Add New Recepients</button>
      </div>
      </div> 

      <div className={isActive ? "add-recipent-section" : "remove-add-recipent-section"} >
      <img src={norecipients} alt="empty" />
      
      <div className="col-md-12">
      <p><b>You haven't added any recipients.</b><br></br>When you do, they'll show up here.</p>  
      </div>  
      <div className="col-md-12">
      <button className="add-recepient form-button" onClick={handleToggle}><BsFillPersonPlusFill /> Add New Recepients</button>
      </div> 
     </div>

    <section  className={isActive ? "removerecepient" : "showrecepient"} >   

   <div className="header">
     <h1>Recipient Bank Details</h1>
   </div>
<form>
   <div className="row each-row">
    <div className="col-md-12">
    <Form.Group className="form_label" controlId="Firstname">
    <p className="get-text">Bank Name</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Bank Name" />
                        </Form.Group>
        
    </div>
    </div>
   <div className="row each-row">
     <div className="col-md-12">
     <Form.Group className="form_label" controlId="Firstname">
    <p className="get-text">Account Name</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Account Name" />
                        </Form.Group>
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-12">

       <Form.Group className="form_label" controlId="Firstname">
    <p className="get-text">Account number</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Account number" />
                        </Form.Group>
     </div>
   </div>
   <div className="row each-row">
     <h5>Recipient Details</h5>
     <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Your Name</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter First Name" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Middle Name</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Middle Name" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Last Name</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Last Name" />
                        </Form.Group>
                      </div>
   </div>
   <div className="row each-row">
     <div className="col-md-6">
       <Form.Group className="form_label" controlId="Firstname">
       <p className="get-text">Email</p>
                          <Form.Control type="email" className='rate_input form-control' placeholder="Enter Email" />
                        </Form.Group>
     </div>
     <div className="col-md-6">
       <Form.Group className="form_label" controlId="Firstname">
       <p className="get-text">Mobile</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Mobile" />
                        </Form.Group>
     </div>
   </div>
   <div className="row each-row">
                      <h5>Address</h5>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Flat/Unit No.</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Flat/Unit No." />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Building/Unit No.</p>
                          
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Building/Unit No." />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Street</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Street" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Postcode</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Postcode" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">City/Town</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter City/Town" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">State</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter State" />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="row each-row">
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Country Code</p>
                          <Form.Control type="text" className='rate_input form-control' placeholder="Enter Country Code" />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Country</p>
                          <CountryDropdown id="UNIQUE_ID" className='YOUR_CSS_CLASS rate_input form-control' preferredCountries={['gb', 'us' ]} value="" handleChange={e=> console.log(e.target.value)}></CountryDropdown>
                        </Form.Group>
                      </div>
                    </div>
   <div className="row each-row">
     <div className="col-md-12">
     <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Reason For sending Money</p>
                        <select 
                className="form-select rate_input form-control"
                 aria-label="Select a reason"
                //  onChange={(e)=> {myTotalAmount(e.target.value);setFrom(e.target.value)}}
                 >
     <option selected>Select a reason</option>
           <option value="Family Support">Family Support</option>
           <option value="Education">Education</option>
           <option value="Tax Payment">Tax Payment</option>
           <option value="Loan Payment">Loan Payment</option>
           <option value="Travel Payment">Travel Payment</option>
           <option value="Utility Payment">Utility Payment</option>
           </select>
                        </Form.Group>
                       
     </div>
   </div>
   <div class="row">
     <div className="col-md-4">
       <button className="start-form-button" onClick={handleToggle}>Cancel</button>
     </div>
     <div className="col-md-8">
       {/* <button className="form-button" onClick={handleShow}>Continue</button> */}
       <button className="form-button">Save</button>
     </div>
   </div>
   </form>



      </section>
        </>
    )
}



export default Addnewrecipient;