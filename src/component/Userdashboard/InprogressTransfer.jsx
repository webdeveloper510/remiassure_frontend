import React, { useState, useContext, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import MultiStepProgressBar from "../userRecipients/MultiStepProgressBar";
import { MdOutlineRotateLeft } from "react-icons/md";
import { BsHourglassSplit } from "react-icons/bs";
import { BsXCircleFill } from "react-icons/bs";
import nodata from '../../assets/img/userdashboard/nodata.avif';

const InprogressTransfer = () => {

    return(
        <>
<div className="tabs-recipent-new">
  <Table bordered className="table_user_recipients">
    <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>neha</td>
        <td>200 AUD</td>
        <td className="inprogress-status"><span>Inprogress</span></td>
      </tr>
      <tr>
        <td>neha</td>
        <td>200 AUD</td>
        <td className="inprogress-status"><span>Inprogress</span></td>
      </tr>
      <tr>
        <td>neha</td>
        <td>200 AUD</td>
        <td className="inprogress-status"><span>Inprogress</span></td>
      </tr>
    </tbody>

  </Table>

  <div className="no-data">
<img src={nodata} alt="no-data"/>

<div className="col-md-12">
      <p><b>No transfers in progress</b></p>  
      </div>  
  </div>
</div>

</>
)
}



export default InprogressTransfer;