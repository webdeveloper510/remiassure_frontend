import React, { useState, useContext } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const Verification = () => {
    const [firstnumber, setFirstnumber] = useState('');
    const [secondnumber, setSecondnumber] = useState('');
    const [thirednumber, setThirednumber] = useState('');
    const [fournumber, setFournumber] = useState('');
    const [fivenumber, setFivenumber] = useState('');
    const [sixnumber, setSixnumber] = useState('');


    const handleVerificationFirst = (e) => {
        setFirstnumber(e.target.value);
    }
    const handleVerificationSecond = (e) => {
        setSecondnumber(e.target.value);
    }
    const handleVerificationThired = (e) => {
        setThirednumber(e.target.value);
    }
    const handleVerificationFour = (e) => {
        setFournumber(e.target.value);
    }
    const handleVerificationFive = (e) => {
        setFivenumber(e.target.value);
    }
    const handleVerificationSix = (e) => {
        setSixnumber(e.target.value);
    }



    return(
        <>
         {/* <!-- ======= help Remitassure Support-Section  start======= --> */}
         <section className="why-us section-bgba verification_banner">
    <div className="container">
        <div className="row">
            
            <div className="col-lg-12">
                {/* start-- card */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card card-verification">
                            <div className="card-body">
                                <h5 className="Sign-heading">Verify your OTP</h5>
                                <p>OTP sent to your Email</p>
                                <div className="form_verification">
                                    <form>
                                        <Form.Group className="mb-3 verification_input" controlId="formBasicEmail">
                                            <Form.Control type="text" 
                                            value={firstnumber}
                                            minlength="0" 
                                            maxlength="1" 
                                            onChange= {handleVerificationFirst}
                                            placeholder="0"
                                             />
                                      
                                            <Form.Control type="text" 
                                            value={secondnumber}
                                            minlength="0" 
                                            maxlength="1" 
                                            onChange= {handleVerificationSecond}
                                            placeholder="0"
                                             />
                                   
                                            <Form.Control type="text" 
                                            value={thirednumber}
                                            minlength="0" 
                                            maxlength="1" 
                                            onChange= {handleVerificationThired}
                                            placeholder="0"
                                             />
                                       
                                            <Form.Control type="text" 
                                            value={fournumber}
                                            minlength="0" 
                                            maxlength="1" 
                                            onChange= {handleVerificationFour}
                                            placeholder="0"
                                             />
                                      
                                            <Form.Control type="text" 
                                            value={fivenumber}
                                            minlength="0" 
                                            maxlength="1" 
                                            onChange= {handleVerificationFive}
                                            placeholder="0"
                                             />
                                    
                                            <Form.Control type="text" 
                                            value={sixnumber}
                                            minlength="0" 
                                            maxlength="1" 
                                            onChange= {handleVerificationSix}
                                            placeholder="0"
                                             />
                                        </Form.Group>
                                      <div class="col-md-12 align-center">

                                        <button variant="primary" 
                                        type="submit"
                                         className="continue_button"
                                         >
                                            Continue
                                        </button>

                                        </div>
                                    </form>
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


        </>

    )
}



export default Verification;