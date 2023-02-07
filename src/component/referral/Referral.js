import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


// card carousel start
const Card = (props) => {
    return (
      <li className="card li_card ">
        <div className="row">      
          <div className="col-md-12">
            <div class="testimonial-text">
           <p className="material_heading_card">{props.paragraph}</p>
           <img src={props.crad_icons} alt="group_card" className="group_card_icon"/>
          </div>
          </div>
       </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 testimonial-client">
            <div class="testimonial-inner">
                <img src="assets/img/referral/girl.png" alt="boy_icons" className="testimonial-icons"/>
                <h3 className="kevin_content">Kevin Rich</h3>
                <p className="testimonial_icons_text">Lorem Ipsum is simply</p>
            </div>
          </div> 
        </div>      
      </li>
    )
  }


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
                <li>
                    <div className="social-image">
                    <a  href={social.links} >
                        <img src={social.src} alt="can't show image" />  
                    </a>  
                    </div>                        
              </li> 
            )
        });
        return(
            <div>
                {socialItems}
            </div>
        )
     }
    // Social Function End

    //    Why Function Start 
    function WhyIconsRenderingArrayOfObjects(){
        const whydata=[
            {
                id: "1",
                icon_src: "assets/img/referral/Vector01.png",
                icon_title:"We’re Secure",
                icon_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            },
            {
                id: "2",
                icon_src: "assets/img/referral/Vector02.png",
                icon_title:"We're Fast",
                icon_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            },
            {
                id: "3",
                icon_src: "assets/img/referral/Vector02.png",
                icon_title:"We’re Cost-effective",
                icon_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            }, 
            {
                id: "4",
                icon_src: "assets/img/referral/Vector03.png",
                icon_title:"We’re Innovative",
                icon_content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",

            },
        ];
        const ArrayIconsIttems = whydata.map((icon)=>{
            return(
                
                    <li>
                    <div className="circle-icons">
                        <img src={icon.icon_src} alt="circle-image" />
                        </div>
                        <div className="circle-content">
                        <p className="why_text">{icon.icon_title}</p>
                        <p className="why_texto1">{icon.icon_content}</p>
                    </div>

                    </li>
               
            )
        })
        return(
            <div>
                {ArrayIconsIttems}
            </div>
        )
    }
    //    Why Function Start 

    const items = [

        {
            crad_icons:"assets/img/referral/Group_star.png",
            paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        },{
            crad_icons:"assets/img/referral/Group_star.png",
            paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        },{
            crad_icons:"assets/img/referral/Group_star.png",
            paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        },{
            crad_icons:"assets/img/referral/Group_star.png",
            paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        },{
            crad_icons:"assets/img/referral/Group_star.png",
            paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        },{
            crad_icons:"assets/img/referral/Group_star.png",
            paragraph:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the'
        }
      ];
      const [moveClass, setMoveClass] = useState('');
      const [carouselItems, setCarouselItems] = useState(items);
      //console.log(items, "carouselItemscarouselItemscarouselItemscarouselItemscarouselItems")
      
      useEffect(() => {
        document.documentElement.style.setProperty('--num', carouselItems.length);
      }, [carouselItems])
      
      const handleAnimationEnd = () => {
        if(moveClass === 'prev'){
          shiftNext([...carouselItems]);
        }else if(moveClass === 'next'){
          shiftPrev([...carouselItems]);
        }
        setMoveClass('')
      }
      
      const shiftPrev = (paragraph) => {
        let lastcard = paragraph.pop();
        paragraph.splice(0, 0, lastcard);
        setCarouselItems(paragraph);
      }
      
      const shiftNext = (paragraph) => {
        let firstcard = paragraph.shift();
        paragraph.splice(paragraph.length, 0, firstcard);
        setCarouselItems(paragraph);
      }
    
      // End carousel End

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
                    <div className="col-lg-3">
                
                        {/* <p className="popup_signup">Sign up</p> */}
                     
                        <img src="assets/img/referral/dot_line.png"  className="background_dot_image01"/>
                        <img src="assets/img/referral/comment_box.png" alt="comment_box" className="comment_box01" />
                        <div className="popup_content">
                          <p className="signup_content">1</p>
                          
                        </div>  
                    </div>
                    <div className="col-lg-3">
                    <img src="assets/img/referral/dot_line.png"  className="background_dot_image02"/>
                        <div className="popup_content">
                          <p className="signup_content">2</p>
                          <img src="assets/img/referral/comment_box02.png" alt=""  comment_box02/>
                        </div>  
                    </div>
                    <div className="col-lg-3">
                    <img src="assets/img/referral/dot_line.png"  className="background_dot_image03"/>
                    <img src="assets/img/referral/comment_box.png" alt="" comment_box03/>
                        <div className="popup_content">
                          <p className="signup_content">3</p>
                        </div>  
                    </div>
                    <div className="col-lg-3">
                        <div className="popup_content">
                          <p className="signup_content">4</p>
                          <img src="assets/img/referral/comment_box02.png" alt=""  comment_box02/>
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
                       <ul className="social-media-icons">
                        < SocialArrayObjects />
                      </ul>
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

    {/* <!-- ======= Why RemitAssure Remitassur -Section  start======= --> */}
    <section className="why-us section-bgba why_banner" data-aos="fade-up" date-aos-delay="200">
            <div className="container">

                <div className="row">
                    <div className="col-lg-12">

                        <div className="vl05">
                           <h1 className="why-heading">Why RemitAssure ?</h1>
                        </div>
                        <p className="why_content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>              
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 col-lg-12">
                    <ul className="why-ramit-assure">
                     < WhyIconsRenderingArrayOfObjects />
                     </ul>
                    </div>                  
                </div>            
            </div>
        </section>
         {/* <!-- ======= Why RemitAssure Remitassur -Section  End======= --> */}


 {/* <!-- ======= Testimonial-Section  start======= --> */}
        <section className="why-us section-bgba" data-aos="fade-up" date-aos-delay="200">
            <div className="container">
        
            {/* main row  start*/}
             <div className="row">
                <div className="col-lg-10"> 
                    <div className="testimonial_vl">
                        <h1 className="chose-heading">Testimonial</h1>                
                    </div>
                </div>
                <div className="col-lg-2">
                    <div className="button_icons">
                        <button className="btn btn prev left_icon" onClick={() => setMoveClass('next')}>
                        <i className="bx bx-chevron-left prev_button"></i>
                        </button>

                        <button className="btn btn next right_icon" onClick={() => setMoveClass('prev')}>
                        <i className="bx bx-chevron-right "></i>
                        </button>

                    </div>
                </div>
             </div>

                <div className="row">
                    <div className="col-lg-3">
                        <p className="review_content">Reviews 66,081 · Great
                        <span className="line_drow"></span>
                        </p>
                    </div>
                    <div className="col-lg-9">
                        <img src="assets/img/referral/Group_star.png" alt="group_image" className="group_image" />
                        <p className="button_rating" >4.1</p>
                    </div>
                </div>
                {/* carousel start  */}
                <div className="row">
                    <div className="col-col-lg-12">
                    <div className="carouselwrapper module-wrapper">
              
                        {/* <div className="ui">
                            <button onClick={() => setMoveClass('next')} className="prev">
                            <span className="material-icons prev_button">chevron_left</span>
                            </button>
                            <button onClick={() => setMoveClass('prev')} className="next">
                            <span className="material-icons">chevron_right</span>
                            </button>
                        </div> */}
                        <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
                            {carouselItems.map((t, index) => 
                            <Card key={t.paragraph + index} crad_icons={t.crad_icons} paragraph={t.paragraph} />
                            
                            
                            )}
                        </ul>
                        </div>     
                       </div>
                    
                </div>
                    {/* carousel End  */}


            {/* main row  End*/}

            </div>
            </section>
    {/* <!-- ======= Home Testimonial-Section End ======= --> */}     


     {/* <!-- ======= Fast-security RemitAssure-Section start ======= --> */}
     <section className="why-us section-bg banner_secure" data-aos="fade-up" date-aos-delay="200">
       <div className="container">        
                    {/* -----======= first row End ====--- */} {/* -----======= second row start ====--- */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="imge01">
                                <img src="assets/img/home/img03.png" alt="background-images" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="vl securiy_vl">
                                <h1 class="vl-heading">A fast and secure way to</h1>
                                <h1 class="vl-heading01">send money on the go</h1>
                            </div>
                            <p class="fast_paragraph">Download our app for free to send money online in minutes to over 130 other countries. Track your payments and view your transfer history from anywhere.</p>
                            <div className="link">
                                <div className="left_link">
                                    <img src="assets/img/home/Group 01.png" alt="home_icons" className="home_icons" />
                                </div>
                                <div className="rihjt_link">
                                    <img src="assets/img/home/Group 02.png" alt="home_icons" className="home_icons" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* -----======= second row End ====--- */}
                </div>
          
        </section>
  {/* <!-- ======= Fast -security RemitAssure-Section End ======= --> */}





        </>

    )
}



export default Referral;