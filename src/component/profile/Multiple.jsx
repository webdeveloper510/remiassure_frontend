import React, { useState, useContext } from "react";





const Multiple = () => {

  const [name,setName] = React.useState()
  
  

    
    return(
        <>
          {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
          <section className="why-us section-bgba profile_banner">
    <div className="container">
        <div className="row">
            <div className="col-lg-6">
                <div className="support_image">
                    <img src="assets/img/help/help_img02.png" alt="support_images" />
                </div>
            </div>

            <div className="col-lg-12">
              
            <h1>Text Input</h1>
      
      <div className="form-group">
        <label for="text">Name</label>
        <input className="form-control" value={name} onChange={e=>setName(e.target.value)} />
      </div>
      
      {name&&<h1>Hello, {name}!</h1>}

       
            
            </div>
        </div>
    </div>
</section>

        {/* <!-- ======= Help Better-Way-Section End-Section ======= --> */}
          
        </>
    )
}



export default Multiple;