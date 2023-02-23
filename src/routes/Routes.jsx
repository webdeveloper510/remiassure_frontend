import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../component/home/Home';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import Aboutus from '../component/aboutus/Aboutus';
import Help from '../component/help/Help';
import Signup from '../component/signup/Signup';
import Referral from '../component/referral/Referral';
import Login from '../component/login/Login';
import ForgotPassword from '../component/forgotpassword/ForgotPassword';
import RecentPassword from '../component/resetPassword/ResetPassword';
import Profile from '../component/profile/Profile';
import Recipients from '../component/userRecipients/Recipients';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const token_forgot_url = localStorage.getItem("token_forgot_url");
  console.log("token_forgot_url", token_forgot_url);


const Routerpage =()=>{
  return(

    

    <Router>  

    <>
    <Header/>
    <Routes>
    <Route exact path="/"  element={ <Home/>} /> 
    <Route exact path='/aboutus' element={ < Aboutus />} />
    <Route exact path='/help' element={ < Help />} />
    <Route exact path='/signup' element={ <Signup />} />
    <Route exact path='/referral' element = {< Referral />} />
    <Route exact path='/login' element = {< Login /> }  />
    <Route exact path='/forgotpassword' element= {< ForgotPassword /> } />
    <Route exact path='/resetpassword' element= { < RecentPassword /> } />
    <Route exact path='/profile' element= {< Profile />} />
    <Route exact path='/user_recipients' element={< Recipients /> } />
  
    </Routes>
    <ToastContainer />
     
    <Footer /> 
    </>
    </Router>
   
    
  )
}

export default Routerpage;
