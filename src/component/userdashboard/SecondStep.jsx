import React, { useState ,useEffect, useContext} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from "../context/UserContext";
import { HiSwitchHorizontal } from 'react-icons/hi';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import ReactFlagsSelect from "react-flags-select";


const SecondStep = () => {

  const [step,setStep] = useState(0);
    
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



    // Start page show hide condtion page 
    const token = localStorage.getItem("token");
    console.log("TOKEN", token);
 
    const verification_otp = localStorage.getItem("verification_otp");
    console.log("Verification Message", verification_otp)
 
 // Start page show hide condtion page
 
 
 
 /**************************************************************************
  * ************** Start -Recipient Bank Details************************************
  * ***********************************************************************/
 const [userName, setUserName] = React.useState ("");
 
   
 localStorage.setItem("Username", "userName")
 localStorage.setItem("Username", JSON.stringify(userName));
 
 
 useEffect(() => { 
   localStorage.setItem("Username",JSON.stringify(userName))
   }, [userName]);
 
 
   // const handleBankName =(e) =>{
   //   setBank_name(e.target.value)
   //   console.log(bank_name,"oe")
   // }
 

 
   //Total Amount get data
   const Total_amount = localStorage.getItem("Total_amount");
   console.log("Amonut", Total_amount);
 
   //Total Amount rate data 
   const Total_INR = localStorage.getItem("Total_INR");
   console.log("Amount rate", Total_INR);
 
   const [selected, setSelected] = React.useState("");
 
    //start Summury content change
   //  const [payment, setPayment] = React.useState('Bank Transfer');
   //  const [payment_partners, setPayment_partners] = React.useState('Bank');
    
    
   // start Recive Radio button
    const initialValue={  
     recivedMethod: "bankTransfer",
     payOutPartner: "bank",
     // amount:0
   }
     const [moneyTransiction , setMoneyTransiction] =React.useState(initialValue);
     const {  
       recivedMethod,
       payOutPartner,
       // amount
       } = moneyTransiction;
         
       const onInputChange = e => {
         console.log(e.target.name)
         console.log(e.target.value)
         // console.log(defaultCountryData.length)
         setMoneyTransiction(item1=>({...item1,[e.target.name]: e.target.value }));
     }
  // End Recive Radio button
 
 
  // start select value get data
  const {location} = useContext(UserContext);
 
 
  // Start Api call Amount & Delivery
   const [from, setFrom] =React.useState('USD');
   const [shows, setShows] = React.useState(false);
   const [to, setTo] = React.useState('');
   const [amount, setAmount] = React.useState();
   const [exchange_amount, setExchange_amount] =React.useState();
   const [total_amount, setTotal_amount] =React.useState('');
   const [total_rate, setTotal_rate] =React.useState('');
 
   const [options, setOptions] = React.useState([]);
   const [output, setOutput] = React.useState(0);
   const [info, setInfo] = React.useState([]);
   const [loading, setLoading] = React.useState(false);
  
   
   // console.log(from, "fromfromfromfromfromfromfromfrom")
   // console.log(to, "totototototototo")
 
 
   const handleFrom = (e) =>{
     setFrom(e.target.value) 
   }
   
   const handleTo =(e) =>{
     setTo(e.target.value)
   }
 
   // useEffect(() =>)
   // const handleAmount = (e) =>{
   //   setAmount(e.target.value)
   //     if (amount.value.length == 0)
   //     { 
        
   //       return (setAmount.value.length = 0);
   //     }  	
   // }
 
   useEffect(() => {
     console.log(amount)
   }, [amount])
 
 
   const handleEntailmentRequest =(e) => {
     e.preventDefault();
     window.location.reload(false);
 
     console.log("handle request ");
 }
 
 
   const navigate = useNavigate();
   // const notify = () => toast.success("Amount & Delivery Successfully!!");
 
   //localstorage of get data 
     // const Total_amount= localStorage.getItem(Total_amount);
     // console.log(Total_amount, "Total_amount money")
 
 
     const handleAmountDelivery =(event) =>{
       event.preventDefault();
       setLoading(true); // Set loading before sending API request
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
            //  setStep(step+1) //next step call
            //  setShows(!shows) //show hide summery function call
             setLoading(false); // Stop loading
 
         })
         .catch(function(error, message) {
             console.log(error.response)
             setLoading(false); // Stop loading in case of error
             if(error.response.data.status){
                 // toast.error(error.response.data.message);
             } 
             console.log(error, "klnklnklnknnnnnnnnnnnn");   
         })
     }
 
   // End Api call Amount & Delivery
 
 
 // Start Total Amount Api call 
     const myTotalAmount =(value)=> {   
       console.log("====================>",amount)
      setLoading(true); // Set loading before sending API request
       axios.post(API.BASE_URL + 'exchange-rate/', {
         from: from,
         to: to,
         amount: value
      
       }, {
           headers: {
               // 'Content-Type': 'application/json',
           },
         
       })
       .then(function(response) {
           console.log(response);
           if (response.status)
           // localStorage.setItem("Total_amount", response.data.amount);
           setTotal_amount(response.data.amount);
           setExchange_amount(response.data.amount);
           setTotal_rate( response.data.rate);
           setLoading(false); // Stop loading
       })
       .catch(function(error, message) {
           console.log(error.response)
           setLoading(false); // Stop loading in case of error
           // if(error.response.data.status){
           //     toast.error(error.response.data.message);
           // } 
           // console.log(error, "klnklnklnknnnnnnnnnnnn");   
       })
 
    }
    // End Total Amount Api call 



  return (
    <>
    {  
         verification_otp || token != undefined || '' ? (
   <section>
      
<div className="form_body">
  <div className="header">
    <h1>Recipient Bank Details</h1>
  </div>
   <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Bank Name</p>
           <input
           type="text" 
           className="rate_input form-control"
           
           // value={bank_name}
           // onChange={handleBankName}
           value={userName}
           onChange={(e) => setUserName(e.target.value)}
           />
       </div>
   </div>
  <div className="row each-row">
    <div className="col-md-12">
      <div className="input_field">
        <p className="get-text">Account Name</p>
        <input 
        type="text"
         className='rate_input form-control'
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
          />
      </div>
    </div>
    <div className="col-md-4">
      <div className="input_field">
        <p className="get-text">Middle Name</p>
        <input
         type="text"
          className='rate_input form-control' 
          />
      </div>
    </div>
    <div className="col-md-4">
      <div className="input_field">
        <p className="get-text">Last Name</p>
        <input 
        type="text" 
        className='rate_input form-control'
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
          />
      </div>
    </div>
    <div className="col-md-6">
      <div className="input_field">
        <p className="get-text">Mobile</p>
        <input 
        type="text" 
        className='rate_input form-control'
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
          >
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
      {/* <button className="form-button" onClick={handleShow}>Continue</button>
      <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button> */}
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
         {/* <Button variant="primary" onClick={()=>{setStep(step+1)}}>Continue</Button> */}
       </Modal.Footer>
     </Modal>

     </section>

   ) : (
     <>
     
     </>
 )
 }
   </>
  );
};
export default SecondStep;
