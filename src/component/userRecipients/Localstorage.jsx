import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Links, NavLink, useNavigate, useParams} from 'react-router-dom';

import { toast } from "react-toastify";
import {API} from "../../config/API";
import axios from 'axios';
import UserContext from '../context/UserContext';


const LocalStorage = () => {

    // const [password, setPassword] = useState('');
    // const [confirmPassword, setConfirmPassword] = useState('');
    const {id} = useParams();
    const navigate = useNavigate();

    // const handlePassword =(e) =>{
    //     setPassword(e.target.value);
    // }
    // const handleConfirmPassword = (e) =>{
    //     setConfirmPassword(e.target.value);
    // }

    // const [token_forgot, setToken_forgot] = useState('');

    // useEffect(() => {
    // localStorage.setItem('dataKey', JSON.stringify(token_forgot));
    // }, [token_forgot]);


    const token_forgot = localStorage.setItem("token_forgot");
    console.log("Token_Forgot_password", token_forgot);
     navigate('/login')


    const token_forgot_url = localStorage.getItem("token_forgot_url");
    console.log("token_forgot_url", token_forgot_url);


    // const notify = () =>toast.success("Check your email to Reset Password");
    // const wrongData = () =>toast.warm("This E-mail is not our records, please try again");

  



    // const handleRecent = (event) => {
    //     event.preventDefault();
    //         axios.post(API.BASE_URL + `reset-password/${token_forgot}/`, {

    //         }, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             }}, {
    //         })
    //         .then(function(response) {
    //             console.log("Forget API" ,response);
    //             localStorage.setItem("token_forgot_url", `http://localhost:3000/resetpassword/${token_forgot}`);
    //             navigate('/resetpasswordsss')
    //             notify();
    //         })
    //         .catch(function(error) {
    //             console.log(error.response);
    //             if(error.response.status){
    //                 toast.error(error.response.data.detail);
    //             }
    //             // wrongData();
    //         })
    //     }
    
    return(
        <>

        </>

    )
}



export default LocalStorage;