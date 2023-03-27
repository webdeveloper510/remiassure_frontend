import React, { useState, useContext , useEffect} from "react";
import Table from 'react-bootstrap/Table';
import {Links, NavLink, useNavigate} from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";
import norecipients from '../../assets/img/userdashboard/hidden.avif';
import { BsFillPersonPlusFill } from "react-icons/bs";
const UserRecipients =() =>{

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };

// Start page show hide condtion page 
const token = localStorage.getItem("token");
console.log("TOKEN", token);

const verification_otp = localStorage.getItem("verification_otp");
console.log("Verification Message", verification_otp)

// Start page show hide condtion page


const [data, setData] = useState([]);
const [loading, setLoading] = useState(false);

const navigate = useNavigate();

// const notify = () => toast.success("User Data Get Successfully!");


// const token = localStorage.getItem("token");
// console.log("TOKEN", token);

    /**************************************************************************
   * ************** Start  Recipient List ************************************
   * ***********************************************************************/

useEffect(() => {
    setLoading(true); // Set loading before sending API request
    axios.post(API.BASE_URL + 'payment/recipient-list/',{}, {
        headers: {
            "Authorization" : `Bearer ${token}`,
        }
      })
      .then(function(response) {
          console.log("Recipients APIIIII", response.data);
          setData(response.data);
          setLoading(false); // Stop loading
     
     
        //   if (response.status)
        // // notify();
      })
      .catch(function(error) {
          console.log(error);
          console.log(error.response);
          setLoading(false); // Stop loading in case of error
          if(error.response.status){
              toast.error(error.response.data.detail);
          } 
      })
}, [])

console.log(data," nnkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")

  /**************************************************************************
   * ************** Start  Recipient List Delete ****************************
   * ***********************************************************************/

let id;
{/* start- delete function */}
const handleRemoveRecipientBankDetails =(event) =>{
    event.preventDefault();
    // if (window.confirm('Do you wnat to remove?')) {
    setLoading(true); // Set loading before sending API request
    axios.delete(API.BASE_URL + 'payment/recipient-update/:id', {}, {
        headers: {
          "Authorization" : `Bearer ${token}`,
        },
      
    })
    .then(function(response) {
        console.log(response);
        alert('Remove Successfully.')
        setLoading(false); // Stop loading 
        navigate('/');   
       

    })
    .catch(function(error, message) {
        console.log(error.response);
        setLoading(false); // Stop loading in case of error
       
         
    })
}
// }

    return(
        <>
       {/* <!-- ======= Recept RemitAssure-Section start ======= --> */}
       {/* {  
          verification_otp || token != undefined || '' ? (
            <section className="user_recipients_section">
                <div class="container">
                    <div className="row">
                        <div className="col-lg-12">
                            
                        </div>
                        </div>
                        </div>
                </section>    
            
            ) : (
                <>
                
                </>
            )
            } */}


    {  
        verification_otp || token != undefined || '' ? (

        <div class="container">
            <div className="row">
            <section className="user_recipients_section">
            <div class="form-head mb-4">
            <h2 class="text-black font-w600 mb-0"><b>Recipients Lists</b>
            </h2>
            </div>
                <div className="col-lg-12">
                    {/* loader start */}

                {loading ? <>
                    <div class="loader-overly"> 
                       <div class="loader" > 
                                                
                    </div>
                                                
                  </div>
                </> : <></>}
             {/* loader End */}
             {/* <h1 className="recipients_lists">Recipients Lists</h1> */}
             <div className="card">
            <div className="card-body">
                <Table  className="table table-responsive-md card-table previous-transaction">
                 <thead>
                        <tr>
                            <th>Sr.No </th>
                            {/* <th>User</th> */}
                            <th>Name</th>
                            <th>Destination</th>
                            <th>Detail Link</th>
                            <th>Transfer Now Link</th>
                            <th>Transfer Progress</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.data?.map((res, index) => {
                            //console.log(items, "itemnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
                            return(

                                <tr key={res.id}>
                                
                                    <td>{index +1}</td>
                                    {/* <td>{res.user}</td> */}
                                    <td>{res.name}</td>
                                    <td>{res.destination}</td>
                                    <td>{res.detail_link}</td>
                                    <td>{res.transfer_now_link}</td>
                                    <td> </td>
                                    <td>
                                     <span onClick={handleRemoveRecipientBankDetails}>Delete</span> 
                                    </td>
                              </tr>
                              
                                    
                            )    
                        })}
                      
                    </tbody>
                    </Table> 

                   
                    </div>
                    </div>
               </div>

               </section>

               <section>
               <div class="form-head mb-4">
            <h2 class="text-black font-w600 mb-0"><b>Add Recipient</b>
            </h2>
            </div>
               <div className="card">
            <div className="card-body">
               <div className="add-rec-new">
                        {/* <div class="header"><h1>Recipients</h1></div>
                            <br></br> */}
                        <img src={norecipients} alt="empty" />
                        </div>
                        </div></div>
                        </section>
            </div>
        </div>

    ) : (
        <>
        
        </>
    )
    }


  
  {/* <!-- ======= Recept RemitAssure-Section End ======= --> */}

        </>
    )
}



export default UserRecipients;