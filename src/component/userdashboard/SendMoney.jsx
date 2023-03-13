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
    amount:0
  }
    const [moneyTransiction , setMoneyTransiction] =React.useState(initialValue);
    const {  
      recivedMethod,
      payOutPartner,
      amount
      } = moneyTransiction;
        

      const onInputChange = e => {
        console.log(e.target.name)
        console.log(e.target.value)
        // console.log(defaultCountryData.length)
        setMoneyTransiction(item1=>({...item1,[e.target.name]: e.target.value }));
    }

 // End Recive Radio button



        

 // End payment_partners Radio button
















  //  const handlePayout = (e) =>{
  //   console.log(e.target.name)
  //   console.log(e.target.value)
  //   setPayment(e.target.value)
  //  }

  //  const handlePayout_partners = (e) =>{
  //   console.log(e.target.name)
  //   console.log(e.target.value)
  //   setPayment_partners(e.target.value)
  //  }
//end Summury content change 


 // start select value get data
 const {location} = useContext(UserContext);



 // Start Api call Amount & Delivery

  const [from, setFrom] =React.useState('USD');
  const [shows, setShows] = React.useState(false);
  const [to, setTo] = React.useState('');
  // const [amount, setAmount] = React.useState('');
  const [exchange_amount, setExchange_amount] =React.useState('');
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

  // const handleAmount = (e) =>{
  //   setAmount(e.target.value)
  // }


  const handleEntailmentRequest =(e) => {
    e.preventDefault();
    window.location.reload(false);

    console.log("handle request ");
}


   // Function to switch between two currency
  //  function flip() {
  //   var temp = from;
  //   setFrom(to);
  //   setTo(temp);
  // }

  // let convert
    // Calling the convert function whenever
   // a user switches the currency
  //  useEffect(() => {
  //   setOptions(Object.keys(info));
  //   var rate = info[to];
  // }, [info])
    

  //  Function to convert the currency
//    useEffect(() => {
//     var rate = info[to];
//     setOutput(amount * rate);
//    const  value = (amount * rate)
// }, [])
  

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


  // Start Ratio Amount Api call 
  // function ratioAmount() {   
  //   setLoading(true); // Set loading before sending API request
  //     axios.post(API.BASE_URL + 'exchange-rate/', {
  //       from: from,
  //       to: to,
  //       amount: amount
     
  //     }, {
  //         headers: {
  //             // 'Content-Type': 'application/json',
  //         },
        
  //     })
  //     .then(function(response) {
  //         console.log(response);
  //         if (response.status)
  //         localStorage.setItem("Total_amount", response.data.amount);
  //         // setTotal_amount(response.data.amount);
  //         // setExchange_amount(response.data.amount);
  //         setTotal_rate( response.data.rate);
  //         // console.log(exchange_amount, "setTosetTosetTosetTosetTo")
  //         // localStorage.setItem("Total_INR",) response.data.rate;

  //         // setStep(step+1)
  //         // setLoading(false); // Stop loading
  //           //   notify();
  //           //  navigate('/userdashboard');   
  //             // console.log(navigate, "jkfjkdkvnfkvnfkvnfkvnvknvknvkvnkvnvknknvknvknk")
  //     })
  //     .catch(function(error, message) {
  //         console.log(error.response)
  //         setLoading(false); // Stop loading in case of error
  //         if(error.response.data.status){
  //             toast.error(error.response.data.message);
  //         } 
  //         console.log(error, "klnklnklnknnnnnnnnnnnn");   
  //     })

  //  }
// End Ratio Amount Api call 



// Start Total Amount Api call 
    const myTotalAmount =(value)=> {   
      console.log("====================>",value)
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
                //  onChange={(e)=> {myTotalAmount(e.target.value);setFrom(e.target.value)}}
                 >
                  <option value="">--- Select Currency ---</option>
                  {/* <option value="USD" selected="selected">USD</option> */}
                  <option value="USD">USD</option> 
                  <option value="EUR">EUR</option>
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
          <div className="col-md-4">
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
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text Exchange_rate">Exchange Rate</p>
              <p className="exchange-rate exchange_value" >1 <span>{from}</span>⇒ {total_rate} <span>{to}</span> </p>
              {/* <input type="text" className='rate_input form-control' /> */}
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
              value={moneyTransiction.amount || ""}
              name="amount"
              // onkeyup={(text)=> myTotalAmount(text)}
              // onChange={e => onInputChangeDealType(e)}
              onChange={(e)=> {myTotalAmount(e.target.value);onInputChange(e)}}
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
               value={exchange_amount}
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
          <input className="form-check-input" type="radio" name="flexRadioDefault11" id="flexRadioDefault34" defaultChecked />
          <label className="form-check-label" for="flexRadioDefault34"> Osko </label>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-check method_type">
          <input className="form-check-input" type="radio" name="flexRadioDefault15" id="flexRadioDefault44" />
          <label className="form-check-label" for="flexRadioDefault44"> Debit/Credit Card </label>
        </div>
      </div>
      <div className="col-md-12">
        <div className="form-check method_type">
          <input className="form-check-input" type="radio" name="flexRadioDefault14" id="flexRadioDefault5" />
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
        <h1>Send Details </h1>
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



    </>
    );
}



export default SendMoney;