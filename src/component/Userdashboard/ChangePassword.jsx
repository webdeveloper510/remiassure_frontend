import React, { useState, useContext, useEffect,useRef } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";

{/* start -- css*/}
const myStyle= {
  color: "red",
}
{/* End -- css*/}

const Profile = () => {
    
 /**************************token ************************ */
    const token = localStorage.getItem("token");
    console.log("TOKEN", token);

/**************************Feild of state ************************ */
    const [old_password, setOld_password] = useState('');
    const [new_password, setNew_password] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error,setError]=useState(false);

    /*********************Start Validation state Text************** */
    const [old_passwordText, setold_passwordText] = useState('');
    const [new_passwordText, setnew_passwordText] = useState('');
    const [EnterpasswordText, setEnterpasswordText] = useState('');
    
    // const {id} = useParams();
  
    const handlecurrentPassword =(e) =>{
      setOld_password(e.target.value);
    }
    const handlenewPassword = (e) =>{
      setNew_password(e.target.value);
    }
    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
    }
    

   /* start-- useRef is used for focusing on inputbox */
    const input_currentPassword = useRef(null);
    const input_newPassword = useRef(null);
    const input_confirmPassword = useRef(null);
  
   
    const handleEntailmentRequest =(e) => {
      e.preventDefault();
      window.location.reload(false);
  
      console.log("handle request ");
  }
  


    const notify = () =>toast.success("Check your email to Reset Password");
    const wrongData = () =>toast.warm("This E-mail is not our records, please try again");

    const navigate = useNavigate();
    


/**************************************************************************
 * ************** Start Change Password Api *********************************
 * ***********************************************************************/
    const handleChangePassword = (event) => {
        event.preventDefault();
      // useRef is used for focusing on inputbox
      //  if (currentPassword.length==0){
      //   input_currentPassword.current.focus();
      //       setError(true);
      //   } else if (newPassword.length==0){
      //     input_newPassword.current.focus();
      //       setError(true);
      //   } else if (confirmPassword.length==0){
      //     input_confirmPassword.current.focus();
      //       setError(true);
      //   } 
        // else{
        setLoading(true); // Set loading before sending API request
            axios.post(API.BASE_URL + `change-password/`, {
              old_password: old_password,
              new_password:  new_password,
                confirmPassword: confirmPassword,
            }, {
                headers: {
                  "Authorization" : `Bearer ${token}`,
                }}, {
            })
            .then(function(response) {
                console.log("Forget API" ,response);
                setLoading(false); // Stop loadingss
                navigate('/userdashboard')
                window.location.reload(false);
                // notify();
            })
            .catch(function(error) {
                console.log(error.response);
                setLoading(false); // Stop loading in case of error
                // if(error.response.status){
                //     toast.error(error.response.data.message || error.response.data.non_field_errors);
                // }
                setold_passwordText(error.response.data.old_password);
                setnew_passwordText(error.response.data.new_password);
              
                
             
            })
        }
      // }
 
    return(
        <>

          {/* <!-- ======= help Remitassure Change password -Section  start======= --> */}

          {  
           token != undefined || '' ? (

            <section className="change-password">
           
              <div class="form-head mb-4">
            <h2 class="text-black font-w600 mb-0"><b>Recipient Bank Details</b>
            </h2>
            </div>
            <div className="card">
            <div className="card-body">
                <div className="update-profile">
                 <form>
                    <div className="row each-row">
                      <h5>Change Password</h5>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Current Password<span style={{color: 'red'}} >*</span></p>
                          <Form.Control 
                          type="password" 
                          ref={input_currentPassword}
                          onChange={handlecurrentPassword}
                          className='rate_input form-control'
                          />
                         {/* {error&&currentPassword.length<=0?
				                          <span style={myStyle}>Please Enter the Current Password </span>:""}  */}
                          <span  style={myStyle}>{old_passwordText? old_passwordText: ""}</span> 
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                      <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">New Password<span style={{color: 'red'}} >*</span></p>
                          <Form.Control 
                          type="password" 
                          ref={input_currentPassword}
                          onChange={handlenewPassword}
                          className='rate_input form-control'
                          />
                         {/* {error&&currentPassword.length<=0?
				                          <span style={myStyle}>Please Enter the Current Password </span>:""}  */}
                          <span  style={myStyle}>{new_passwordText? new_passwordText: ""}</span> 
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Confirm Password<span style={{color: 'red'}} >*</span></p>
                          <Form.Control 
                          type="password" 
                          ref={input_confirmPassword}
                          onChange={handleConfirmPassword}
                          className='rate_input form-control'
                          />
                          {/* {error&&confirmPassword.length<=0?
				                      <span style={myStyle}>Please Enter the Confirm Password </span>:""}  */}
                        </Form.Group>
                      </div>
                    </div>
                    <div class="row each-row">
                      <div className="col-md-6">
                        <button
                        type="submit"
                         className="start-form-button"
                        onClick={handleEntailmentRequest}
                         >Cancel</button>
                      </div>
                      <div className="col-md-6">
                        <button
                         type="submit" 
                         onClick={handleChangePassword}
                         className="profile-form-button"
                         >
                          Password Change
                          {loading ? <>
                          <div class="loader-overly"> 
                            <div class="loader" > 
                                                      
                          </div>
                                                      
                        </div>
                      </> : <></>}
                          </button>
                        <button  type="submit"  className="profile-form-button">Edit</button>
                      </div>
                    </div>
                  </form>
                </div>
                </div>
                </div>
              
          </section>


         ) : (
            <>
            
            </>
        )
        }


        {/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}
          
        </>
    )
}



export default Profile;