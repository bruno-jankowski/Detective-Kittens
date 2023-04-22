import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostNote from './components/PostNote'
import DeleteNote from './components/DeleteNote'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'

function App() {
  const [isLogged, setLogged] = useState('not')

  const [users, setUsers] = useState([{}])

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


  const handleLoginResponse = (response) => {
    console.log('worked');
    console.log(response);
  }

  return (
   <>
      {(typeof users === 'undefined')?(
        <p> loading </p>
      ): (
        users.map((user , i) => (
          <p key={i}> {user.name} </p>
        ))
        
      )}


      {
        notes.map((note, i) => (
          <div>
            <p key={i}> <b> {note.title} {note.id} </b> <span className='date'> {note.created}</span><br/> {note.contents} </p>
            <DeleteNote id={note.id}></DeleteNote>
          </div>
        ))
      }

      <PostNote/>
      <table>
          <td>
            <LoginForm handleLoginResponse={handleLoginResponse}/> 
          </td>
          <td>
            <h1></h1>
          </td>
          <td>
            <RegisterForm/>
          </td>
      </table>

   </>

  )
  
  
}

export default App
