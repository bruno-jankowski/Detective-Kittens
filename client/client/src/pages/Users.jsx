import React, { useState, useEffect } from 'react'

function Users() {
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

  return (
    <div> 
        {(typeof users === 'undefined')?(
        <p> loading </p>
      ): (
        users.map((user , i) => (
          <div>
          <p key={i}> {user.name} </p> 
          <span> <button className='btn btn-primary' >add friend</button></span>
          </div>
        ))
        
      )}
    
    </div>
  )
}

export default Users