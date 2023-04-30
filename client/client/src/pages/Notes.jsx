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
          data.reverse()
          setNotes(data)
        }
        )
      }, []);
      console.log(notes);
      
    return (
      <>
        <PostNote/>
        { notes.length > 0 && (
          <>
          <div className='d-flex align-items-center justify-content-center'> 
            <h1 className="text-left p-2 w-50 mx-auto justify-content-center"> {notes[0].user}'s notes</h1>
          </div>
            {notes.reverse().map((note, i) => (
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
  
    </>
)}

export default Notes