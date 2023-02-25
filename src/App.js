import Routerpage from './routes/Routes';
import React, { useContext, useEffect } from 'react';
import UserContext from './component/context/UserContext';
import { Helmet } from "react-helmet";

const App =()=>{

  return(
    <>
     < Routerpage autoclose={3000} />
    </>
  )
}

export default App;
