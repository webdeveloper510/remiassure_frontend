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

const SendMoney = () => {

   // Start page show hide condtion page 
   const token = localStorage.getItem("token");
   console.log("TOKEN", token);

   const verification_otp = localStorage.getItem("verification_otp");
   console.log("Verification Message", verification_otp)

// Start page show hide condtion page


/**************************************************************************
 * ************** Start -Recipient Bank Details************************************
 * ***********************************************************************/

// const [bank_data, setBank_data] = React.useState([]);

const [formValue, setFormValue] = React.useState ({
    bankName:'',accountName:'', accountNumber:'',firstName:'', middleName:'',
   lastName:'',email:'',mobile:'',address:'',reasonMoney:''});




const [account_name, setAccount_name] = React.useState ("");
const [account_number, setAccount_number] = React.useState ("");
const [first_name, setFirst_name] = React.useState ("");
const [middle_name, setMiddle_name] = React.useState ("");
const [last_name, setLast_name] = React.useState ("");
const [email, setEmail] = React.useState ("");
const [mobile, setMobile] = React.useState ("");
const [address, setAddress] = React.useState ("");
const [reason_money, setReason_money] = React.useState ("");

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


const handleStep2InputChange =(e,key) =>{
  console.log(e.target.value)
  console.log(key)
  let valueForm = formValue
  valueForm[key] = e.target.value
  setFormValue(valueForm)
  console.log(formValue)
}


const handleAccountName =(e) =>{
  setAccount_name(e.target.value)
}
const handleAccountNumber =(e) =>{
  setAccount_number(e.target.value)
}
const handleFirstName =(e) =>{
  setFirst_name(e.target.value)
}
const handleMiddleName =(e) =>{
  setMiddle_name(e.target.value)
}
const handleLastName =(e) =>{
  setLast_name(e.target.value)
}
const handleEmail =(e) =>{
  setEmail(e.target.value)
}
const handleAddress =(e) =>{
  setAddress(e.target.value)
}
const handleMobile =(e) =>{
  setMobile(e.target.value)
}
const handleReasoMoney =(e) =>{
  setReason_money(e.target.value)
}

//store localstorage
// localStorage.setItem("bank_name", (bank_name));
localStorage.setItem("bankName",(formValue.bankName));
localStorage.setItem("accountName",(formValue.accountName));
localStorage.setItem("accountNumber",(formValue.accountNumber));
localStorage.setItem("firstName",(formValue.firstName));
localStorage.setItem("middleName",(formValue.middleName));
localStorage.setItem("lastName",(formValue.lastName));
localStorage.setItem("email",(formValue.email));
localStorage.setItem("mobile",(formValue.mobile));
localStorage.setItem("address",(formValue.address));
localStorage.setItem("reasonMoney",(formValue.reasonMoney));


//get localstorage


const bankName = localStorage.getItem("bankName")
console.log(bankName, "bankName");

const accountName = localStorage.getItem("accountName")
console.log(accountName, "accountName");

const accountNumber = localStorage.getItem("accountNumber")
console.log(accountNumber, "accountNumber");

const firstName = localStorage.getItem("firstName")
console.log(firstName, "firstName");

const middleName = localStorage.getItem("middleName")
console.log(middleName, "middleName");

const lastName = localStorage.getItem("lastName")
console.log(lastName, "lastName");

const emailData = localStorage.getItem("email")
console.log(emailData, "emailData");

const mobileData = localStorage.getItem("mobile")
console.log(mobileData, "mobileData");

const addressData = localStorage.getItem("address")
console.log(addressData, "addressData");

const reasonMoney = localStorage.getItem("reasonMoney")
console.log(reasonMoney, "reasonMoney");





// function handleDataStore(){

//   var courses =JSON.parse(localStorage.getItem('courses') || "[]")
//   var course ={
//     bank_name:bank_name,
//     account_name:account_name
//   }
//   courses.push(course)

//   localStorage.setItem('courses', JSON.stringify(courses))
// }

//multiple function call
function someFunc() {
  handleShow();
  // handleDataStore();
}


//Get item localstorage
const courses = localStorage.getItem('courses');
console.log(courses,"coursescourses");




  //Total Amount get data
  const Total_amount = localStorage.getItem("Total_amount");
  console.log("Amonut", Total_amount);

  //Total Amount rate data 
  const Total_INR = localStorage.getItem("Total_INR");
  console.log("Amount rate", Total_INR);

  const [selected, setSelected] = React.useState("");

   //start Summury content change
   const [payment, setPayment] = React.useState('Bank Transfer');
   const [payment_partners, setPayment_partners] = React.useState('Bank');
   
   
  // start Recive Radio button
   const initialValue={  
    recivedMethod: "bankTransfer",
    payOutPartner: "bank",
    paymentType: "Oslo",
    // amount:0
  }
    const [moneyTransiction , setMoneyTransiction] =React.useState(initialValue);
    const {  
      recivedMethod,
      payOutPartner,
      paymentType,
      // amount
      } = moneyTransiction;
        
      const onInputChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        // console.log(defaultCountryData.length)
        setMoneyTransiction(item1=>({...item1,[e.target.name]: e.target.value }));
    }
 // End Recive Radio button






 
  
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
            setStep(step+1) //next step call
            setShows(!shows) //show hide summery function call
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

