import React, {useEffect, useState} from "react";
import {links, NavLink, useNavigate} from 'react-router-dom';


import UserContext from '../context/UserContext';
import {API} from "../../config/API";
import axios from 'axios';
import { toast } from 'react-toastify';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faUserCheck} from '@fortawesome/free-solid-svg-icons';

// <!-- Vendor CSS Files -->
import '../../assets/vendor/animatecss/animate.min.css';
import '../../assets/vendor/aos/aos.css';
import '../../assets/vendor/bootstrap/css/bootstrap.min.css';
import '../../assets/vendor/bootstrap-icons/bootstrap-icons.css';
import '../../assets/vendor/boxicons/css/boxicons.min.css';
import '../../assets/vendor/glightbox/css/glightbox.min.css';
import '../../assets/vendor/swiper/swiper-bundle.min.css';
import logo from '../../assets/img/home/logo.svg';
// Main CSS File
import '../../assets/css/style.css';

const Header =() => {


  const [ setSessionId ] = useState('');

  const token = localStorage.getItem("token");
  console.log("TOKEN", token);

  const token_forgot = localStorage.getItem("token_forgot");
    console.log("TOken_Forgot_password", token_forgot);
 
  let sessionID;
  const navigate = useNavigate();

  const notify = () => toast.success("User Logged Out!");
  const memberLog = () => toast.warn("Please Login to Continue");

  const handleLogout = (event) => {
      event.preventDefault();
      localStorage.clear();
      navigate('/login')
      window.location.reload(false);
      window.location.reload();
      notify();
      
  }

    return(
        <>

          {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
              <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                  <h1 className="text-light">
                  <NavLink to="/">
                    <img src={logo} alt="logo"  />
                    </NavLink>
                  </h1>
                </div>

                <nav id="navbar" className="navbar">
                  <ul>
                    <li>
                      <NavLink className="active " to="/">Home</NavLink>
                    </li>
                    <li>
                      <NavLink to="/aboutus"> About us</NavLink>
                      </li>
                    <li>
                      <NavLink to="/help">Help</NavLink>
                    </li>
                    <li>
                      <NavLink to="/referral">Referral</NavLink>
                    </li>

                    {/* <li> */}
                    {
                      token != undefined || '' ? (

                        <li class="dropdown">
                          <a href="#">
                            <span>
                              <FontAwesomeIcon icon={faUserCheck} style={{ color: 'rgb(20, 34, 224);' }} />
                              </span> 
                          </a>
                        <ul>
                        <li> <NavLink to="/user_recipients">Recipients</NavLink></li>
                          <li> <NavLink to="/profile">Profile</NavLink></li>
                          <li><NavLink onClick={handleLogout}>Logout</NavLink></li>
                        </ul>
                      </li>
                      
                      ) : (
                        <>
                        <li>
                        <NavLink to="/signup">Signup</NavLink>
                        </li>
                        <li>
                        <NavLink to="/login">Login</NavLink>
                        </li>
                        </>
                      )
                    }
                    {/* </li> */}

{/*               
                      {
                        token != undefined || '' ? (
                          <NavLink to="/profile">Profile</NavLink>
                         
                        ) : (
                          <li>  
                        
                          <NavLink to="/signup">Signup</NavLink>
                          </li>

                        )
                      }
 
                  

                    <li>
                      {
                        token != undefined || ''? (
                          <NavLink onClick={handleLogout}>Logout</NavLink>
                        ) : (
                          <NavLink to="/login">Login</NavLink>

                        )
                      }
 
                    </li>  */}




                     
                     {/* <li class="dropdown">
                      <a href="#"><span>
                        {
                          token != undefined || ''? (
                            <FontAwesomeIcon icon={faUserCheck} style={{ color: 'rgb(20, 34, 224);' }} />
                          ) : (

                            
                            <FontAwesomeIcon icon={faUser} style={{ color: 'rgb(20, 34, 224);' }} />
                          )
                        }
                      
                        </span> 
                        
                        </a>
                        <ul>
                        <li>
                      {
                        token != undefined || ''? (
                          <NavLink to="/profile">Profile</NavLink>
                        ) : (
              
                          <NavLink to="/signup">Signup</NavLink>

                        )
                      }
 
                    </li>

                    <li>
                      {
                        token != undefined || ''? (
                          <NavLink onClick={handleLogout}>Logout</NavLink>
                        ) : (
                          <NavLink to="/login">Login</NavLink>

                        )
                      }
 
                    </li>
                        </ul>
                      </li>   */}


                  </ul>
                  <i className="bi bi-list mobile-nav-toggle"></i>
                </nav> 
                {/* <!-- .navbar --> */}

              </div>
            </header>
            {/* <!-- End Header --> */}

        </>
    )
}


export default Header;