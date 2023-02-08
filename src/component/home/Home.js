import React,{useEffect, useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown';


// start -----Why RemitAssure circle function
function WhyRenderingArrayOfObjects(){
  const dataItems = [
    {
      id:1,
      src: "assets/img/home/Vector01.png",
      circle_heading: "We're Safe",
      circle_content: "We use industry-leading technology to protect your money.",
    },
    {
      id:2,
      src: "assets/img/home/Vector02.png",
      circle_heading: "We're Safe",
      circle_content: "We use industry-leading technology to protect your money.",
    },
    {
      id:3,
      src: "assets/img/home/Vector03.png",
      circle_heading: "We're Low-Cost",
      circle_content: " conventional banks and money transfer services.",
    }
  ];

  const circlItems = dataItems.map((value) =>{
    return(
      <li className="">
        <div className="circle-image">
              <img src={value.src} alt="circle-image" />
            </div>
            <div className="circle-content">
            <p className="fast_text">{value.circle_heading}</p>
            <p className="fast_texto1">{value.circle_content}</p>
        </div>
     </li> 
    )
    
  }) 
  return(
    <div>
      {circlItems}
    </div>
  )
}
// End -----Why RemitAssure circle function

// Start--- home Bank Transfer funstion 
function BankTransferArrayOfObjects() {
  const  bankItems = [
    {
      id: 1,
      home_src: "assets/img/home/home.png",
      bank_title: "Bank Transfer",
      bank_contents: "Send a secure bank transfer<br /> Send a secure bank transfer <br />major banks worldwide.",  
    },
    {
      id: 2,
      home_src: "assets/img/home/home.png",
      bank_title: "Bank Transfer",
      bank_contents: "Send a secure bank transfer<br /> Send a secure bank transfer <br />major banks worldwide.",  
    },
    {
      id: 3,
      home_src: "assets/img/home/home.png",
      bank_title: "Bank Transfer",
      bank_contents: "Send a secure bank transfer <br /> Send a secure bank transfer <br />major banks worldwide.",  
    },
    {
      id: 4,
      home_src: "assets/img/home/home.png",
      bank_title: "Bank Transfer",
      bank_contents: "Send a secure bank transfer<br /> Send a secure bank transfer <br />major banks worldwide.",  
    },
  ];

  const Tranferdata = bankItems.map((bankdata)=>{
    return(

          <li>
            <div className="bank_contents">
                <img src={bankdata.home_src} alt="home_icons" className="bank_icons" />
                <h3 className="bank_transfer">{bankdata.bank_title}</h3>
                  <p className="bank_paragraph">{bankdata.bank_contents}</p>
            </div>
        </li>

    )
  })
  return(
    <div>
      {Tranferdata}
    </div>
  )
}
// End--- home Bank Transfer funstion 


// Start----- Flag home function 
function FlagHomeArrayofoObjects() {
  const flagData = [
    {
      id: 1,
      flag_src: "assets/img/home/Mask group.png",
      flag_title: "india",
      flag_arrow_scr: "assets/img/home/arrow01.png",  
    },
    {
      id: 2,
      flag_src: "assets/img/home/Mask group.png",
      flag_title: "india",
      flag_arrow_scr: "assets/img/home/arrow01.png",  
    },
    {
      id: 3,
      flag_src: "assets/img/home/Mask group.png",
      flag_title: "india",
      flag_arrow_scr: "assets/img/home/arrow01.png",  
    },
    {
      id: 4,
      flag_src: "assets/img/home/Mask group.png",
      flag_title: "india",
      flag_arrow_scr: "assets/img/home/arrow01.png",  
    },
    {
      id: 5,
      flag_src: "assets/img/home/Mask group.png",
      flag_title: "india",
      flag_arrow_scr: "assets/img/home/arrow01.png",  
    },
    {
      id: 6,
      flag_src: "assets/img/home/Mask group.png",
      flag_title: "india",
      flag_arrow_scr: "assets/img/home/arrow01.png",  
    },
  ];

  const flagdataItems = flagData.map((flagvalue)=>{
    return(

      <li>
      <div className="col-lg-6">
        <div className="card card-flag01">
          <div className="row">
            <div className="col-4">
                <div className="card-body">
                  <img src={flagvalue.flag_src} alt="flag_icons" className="flag_icons" />
                </div>
            </div>

            <div className="col-4">
              <p className="india-text">{flagvalue.flag_title}</p>
            </div>
            
            <div className="col-4">
              <img src={flagvalue.flag_arrow_scr} alt="arrow_icons" className="arrow_icons" />
            </div>
          </div>
          
        </div>
    </div>
    </li>

    )
  })
  return(
    <div>
      {flagdataItems}
    </div>
  )
}
// End----Flag home function 

// card carousel start
const Card = (props) => {
  console.log(props,"propspropspropsprops")
  return (
    <li className="card li_card ">
         <img src="assets/img/home/quote-up.png" alt="quote-up" className="quotup_icons" />
      <div className="row">
          <div className="col-lg-4">
              <img src="assets/img/home/boy.png" alt="boy_icons" className="boy_icons"/>
              <p className="boy_icons_text">Worldtraveler</p>
            </div>
            <div className="col-8">
              <span className="material-icons">{props.heading}</span>
              <p className="material-heading">{props.paragraph}</p>
              <img src="assets/img/help/star.png"/>
           </div>
      </div>
      <img src="assets/img/home/quote-down.png" alt="quote-up" className="quotdown_icons" />
    </li>
  )
}

const Home = () => {
  const items = [
    {
        heading:"Best on the market.",
        paragraph:'At ultrices mi tempus imperdiet nulla. Risus nullam eget felis eget nunc lobortis. Fusce id velit ut tortor pretium viverra suspendisse...'
    },{
        heading:"Best on the market.",
        paragraph:'B.At ultrices mi tempus imperdiet nulla. Risus nullam eget felis eget nunc lobortis. Fusce id velit ut tortor pretium viverra suspendisse...'
    },{
        heading:"Best on the market.",
        paragraph:'At ultrices mi tempus imperdiet nulla. Risus nullam eget felis eget nunc lobortis. Fusce id velit ut tortor pretium viverra suspendisse...'
    },{
        heading:"Best on the market.",
        paragraph:'At ultrices mi tempus imperdiet nulla. Risus nullam eget felis eget nunc lobortis. Fusce id velit ut tortor pretium viverra suspendisse...'
    },{
        heading:"Best on the market.",
        paragraph:'At ultrices mi tempus imperdiet nulla. Risus nullam eget felis eget nunc lobortis. Fusce id velit ut tortor pretium viverra suspendisse...'
    },{
        heading:"Best on the market.",
        paragraph:'At ultrices mi tempus imperdiet nulla. Risus nullam eget felis eget nunc lobortis. Fusce id velit ut tortor pretium viverra suspendisse...'
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

    {/* <!-- ======= Home Better-Way-Section  start======= --> */}
    <section className="why-us section-bgba banner_section" data-aos="fade-up" date-aos-delay="200">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="backgound-img">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vl">
                                <h1 className="vl-heading">A Better Way</h1>
                                <h1 className="vl-heading01">To Send Money</h1>
                            </div>

                            <div className="vl-content">
                                <p className="vl-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat cras fermentum <br />
                                    malesuada ultrices dictum. Eu id sit malesuada quam et tincidunt eu dolor convallis
                                </p>
                                <p className="vl-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat cras fermentum <br />
                                    malesuada ultrices dictum. Eu id sit malesuada quam et tincidunt eu dolor convallis
                                </p>
                                <p className="vl-paragraph">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat cras fermentum <br />
                                    malesuada ultrices dictum. Eu id sit malesuada quam et tincidunt eu dolor convallis
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* start-- card */}
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="card card-flag">
                                <div className="card-body">
                                    <h6 className="exchange-heading">EXCHANGE RATE</h6>
                                    <p className="calculation">1 AUD = 0.59476 USD</p>

                                    <div className="row">
                                        <div className="col-4">
                                            <p className="send-text">You Send</p>
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic" className="bg-text">
                                                        ADD
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                        </div>
                                        <div className="col-4">
                                            <p className="get-text">They get</p>
                                            <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic" className="bg-text">
                                                        ADD
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                        </div>
                                        <div className="col-4">
                                            <p className="recived-text">Receive method</p>
                                            <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic" className="bg-text">
                                                        ADD
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>

                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            <button className="btn btn continue-button">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* End-- card */}
                </div>
            </div>
        </div>
    </div>
</section>

    {/* <!-- ======= Home Better-Way-Section End-Section ======= --> */}

    {/* <!-- ======= Home Why RemitAssure-Section start ======= --> */}
    <section className="why-us section-bg second_sec" data-aos="fade-up" date-aos-delay="200">
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className="bg_sec">
                    {/* -----======= first row start ====--- */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="vl01">
                                <h1 className="vl-heading02">Why</h1>
                                <h1 className="vl-heading03">RemitAssure ?</h1>
                            </div>

                            <ul className="list-">
                                < WhyRenderingArrayOfObjects />
                            </ul>
                        </div>

                        <div className="col-lg-6">
                            <div className="background-images01">
                                <img src="assets/img/home/img02.png" alt="background-images" />
                            </div>
                        </div>
                    </div>
                    {/* -----======= first row End ====--- */} {/* -----======= second row start ====--- */}
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="imge01">
                                <img src="assets/img/home/img03.png" alt="background-images" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div class="vl same_vl">
                                <h1 class="vl-heading">A Better Way</h1>
                                <h1 class="vl-heading01">To Send Money</h1>
                            </div>
                            <p class="vl-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat cras fermentum malesuada ultrices dictum. Eu id sit malesuada quam et tincidunt eu dolor convallis</p>
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
            </div>
        </div>
    </div>
</section>

  {/* <!-- ======= Home Why RemitAssure-Section End ======= --> */}

 {/* <!-- ======= Home Wide-Choice-Section  start======= --> */}
 <section className="why-us section-bgba banner_section05" data-aos="fade-up" date-aos-delay="200">
      <div className="container">
 
       {/* main row  start*/}
        <div className="row">
          <div className="col-lg-12"> 

               <div className="row">
                  <div className="col-lg-7">

                    <div className="vl03">
                       <h1 className="chose-heading">A wide choice of ways</h1>
                       <h1 className="chose-heading01">to send money online</h1>

                    </div>

                    <div className="chose-content">
                      <p className="chose-paragraph02">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut<br /> 
                      labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna. Amet tellus cras adipiscing<br /> 
                       enim. In arcu cursus euismod quis viverra nibh cras pulvinar mattis. Volutpat diam ut<br /> 
                       venenatis tellus in. Rhoncus aenean vel elit scelerisque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus.<br />  
                       Id faucibus nisl tincidunt eget nullam. Sed viverra tellus in hac<br />  
                       habitasse platea dictumst. Ornare arcu odio ut sem nulla. Lectus mauris ultrices eros in<br /> 
                       cursus turpis massa. Sed nisi lacus sed viverra. Integer vitae justo eget magna. Sed vulputate<br /> 
                        mi sit amet. Nam aliquam sem et tortor consequat id porta.
                      </p>
                    
                    </div>
                    
                  </div>
                  
                   {/* second section row  start */}
                  <div className="col-lg-5">
                   
                   {/* bank first row start */}
                    <div className="row">
                      <ul class="bank_transfer">
                        < BankTransferArrayOfObjects />
                        </ul>
                    </div>
                    {/* Bank first row  End */}

                  </div>
                  {/* second section row  end */}

               </div>
          </div>
        </div>
          {/* main row  End*/}

          <div className="row" id="testimonial-section">
            <div className="col-lg-12">
              <h3 className="customers-heading">What customers say about us</h3>
              <div className="button_icons">
                <button className="btn btn prev left_icon" onClick={() => setMoveClass('next')}>
                  <i className="bx bx-chevron-left prev_button"></i>
                </button>

                <button className="btn btn next right_icon" onClick={() => setMoveClass('prev')}>
                  <i className="bx bx-chevron-right "></i>
                </button>

              </div>
              
              <p className="customers-paragraph">We do our best to provide you the best experience ever</p>
            </div>
          </div>

          {/* start carousel cards */}

          <div className="row">
            <div className="col-lg-12">
            <div className="carouselwrapper module-wrapper">

              <ul onAnimationEnd={handleAnimationEnd} className={`${moveClass} carousel`}>
                {carouselItems.map((t, index) => 
                  <Card key={t.paragraph + index} heading={t.heading} paragraph={t.paragraph} />
                  
                )}
              </ul>

            </div>     
            </div>
          </div>

        {/* start carousel cards */}


      </div>
    </section>
    {/* <!-- ======= Home Wide-Choice-Section End ======= --> */}


    {/* <!-- ======= Home Call-us section start======= --> */}
    <section className="why-us section-bgba banner_section01" data-aos="fade-up" date-aos-delay="200">
      <div className="container">
       
       {/* main row  start*/}
        <div className="row">
          <div className="col-lg-12"> 

               <div className="row">
                  <div className="col-lg-6">

                    <div className="vl02">
                       <h1 className="money-heading">Send money to over 130 countries</h1>
                       <h1 className="worldwide-heading01">worldwide and choose from over</h1>
                       <h1 className="currencies-heading01">70 currencies</h1>
                    </div>

                    <div className="popular-content">
                      <h5 className="popular-paragraph01">POPULAR COUNTRIES
                      </h5>
                      <p className="popular-paragraph02">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                      </p>
                      <p className="popular-paragraph02"> incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna.
                      </p>
                    </div>
                    
                  </div>
                  
                   {/* second section row  start */}
                  <div className="col-lg-6">
                  
                   {/* first row flag */}
                    <div className="row">
                    <ul class="bank_transfer">
                     < FlagHomeArrayofoObjects/>
                     </ul>

                    </div>
                    {/* first row flag */}

          
                    <div className="view-button">
                      <button className="btn btn view_button">View all</button>
                    </div>

            
                  </div>
                  {/* second section row  end */}

               </div>
               
          </div>
        </div>
          {/* main row  End*/}
          <div className="row">
            <div className="col-lg-12">
              <h3 className="cal-heading">Call to us</h3>
              <p className="call-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Facilisi morbi tempus iaculis urna.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="view-button">
                   <button className="btn btn call_button">Call Now</button>
               </div>
            </div>
          </div>
      </div>
    </section>
     {/* <!-- ======= Home Call-us section End======= --> */}







    </>
    )
}


export default Home; 