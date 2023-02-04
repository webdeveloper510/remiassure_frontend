import React,{useEffect, useState} from "react";
import Img from "react-image";

const Help = () => {

  const [input_content, setInput_content] = useState('Search')


  // start objects RenderingArrayOfObjects

    function RenderingArrayOfObjects() {
      const data = [
        {
          id: 1,
          name: "How it works",
          src: "assets/img/help/icon01.png"
        },

        {
          id: 2,
          name: "Faq",
          src: "assets/img/help/Shape.png"
        },
        {
          id: 2,
          name: "My Account",
          src: "assets/img/help/contact01.png"
        }
      ];
    
      const listItems = data.map(
        (element) => {
            return(

              <ul className="list-">
              <li className="">
                  <div className="support-image">
                  <img src={element.src} alt="can't show image" />
                    </div>
                    <div className="circle-content">
                    <p className="">{element.name}</p>
                  </div>
              </li>
              </ul>

            )
        }
      )
      return(
        <div>
        {listItems}
    </div>
      )
    }

 // start objects RenderingArrayOfObjects



 const Accordion = ({ title, children }) => {
  const [isOpen, setOpen] = React.useState(false);
  return (
    <div className="accordion-wrapper">
      
      <div
        className={`accordion-title ${isOpen ? "open" : ""}`}
        onClick={() => setOpen(!isOpen)}
        >
        {title}
      </div>
      <div className={`accordion-item ${!isOpen ? "collapsed" : ""}`}>
        <div className="accordion-content">{children}</div>
      </div>
    </div>
  );
};

  return (
    <>
 
    {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
    <section className="why-us section-bgba help_banner" data-aos="fade-up" date-aos-delay="200">
      <div className="container">

        <div className="support_image">
            <img src="assets/img/help/suport.png" alt="support_images" />
        </div>

        <div className="row">
          <div className="col-lg-12">
               {/* start-- card */}
               <div className="row">
                  <div className="col-lg-12">
                        <div className="card card-support">
                            <div className="card-body">
                                <h5 className="Support-heading">Remitassure Support Center</h5>
                                <p className="Support-paragraph">Hi, How can we help you?</p>
                                <div className="search_input">
                                    <img src="assets/img/help/search.png" alt="serch_img" className="serch_img" />
                                    <span className="serch_content"> {input_content}</span>
                               </div>

                                <div className="row">
                                
                                <div className="col-md-12" id="align_list">
                                <RenderingArrayOfObjects />
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
    </section>
    {/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}


  {/* <!-- ======= Frequently asked questions FAQs  start======= --> */}
  <section className="why-us section-bgba" data-aos="fade-up" date-aos-delay="200">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="support-vl02">
              <h1 className="vl-support">Frequently asked questions FAQs</h1>
          </div>

          <div className="accordion_content">
            <div className="wrapper">
              <Accordion title="Why is the sky blue?">
                Sunlight reaches Earth's atmosphere and is scattered in all directions by
                all the gases and particles in the air. Blue light is scattered more than
                the other colors because it travels as shorter, smaller waves. This is why
                we see a blue sky most of the time.
              </Accordion>
              <Accordion title="What's It Like Inside Jupiter?">
                It's really hot inside Jupiter! No one knows exactly how hot, but
                scientists think it could be about 43,000°F (24,000°C) near Jupiter's
                center, or core.
              </Accordion>
              <Accordion title="What Is a Black Hole?">
                A black hole is an area of such immense gravity that nothing -- not even
                light -- can escape from it.
              </Accordion>
            </div>
                  
            </div>
          
        </div>
        <div className="col-lg-6">
          <p>lefmosdfmofmoe</p>
        </div>

    
      </div>
    </div>
    
    </section>


 {/* <!-- ======= Help Frequently asked questions FAQs End-Section ======= --> */}

  






    </>
  )
}

export default Help; 

