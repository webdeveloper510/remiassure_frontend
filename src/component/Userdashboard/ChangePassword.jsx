import React, { useState, useContext, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";


const Profile = () => {
    
    const token = localStorage.getItem("token");
    console.log("TOKEN", token);

    const verification_otp = localStorage.getItem("verification_otp");
 
    return(
        <>

          {/* <!-- ======= help Remitassure Change password -Section  start======= --> */}

          {  
          verification_otp || token != undefined || '' ? (

            <section className="change-password">
            <div className="container">
              <div className="row">
                <div className="header">
                  <h1>Change Password</h1>
                </div>
                <div className="update-profile">
                  <form>
                    <div className="row each-row">
                      <h5>Change Password</h5>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Current Password</p>
                          <Form.Control type="password" className='rate_input form-control'/>
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">New Password</p>
                          <Form.Control type="password" className='rate_input form-control' />
                        </Form.Group>
                      </div>
                      <div className="col-md-4">
                        <Form.Group className="form_label" controlId="Firstname">
                        <p className="get-text">Confirm Password</p>
                          <Form.Control type="password" className='rate_input form-control'/>
                        </Form.Group>
                      </div>
                    </div>
                    <div class="row each-row">
                      <div className="col-md-6">
                        <button className="start-form-button">Cancel</button>
                      </div>
                      <div className="col-md-6">
                        <button className="profile-form-button">Save</button>
                        <button className="profile-form-button">Edit</button>
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