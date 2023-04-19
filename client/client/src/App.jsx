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
    
  const [notes, setNotes] = useState([{}])
  
    useEffect(() => {
      fetch(`http://localhost:5000/notes`).then(
        response => response.json()
       ).then(
        data => {
          setNotes(data)
        }
        )
      }, []);

  console.log(notes);

  return (
   <>
      {(typeof server_data.users === 'undefined')?(
        <p> loading </p>
      ): (
        server_data.users.map((user , i) => (
          <p key={i}> {user.name} </p>
        ))
        
      )}


      {
        notes.map(note => (
          <p key={note.id}> <b> {note.title} </b> <span> {note.created}</span><br/> {note.contents} </p>
        ))
      }

   </>

  )
  
  
}

export default App
