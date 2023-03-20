import { faL, faSlash, faUnsorted } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useContext, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate} from 'react-router-dom';

import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddNewRecipient from "./AddNewRecipient";
import InprogressTransfer from "./InprogressTransfer";
import AllTransfer from "./AllTransfer";
const Transaction = () => {

  
    return(
        <>
        <div className="transaction-progress">
        <div className="header">
        <h1>Transaction Listing</h1>
      </div>


      <Tabs
      defaultActiveKey="InProgress"
      id="uncontrolled-tab-example"
      className="mb-3 tarnsfer-tabs"
    >
      <Tab eventKey="InProgress" title="InProgress">
       <InprogressTransfer/>
      </Tab>



      <Tab eventKey="AllTransaction" title="All Transaction">
      <AllTransfer/>
      </Tab>
    </Tabs>




           

          </div>
        </>
    )
}



export default Transaction;