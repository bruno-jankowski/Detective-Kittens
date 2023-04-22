import React, { useState, useEffect } from 'react'
import PostNote from '../components/PostNote'
import DeleteNote from '../components/DeleteNote'

function Notes() {
    const [notes, setNotes] = useState([{}])
  
    useEffect(() => {
      fetch(`http://localhost:5000/notes/user`).then(
        response => response.json()
        ).then(
        data => {
          setNotes(data)
        }
        )
      }, []);
  
    return (
     <>
        { notes.length > 0 && (
            <>
            <h1> {notes[0].user} Notes</h1>
            {notes.map((note, i) => (
              <div key={i}>
                <p> <b> {note.title} {note.id} </b> <span className='date'> {note.created}</span><br/> {note.contents} </p> 
                <span><DeleteNote id={note.id}></DeleteNote></span>
              </div>
            ))}
            </>
        )
        }
  
        <PostNote/>
    </>
)}

export default Notes