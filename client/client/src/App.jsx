import React, { useState, useEffect } from 'react'
import './App.css'
import Notes from './pages/Notes'
import Login from './pages/Login'
import Users from './pages/Users'
import { Route, Routes, Link} from 'react-router-dom'


function App() {
  const [isLogged, setLogged] = useState('not')
  const [currentUser, setCurrentUser] = useState(null)

  console.log(currentUser);

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
            <li> 
               <Link to="/notes"> Notes</Link> 
            </li>
            <li> 
                <Link to="/"> Home</Link>
            </li>
        </ul>
      </nav>
    <Routes>
      <Route path='/' element={<Login handleLoginResponse={handleLoginResponse}/>}></Route>
      <Route path='/notes' element={<Notes/>}/> 
      <Route path='/users' element={<Users/>}/>
    </Routes>
    </>

  )
  
  
}

export default App
