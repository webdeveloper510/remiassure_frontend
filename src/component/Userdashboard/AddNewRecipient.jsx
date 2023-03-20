import { faL, faSlash, faUnsorted } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import Recipients from "../userRecipients/Recipients";
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
    <div className="header">
     <h1>Recipients</h1>
   </div>
  <ul>
  <li><a href="#">William </a> <Button className="form-button"><BsFillPencilFill /> Edit</Button></li>
  <li><a href="#">Josh</a> <Button className="form-button"><BsFillPencilFill /> Edit</Button></li>
  <li><a href="#">Mike </a> <Button className="form-button"><BsFillPencilFill /> Edit</Button></li>
  <li><a href="#">William </a> <Button className="form-button"><BsFillPencilFill /> Edit</Button></li>
  <li><a href="#">Josh </a> <Button className="form-button"><BsFillPencilFill /> Edit</Button></li>
  <li><a href="#">Mike</a> <Button className="form-button"><BsFillPencilFill /> Edit</Button></li>
  </ul>
  <div className="add-rec-new">
      <Button className="form-button" onClick={handleToggle}><BsFillPersonPlusFill /> Add New Recepients</Button>
      </div>
      </div> 

        <div className={isActive ? "add-recipent-section" : "remove-add-recipent-section"} >
      <img src={norecipients} alt="empty" />
      
      <div className="col-md-12">
      <p><b>You haven't added any recipients.</b><br></br>When you do, they'll show up here.</p>  
      </div>  
      <div className="col-md-12">
      <Button className="add-recepient form-button" onClick={handleToggle}><BsFillPersonPlusFill /> Add New Recepients</Button>
      </div> 
     </div>


    <section  className={isActive ? "removerecepient" : "showrecepient"} >   

   <div className="header">
     <h1>Recipient Bank Details</h1>
   </div>
   <div className="row each-row">
    <div className="col-md-12">
        <div className="input_field">
          <p className="get-text">Bank Name</p>
            <input
              // autoFocus="autofocus"
            type="text" 
            className="rate_input form-control"
            name="bankName"
            />
        </div>
    </div>
    </div>
   <div className="row each-row">
     <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Account Name</p>
         <input 
         type="text"
          className='rate_input form-control'
          // autoFocus="autofocus"
           />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Account number</p>
         <input 
         type="text"
         name="accountNumber"
         className='rate_input form-control'
          />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <h5>Recipient Details</h5>
     <div className="col-md-4">
       <div className="input_field">
         <p className="get-text">First Name</p>
         <input
          type="text" 
          className='rate_input form-control'
          name="firstName"
           />
       </div>
     </div>
     <div className="col-md-4">
       <div className="input_field">
         <p className="get-text">Middle Name</p>
         <input
          type="text"
           className='rate_input form-control' 
           name="middleName"
           />
       </div>
     </div>
     <div className="col-md-4">
       <div className="input_field">
         <p className="get-text">Last Name</p>
         <input 
         type="text" 
         className='rate_input form-control'
         name="lastName"
          />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-6">
       <div className="input_field">
         <p className="get-text">Email</p>
         <input
          type="email" 
          className='rate_input form-control'
          name="email"
           />
       </div>
     </div>
     <div className="col-md-6">
       <div className="input_field">
         <p className="get-text">Mobile</p>
         <input 
         type="text" 
         className='rate_input form-control'
         name="mobile"
          />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Address</p>
         <input
          type="text" 
          className='rate_input form-control'
          name="address"
           />
       </div>
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
   <div class="row">
     <div className="col-md-4">
       <button className="start-form-button" onClick={handleToggle}>Cancel</button>
     </div>
     <div className="col-md-8">
       {/* <button className="form-button" onClick={handleShow}>Continue</button> */}
       <button className="form-button">Save</button>
     </div>
   </div>



      </section>
        </>
    )
}



export default Addnewrecipient;