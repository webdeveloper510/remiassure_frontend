import React, { useState, useContext } from "react";
import Table from 'react-bootstrap/Table';
import {Links, NavLink, useNavigate} from 'react-router-dom';

const Recipients =() =>{
    return(
        <>
    {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
       {/* <!-- ======= Home Why RemitAssure-Section start ======= --> */}
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
  
  {/* <!-- ======= Home Why RemitAssure-Section End ======= --> */}

{/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}
        </>
    )
}



export default Recipients;