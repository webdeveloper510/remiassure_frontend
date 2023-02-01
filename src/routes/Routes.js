import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../component/home/Home';
import Carousel from '../component/home/Carousel';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';



const Routerpage =()=>{
  return(


    <Router>  

    <>
    <Header/>
    <Routes>
    {/* <Route exact path="/"  element={ <Header/>} />  */}
    <Route exact path="/"  element={ <Home/>} /> 
    <Route exact path='/banner' element={ < Carousel />} />
    {/* <Route exact path='/footers' element={ <Footer /> } /> */}
    </Routes>
     
    <Footer /> 
    </>
    </Router>
   
    
  )
}

export default Routerpage;
