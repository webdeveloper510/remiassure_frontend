import React, { useState, useContext, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import MultiStepProgressBar from "../userRecipients/MultiStepProgressBar";
import nodata from '../../assets/img/userdashboard/nodata.avif';
const AllTranfer = () => {

    return(
        <>
<div className="tabs-recipent-new">
  <Table bordered className="table_user_recipients">
    <thead>
      <tr>
        <th>Date</th>
        <th>Amount</th>
        <th>Recipient</th>
         <th>Status</th>
      </tr>
    </thead>
    <tbody>
       <tr>
        <td>12-02-2023</td>
        <td>200 AUD</td>
        <td>neha</td>
        <td>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Completed</Accordion.Header>
              <Accordion.Body>
                <MultiStepProgressBar />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </td>
      </tr>
      <tr>
      <td>12-02-2023</td>
        <td>200 AUD</td>
        <td>neha</td>
        <td>
          <Accordion>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Completed</Accordion.Header>
              <Accordion.Body>
                <MultiStepProgressBar />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </td>
      </tr>
      <tr>
      <td>12-02-2023</td>
        <td>200 AUD</td>
        <td>neha</td>
        <td>
          <Accordion>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Completed</Accordion.Header>
              <Accordion.Body>
                <MultiStepProgressBar />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </td>
      </tr>
    </tbody>
  </Table>

  <div className="no-data">
<img src={nodata} alt="no-data"/>

<div className="col-md-12">
      <p><b>No transfers yet</b><br></br>Once you send money, we'll show you a detailed list of your transfers here.</p>  
      </div>  
      <div className="col-md-12">
      <a href="#" className="send_money">Send Money</a>
      </div> 
  </div>
</div>

</>
)
}



export default AllTranfer;