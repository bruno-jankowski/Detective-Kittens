import React, { useState, useEffect } from 'react'
import AddUserButton from '../components/AddUserButton';
import DeleteUser from '../components/DeleteUser';

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
    
  return (
    <div> 
        {(friends.length < 1)?(
        <p> no friends  </p>
      ): (
        friends.map((user , i) => (
          <div key={i}>
              <p> {user} </p>
              <DeleteUser name={user}/>
          </div>
        ))
        
      )}
    
    </div>
  )
}

export default Users