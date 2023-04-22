import React, { useState, useEffect } from 'react'
import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Notes from './pages/Notes'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [isLogged, setLogged] = useState('not')
  const [currentUser, setCurrentUser] = useState('not logged')

  const handleLoginResponse = (response) => {
    console.log('worked');
    console.log(response.data);
    setCurrentUser(response.data.name)
  }
  
  return (
   <Routes>
    <Route path='/' element={<><Login handleLoginResponse={handleLoginResponse}/> <Notes/> </>}>
    </Route>
   </Routes>

  )
  
  
}

export default App
