import React, { useState, useEffect } from 'react'
import './App.css'
import Notes from './pages/Notes'
import Login from './pages/Login'
import Users from './pages/Users'
import Alerts from './components/Alerts'
import { Route, Routes, Link} from 'react-router-dom'
import {Navigate, useNavigate} from "react-router-dom"

import NavBar from './components/NavBar'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
 
  useEffect(() => {
    fetch(`http://localhost:5000/currentUser`).then(
      response => response.json()
      ).then(
      data => {
        setCurrentUser(data)
      }
      )
    }, []);

  
    
  

  const handleLoginResponse = (response) => {
    console.log('worked');
    console.log(response.data);
    setCurrentUser(response.data.name)
  }
  
  return (
    <>
    <NavBar currentUser={currentUser}></NavBar>
    <Alerts success={true} text={'loged in'} />
    <Routes>
      <Route path='/' element={<Login handleLoginResponse={handleLoginResponse}/>}></Route>
      { currentUser != null ? <Route path='/notes' element={<Notes/>}/>  : (<Route path='/notes' element={<h1> log in first </h1>}/>)}
      <Route path='/users' element={<Users/>}/>
    </Routes>
    </>

  )
  
  
}

export default App
