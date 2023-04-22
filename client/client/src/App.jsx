import React, { useState, useEffect } from 'react'
import './App.css'
import Notes from './pages/Notes'
import Login from './pages/Login'
import Users from './pages/Users'
import { Route, Routes, Link} from 'react-router-dom'
import {Navigate, useNavigate} from "react-router-dom"
import LogoutButton from './components/LogoutButton'

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
    <nav>
        <ul>
            <li> 
                <Link to="/users"> Users</Link>
            </li>
            { currentUser != null && ( <li> 
               <Link to="/notes"> Notes</Link> 
            </li>)}
            
            <li> 
                <Link to="/"> Home</Link>
            </li>
        </ul>
      </nav>
    <h1> {currentUser} </h1>
    { currentUser != null && <LogoutButton/>}
    <Routes>
      <Route path='/' element={<Login handleLoginResponse={handleLoginResponse}/>}></Route>
      { currentUser != null ? <Route path='/notes' element={<Notes/>}/>  : (<Route path='/notes' element={<h1> log in first </h1>}/>)}
      <Route path='/users' element={<Users/>}/>
    </Routes>
    </>

  )
  
  
}

export default App
