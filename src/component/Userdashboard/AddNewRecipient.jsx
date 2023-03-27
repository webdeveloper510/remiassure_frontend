
import React, { useState, useContext, useEffect,useRef } from "react";
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

// start css
const myStyle ={
  color: "red",
}

const Addnewrecipient = () => {

    /************ Start -Recipient Bank Details state***************/
    const [error,setError]=useState(false);
    const [loading, setLoading] = React.useState(false);

    /************ Start -messageText state***************/
    const [BankNameText, setBankNameText] = useState('');
    const [AccountNameText, setAccountNameText] = useState('');
    const [AccountNumberText, setAccountNumberText] = useState('');

  

    const [emailRecipientText, setEmailRecipientText] = useState('');
    const [first_nameRecipientText, setFirst_nameRecipientText] = useState(''); 
    const [last_nameRecipientText, setLast_nameRecipientText] = useState('');
    const [middle_nameRecipientText, setMiddle_nameRecipientText] = useState('');
    const [mobileRecipientText, setMobileRecipientText] = useState('');

  
    
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
      
  
  
  
  
    /**********************Design function************ */
      const [isActive, setActive] = useState("false");
  
      const handleToggle = () => {
        setActive(!isActive);
      };
      
  
      /**************************************************************************
   * ************** Start  Recipient Bank Details ****************************
   * ***********************************************************************/
  
     /* start-- useRef is used for focusing on inputbox */
    const input_grant_type = useRef(null);
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

          //useRef is used for focusing on inputbox
      //     if(errorBankName.length==0){
	    //   		input_grant_type.current.focus();
	    //   		setError(true);
      //       console.log(error, "error")
	    //   	} 

      //  else{
      
        setLoading(true); // Set loading before sending API request
        axios.post(API.BASE_URL + 'payment/recipient-create/', {
          bank_name: formValue.bankName,
          account_name: formValue.accountName,
          account_number: formValue.accountNumber,
          first_name: formValue.firstName,
          middle_name: formValue.middleName,
          last_name: formValue.lastName,
          email: formValue.email,
          mobile:formValue.mobile,
          flat: formValue.firstName,
          building: formValue.firstName,
          sreet: formValue.firstName,
          postcode: formValue.firstName,
          city: formValue.firstName,  
          state: formValue.firstName,  
          country_code: formValue.firstName,
          country: formValue.firstName,
         
        }, {
            headers: {
              "Authorization" : `Bearer ${token}`,
            },
          
        })
        .then(function(response) {
            console.log(response);
            setLoading(false); // Stop loading 
            localStorage.setItem("RecipientUserName", response.data.recipint_data.first_name);
            navigate('/');   
           
  
        })
        .catch(function(error, message) {
            console.log(error.response);
            setLoading(false); // Stop loading in case of error
            setBankNameText(error.response.data); 
             
        })
    }
  // }
  

    return(
        <>
        {/* <Recipients /> */}

   
        <div className={isActive ? "add-recipent-section" : "remove-add-recipent-section"}>
         <UserRecipient />
        
          <div className="col-md-12 align-center">
            <button className="form-button addsingle_recepient" onClick={handleToggle}><BsFillPersonPlusFill /> Add New Recepients</button>
          </div>
        </div> 
        


    <section  className={isActive ? "removerecepient" : "showrecepient"} >   
    <div class="form-head mb-4">
   
            <h2 class="text-black font-w600 mb-0"><b>Recipient Bank Details</b>
            </h2>
            </div>
            <form className="single-recipient">
            <div className="card">
            <div className="card-body">
              <div className="row">
              <h5>Bank Information</h5>
                  <div className="col-md-4">
                      <div className="input_field">
                        <p className="get-text">Bank Name<span style={{color: 'red'}} >*</span></p>
                          <input
                          type="text" 
                          className="rate_input form-control"
                          name="bankName"
                          defaultValue={formValue.bankName}
                          onChange={(e)=>handleStep2InputChange(e,'bankName')}
                          />   
                          <span style={myStyle}>{BankNameText.Enterbankname? BankNameText.Enterbankname: ''}</span>

                      </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">Account Name<span style={{color: 'red'}} >*</span></p>
                      <input 
                      type="text"
                      // ref={input_recipientAccountName}
                      defaultValue={formValue.accountName}
                      onChange={(e)=>handleStep2InputChange(e,'accountName')}
                        className='rate_input form-control'
                        // autoFocus="autofocus"
                        />
                          {/* {error&&formValue.accountName.length<=0?
                            <span style={myStyle}>Please Enter the Account Name </span>:""} */}
                        <span style={myStyle}>{BankNameText.Enteraccountname? BankNameText.Enteraccountname: ''}</span>

                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">Account number<span style={{color: 'red'}} >*</span></p>
                      <input 
                      type="text"
                      name="accountNumber"
                      // ref={input_recipientAccountNumber}
                      className='rate_input form-control'
                      defaultValue={formValue.accountNumber}
                      onChange={(e)=> handleStep2InputChange(e,'accountNumber')}
                        />
                        {/* {error&&formValue.accountNumber.length<=0?
                            <span style={myStyle}>Please Enter the Account number </span>:""} */}
                            <span style={myStyle}>{BankNameText.Enteraccountnumber? BankNameText.Enteraccountnumber: ''}</span>
                            <span style={myStyle}>{BankNameText.Accountnumberexist? BankNameText.Accountnumberexist: ''}</span>
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
                        // ref={input_recipientFirstName}
                        className='rate_input form-control'
                        name="firstName"
                      defaultValue={formValue.firstName}
                      onChange={(e)=> handleStep2InputChange(e,'firstName')}
                        />
                          {/* {error&&formValue.firstName.length<=0?
                            <span style={myStyle}>Please Enter the First Name </span>:""} */}
                          <span style={myStyle}>{BankNameText.first_name? BankNameText.first_name: ''}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">Middle Name<span style={{color: 'red'}} >*</span></p>
                      <input
                        type="text"
                        // ref={input_recipientMiddleName}
                        className='rate_input form-control' 
                        name="middleName"
                      defaultValue={formValue.middleName}
                      onChange={(e)=> handleStep2InputChange(e,'middleName')}
                        />
                          <span style={myStyle}>{BankNameText.middle_name? BankNameText.middle_name: ''}</span>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input_field">
                      <p className="get-text">Last Name<span style={{color: 'red'}} >*</span></p>
                      <input 
                      type="text" 
                      // ref={input_recipientLastName}
                      className='rate_input form-control'
                      name="lastName"
                      defaultValue={formValue.lastName}
                      onChange={(e)=> handleStep2InputChange(e,'lastName')}
                        />
                        <span style={myStyle}>{BankNameText.last_name? BankNameText.last_name: ''}</span>
                    </div>
                  </div>
                </div>
                <div className="row each-row">
                  <div className="col-md-6">
                    <div className="input_field">
                      <p className="get-text">Email<span style={{color: 'red'}} >*</span></p>
                      <input
                        type="email" 
                        // ref={input_recipientEmail}
                        className='rate_input form-control'
                        name="email"
                      defaultValue={formValue.email}
                      onChange={(e)=> handleStep2InputChange(e,'email')}
                        />
                          <span style={myStyle}>{BankNameText.email? BankNameText.email: ''}</span>
                        
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input_field">
                      <p className="get-text">Mobile<span style={{color: 'red'}} >*</span></p>
                      <input 
                      type="text" 
                      // ref={input_recipientMobile}
                      className='rate_input form-control'
                      name="mobile"
                      defaultValue={formValue.mobile}
                      onChange={(e)=> handleStep2InputChange(e,'mobile')}
                        />
                        <span style={myStyle}>{BankNameText.mobile? BankNameText.mobile: ''}</span>
                        <span style={myStyle}>{BankNameText.Entervalidmobile? BankNameText.Entervalidmobile: ''}</span>
                        <span style={myStyle}>{BankNameText.Mobileexist? BankNameText.Mobileexist: ''}</span>
                        <span style={myStyle}>{BankNameText.Invalidmobile? BankNameText.Invalidmobile: ''}</span>
                    </div>
                  </div>
                </div>
                
                <div className="row each-row">
                    <h5>Address</h5>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Flat/Unit No.</p>
                          <Form.Control type="text" className='rate_input form-control'  />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                            <p className="get-text">Building/Unit No.</p>              
                            <Form.Control type="text" className='rate_input form-control'  />
                        </Form.Group>
                    </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Street</p>
                            <Form.Control type="text" className='rate_input form-control' />
                        </Form.Group>
                      </div>
                </div>
                <div className="row each-row">
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Postcode</p>
                          <Form.Control type="text" className='rate_input form-control' />
                        </Form.Group>
                    </div>
                    <div className="col-md-4">
                      <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">City/Town</p>
                      <Form.Control type="text" className='rate_input form-control' />
                      </Form.Group>
                    </div>
                    <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">State</p>
                          <Form.Control type="text" className='rate_input form-control' />
                          </Form.Group>
                      </div>
                </div>
                <div className="row each-row">
                    <div className="col-md-4">
                      <Form.Group className="form_label" controlId="Firstname">
                          <p className="get-text">Country Code</p>
                      <Form.Control type="text" className='rate_input form-control' />
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
                    <div className="input_field">
                      <p className="get-text">Reason For Sending Money</p>
                      <select
                        className="form-select rate_input form-control"
                        aria-label="Select a reason"
                        // ref={input_recipientReasoMoney}
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
                      {/* {error&&formValue.reasonMoney.length<=0?
                            <span style={myStyle}>Please Select the Reason For Sending Money </span>:""} */}
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
                    type="submit" 
                    className="form-button"
                    onClick={handleRecipientBankDetails}
                    >
                      Create Recipient 
                      
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
                </div>
            </form>



      </section>
        </>
    )
}



export default Addnewrecipient;