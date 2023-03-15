import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import LastStep from "./LastStep";
import MultiStepProgressBar from "./MultiStepProgressBar";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Row, Col } from "react-bootstrap";


const UserForm = () => {
  //For manageing state of multi steps Form
  const [page, setPage] = useState(0);

  const [userInput, setUserInput] = useState({
    fullName: "",
    displayname: "",
    workspaceName: "",
    workspaceUrl: "",
    checkboxValue: ""
  });


  //Total Amount get data
  const Total_amount = localStorage.getItem("Total_amount");
  console.log("Amonut", Total_amount);

  //Total Amount rate data 
  const Total_INR = localStorage.getItem("Total_INR");
  console.log("Amount rate", Total_INR);

  const [selected, setSelected] = React.useState("");

   //start Summury content change
  //  const [payment, setPayment] = React.useState('Bank Transfer');
  //  const [payment_partners, setPayment_partners] = React.useState('Bank');
   

// start Recive Radio button
const initialValue={  
  recivedMethod: "bankTransfer",
  payOutPartner: "bank",
  // amount:0
}
  const [moneyTransiction , setMoneyTransiction] =React.useState(initialValue);
  const {  
    recivedMethod,
    payOutPartner,
    // amount
    } = moneyTransiction;
      
    const onInputChange = e => {
      console.log(e.target.name)
      console.log(e.target.value)
      // console.log(defaultCountryData.length)
      setMoneyTransiction(item1=>({...item1,[e.target.name]: e.target.value }));
  }
// End Recive Radio button


 // Start Api call Amount & Delivery
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

  //proceed to next step
  const nextStep = () => {
    setPage((currPage) => currPage + 1);
  };

  const previousStep = () => {
    setPage((currPage) => currPage - 1);
  };

  const pageTitles = [
    "Welcome! First things first...",
    "Let's set up a home for all your work",
    "How are you planning to use Eden?"
  ];
  const pageSubTitiles = [
    "You can always change them later.",
    "You can always create another workspace later",
    "We'll streamline your setup expereince accordingly.",
    "You have completed onboarding, you can start using the Eden"
  ];

  const PageDisplay = () => {
    if (page === 0)
      return <FirstStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 1)
      return <SecondStep nextStep={nextStep} handleChange={handleChange} />;
    else if (page === 2)
      return <ThirdStep nextStep={nextStep} handleChange={handleChange} />;
    else return <LastStep nextStep={nextStep} handleChange={handleChange} />;
  };  

  //handle field changes
  const handleChange = (input) => (e) => {
    setUserInput({ ...userInput, [input]: e.target.value });
  };

  return (
    <section className="why-us section-bgba user_dashboard_banner">
      <div className="container">
      <div className="row">
    <div className="userForm">
      <div style={{ margin: "auto", width: "50%" }}>
        <MultiStepProgressBar step={page} />
      </div>

     
      <div className="row">
      <div className="col-md-8">
        <div className="userForm-container-body">{PageDisplay()}</div></div>
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
           </div>
        <div className="userForm-container-footer">

          <button
            onClick={() => {
              if (page === pageSubTitiles.length - 1) {
                console.log(userInput);
              } else {
                setPage((currPage) => currPage + 1);
              }
            }}
          
          >
            {page === pageSubTitiles.length - 1
              ? "Launch Eden"
              : "Create Workspace"}
          </button>
          
        </div>
      
    </div>
    </div>
    </div>
    </section>
  );
};
export default UserForm;
