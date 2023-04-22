import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'


function Login() {
    const handleLoginResponse = (response) => {
            console.log('worked one');
            props.handleLoginResponse(response);
        }
        
        return (
        <>
            <LoginForm handleLoginResponse={handleLoginResponse}/> 
            <RegisterForm/>
        </>

        )}

export default Login