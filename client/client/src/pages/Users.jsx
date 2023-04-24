import React, { useState, useEffect } from 'react'
import AddUserButton from '../components/AddUserButton';

function Users() {
   const [users, setUsers] = useState([{}])
   useEffect(() => {
    fetch(`http://localhost:5000/users`).then(
      response => {
        return response.json()
      } 
     ).then(
      data => {
        setUsers(data)
      }
      )
    }, []);

    //get friends as []
    //compare them with the users.name list  
    
  return (
    <div> 
        {(typeof users === 'undefined')?(
        <p> login </p>
      ): (
        users.map((user , i) => (
          <div key={i}>
          <p> {user.name} </p> 
          <AddUserButton name={user.name}/>
          </div>
        ))
        
      )}
    
    </div>
  )
}

export default Users