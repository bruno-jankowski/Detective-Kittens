import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [server_data, setUsers] = useState([{}])

  useEffect(() => {
    fetch(`http://localhost:5000/users`).then(
      response => response.json()
     ).then(
      data => {
        setUsers(data)
      }
      )
    }, []);
    
  console.log(server_data);
  return (
   <>
      {(typeof server_data.users === 'undefined')?(
        <p> loading </p>
      ): (
        server_data.users.map((user , i) => (
          <p key={i}> {user.name} </p>
        ))
        
      )}

   </>

  )
  
  
}

export default App
