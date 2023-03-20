import { faL, faSlash, faUnsorted } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";


const Transaction = () => {

  
    return(
        <>
        <div className="transaction-progress">
        <div className="header">
        <h1>Transaction Listing</h1>
      </div>
           <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>

        <div className="card-text">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex">
                                                            
                                                            <div className="trsnsfer-process">
                                                                <h4 className="text-capitalize">Jhon Danals</h4>
                                                                <span>09.20PM - MAY 20 2022</span>
                                                                
                                                                <span className="fs-6 pt-1 fw-bold">Pending</span>
                                                            </div>
                                                        </div>

                                                        <div className="my-auto transac-text">
                                                            <span className="text-white fs-6 pb-2">TRX -
                                                                12123213</span>
                                                          
                                                            <span className="text-white fs-5 pb-2">100.00 USD</span>
                                                         
                                                            <span className="text-white">1400 AUD</span>
                                                        </div>
                                                    </div>
                                                </div>
        </Accordion.Header>
          <Accordion.Body>
          <div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Fees :</h4>
                                                                <h4>2 USD</h4>
                                                            </div>
                                                        </div>
														<div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Pay In Total :</h4>
                                                                <h4>112 AUD</h4>
                                                            </div>
                                                        </div>
                                                       
                                                     <div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Transaction Type :</h4>
                                                                <h4>Bank Deposit</h4>
                                                            </div>
                                                        </div>
          </Accordion.Body>
      </Accordion.Item> 
      <Accordion.Item eventKey="1">
        <Accordion.Header>

        <div className="card-text">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex">
                                                         
                                                        <div className="trsnsfer-process">
                                                                <h4 className="text-capitalize">Jhon Danals</h4>
                                                                <span>09.20PM - MAY 20 2022</span>
                                                              
                                                                <span className="fs-6 pt-1 fw-bold">Pending</span>
                                                            </div>
                                                        </div>

                                                        <div className="my-auto transac-text">
                                                            <span className="text-white fs-6  pb-2">TRX -
                                                                12123213</span>
                                                         
                                                            <span className="text-white fs-5 pb-2">100.00 USD</span>
                                                        
                                                            <span className="text-white">1400 AUD</span>
                                                        </div>
                                                    </div>
                                                </div>
        </Accordion.Header>
          <Accordion.Body>
          <div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Fees :</h4>
                                                                <h4>2 USD</h4>
                                                            </div>
                                                        </div>
														<div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Pay In Total :</h4>
                                                                <h4>112 AUD</h4>
                                                            </div>
                                                        </div>
                                                       
                                                     <div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Transaction Type :</h4>
                                                                <h4>Bank Deposit</h4>
                                                            </div>
                                                        </div>
          </Accordion.Body>
      </Accordion.Item> 
      <Accordion.Item eventKey="2">
        <Accordion.Header>

        <div className="card-text">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex">
                                                           
                                                        <div className="trsnsfer-process">
                                                                <h4 className="text-capitalize">Jhon Danals</h4>
                                                                <span>09.20PM - MAY 20 2022</span>
                                                              
                                                                <span className="fs-6 pt-1 fw-bold">Pending</span>
                                                            </div>
                                                        </div>

                                                        <div className="my-auto transac-text">
                                                            <span className="text-white fs-6  pb-2">TRX -
                                                                12123213</span>
                                                        
                                                            <span className="text-white fs-5 pb-2">100.00 USD</span>
                                                         
                                                            <span className="text-white">1400 AUD</span>
                                                        </div>
                                                    </div>
                                                </div>
        </Accordion.Header>
          <Accordion.Body>
          <div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Fees :</h4>
                                                                <h4>2 USD</h4>
                                                            </div>
                                                        </div>
														<div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Pay In Total :</h4>
                                                                <h4>112 AUD</h4>
                                                            </div>
                                                        </div>
                                                       
                                                     <div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Transaction Type :</h4>
                                                                <h4>Bank Deposit</h4>
                                                            </div>
                                                        </div>
          </Accordion.Body>
      </Accordion.Item> 
      <Accordion.Item eventKey="3">
        <Accordion.Header>

        <div className="card-text">
                                                    <div className="d-flex justify-content-between">
                                                        <div className="d-flex">
                                                           
                                                        <div className="trsnsfer-process">
                                                                <h4 className="text-capitalize">Jhon Danals</h4>
                                                                <span>09.20PM - MAY 20 2022</span>
                                                               
                                                                <span className="fs-6 pt-1 fw-bold">Pending</span>
                                                            </div>
                                                        </div>

                                                        <div className="my-auto transac-text">
                                                            <span className="text-white fs-6 pb-2">TRX -
                                                                12123213</span>
                                                         
                                                            <span className="text-white fs-5 pb-2">100.00 USD</span>
                                                        
                                                            <span className="text-white">1400 AUD</span>
                                                        </div>
                                                    </div>
                                                </div>
        </Accordion.Header>
          <Accordion.Body>
          <div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Fees :</h4>
                                                                <h4>2 USD</h4>
                                                            </div>
                                                        </div>
														<div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Pay In Total :</h4>
                                                                <h4>112 AUD</h4>
                                                            </div>
                                                        </div>
                                                       
                                                     <div className="col-md-12">
                                                            <div className="d-flex justify-content-between">
                                                                <h4>Transaction Type :</h4>
                                                                <h4>Bank Deposit</h4>
                                                            </div>
                                                        </div>
          </Accordion.Body>
      </Accordion.Item> 
    </Accordion>

          </div>
        </>
    )
}



export default Transaction;