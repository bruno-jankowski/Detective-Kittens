import React, { useState, useEffect } from 'react'
import AddUserButton from '../components/AddUserButton';

function Users(props) {
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

    //get friends as []
    //compare them with the users.name list  
    //filtering unwanted users
    const currentUser = props.currentUser
    console.log(currentUser);
    const active_user = users.map(user => user.name);
    console.log(active_user);
    const non_friends = active_user.filter(friend_users => !friends.includes(friend_users));
    non_friends.pop(currentUser)

  return (
    <div> 
        {(typeof non_friends === 'undefined')?(
        <p> login </p>
      ): (
        non_friends.map((user , i) => (
          <div key={i}>
          <p> {user} </p> 
          <AddUserButton name={user}/>
          </div>
        ))
        
      )}
    
    </div>
  )
}

export default Users