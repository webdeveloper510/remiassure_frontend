import React, { useState ,useEffect, useContext,useRef} from "react";
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
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsChevronDoubleRight } from "react-icons/bs";
import norecipients from '../../assets/img/userdashboard/hidden.avif';
import Accordion from 'react-bootstrap/Accordion';
import creditcards from '../../assets/img/userdashboard/mastercard.png';



// start css
const myStyle ={
  color: "red",
}



const UserSendMoney = () => {

/************ Start page show hide condtion page ***************/
   const token = localStorage.getItem("token");
   console.log("TOKEN", token);

   const verification_otp = localStorage.getItem("verification_otp");
   console.log("Verification Message", verification_otp)


  /******************* Start Api call Amount & Delivery State  *******/
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

   /************** Start - Recipient Bank Details************ **********/
 const [error, setError] = React.useState(false);
 const [recipientBankName, setRecipientBankName] = React.useState('');
 const [recipientAccountName, setRecipientAccountName] = React.useState('');
 const [recipientAccountNumber, setRecipientAccountNumber] = React.useState('');
 const [recipientMiddleName, setRecipientMiddleName] = React.useState('');
 const [recipientLastName, setRecipientLastName] = React.useState('');
 const [recipientMobile, setRecipientMobile] = React.useState('');
 const [recipientReasoMoney, setrecipientReasoMoney] = React.useState('');
 const [recipientAddress, setRecipientAddress] = React.useState('');
 

  /************ Start -Recipient Bank Details***************/
 const [formValue, setFormValue] = React.useState ({
  bankName:'',accountName:'', accountNumber:'',firstName:'', middleName:'',
 lastName:'',email:'',mobile:'',address:'',reasonMoney:''});

 // End -Recipient Bank Details


/******************* start Amount value  state   *******/
const [amountValue, setAmountValue] = React.useState({
  amountInput: '',
  // summaryList: false,
})

/******************* start card show  state   *******/
const [showCards, setshowCards] = React.useState("");

const handleCloseDetails = () => setshowCards(false);
const ShowCardDetails = () => setshowCards(true);

// start select value get data
const {location} = useContext(UserContext);


// Start -Recipient Bank Details 
const handleStep2InputChange =(e,key) =>{
  console.log(e.target.value)
  console.log(key)
  let valueForm = formValue
  valueForm[key] = e.target.value
  setFormValue(valueForm)
  console.log(formValue)
}

// Start Amount Api
// Start -Recipient Bank Details 
const handleAmountCahngeValue =(e,key) =>{
  console.log(e.target.value)
  console.log(key)
  let AmountData = amountValue
  AmountData[key] = e.target.value
  setAmountValue(AmountData)
  console.log(amountValue)
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
  // handleShow();
  setStep(step+1);

  // handleDataStore();
}

const handleAmountSummary = () => {
  // setStep(step+1);
  handleAmountDelivery();

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
const handlRecipientBankDetails =(e) => {
  e.preventDefault();
  window.location.reload(false);

  console.log("handle request ");
}


  const navigate = useNavigate();
  // const notify = () => toast.success("Amount & Delivery Successfully!!");

  //localstorage of get data 
    // const Total_amount= localStorage.getItem(Total_amount);
    // console.log(Total_amount, "Total_amount money")

/**************************************************************************
 * ************** Start  All Amount & Delivery  ******************************
 * ***********************************************************************/

    /* start-- useRef is used for focusing on inputbox */
    const input_From = useRef(null);
    const input_To = useRef(null);
    const input_AmountSend = useRef(null);


    const handleAmountDelivery =() =>{
      //  event.preventDefault();
      //  alert("hii")
         //useRef is used for focusing on inputbox
       if (from.length==0){
        input_From.current.focus();
            setError(true);
        } else if (to.length==0){
          input_To.current.focus();
            setError(true);
        } else if (amountValue.amountInput.length==0){
          input_AmountSend.current.focus();
            setError(true);
        } 
         
        else{
     
      setLoading(true); // Set loading before sending API request
        axios.post(API.BASE_URL + 'exchange-rate/', {
          from: from,
          to: to,
          amount: amountValue.amountInput
        }, {
            headers: {
                // 'Content-Type': 'application/json',
            },
          
        })
        .then(function(response) {
            console.log(response);
            localStorage.setItem("Total_amount", response.data.amount);
            if (response.status)
            setStep(step+1) //next step call
            setShows(!shows) //show hide summery function call
            setLoading(false); // Stop loading 

        })
        .catch(function(error, message) {
            console.log(error.response);
            setLoading(false); // Stop loading in case of error
            if(error.response.data.status){
                toast.error(error.response.data.message);
            } 
            console.log(error, "klnklnklnknnnnnnnnnnnn");   
        })
    }
  }

  // End Api call Amount & Delivery



/**************************************************************************
 * ************** Start  Total Amount Api call  ******************************
 * ***********************************************************************/
    const myTotalAmount =(event)=> {   
      event.preventDefault();
      // console.log("====================>",amount)
    setLoading(true); // Set loading before sending API request
      axios.post(API.BASE_URL + 'exchange-rate/', {
        from: from,
        to: to,
        amount: amountValue.amountInput
    
      }, {
          headers: {
              // 'Content-Type': 'application/json',
          },
        
      })
      .then(function(response) {
          console.log(response);
          if (response.status)
          localStorage.setItem("Total_amount", response.data.amount);
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
* ************** Start  Total Amount Api call  ******************************
* ***********************************************************************/
    const myTotalAmountFromTo =(value)=> {   
    // event.preventDefault();
    console.log("====================>",amount)
    setLoading(true); // Set loading before sending API request
    axios.post(API.BASE_URL + 'exchange-rate/', {
      from: from,
      to: to,
      amount: amountValue.amountInput

    }, {
        headers: {
            // 'Content-Type': 'application/json',
        },
      
    })
    .then(function(response) {
        console.log(response);
        if (response.status)
        localStorage.setItem("Total_amount", response.data.amount);
        console.log(total_amount, "total_amounttotal_amount")
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
 * ************** Start  Recipient Bank Details ****************************
 * ***********************************************************************/

   /* start-- useRef is used for focusing on inputbox */
   const input_recipientBankName = useRef(null);
   const input_recipientAccountName = useRef(null);
   const input_recipientAccountNumber = useRef(null);
   const input_recipientFirstName = useRef(null);
   const input_recipientMiddleName = useRef(null);
   const input_recipientLastName = useRef(null);
   const input_recipientEmail = useRef(null);
   const input_recipientMobile = useRef(null);
   const input_recipientReasoMoney = useRef(null);
   const input_recipientAddress = useRef(null);


   const handleRecipientBankDetails =(event) =>{
      event.preventDefault();
    //  alert("hii")
       //useRef is used for focusing on inputbox
     if (formValue.bankName.length==0){
      input_recipientBankName.current.focus();
          setError(true);
      } else if (formValue.accountName.length==0){
        input_recipientAccountName.current.focus();
          setError(true);
      } else if (formValue.accountNumber.length==0){
        input_recipientAccountNumber.current.focus();
          setError(true);
      } else if (formValue.firstName.length==0){
        input_recipientMiddleName.current.focus();
          setError(true);
      } else if (formValue.middleName.length==0){
        input_recipientLastName.current.focus();
          setError(true);
      } else if (formValue.lastName.length==0){
        input_recipientMobile.current.focus();
          setError(true);
      } else if (formValue.email.length==0){
        input_recipientReasoMoney.current.focus();
          setError(true);
      } else if (formValue.mobile.length==0){
        input_recipientAddress.current.focus();
          setError(true);
      } else if (formValue.address.length==0){
        input_recipientAddress.current.focus();
          setError(true);
      } else if (formValue.reasonMoney.length==0){
        input_recipientAddress.current.focus();
          setError(true);
      } 
       
      else{
   
    setLoading(true); // Set loading before sending API request
      axios.post(API.BASE_URL + 'recipient-create/', {
        // first_name: first_name,
        // middle_name: middle_name,
        // last_name: last_name,
        // email: email,
        // mobile: mobile,
       
      }, {
          headers: {
              // 'Content-Type': 'application/json',
          },
        
      })
      .then(function(response) {
          console.log(response);
          localStorage.setItem("Total_amount", response.data.amount);
          if (response.status)
          setStep(step+1); //next step call
          setShows(!shows) //show hide summery function call
          setLoading(false); // Stop loading 

      })
      .catch(function(error, message) {
          console.log(error.response);
          setLoading(false); // Stop loading in case of error
          if(error.response.data.status){
              toast.error(error.response.data.message);
          } 
          console.log(error, "klnklnklnknnnnnnnnnnnn");   
      })
  }
}






 // Start design state
    const {useState} = React;
    const [step,setStep] = useState(0);
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    

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
      
      }
      }



    const Step1 = () =>{
    
    return (
    <>
    
    {  
          verification_otp || token != undefined || '' ? (

            <>
     <div class="form-head mb-4">
      <h2 class="text-black font-w600 mb-0"><b>Amount & Delivery</b>
      </h2>
      </div>
            

    <form>
      <div className="card">
        <div className="card-body">
        <div className="row">
        <div className="col-md-12">
            <div className="input_field rate-value">
              <p className="get-text Exchange_rate">Exchange Rate</p>
              <p className="exchange-rate exchange_value" >1 <span>{from}</span> = {total_rate} <span>{to}</span> </p>
              {/* <input type="text" className='rate_input form-control' /> */}
            </div>
          </div>
          </div>
        <div className="row each-row">
        <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">From<span style={{color: 'red'}} >*</span></p>
                <select 
                className="form-select rate_input form-control"
                 aria-label="Select a reason"
                 value={from}
                 ref={input_From}
                //  onChange={handleFrom}
                 onChange={(e)=> {myTotalAmountFromTo(e.target.value);setFrom(e.target.value)}}
                // onBlurCapture={myTotalAmount}
                 >
                  {/* <option value="">--- Select Currency ---</option> */}
                  <option value="USD" selected="selected">USD</option>
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
              {error&&from.length<=0?
				            <span style={myStyle}>Please Select the Location </span>:""}
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">To<span style={{color: 'red'}} >*</span></p>
                <select 
                className="form-select rate_input form-control"
                 aria-label="Select a reason"
                 value={to}
                 ref={input_To}
                //  onChange={handleTo}
                 onChange={(e)=> {myTotalAmountFromTo(e.target.value);setTo(e.target.value)}}
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
              {error&&to.length<=0?
				            <span style={myStyle}>Please Select the Location </span>:""}
            </div>
          </div>
          
        </div>
        <div className="row each-row">
        <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Amount Send<span style={{color: 'red'}} >*</span></p>

              <input 
              type="text"
              // autoFocus="autofocus"
              ref={input_AmountSend}
              className='rate_input form-control'
              // onChange={(e)=> {myTotalAmount(e.target.value); setAmount(e.target.value)}}
              name="amountInput"
              defaultValue={amountValue.amountInput}
              onChange={(e)=>handleAmountCahngeValue(e,'amountInput')}
              onBlurCapture={myTotalAmount}
              // onkeyup={(text)=> myTotalAmount(text)}
              // onChange={e => onInputChangeDealType(e)}
               />
                 {error&&amountValue.amountInput.length<=0?
				            <span style={myStyle}>Please Enter the Amount </span>:""}

            </div>
          </div>

          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">
                Exchange Amount
                </p>
              <input
               type="text"
               defaultValue={exchange_amount && amountValue.amountInput != 0 || "" ? exchange_amount : ""}
                className='rate_input form-control'
                
                 />

            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-6">
          <h5>Receive Method</h5>
          <div className="col-md-12">
          <label className="container-new">
            <span className="radio-tick">BankTransfer</span>
          <input 
                  className="form-check-input"
                  type="radio"
                  name="recivedMethod"
                  value="bankTransfer" 
                  checked={moneyTransiction.recivedMethod== "bankTransfer"}
                  onChange={e => onInputChange(e)}
                  // id="flexRadioDefault1" 
               
                />
              <span className="checkmark"></span>
            </label>

          </div>
          <div className="col-md-12">

          <label className="container-new">
            <span className="radio-tick">MobileWallet</span>
          <input
                  className="form-check-input"
                  type="radio"
                  name="recivedMethod" 
                  value="mobileWallet" 
                  checked={moneyTransiction.recivedMethod== "mobileWallet"}
                  onChange={e => onInputChange(e)}
                  // id="flexRadioDefault2"
              />
            <span className="checkmark"></span>
          </label>
          </div>
          </div>

          <div className="col-md-6">
          <h5>Payout Partners</h5>
          <div className="col-md-12">

          <label className="container-new">
            <span className="radio-tick">Bank</span>
            <input 
                  className="form-check-input"
                  type="radio" 
                  name="payOutPartner"
                  // id="flexRadioDefault3" 
                  checked={moneyTransiction.payOutPartner== "bank"}
                  value="bank" 
                    onChange={e => onInputChange(e)}
                   
                />
            <span className="checkmark"></span>
          </label>

          </div>
          <div className="col-md-12">

          <label className="container-new">
            <span className="radio-tick">Services</span>
            <input 
                  className="form-check-input" 
                  type="radio"              
                  name="payOutPartner"
                  // id="flexRadioDefault4"
                  checked={moneyTransiction.payOutPartner== "services"}
                  value="services" 
                  onChange={e => onInputChange(e)}
                />
            <span className="checkmark"></span>
          </label>
          </div>
          </div>
        </div>
       
        <div className="row">
          <div className="col-md-4">
            <button 
            className="start-form-button"
            onClick={handleEntailmentRequest}
            >Cancel</button>
          </div>
          <div className="col-md-8">
          <button
          type="submit"
           className="form-button"
          //  onChange={() => setShows(!shows)}
            onClick={handleAmountSummary}
            // onClick={()=>{setStep(step+1)}}
            >
              Continue
              {/* {loading ? <>
                <div class="loader-overly"> 
                    <div class="loader" > 
                                                  
                      </div>
                                                  
                 </div>
           </> : <></>} */}
          </button>
          </div>
        </div>
        </div>
      </div>
      </form>

  
      </>
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
      <>
 
 
      
      <div className={isActive ? "col-md-6 add-recipent-section" : "col-md-6 remove-add-recipent-section"}>
      <div class="form-head mb-4">
      <h2 class="text-black font-w600 mb-0"><b>Select a recipient to send money</b>
      </h2>
      </div>
      <div className="card">
        <div className="card-body">
    <div>
        <ul>
          <li><a>William <BsChevronDoubleRight /></a></li>
          <li><a>Josh <BsChevronDoubleRight /></a></li>
          <li><a>Mike<BsChevronDoubleRight /> </a></li>
        </ul>
        <div className="add-rec">
          <button className="form-button" onClick={()=>{setStep(step-1)}} style={{"float": "left"}}>Previous</button>
          <button className="form-button" onClick={handleToggle} style={{"float": "right"}}><BsFillPersonPlusFill /> Add Recepients</button>
        </div>
    </div> 
   </div>
   </div>
   </div>
    

    <div  className={isActive ? "removerecepient" : "showrecepient"} >   
    <div class="form-head mb-4">
      <h2 class="text-black font-w600 mb-0"><b>Recipient Bank Details</b>
      </h2>
      </div>
    <form>
    <div className="card">
    <div className="card-body">
          <div className="col-md-12">
          <h5>Bank Information</h5>
              <div className="input_field">
                <p className="get-text">Bank Name<span style={{color: 'red'}} >*</span></p>
                  <input
                    // autoFocus="autofocus"
                  ref={input_recipientBankName}
                  type="text" 
                  className="rate_input form-control"
                  name="bankName"
                  defaultValue={formValue.bankName}
                  onChange={(e)=>handleStep2InputChange(e,'bankName')}
                  />
                  {error&&formValue.bankName.length<=0?
                          <span style={myStyle}>Please Enter the Bank Name* </span>:""}
              </div>
          </div>
        <div className="row each-row">
          <div className="col-md-12">
            <div className="input_field">
              <p className="get-text">Account Name<span style={{color: 'red'}} >*</span></p>
              <input 
              type="text"
              ref={input_recipientAccountName}
              defaultValue={formValue.accountName}
              onChange={(e)=>handleStep2InputChange(e,'accountName')}
                className='rate_input form-control'
                // autoFocus="autofocus"
                />
                  {error&&formValue.accountName.length<=0?
                    <span style={myStyle}>Please Enter the Account Name </span>:""}
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-12">
            <div className="input_field">
              <p className="get-text">Account number<span style={{color: 'red'}} >*</span></p>
              <input 
              type="text"
              name="accountNumber"
              ref={input_recipientAccountNumber}
              className='rate_input form-control'
              defaultValue={formValue.accountNumber}
              onChange={(e)=> handleStep2InputChange(e,'accountNumber')}
                />
                {error&&formValue.accountNumber.length<=0?
                    <span style={myStyle}>Please Enter the Account number </span>:""}
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
                ref={input_recipientFirstName}
                className='rate_input form-control'
                name="firstName"
              defaultValue={formValue.firstName}
              onChange={(e)=> handleStep2InputChange(e,'firstName')}
                />
                  {error&&formValue.firstName.length<=0?
                    <span style={myStyle}>Please Enter the First Name </span>:""}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Middle Name<span style={{color: 'red'}} >*</span></p>
              <input
                type="text"
                ref={input_recipientMiddleName}
                className='rate_input form-control' 
                name="middleName"
              defaultValue={formValue.middleName}
              onChange={(e)=> handleStep2InputChange(e,'middleName')}
                />
                  {error&&formValue.middleName.length<=0?
                    <span style={myStyle}>Please Enter the Middle Name </span>:""}
            </div>
          </div>
          <div className="col-md-4">
            <div className="input_field">
              <p className="get-text">Last Name<span style={{color: 'red'}} >*</span></p>
              <input 
              type="text" 
              ref={input_recipientLastName}
              className='rate_input form-control'
              name="lastName"
              defaultValue={formValue.lastName}
              onChange={(e)=> handleStep2InputChange(e,'lastName')}
                />
                {error&&formValue.lastName.length<=0?
                    <span style={myStyle}>Please Enter the Last Name </span>:""}
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Email<span style={{color: 'red'}} >*</span></p>
              <input
                type="email" 
                ref={input_recipientEmail}
                className='rate_input form-control'
                name="email"
              defaultValue={formValue.email}
              onChange={(e)=> handleStep2InputChange(e,'email')}
                />
                  {error&&formValue.email.length<=0?
                    <span style={myStyle}>Please Enter the Email </span>:""}
            </div>
          </div>
          <div className="col-md-6">
            <div className="input_field">
              <p className="get-text">Mobile<span style={{color: 'red'}} >*</span></p>
              <input 
              type="text" 
              ref={input_recipientMobile}
              className='rate_input form-control'
              name="mobile"
              defaultValue={formValue.mobile}
              onChange={(e)=> handleStep2InputChange(e,'mobile')}
                />
                {error&&formValue.mobile.length<=0?
                    <span style={myStyle}>Please Enter the Mobile </span>:""}
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-12">
            <div className="input_field">
              <p className="get-text">Address<span style={{color: 'red'}} >*</span></p>
              <input
                type="text" 
                ref={input_recipientAddress}
                className='rate_input form-control'
                name="address"
                defaultValue={formValue.address}
                onChange={(e)=> handleStep2InputChange(e,'address')}
                />
                  {error&&formValue.address.length<=0?
                    <span style={myStyle}>Please Enter the Address </span>:""}
            </div>
          </div>
        </div>
        <div className="row each-row">
          <div className="col-md-12">
            <div className="input_field">
              <p className="get-text">Reason For Sending Money<span style={{color: 'red'}} >*</span></p>
              <select
                className="form-select rate_input form-control"
                aria-label="Select a reason"
                ref={input_recipientReasoMoney}
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
              {error&&formValue.reasonMoney.length<=0?
                    <span style={myStyle}>Please Select the Reason For Sending Money </span>:""}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <button className="start-form-button" onClick={handlRecipientBankDetails}>Cancel</button>
          </div>
          <div className="col-md-8">
            {/* <button className="form-button" onClick={handleShow}>Continue</button> */}
            {/* <button className="form-button" onClick={someFunc}>Continue</button> */}
            <button className="form-button" onClick={handleRecipientBankDetails}>Continue</button>
            <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
          </div>
        </div>
     </div>
     </div>
      </form>




    </div>
   
      </>
  }
    </>
    );
    }
    
    
    const Step3 = () =>{
    
    return (
    <>
     {  
          verification_otp || token != undefined || '' ? (
            <>
    <section>
      
  <div className="form_body">
      <div className="header">
        <h1>Payment details</h1>
      </div>
      <div className="row each-row">
        <h5>Payment type</h5>
        <div className="col-md-12">


        <label class="container-new">
            <span className="radio-tick">Osko</span>
            <input 
              className="form-check-input" 
              type="radio"
              name="paymentType"
              // id="flexRadioDefault3" 
              checked={moneyTransiction.paymentType== "Oslo"}
              value="Oslo" 
              onChange={e => onInputChange(e)}
            />
            <span className="checkmark"></span>
          </label>

        </div>
        <div className="col-md-12">
        <label class="container-new">
            <span className="radio-tick">Debit/Credit Card</span>
            <input
             className="form-check-input" 
             type="radio"
             name="paymentType"
             // id="flexRadioDefault3" 
             checked={moneyTransiction.paymentType== "Debit/Credit Card"}
             value="Debit/Credit Card" 
             onChange={e => onInputChange(e)}
              />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="col-md-12">
        <label class="container-new">
            <span className="radio-tick">PoLI Internet Banking</span>
            <input
            className="form-check-input" 
            type="radio" 
            name="paymentType"
             // id="flexRadioDefault3" 
             checked={moneyTransiction.paymentType== " PoLI Internet Banking"}
             value=" PoLI Internet Banking" 
             onChange={e => onInputChange(e)}
            />
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <button className="start-form-button">Cancel</button>
        </div>
        <div className="col-md-8">
          <button className="form-button" onClick={ShowCardDetails}>Continue</button>
          <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
        </div>
      </div>
    </div>
  </section> 


<Modal className="modal-card" show={showCards} onHide={handleCloseDetails}>
<Modal.Header closeButton>
  <Modal.Title>Your cards</Modal.Title>
</Modal.Header>
<Modal.Body>
  
  <Table>
    <thead>
      <tr>
        <th>#</th>
        <th>Cards Details</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" /></td>
        <td>
          <Accordion>
      <Accordion.Item eventKey="0">
     <Accordion.Header><img src={creditcards}  alt="credit cards" /><span>Visa card</span> </Accordion.Header>
          <Accordion.Body>
           <ul>
  <li>
    <label>Name on Card</label>
    <p>John</p>
  </li>
  <li>
    <label>Card Number</label>
    <p>*********1345</p>
  </li>
  <li>
    <label>Expiry on</label>
    <p>12/5/2023</p>
  </li>
  <li>
    <label>CVV</label>
    <p><input type="password" /></p>
  </li>
</ul>
          <div className="card-delete"><Button className="btn btn-danger">Delete</Button></div>
          </Accordion.Body>
      </Accordion.Item> 
    </Accordion>
    </td>
      </tr>
      <tr>
        <td><input type="checkbox" /></td>
        <td>
          <Accordion>
      <Accordion.Item eventKey="0">
     <Accordion.Header><img src={creditcards}  alt="credit cards" /><span>Master card</span> </Accordion.Header>
          <Accordion.Body>
           <ul>
  <li>
    <label>Name on Card</label>
    <p>John</p>
  </li>
  <li>
    <label>Card Number</label>
    <p>*********1345</p>
  </li>
  <li>
    <label>Expiry on</label>
    <p>12/5/2023</p>
  </li>
  <li>
    <label>CVV</label>
    <p><input type="password" /></p>
  </li>
</ul>
          <div className="card-delete"><Button className="btn btn-danger">Delete</Button></div>
          </Accordion.Body>
      </Accordion.Item> 
    </Accordion>
    </td>
      </tr>
    </tbody>
  </Table>

 

  <div className="addnewcard">
    <p>Please add your card details</p>
  <form>
    <div className="row each-row">
                <div className="col-md-12">
                <div className="input_field">
                <img src={creditcards}  alt="credit cards" />
                          <p className="get-text">Card Number </p>
                          <input
                          type="text" 
                          className='rate_input form-control'
                          name="Card Number"
                          />
                        </div>
                        </div>
                        </div>

                        <div className="row each-row">
                        <div className="col-md-6">
                        <div className="input_field">
                          <p className="get-text">Expiration Date </p>
                          <input
                          type="text" 
                          className='rate_input form-control'
                          name="Expiration Date"
                          />
                        </div>
                        </div>

                        <div className="col-md-6">
                        <div className="input_field">
                          <p className="get-text">Security Code </p>
                          <input
                          type="text" 
                          className='rate_input form-control'
                          name="Security Code"
                          />
                        </div>
                        </div>
                        </div>
                        <div className="row each-row">
                   <div className="col-md-12">
                   <div className="input_field">
                          <p className="get-text">Your name as it appears on card </p>
                          <input
                          type="text" 
                          className='rate_input form-control'
                          name="Your name as it appears on card"
                          />
                        </div>
                        </div>
                        </div>

                        <div className="col-md-12">
                         <div className="saved-label"> <input type="checkbox"/><label>Save Card Details</label></div>
                          </div>
            </form>
            </div>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDetails}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseDetails}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                  </Modal>
  
    
   </>
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
 

     <section className="why-us section-bgba user_dashboard_banner">
       <div className="container">
         <div className="row">
           <div className="col-md-12">{
             <Form />}
           </div>
           {/* {shows &&
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

           } */}
         </div>
       </div>
     </section>
 



) 
}
    </>
    );
}



export default UserSendMoney;