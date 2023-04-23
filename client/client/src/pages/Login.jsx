import React, { useState, useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'


function Login(props) {
        
        return (
        <>
            <LoginForm handleLoginResponse={props.handleLoginResponse}/> 
            <RegisterForm handleLoginResponse={props.handleLoginResponse}/>
        </>

        )}

export default Login