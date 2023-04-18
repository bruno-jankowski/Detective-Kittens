import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users, setUsers] = useState([{}])

  useEffect(() => {
    fetch("/api").then(response => response.json())
      .then(data => {
        setUsers(data); // set the 'users' state to the array of users
      })
      .catch(error => {
        console.log("Error fetching users:", error);
      });
  }, []);
  

    
  return <h1></h1>
}

export default App
