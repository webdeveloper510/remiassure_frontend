import Routerpage from './routes/Routes';
import React, { useContext, useEffect } from 'react';
import UserContext from './component/context/UserContext';
// import {useNavigate} from 'react-router-dom';
// 



const App =()=>{
  // const navigate = useNavigate('');
  var token_forgot_url = localStorage.getItem("token_forgot_url");
  console.log("token_forgot_url", token_forgot_url);

  var token_forgot = localStorage.getItem("token_forgot");
  var token = 'http://localhost:3000/resetpassword/' + token_forgot;

  console.log("token_forgot" ,token_forgot)

  if(token_forgot_url==token) {
    window.open('http://localhost:3000/resetpassword/')
    
  }



  return(
    <>
     < Routerpage autoclose={3000} />
    </>
  )
}

export default App;
