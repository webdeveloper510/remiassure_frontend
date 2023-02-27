import React, { useState, useContext , useEffect} from "react";
import Table from 'react-bootstrap/Table';
import {Links, NavLink, useNavigate} from 'react-router-dom';


import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";

const Recipients =() =>{

    const [data, setData] = useState([]);
    // alert(data);

    const navigate = useNavigate();

    const notify = () => toast.success("User Data Get Successfully!");


    const token = localStorage.getItem("token");
    console.log("TOKEN", token);


    useEffect(() => {
        axios.post(API.BASE_URL + 'recipient-list/',{}, {
            headers: {
                "Authorization" : `Bearer ${token}`,
            }
          })
          .then(function(response) {
              console.log("Recipients APIIIII", response.data);
              setData(response.data);
              if (response.status)
              notify();
          })
          .catch(function(error) {
              console.log(error);
              console.log(error.response)
              if(error.response.status){
                  toast.error(error.response.data.detail);
              } 
          })
    }, [])

    console.log(data," nnkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")


    return(
        <>
       {/* <!-- ======= Recept RemitAssure-Section start ======= --> */}
    <section className="user_recipients_section">
        <div class="container">
            <div className="row">
                <div className="col-lg-12">
                <Table striped bordered hover className="table_user_recipients">
                    <thead>
                        <tr>
                            <th>id#</th>
                            <th>User</th>
                            <th>Name</th>
                            <th>Destination</th>
                            <th>Detail-link</th>
                            <th>transfer_now_link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        data.data?.map((res, index) => {
                            //console.log(items, "itemnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
                            return(
                             
                                <tr key={res.id}>
                                    <td>{res.id}</td>
                                    <td>{res.user}</td>
                                    <td>{res.name}</td>
                                    <td>{res.destination}</td>
                                    <td>{res.detail_link}</td>
                                    <td>{res.transfer_now_link}</td>
                                
                              </tr>
                                    
                            )    
                        })}
                      
                    </tbody>
                    </Table> 
               </div>
            </div>
        </div>
   </section>
  
  {/* <!-- ======= Recept RemitAssure-Section End ======= --> */}

        </>
    )
}



export default Recipients;