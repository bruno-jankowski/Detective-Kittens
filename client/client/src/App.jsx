import React, { useState, useEffect } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import RegisterForm from './components/RegisterForm'
import Notes from './pages/Notes'
import Login from './pages/Login'
import { Route, Routes, Link} from 'react-router-dom'


function App() {
  const [isLogged, setLogged] = useState('not')
  const [currentUser, setCurrentUser] = useState('not logged')


  const handleLoginResponse = (response) => {
    console.log('worked');
    console.log(response.data);
    setCurrentUser(response.data.name)
  }
  
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Login handleLoginResponse={handleLoginResponse}/>}></Route>
      <Route path='/notes' element={<Notes/>}/>
    </Routes>
    </>

  )
  
  
}

export default App
