import React, { useState, useContext } from "react";
import Table from 'react-bootstrap/Table';
import {Links, NavLink, useNavigate} from 'react-router-dom';


import { toast } from "react-toastify";
import { API } from "../../config/API";
import axios from "axios";

const Recipients =() =>{

    const [First_name, setFirst_name] = useState('');
    const [Last_name, setLast_name] = useState('');
    const [mobile, setMobile] = useState('');

    const navigate = useNavigate();

    const notify = () => toast.success("Profile Updated Successfully!");
 
  
    const handleFirstName =(e) => {
        setFirst_name(e.target.value);
    }
    const handleLastName =(e) => {
        setLast_name(e.target.value);

    }
    const handeleMobile =(e) => {
        setMobile(e.target.value);
    } 


    const token = localStorage.getItem("token");
    console.log("TOKEN", token);



    const handleRecipientList = (event) => {
        event.preventDefault();
        axios.post(API.BASE_URL + 'recipient-list/', {
            First_name: First_name,
            Last_name: Last_name,
            mobile: mobile
        }, {
            headers: {
                "Authorization" : `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
          
        })
        .then(function(response) {
            console.log(response);

            if (response.status)
                notify();
                navigate('/');   
        })
        .catch(function(error, message) {
            console.log(error.response)
            if(error.response.status){
                toast.error(error.response.data.message);
            } 
            console.log(error, "klnklnklnknnnnnnnnnnnn");   
        })
    }

    return(
        <>
       {/* <!-- ======= Recept RemitAssure-Section start ======= --> */}
    <section className="user_recipients_section" data-aos="fade-up" date-aos-delay="200">
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td></td>
                        </tr>
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