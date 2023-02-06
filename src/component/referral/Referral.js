import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


const Referral = () => {

    // copy button function start
    // function myFunction() {
    //     // Get the text field
    //     var copyText = document.getElementById("myInput");
      
    //     // Select the text field
    //     copyText.select();
    //     copyText.setSelectionRange(0, 99999); // For mobile devices
      
    //     // Copy the text inside the text field
    //     navigator.clipboard.writeText(copyText.value);
        
    //     // Alert the copied text
    //     alert("Copied the text: " + copyText.value);
    //   }

     // copy button function End


     // Social Function start
     function SocialArrayObjects(){
        const socialdata = [
            {
              id:1,
              links:"https://mail.google.com/",
              src: "assets/img/referral/email.png"
            },
            {
                id:2,
                links:"https://www.facebook.com/",
                src: "assets/img/referral/facebook.png"
              },
              {
                id:3,
                links:"https://www.instagram.com/",
                src: "assets/img/referral/instagram.png"
              },{
                id:4,
                links:"https://twitter.com/",
                src: "assets/img/referral/twitter.png"
              },

        ];

        const socialItems = socialdata.map((social) => {
            return(
                <ul className="">
                    <li>
                        <div className="social-image">
                           <a  href={social.links} >
                              <img src={social.src} alt="can't show image" />  
                            </a>  
                       </div>                        
                    </li>
                </ul>
            )
        });
        return(
            <div>
                {socialItems}
            </div>
        )
     }

    // Social Function End




    return(
        <>
         {/* <!-- ======= GBP for friends Remitassur -Section  start======= --> */}
         <section className="why-us section-bgba help_banner" data-aos="fade-up" date-aos-delay="200">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                      <div className="content_referral">
                        <h3 className="gbp_friends">25 GBP for you and 10 <br /> GBP for friends</h3>  
                        <p className="gbp_paragraph">Once they’ve sent 75 GBP or more, you’ll be emailed a 25 <br/> GBP WorldRemit voucher code.</p> 
                        </div>
                    
                    </div>

                    <div className="col-lg-6">
                        <div className="support_image">
                            <img src="assets/img/referral/img01.png" alt="support_images" />
                        </div>                       
                    </div>

                </div>
            </div>
        </section>

         {/* <!-- ======= GBP for friends Remitassur -Section  End======= --> */}


          {/* <!-- ======= How do I refer a friend? Remitassur -Section  start======= --> */}
          <section className="why-us section-bgba" data-aos="fade-up" date-aos-delay="200">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">
                        <div className="vl04">
                           <h1 className="vl-heading">How do I refer a friend?</h1>
                        </div>
                        <p className="refer_content">Lorem ipsum dolor sit amet, consectetur 
                        adipiscing elit, sed do eiusmod</p>              
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <p className="popup_signup">Sign up</p>
                        <div className="popup_content">
                        <p className="signup_content">1</p>
                        </div>
                        
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <p className="share_content">Share your unique referral code: </p>

                        <InputGroup className="mb-3">
                            <Form.Control                           
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            value="275878274565826758367"
                            id="myInput"
                            className="copy_input"
                            />

                            <Button variant="outline-secondary" id="button-addon2"
                             className="button_copy">
                             Copy
                            </Button>

                        </InputGroup>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-12">
                        <p className="share_content">Way to share</p>

                       <div className="social_icons">
                        < SocialArrayObjects />
                        </div>

                        <div className="view-button">
                            <button className="btn btn answer_button">Find out more</button>
                        </div>
                        <div className="terms_content">
                          <p>*T&Cs apply.<span className="terms_content"style={{ color: 'rgba(100, 20, 233, 1)' }}>See terms and conditions</span> for details*</p>
                        </div>
                    </div>
                </div>



            </div>
        </section>

 {/* <!-- ======= How do I refer a friend? Remitassur -Section  End======= --> */}





        </>

    )
}



export default Referral;