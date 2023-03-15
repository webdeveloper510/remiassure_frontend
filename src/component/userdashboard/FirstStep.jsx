import React, { useState ,useEffect, useContext} from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import UserContext from "../context/UserContext";
import { HiSwitchHorizontal } from 'react-icons/hi';

// import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import LastStep from "./LastStep";
import MultiStepProgressBar from "./MultiStepProgressBar";
import { Row, Col } from "react-bootstrap";


import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import { Navigate, useNavigate } from "react-router";
import ReactFlagsSelect from "react-flags-select";




const FirstStep = () => {

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


    /***********************************************************************************
     * *********************************Start design multiple form**********************
     * *********************************************************************************/ 
      //For manageing state of multi steps Form
  const [page, setPage] = useState(0);

  const [userInput, setUserInput] = useState({
    fullName: "",
    displayname: "",
    workspaceName: "",
    workspaceUrl: "",
    checkboxValue: ""
  });


   //proceed to next step
   const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };
  
  const previous = () => {
    setPage((currPage) => currPage - 1);
  };
  

  const pageTitles = [
    "Welcome! First things first...",
    "Let's set up a home for all your work",
    "How are you planning to use Eden?"
  ];
  const pageSubTitiles = [
    "You can always change them later.",
    "You can always create another workspace later",
    "We'll streamline your setup expereince accordingly.",
    "You have completed onboarding, you can start using the Eden"
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <FirstStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <SecondStep nextStep={nextStep} handleChange={handleChange} />;
   };

  //handle field changes
  const handleChange = (input) => (e) => {
    setUserInput({ ...userInput, [input]: e.target.value });
  };



  return (
   <>
       {  
          verification_otp || token != undefined || '' ? (
   <section>
      {/* <div class="progressBar">
        <div class="progress">
          <span class="progress-bar bg-success progress-bar-striped step1">{step_form}</span>
        </div>
      </div> */}

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
               value={exchange_amount && amount != 0 || "" ? exchange_amount : ""}
                className='rate_input form-control'
                
                 />

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

          <button onClick={previous}  className="btn btn-primary">previous</button>
          
          
          </div>
        </div>
      </div>
      </form>
      {/* <button
            onClick={() => {
              if (page === pageSubTitiles.length - 1) {
                console.log(userInput);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          
          >
            {page === pageSubTitiles.length - 1
              ? "Launch Eden"
              : "Create Workspace"}
          </button> */}
      {/* </div> */}
      </section>
   ) : (
    <>
    
    </>
)
}

   </>
  );
};

export default FirstStep;
