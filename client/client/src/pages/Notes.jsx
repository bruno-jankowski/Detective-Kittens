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
              <div key={i} className="card text-center p-2 w-50 mx-auto justify-content-center rounded ">
              <div className="card-header">
                Note {i + 1}
              </div>
              <div className="card-body">
                <h5 className="card-title"> {note.title}</h5>
                <p className="card-text"> {note.contents}</p>
                <DeleteNote id={note.id}/>
              </div>
              <div className="card-footer text-body-secondary">
                {note.created}
              </div>
            </div>
            ))}
            </>
        )
        }
  
        <PostNote/>
    </>
)}

export default Notes