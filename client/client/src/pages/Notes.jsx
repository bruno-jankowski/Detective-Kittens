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
  
    console.log(notes);
  
    return (
     <>
  
        {
          notes.map((note, i) => (
            <div>
              <p key={i}> <b> {note.title} {note.id} </b> <span className='date'> {note.created}</span><br/> {note.contents} </p>
              <DeleteNote id={note.id}></DeleteNote>
            </div>
          ))
        }
  
        <PostNote/>
    </>
)}

export default Notes