import React from "react";
import {links, NavLink} from 'react-router-dom';

const Header =() => {
    return(
        <>

          {/* <!-- ======= Header ======= --> */}
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
              <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                  <h1 className="text-light">
                    <img src="assets/img/home/logo.png" alt="logo"  />
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
                    <li>
                      <NavLink to="/signup">Signup</NavLink>
                    </li>

                    <li><a href="team.html">Login</a></li>

                    <li><a href="blog.html">Blog</a></li>
                  
                    <li><a href="contact.html">Contact Us</a></li>
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