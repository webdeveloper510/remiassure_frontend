import React, { useState, useContext , useEffect} from "react";
import Table from 'react-bootstrap/Table';
import {Links, NavLink, useNavigate} from 'react-router-dom';


import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";

const Recipients =() =>{

    const [data, setData] = useState([]);
    alert(data);


    const navigate = useNavigate();

    const notify = () => toast.success("Profile Updated Successfully!");


    const token = localStorage.getItem("token");
    console.log("TOKEN", token);


    useEffect(() => {
        axios.post(API.BASE_URL + 'recipient-list/', {
            headers: {
                "Authorization" : `Bearer ${token}`,
            },
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






    return(
        <>
       {/* <!-- ======= Recept RemitAssure-Section start ======= --> */}
    <section className="user_recipients_section">
        <div class="container">
            <div class="row">
                <div className="col-lg-12">
                <Table striped bordered hover className="table_user_recipients">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((items) => {
                            console.log(items, "itemnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
                            return(
                             
                                <tr key={items.id}>
                                    <td>{items.id}</td>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td></td>
                              </tr>
                                    
                            )    
                        })}

                     



                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td></td>
                        </tr>
                      
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