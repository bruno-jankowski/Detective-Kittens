import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostNote from './components/PostNote'
import DeleteNote from './components/DeleteNote'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Notes from './pages/Notes'


function App() {
  const [isLogged, setLogged] = useState('not')
  const [currentUser, setCurrentUser] = useState('not logged')

  const handleLoginResponse = (response) => {
    console.log('worked');
    console.log(response.data);
    setCurrentUser(response.data.name)
  }


  console.log(currentUser);
  
  return (
   <>
      <h1> {currentUser} </h1>
      <LoginForm handleLoginResponse={handleLoginResponse}/> 
      <RegisterForm/>
      <Notes/>
   </>

  )
  
  
}

export default App
