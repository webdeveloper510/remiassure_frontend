import React, { Component } from "react";


const Footer = () => {

// Navigator Footer Content Start 
    function NavigationFooterArrayObjects() {
        const navigationData = [
        {
            id: 1,
            content: "Home",
        },
        {
            id: 2,
            content: "About Us",
        },
        {
            id: 3,
            content: "What We Do",
        },
        {
            id: 4,
            content: "To The Power of 10",
        },
        {
            id: 5,
            content: "Donate",
        },

        ];

        const NavigationItems = navigationData.map((value) => {
            return(
                <li>
                 <a href="#">{value.content}</a>
                </li>
            )
        })

        return(
            <div>
                {NavigationItems}
            </div>
        )
    }
// Navigator Footer Content End 

//What We Do Footer content Start
function WeDoArrayObjects(){
    const data = [
        {
          id:'1',
          title: "Encouraging Testing",
        },
        {
          id:'2',
          title: "Strengthening Advocacy",
        },
        {
          id:'3',
          title: "Sharing Information",
        },
        {
          id:'4',
          title: "Building Leadership",
        },
        {
          id:'5',
          title: "Engaging With Global Fund",
        },
         {
          id:'6',
          title: "Shining a Light",
        },
    ];

    const wedoItems = data.map((element)=>{
        return(
             <li>
                 <a href="#">{element.title}</a>
             </li>
        )
    })
    return(
        <div>
            {wedoItems}
        </div>
    )
}
//What We Do Footer content End

//Legal Footer content Start
function LegalArrayObjects(){
    const legalData = [
        {
            id:1,
            content: "General Info",
        },
         {
            id:2,
            content: "Privacy Policy",
        },
        {
            id:3,
            content: "Terms of Service",
        },
    ];

    const lagalItems = legalData.map((legal)=>{
        return(
            <li>
            <a href="#">{legal.content}</a>
        </li>
            
        )
    })
    return(
        <div>
            {lagalItems}
        </div>
    )
}
//Legal Footer content End

    return(
        <>
         {/* <!-- ======= Footer ======= --> */}
        <footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
            <div className="footer-top">
            <div className="container">
                <div className="row">

                <div className="col-lg-1 col-md-6 footer-links">
                   <img src="assets/img/home/footer_icon.png"  alt="imge_footer_icons" className="footer_icon" />
                </div>


                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Navigation</h4>
                    <ul>
                     <NavigationFooterArrayObjects />
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>What We Do</h4>
                    <ul>
                      < WeDoArrayObjects/>
                    </ul>
                </div>

                <div className="col-lg-3 col-md-6 footer-links">
                    <h4>Legal</h4>
                     <ul>
                       < LegalArrayObjects />
                     </ul>

                </div>

                <div className="col-lg-3 col-md-6 footer-info">
                    <h3>Contact Us</h3>
                        <img src="assets/img/footer/email.png" alt="emai_icons" className="email_icons" />                  
                        <p> support@ercom.com </p>

                        <img src="assets/img/footer/phone.png" alt="phone_icons" className="phone_icons" />                  
                        <p> +66 2399 1145</p>
                    <div className="social-links mt-3">
                    <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                    <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                    <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                    <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>

                </div>
            </div>
            </div>

            <div className="container">
            <div className="row">
                <div className="col-lg-2">
                    <div className="Smartitude_content">
                    Smartitude
                    </div>
                </div>

                <div className="col-lg-10">
                   
                    <div className="copyright">
                        &copy; Copyright <strong><span>Remit-Assure</span></strong>. All Rights Reserved
                    </div>
                </div>
            </div>
           

            <div className="credits">
            
            </div>
            </div>
        </footer>
        {/* <!-- ======= End-footer ======= --> */}
        </>
    )
}


export default Footer;