/**************************************************************************
 * ************** Start -Digital ID call Api************************************
 * ***********************************************************************/

const digitalIdAsyncInit =(event) =>{
  event.preventDefault();
    axios.post('https://digitalid-sandbox.com/sdk/app.js', {

      clientId: 'ctid2poVwlVfjH2PAnWEAB2l4v',
      uxMode: 'popup',
      
    }, {
        headers: {
            // 'Content-Type': 'application/json',
        },
      
    })
    .then(function onComplete (response) {
        console.log("Check",response);
        // onComplete: function (response) { console.log(response)
          console.log(response)
        

    })
    .catch(function(error, message) {
      console.log(error.response)
      
    })
}



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
      <Step1 /> 
       );
      
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
    
    {  
          verification_otp || token != undefined || '' ? (
   <section>
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
        <div className="col-md-12">
            <div className="input_field rate-value">
              <p className="get-text Exchange_rate">Exchange Rate</p>
              <p className="exchange-rate exchange_value" >1 <span>{from}</span> = {total_rate} <span>{to}</span> </p>
              {/* <input type="text" className='rate_input form-control' /> */}
            </div>
          </div>
          </div>
        <div className="row">
        <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">From</p>
                <select 
                className="form-select rate_input form-control"
                 aria-label="Select a reason"
                 value={from}
                 onChange={handleFrom}
                //  onChange={(e)=> {myTotalAmount(e.target.value);setFrom(e.target.value)}}
                 >
                  <option value="">--- Select Currency ---</option>
                  {/* <option value="USD" selected="selected">USD</option> */}
                  <option value="USD">USD</option> 
                  <option value="EUR">EUR</option>
                  <option value="INR">INR</option> 
                  <option value="BRL">BRL</option>
                  <option value="BGN">BGN</option>
                  <option value="XAF">XAF</option>
                  <option value="CAD">CAD</option>
                  <option value="EUR">EUR</option>
                  <option value="CZK">CZK</option>
                  <option value="DKK">DKK</option>
                  <option value="GHS">GHS</option>
                  <option value="ISK">ISK</option>
                  <option value="JOD">JPD</option>
                  <option value="KWD">KWD</option>
                  <option value="NZD">NZD</option>
                  <option value="PHP">PHP</option>
                  <option value="ZAR">ZAR</option> 
                  <option value="CHF">CHF</option>
                  <option value="GBP">GBP</option>
                
                 

              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">To</p>
                <select 
                className="form-select rate_input form-control"
                 aria-label="Select a reason"
                 value={to}
                 onChange={handleTo}
                //  onChange={(e)=> {myTotalAmount(e.target.value);setTo(e.target.value)}}
                 >
                  <option value="">--- Select Currency ---</option>
                  {/* <option value="INR" selected="selected">INR</option> */}
                  <option value="INR">INR</option> 
                  <option value="EUR">EUR</option>
                  <option value="BRL">BRL</option>
                  <option value="USD">USD</option>
                  <option value="BGN">BGN</option>
                  <option value="XAF">XAF</option>
                  <option value="CAD">CAD</option>
                  <option value="EUR">EUR</option>
                  <option value="CZK">CZK</option>
                  <option value="DKK">DKK</option>
                  <option value="GHS">GHS</option>
                  <option value="ISK">ISK</option>
                  <option value="JOD">JPD</option>
                  <option value="KWD">KWD</option>
                  <option value="NZD">NZD</option>
                  <option value="PHP">PHP</option>
                  <option value="ZAR">ZAR</option> 
                  <option value="CHF">CHF</option>
                  <option value="GBP">GBP</option>
              </select>
            </div>
          </div>
          
        </div>
        <div className="row each-row">
        <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Amount Send</p>

              <input 
              type="text"
              autoFocus="autofocus"
              className='rate_input form-control'
              value={amount}
              onChange={(e)=> {myTotalAmount(e.target.value); setAmount(e.target.value)}}
              name="amount"
              // onkeyup={(text)=> myTotalAmount(text)}
              // onChange={e => onInputChangeDealType(e)}
               />

            </div>
          </div>

          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">
                Exchange Amount
                </p>
              <input
               type="text"
               defaultValue={exchange_amount && amount != 0 || "" ? exchange_amount : ""}
                className='rate_input form-control'
                
                 />

            </div>
          </div>
        </div>
        <div className="row each-row">
          <h5>Receive Method</h5>
          <div className="col-md-12">
            <div className="input_field">
              <div className="form-cverification_heck method_type">
              <input 
                  className="form-check-input"
                  type="radio"
                  name="recivedMethod"
                  value="bankTransfer" 
                  checked={moneyTransiction.recivedMethod== "bankTransfer"}
                  onChange={e => onInputChange(e)}
                  // id="flexRadioDefault1" 
               
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
                  name="recivedMethod" 
                  value="mobileWallet" 
                  checked={moneyTransiction.recivedMethod== "mobileWallet"}
                  onChange={e => onInputChange(e)}
                  // id="flexRadioDefault2"
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
                  name="payOutPartner"
                  // id="flexRadioDefault3" 
                  checked={moneyTransiction.payOutPartner== "bank"}
                  value="bank" 
                    onChange={e => onInputChange(e)}
                   
                />
              <label className="form-check-label" for="flexRadioDefault3"> Bank </label>
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-check method_type">
              <input 
                  className="form-check-input" 
                  type="radio"              
                  name="payOutPartner"
                  // id="flexRadioDefault4"
                  checked={moneyTransiction.payOutPartner== "services"}
                  value="services" 
                  onChange={e => onInputChange(e)}
                />
              <label className="form-check-label" for="flexRadioDefault4"> Services </label>
            </div>
          </div>
        </div>
        <div class="row">
          <div className="col-md-4">
            <button 
            className="start-form-button"
            onClick={handleEntailmentRequest}
            >Cancel</button>
          </div>
          <div className="col-md-8">
          <button
           className="form-button"
          //  onChange={() => setShows(!shows)}
            onClick={handleAmountDelivery}>
              Continue
              {loading ? <>
                <div class="loader-overly"> 
                    <div class="loader" > 
                                                  
                      </div>
                                                  
                 </div>
           </> : <></>}
          </button>
          </div>
        </div>
      </div>
      </form>
      </section>
   ) : (
    <>
    
    </>
)
}

    </>
    );
    }
    
    
    const Step2 = () =>{
    
    return (
    <>
     {  
          
    <section>
       <div class="progressBar">
   <div class="progress">
   <span class="progress-bar bg-success progress-bar-striped step1">{step_form}</span>
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
            <input
              // autoFocus="autofocus"
            type="text" 
            className="rate_input form-control"
            name="bankName"
            defaultValue={formValue.bankName}
            onChange={(e)=>handleStep2InputChange(e,'bankName')}
            />
        </div>
    </div>
   <div className="row each-row">
     <div className="col-md-12">
       <div className="input_field">
         <p className="get-text">Account Name</p>
         <input 
         type="text"
         defaultValue={formValue.accountName}
         onChange={(e)=>handleStep2InputChange(e,'accountName')}
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
         defaultValue={formValue.accountNumber}
         onChange={(e)=> handleStep2InputChange(e,'accountNumber')}
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
         defaultValue={formValue.firstName}
         onChange={(e)=> handleStep2InputChange(e,'firstName')}
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
         defaultValue={formValue.middleName}
         onChange={(e)=> handleStep2InputChange(e,'middleName')}
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
         defaultValue={formValue.lastName}
         onChange={(e)=> handleStep2InputChange(e,'lastName')}
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
         defaultValue={formValue.email}
         onChange={(e)=> handleStep2InputChange(e,'email')}
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
         defaultValue={formValue.mobile}
         onChange={(e)=> handleStep2InputChange(e,'mobile')}
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
          defaultValue={formValue.address}
          onChange={(e)=> handleStep2InputChange(e,'address')}
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
           defaultValue={formValue.reasonMoney}
           onChange={(e)=> handleStep2InputChange(e,'reasonMoney')}
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
       <button className="start-form-button">Cancel</button>
     </div>
     <div className="col-md-8">
       {/* <button className="form-button" onClick={handleShow}>Continue</button> */}
       <button className="form-button" onClick={someFunc}>Continue</button>
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
    <td>{bankName}</td>
  </tr>
  <tr>
    <th>Account Name</th>
    <td>{accountName}</td>
  </tr>
  <tr>
    <th>Account number</th>
    <td>{accountNumber}</td>
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
    <td>{firstName}</td>
  </tr>
  <tr>
    <th>Middle Name</th>
    <td>{middleName}</td>
  </tr>
  <tr>
    <th>Last Name</th>
    <td>{lastName}</td>
  </tr>
  <tr>
    <th>Email</th>
    <td>{emailData}</td>
  </tr>
  <tr>
    <th>Address</th>
    <td>{addressData}</td>
  </tr>
  <tr> 
      <>
      
      </>
  
    <th>Reason For Sending Money</th>
    <td>{reasonMoney}</td>
  </tr>
</tbody>
               </Table>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Go back to Edit
          </Button>
          {/* <Button variant="primary" onClick={()=>{setStep(step+1)}}>Continue</Button> */}
          <Button variant="primary" onClick={digitalIdAsyncInit}>Continue</Button>
        </Modal.Footer>
      </Modal>

      </section>

   
  }
    </>
    );
    }
    
    
    const Step3 = () =>{
    
    return (
    <>
     {  
          verification_otp || token != undefined || '' ? (
    <section>
      <div class="progressBar">
    <div class="progress">
    <span class="progress-bar bg-success progress-bar-striped step1">{step_form}</span>
    <span class="progress-bar bg-success progress-bar-striped step2">{step_form}</span>
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
            <input 
              className="form-check-input" 
              type="radio"
              name="paymentType"
              // id="flexRadioDefault3" 
              checked={moneyTransiction.paymentType== "Oslo"}
              value="Oslo" 
              onChange={e => onInputChange(e)}
            />
            <label className="form-check-label" for="flexRadioDefault34"> Oslo </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-check method_type">
            <input
             className="form-check-input" 
             type="radio"
             name="paymentType"
             // id="flexRadioDefault3" 
             checked={moneyTransiction.paymentType== "Debit/Credit Card"}
             value="Debit/Credit Card" 
             onChange={e => onInputChange(e)}
              />
            <label className="form-check-label" for="flexRadioDefault44"> Debit/Credit Card </label>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-check method_type">
            <input
            className="form-check-input" 
            type="radio" 
            name="paymentType"
             // id="flexRadioDefault3" 
             checked={moneyTransiction.paymentType== " PoLI Internet Banking"}
             value=" PoLI Internet Banking" 
             onChange={e => onInputChange(e)}
            />
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
  </section> 
  
  ) : (
    <>
    
    </>
)
} 
    </>
    );
    }

    const Step4 = () =>{
    
      return (
      <>

{  
          verification_otp || token != undefined || '' ? (
      <section>
        <div class="progressBar">
      <div class="progress">
      <span class="progress-bar bg-success progress-bar-striped step1">{step_form}</span>
    <span class="progress-bar bg-success progress-bar-striped step2">{step_form}</span>
      <span class="progress-bar bg-success progress-bar-striped step3">{step_form}</span>
        <span class="progress-bar bg-success progress-bar-striped step4">{step_form}</span>
      </div>
    </div>
    <div className="form_body">
      <div className="header">
        <h1>Sender Details </h1>
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
          <button
           className="form-button"
         
            >
              Continue
          
              </button>
          <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
        </div>
      </div>
    </div>
    </section>

) : (
  <>
  
  </>
)
}
          
      </>
      );
      }
    
    return (
    
    <>

{  
         (
    <section>
    
        <div class="form">
   <div className="card">
     <section className="why-us section-bgba user_dashboard_banner">
       <div className="container">
         <div className="row">
           <div className="col-md-8">{
             <Form />}
           </div>
           {shows &&
           <div className="col-md-4">
             <div className="summary">
               <h5>Summary</h5>
               <Table>
                 <tbody>
                   <tr>
                     <th>Amount</th>
                     <td>{amount+" "+from +" ⇒ "+total_amount + " " +to }</td>
                   </tr>
                   <tr>
                     <th>Received Method</th>
                     <td>{recivedMethod}</td>
                   </tr>
                   <tr>
                     <th>Payout Partners</th>
                     <td>{payOutPartner}</td>  
                   </tr>
                 </tbody>
               </Table>
             </div>
           </div>

           }
         </div>
       </div>
     </section>
   </div>
 </div>


 </section>

) 
}
    </>
    );
}



export default SendMoney;