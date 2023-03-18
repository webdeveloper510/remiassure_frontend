import React, { useState, useContext, useEffect } from "react";
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import UserSendMoney from "./UserSendMoney";
import Profile from "../profile/Profile";
import AddNewRecipient from "./AddNewRecipient";
import Transfer from "./Transfer";
import { BsCurrencyExchange} from "react-icons/bs";
import { BsFilePersonFill } from "react-icons/bs";
import { BsCapslockFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";


const UserDashboard = () => {
 

    return(
        <>
          {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
          <div className="margin-set">
          <div className="container">
          <div className="row">
            <div class="tabs-page">
            {/* <div class="header"><h1>UserDashboard</h1></div> */}
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
        <Col sm={3}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="first"><BsCurrencyExchange />Send Money</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second"><BsFilePersonFill />Profile Information</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third"><BsCapslockFill />Transfer</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth"><BsFillPersonPlusFill />Recipients</Nav.Link>
            </Nav.Item>
         
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
             
            <div className="user-sendmoney"> <UserSendMoney /></div>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
            <div className="user-sendmoney"><Profile /></div> 
            </Tab.Pane>
            <Tab.Pane eventKey="third">
            <Transfer />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
           <div className="tabs-recipent"> <AddNewRecipient /></div>
            </Tab.Pane>
           
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
    </div>
    </div>
    </div>
        {/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}
          
        </>
    )
}



export default UserDashboard;