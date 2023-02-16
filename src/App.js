import Routerpage from './routes/Routes';
import React, { useContext, useEffect } from 'react';
import UserContext from './component/context/UserContext';




const App =()=>{
  // const { userauth }= useContext(UserContext);
  // const token = localStorage.getItem('logName');
  // console.log("Appjs", token)
  // console.log("UserAuth", userauth);
  return(
    <>
     < Routerpage autoclose={3000} />
    </>
  )
}

export default App;
