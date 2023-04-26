import React, { useState, useEffect} from 'react'
import './App.css'
import Notes from './pages/Notes'
import Login from './pages/Login'
import Users from './pages/Users'
import Friends from './pages/Friends'
import Alerts from './components/Alerts'
import { Route, Routes, Link, useParams} from 'react-router-dom'
import {Navigate, useNavigate} from "react-router-dom"

import NavBar from './components/NavBar'
import UserFeed from './pages/UserFeed'
import Investigation from './pages/Investigation'
import MyFeed from './pages/MyFeed'

function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:5000/currentUser`).then(
      response => response.json()
      ).then(
      data => {
        console.log(data);
        setCurrentUser(data.name)
      }
      )
    }, []);
    
  

  const handleLoginResponse = (response) => {
    console.log('worked');
    console.log(response.data);
    setCurrentUser(response.data.name)
  }

  const [mode, setMode] = useState(false)
  const body = document.body;

  const handleTheme = () => {
    setMode(!mode)
    if(mode == false){
      body.style.background = 'linear-gradient(to right, #c31432, #240b36)';
      return
    }
    body.style.background = 'linear-gradient(to left, #004e92, #000428)';
  }

  return (
    <>
    <NavBar currentUser={currentUser} handleTheme={handleTheme}></NavBar>
    <Routes>
      <Route path='/' element={<Login handleLoginResponse={handleLoginResponse}/>}></Route>
      <Route path='/feed/:username' element={<UserFeed currentUser={currentUser}/>}></Route>
      <Route path='/myFeed' element={<MyFeed/>}></Route>
      <Route path='investigation' element={<Investigation/>}/>
      { currentUser != null ? <Route path='/notes' element={<Notes/>}/>  : (<Route path='/notes' element={<h1> log in first </h1>}/>)}
      { currentUser != null ? <Route path='/users' element={<Users currentUser={currentUser}/>}/>  : (<Route path='/users' element={<h1> log in first </h1>}/>)}
      { currentUser != null ? <Route path='/friends' element={<Friends/>}/>  : (<Route path='/friends' element={<h1> log in first </h1>}/>)}

    </Routes>
    </>

  )
  
  
}

export default App
