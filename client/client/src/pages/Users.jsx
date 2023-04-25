import React, { useState, useEffect } from 'react'
import AddUserButton from '../components/AddUserButton';
import Avatar from 'avatar-initials';


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

    const avatar = new Avatar({
      width: 100,
      height: 100,
      fontSize: 40,
      seed: Math.floor(Math.random() * 10000)
    });
    console.log(avatar.element.src);

  return (
    <div> 
        {(typeof non_friends === 'undefined')?(
        <p> login </p>
      ): (
        non_friends.map((user , i) => (
          <div key={i} className="card  bg-dark text-light text-center p-2 w-50 my-5 mx-auto justify-content-center rounded ">
          <div className="card-header"><p> {user} </p> </div>
            <div className="card-body">
              <p> {user} </p> 
              <img src={avatar}/>
              <AddUserButton name={user}/>
            </div>
          </div>
        ))
        
      )}
    
    </div>
  )
}

export default Users