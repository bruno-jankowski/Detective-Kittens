import React, { useState, useEffect } from 'react'
import AddUserButton from '../components/AddUserButton';

function Users() {
   const [friends, setFriends] = useState([])
   
   useEffect(() => {
    fetch(`http://localhost:5000/friends`).then(
      response => {
        return response.json()
      } 
     ).then(
      data => {
        setFriends(data.friends)
      }
      )
    }, []);
    
    console.log(friends);
    
  return (
    <div> 
        {(friends.length < 1)?(
        <p> login </p>
      ): (
        friends.map((user , i) => (
          <div key={i}>
          <p> {user} </p>
          </div>
        ))
        
      )}
    
    </div>
  )
}

export default Users