import React, { useState , useContext} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from "../context/UserContext";

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import ReactFlagsSelect from "react-flags-select";


const UserDashboard = () => {
  const [selected, setSelected] = React.useState("");


   //start Summury content change
   const [payment, setPayment] = React.useState('');
   const [payment_partners, setPayment_partners] = React.useState('');

   const handlePayout = (e) =>{
    setPayment(e.target.value)
   }

   const handlePayout_partners = (e) =>{
    setPayment_partners(e.target.value)
   }
//end Summury content change 


 // start select value get data
 const {location} = useContext(UserContext);

//  const handleLocationValue = (e) =>{
//   setLocation(e.target.value)
//  }

 // End select value get data


 // Start Api call Amount & Delivery
  const [from, setFrom] =React.useState('');
  // alert(from)
  const [to, setTo] = React.useState('');
  const [amount, setAmount] = React.useState('');
  // console.log(from, "fromfromfromfromfromfromfromfrom")
  // console.log(to, "totototototototo")


  const handleFrom = (e) =>{
    setFrom(e.target.value) 
  }
  
  const handleTo =(e) =>{
    setTo(e.target.value)
  }

  const handleAmount = (e) =>{
    setAmount(e.target.value)
  }

  const navigate = useNavigate();
  const notify = () => toast.success("Amount & Delivery Successfully!!");


    const handleAmountDelivery =(event) =>{
      event.preventDefault();
        axios.post(API.BASE_URL + 'exchange-rate/', {
          from: from,
          to: to,
          amount: amount
       
        }, {
            headers: {
                // 'Content-Type': 'application/json',
            },
          
        })
        .then(function(response) {
            console.log(response);
            if (response.status)
                notify();
                // navigate('/verification');   
                // console.log(navigate, "jkfjkdkvnfkvnfkvnfkvnvknvknvkvnkvnvknknvknvknk")
        })
        .catch(function(error, message) {
            console.log(error.response)
            if(error.response.data.status){
                toast.error(error.response.data.message);
            } 
            console.log(error, "klnklnklnknnnnnnnnnnnn");   
        })
    }




  // End Api call Amount & Delivery



 // Start design state
    const {useState} = React;
    const [step,setStep] = useState(0);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const step_form = step+1;
    
    const Form = ()=>{
    
      if(step==0){
      
      return (
      <Step1 /> );
      
      }else if(step==1){
      
      return (
      <Step2 /> );
      
      }else if(step==2){
      
      return (
      <Step3 /> );
      
      }else if(step==3){
      
          return (
          <Step4 /> );
      }
      }



    const Step1 = () =>{
    
    return (
    <>
        
      <div class="progressBar">
        <div class="progress">
          <span class="progress-bar bg-success progress-bar-striped step1">{step_form}</span>
        </div>
      </div>
      
      <form>
      <div className="form_body">
        <div className="header">
          <h1>Amount & delivery</h1>
        </div>
        <div className="row">
        <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">From</p>
                <select 
                className="form-select rate_input form-control"
                 aria-label="Select a reason"
                 value={from}
                 onChange={handleFrom}
                 >
                  <option value="">--- Select Currency ---</option>
                  <option value="USD">USD</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">To</p>
                <select 
                className="form-select rate_input form-control"
                 aria-label="Select a reason"
                 value={to}
                 onChange={handleTo}
                 >
                  <option value="">--- Select Currency ---</option>
                  <option value="INR">INR</option>
              </select>
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Amount</p>
              <input 
              type="text"
              className='rate_input form-control'
              value={amount}
              onChange={handleAmount}
               />
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Exchange Rate</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Exchange Amount</p>
              <input type="text" className='rate_input form-control' />
            </div>
          </div>
        </div>
        <div className="row each-row">
          <h5>Receive Method</h5>
          <div className="col-md-12">
            <div className="input_field">
              <div className="form-check method_type">
              <input 
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  value="Bank Transfer" 
                  onChange={handlePayout}
                  id="flexRadioDefault1" 
                  defaultChecked
                />
                <label className="form-check-label" for="flexRadioDefault1"> Bank Transfer </label>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="input_field">
              <div className="form-check method_type">
              <input
                  className="form-check-input"
                  type="radio"
                  name="flexRadioDefault" 
                  value="Mobile Wallet" 
                  onChange={handlePayout}
                  id="flexRadioDefault2"
              />
                <label className="form-check-label" for="flexRadioDefault2"> Mobile Wallet </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row each-row">
          <h5>Payout Partners</h5>
          <div className="col-md-12">
            <div className="form-check method_type">
              <input 
                  className="form-check-input"
                  type="radio" 
                  name="flexRadioDefault1"
                  id="flexRadioDefault3" 
                  value="Bank" 
                  onChange={handlePayout_partners}
                  defaultChecked 
                />
              <label className="form-check-label" for="flexRadioDefault3"> Bank </label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-check method_type">
              <input 
                  className="form-check-input" 
                  type="radio"              
                  name="flexRadioDefault1"
                  id="flexRadioDefault4"
                  value="Services" 
                  onChange={handlePayout_partners}
                />
              <label className="form-check-label" for="flexRadioDefault4"> Services </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col-md-4">
            <button className="start-form-button">Cancel</button>
          </div>
          <div className="col-md-8">
            <button className="form-button" onClick={()=>{setStep(step+1)}}>Continue</button>
          </div>
        </div>
      </div>
      </form>

    </>
    );
    }
    
    
    const Step2 = () =>{
    
    return (
    <>
       <div class="progressBar">
   <div class="progress">
     <span class="progress-bar bg-success progress-bar-striped step2">{step_form}</span>
   </div>
 </div>
 <div className="form_body">
   <div className="header">
     <h1>Recipient Bank Details</h1>
   </div>
   <div className="col-md-12">
     <div className="input_field">
       <p className="get-text">Bank Name</p>
       <input type="text" className='rate_input form-control' />
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Account Name</p>
         <input type="text" className='rate_input form-control' />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Account number</p>
         <input type="text" className='rate_input form-control' />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <h5>Recipient Details</h5>
     <div className="col-md-4">
       <div className="input_field">
         <p className="get-text">First Name</p>
         <input type="text" className='rate_input form-control' />
       </div>
     </div>
     <div className="col-md-4">
       <div className="input_field">
         <p className="get-text">Middle Name</p>
         <input type="text" className='rate_input form-control' />
       </div>
     </div>
     <div className="col-md-4">
       <div className="input_field">
         <p className="get-text">Last Name</p>
         <input type="text" className='rate_input form-control' />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-6">
       <div className="input_field">
         <p className="get-text">Email</p>
         <input type="email" className='rate_input form-control' />
       </div>
     </div>
     <div className="col-md-6">
       <div className="input_field">
         <p className="get-text">Mobile</p>
         <input type="text" className='rate_input form-control' />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Address</p>
         <input type="text" className='rate_input form-control' />
       </div>
     </div>
   </div>
   <div className="row each-row">
     <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Reason For Sending Money</p>
         <select class="form-select rate_input form-control" aria-label="Select a reason">
           <option selected>Select a reason</option>
           <option value="1">Family Support</option>
           <option value="2">Education</option>
           <option value="3">Tax Payment</option>
           <option value="3">Loan Payment</option>
           <option value="3">Travel Payment</option>
           <option value="3">Utility Payment</option>
         </select>
       </div>
     </div>
   </div>
   <div class="row">
     <div className="col-md-4">
       <button className="start-form-button">Cancel</button>
     </div>
     <div className="col-md-8">
       <button className="form-button" onClick={handleShow}>Continue</button>
       <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
     </div>
   </div>
 </div>


<Modal show={show} onHide={handleClose}
 centered
>
        <Modal.Header closeButton>
          <Modal.Title>Recipient details Summary</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Table>
        <thead>
  <tr>
    <th colSpan={2} className="popup-heading">Bank Details</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>Bank Name</th>
    <td>Bank Of India</td>
  </tr>
  <tr>
    <th>Account Name</th>
    <td>Varun Sharma</td>
  </tr>
  <tr>
    <th>Account number</th>
    <td>1123345455445</td>
  </tr>
</tbody>
<thead>
  <tr>
    <th colSpan={2} className="popup-heading">Recipient Details</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>First Name</th>
    <td>Varun</td>
  </tr>
  <tr>
    <th>Middle Name</th>
    <td>kumar</td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td>Sharma</td>
  </tr>
  <tr>
    <th>Email</th>
    <td>varun@gmail.com</td>
  </tr>
  <tr>
    <th>Address</th>
    <td>Hno.253 Mohali Punjab</td>
  </tr>
  <tr>
    <th>Reason For Sending Money</th>
    <td>Tax Payment</td>
  </tr>
</tbody>
               </Table>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Go back to Edit
          </Button>
          <Button variant="primary" onClick={()=>{setStep(step+1)}}>Continue</Button>
        </Modal.Footer>
      </Modal>
    </>
    );
    }
    
    
    const Step3 = () =>{
    
    return (
    <>
      <div class="progressBar">
    <div class="progress">
      <span class="progress-bar bg-success progress-bar-striped step3">{step_form}</span>
    </div>
  </div>
  <div className="form_body">
    <div className="header">
      <h1>Payment details</h1>
    </div>
    <div className="row each-row">
      <h5>Payment type</h5>
      <div className="col-md-12">
        <div className="form-check method_type">
          <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault3" defaultChecked />
          <label className="form-check-label" for="flexRadioDefault3"> Osko </label>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-check method_type">
          <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4" />
          <label className="form-check-label" for="flexRadioDefault4"> Debit/Credit Card </label>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-check method_type">
          <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault5" />
          <label className="form-check-label" for="flexRadioDefault5"> PoLI Internet Banking </label>
        </div>
      </div>
    </div>
    <div class="row">
      <div className="col-md-4">
        <button className="start-form-button">Cancel</button>
      </div>
      <div className="col-md-8">
        <button className="form-button" onClick={()=>{setStep(step+1)}}>Continue</button>
        <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
      </div>
    </div>
  </div>
        
    </>
    );
    }

    const Step4 = () =>{
    
      return (
      <>
        <div class="progressBar">
      <div class="progress">
        <span class="progress-bar bg-success progress-bar-striped step4">{step_form}</span>
      </div>
    </div>
    <div className="form_body">
      <div className="header">
        <h1>User Identity</h1>
      </div>
 <div className="row each-row">
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">First Name</p>
       <input type="text" className='rate_input form-control' />
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Middle Name</p>
       <input type="text" className='rate_input form-control' />
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Last Name</p>
       <input type="text" className='rate_input form-control' />
     </div>
   </div>
 </div>
 <div className="row each-row">
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Customer ID</p>
       <input type="text" className='rate_input form-control' />
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Date of birth</p>
       <input type="date" className='rate_input form-control' />
     </div>
   </div>
   <div className="col-md-4">
     <div className="input_field">
       <p className="get-text">Gender</p>
       <input type="text" className='rate_input form-control' />
     </div>
   </div>
 </div>
 <div className="row each-row">
   <div className="col-md-6">
     <div className="input_field">
       <p className="get-text">Country of Birth</p>
       <input type="text" className='rate_input form-control' />
     </div>
   </div>
   <div className="col-md-6">
     <div className="input_field">
       <p className="get-text">ID Type</p>
       <input type="text" className='rate_input form-control' />
     </div>
   </div>
 </div>
 <div className="row each-row">
   <div className="col-md-6">
     <div className="input_field">
       <p className="get-text">Email</p>
       <input type="email" className='rate_input form-control' />
     </div>
   </div>
   <div className="col-md-6">
     <div className="input_field">
       <p className="get-text">Mobile</p>
       <input type="text" className='rate_input form-control' />
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
       <p className="get-text">Country</p>
       <CountryDropdown id="UNIQUE_ID" className='YOUR_CSS_CLASS rate_input form-control' preferredCountries={['gb', 'us' ]} value="" handleChange={e=> console.log(e.target.value)}></CountryDropdown>

     </div>
   </div>
 </div>
      <div class="row each-row">
        <div className="col-md-4">
          <button className="start-form-button">Cancel</button>
        </div>
        <div className="col-md-8">
          <button className="form-button" onClick={handleAmountDelivery}>Continue</button>
          <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
        </div>
      </div>
    </div>
          
      </>
      );
      }
    
    return (
    
    <>
        <div class="form">
   <div className="card">
     <section className="why-us section-bgba user_dashboard_banner">
       <div className="container">
         <div className="row">
           <div className="col-md-8">{
             <Form />}
           </div>
           <div className="col-md-4">
             <div className="summary">
               <h5>Summary</h5>
               <Table>
                 <tbody>
                   <tr>
                     <th>Amount</th>
                     <td>$556.00 ⇒ ₹45,803.28</td>
                   </tr>
                   <tr>
                     <th>Received Method</th>
                     <td>{payment}</td>
                   </tr>
                   <tr>
                     <th>Payout Partners</th>
                     <td>{payment_partners}</td>
                   </tr>
                 </tbody>
               </Table>
             </div>
           </div>
         </div>
       </div>
     </section>
   </div>
 </div>
    </>
    );
}



export default UserDashboard;