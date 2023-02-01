import React from "react";

const Carousel =()=> {
    <>
   {/* <!-- ======= Home Better-Way-Section  start======= --> */}
   <section className="why-us section-bgba banner_section" data-aos="fade-up" date-aos-delay="200">
      <div className="container">

        <div className="row">
          <div className="col-lg-12"> 
            <div className="backgound-img" >

               <div className="row">
                  <div className="col-lg-6">

                    <div className="vl">
                       <h1 className="vl-heading">A Better Way</h1>
                       <h1 className="vl-heading01">To Send Money</h1>
                    </div>

                    <div className="vl-content">
                      <p className="vl-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat cras fermentum <br/>
                      malesuada ultrices dictum. Eu id sit malesuada quam et tincidunt eu dolor convallis
                      </p>
                      <p className="vl-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat cras fermentum <br/>
                      malesuada ultrices dictum. Eu id sit malesuada quam et tincidunt eu dolor convallis
                      </p>
                      <p className="vl-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat cras fermentum <br/>
                      malesuada ultrices dictum. Eu id sit malesuada quam et tincidunt eu dolor convallis
                      </p>
                    </div>
                    
                  </div>

                  {/* <div className="col-lg-6">
                    <div className="background-images">
                     <img src="assets/img/home/img01.png" alt="background-images" />
                  </div>
                    
                  </div> */}
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
                           <div className="bg-text">
                             <p add-text>ADD </p>
                           </div>  
                        </div>
                        <div className="col-4">
                          <p className="get-text">They get</p>
                          <div className="bg-text01">
                             <p add-text>ADD </p>
                           </div> 
                        </div>
                        <div className="col-4">
                          <p className="recived-text">Receive method</p>
                          <div className="bg-text02">
                             <p add-text>ADD </p>
                           </div> 
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
    </>
}



export default Carousel;