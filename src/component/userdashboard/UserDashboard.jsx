import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import Table from 'react-bootstrap/Table';
import { ProgressBar } from 'react-bootstrap';

const UserDashboard = () => {

    // start changing value state

    const [name,setName] = React.useState();

    const handleVerificationSecond = (e) => {
        setName(e.target.value);
    }


   // start changing value state



    const {useState} = React;
    const [step,setStep] = useState(0);

    const [selected, setSelected] = useState('yes');

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };
    
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
    }else if(step==4){
    
        return (
        <Step5 /> );
        }
    }



    const Step1 = () =>{
    
    return (
    <>
   <section className="why-us section-bgba user_dashboard_banner">
    <div className="container">
        <div className="row">
        <div className="col-lg-8">
            <div class="progressBar">
            <div class="progress">
                <span class="progress-bar bg-success progress-bar-striped step1">{step_form}</span>
            </div>
            </div>
            <div className="form_body">
            <div className="header">
                <h1>Amount & delivery</h1>
            </div>
            <div className="row">
                <div className="col-md-6">
                <div className="input_field">
                    <p className="get-text">Country</p>
                    <CountryDropdown id="UNIQUE_ID" className='YOUR_CSS_CLASS rate_input form-control' preferredCountries={['gb', 'us' ]} value="" handleChange={e=> console.log(e.target.value)}></CountryDropdown>
                </div>
                </div>
                <div className="col-md-6">
                <div className="input_field">
                    <p className="get-text">Exchange Rate</p>
                    <input type="text" className='rate_input form-control' />
                </div>
                </div>
            </div>
            <div className="row each-row">
                <div className="col-md-6">
                <div className="input_field">
                    <p className="get-text">Amount</p>
                    <input 
                    type="text" 
                    className='rate_input form-control'
                    value={name} 
                    onChange={handleVerificationSecond}
                     />
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
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                    <label className="form-check-label" for="flexRadioDefault1"> Bank Transfer </label>
                    </div>
                </div>
                </div>
                <div className="col-md-12">
                <div className="input_field">
                    <div className="form-check method_type">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    <label className="form-check-label" for="flexRadioDefault2"> Mobile Wallet </label>
                    </div>
                </div>
                </div>
            </div>
            <div className="row each-row">
                <h5>Payout Partners</h5>
                <div className="col-md-12">
                <div className="form-check method_type">
                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault3" defaultChecked />
                    <label className="form-check-label" for="flexRadioDefault3"> Bank </label>
                </div>
                </div>
                <div className="col-md-12">
                <div className="form-check method_type">
                    <input className="form-check-input" type="radio" name="flexRadioDefault1" id="flexRadioDefault4" />
                    <label className="form-check-label" for="flexRadioDefault4"> Services </label>
                </div>
                </div>
            </div>
            <div class="row">
                <div className="col-md-4">
                <button className="start-form-button">Start Over</button>
                </div>
                <div className="col-md-8">
                <button className="form-button" onClick={()=>{setStep(step+1)}}>Next</button>
                </div>
            </div>
            </div>
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
                    <td>Mobile Wallet</td>
                </tr>
                <tr>
                    <th>Payout Partners</th>
                    <td> 
      {name&&<> {name}</>}</td>
                </tr>
                </tbody>
            </Table>
            </div>
        </div>
        </div>
    </div>
</section>
    </>
    );
    }
    
    
    const Step2 = () =>{
    
    return (
    <>
     <section className="why-us section-bgba user_dashboard_banner">
     <div className="container">
       <div className="row">
         <div className="col-lg-8">
           <div class="progressBar">
             <div class="progress">
               <span class="progress-bar bg-success progress-bar-striped step2">{step_form}</span>
             </div>
           </div>
           <div className="form_body">
             <div className="header">
               <h1>Contact Info</h1>
             </div>
             <div className="form_data">
               <div className="input_field">
                 <input type="text" required />
                 <span>Country</span>
               </div>
               <div className="input_field">
                 <input type="text" required />
                 <span>State</span>
               </div>
               <div className="input_field">
                 <input type="text" required />
                 <span>Address Line 1</span>
               </div>
               <div className="input_field">
                 <input type="text" required />
                 <span>Address Line 2</span>
               </div>
             </div>
             <div className="col-md-12">
               <button className="form-button" onClick={()=>{setStep(step+1)}}>Next</button>
               <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <img src="assets/img/home/bank.svg" className="user_rate_img" alt="background-images" />
         </div>
       </div>
     </div>
   </section>
    </>
    );
    }
    
    
    const Step3 = () =>{
    
    return (
    <>

<section className="why-us section-bgba user_dashboard_banner">
  <div className="container">
    <div className="row">
      <div className="col-md-8">
        <div class="progressBar">
          <div class="progress">
            <span class="progress-bar bg-success progress-bar-striped step3">{step_form}</span>
          </div>
        </div>
        <div className="form_body">
          <div className="header">
            <h1>Social Info</h1>
          </div>
          <div className="form_data">
            <div className="input_field">
              <input type="text" required />
              <span>Facebook</span>
            </div>
            <div className="input_field">
              <input type="text" required />
              <span>Instgram</span>
            </div>
            <div className="input_field">
              <input type="text" required />
              <span>Linkedin</span>
            </div>
            <div className="input_field">
              <input type="text" required />
              <span>Twitter</span>
            </div>
          </div>
          <div className="col-md-12">
            <button className="form-button" onClick={()=>{setStep(step+1)}}>Next</button>
            <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <img src="assets/img/home/bank.svg" className="user_rate_img" alt="background-images" />
      </div>
    </div>
  </div>
</section>
    </>
    );
    }
    
    
    const Step4 = () =>{
    
    return (
    <>
    <section className="why-us section-bgba user_dashboard_banner">
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <div class="progressBar">
            <div class="progress">
              <span class="progress-bar bg-success progress-bar-striped step4">{step_form}</span>
            </div>
          </div>
          <div className="form_body">
            <div className="final_content">
              <span className="check">
                <i className="fa fa-check"></i>
              </span>
              <p>Your Information has been submitted! We will contact you soon!</p>
            </div>
            <div className="col-md-12">
              <button className="form-button" onClick={()=>{setStep(step+1)}}>Next</button>
              <button className="form-button" onClick={()=>{setStep(step-1)}}>Previous</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <img src="assets/img/home/bank.svg" className="user_rate_img" alt="background-images" />
        </div>
      </div>
    </div>
  </section>
    </>
    );
    }
    
    const Step5= () =>{
    
        return (
        <>
        <section className="why-us section-bgba user_dashboard_banner">
     <div className="container">
       <div className="row">
         <div className="col-md-8">
           <div class="progressBar">
             <div class="progress">
               <span class="progress-bar bg-success progress-bar-striped step4">{step_form}</span>
             </div>
           </div>
           <div className="form_body">
             <div className="final_content">
               <span className="check">
                 <i className="fa fa-check"></i>
               </span>
               <p>Your Information has been submitted! We will contact you soon!</p>
             </div>
             <div className="col-md-12">
               <button className="form-button" onClick={()=>{setStep(step+1)}}>Next</button>
               <button className="form-button" onClick={()=>{setStep(step-1)}}>Cancel</button>
             </div>
           </div>
         </div>
         <div className="col-md-4">
           <img src="assets/img/home/bank.svg" className="user_rate_img" alt="background-images" />
         </div>
       </div>
     </div>
   </section>
        </>
        );
        }
    
    
    return (
    
    <>
        <div class="form">
            <div className="card">
                <div>{
                    <Form />}</div>
    
            </div>
        </div>
    </>
    );
}



export default UserDashboard;