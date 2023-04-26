import React, { useState, useEffect } from 'react'
import AddUserButton from '../components/AddUserButton';
import {  Link } from 'react-router-dom'

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
    const active_user = users.map(user => user.name);
    
    let non_friends = active_user.filter(friend_users => !friends.includes(friend_users));
    non_friends = non_friends.filter(friend_users => friend_users !== currentUser);
    
    non_friends = users.filter((user) => non_friends.includes(user.name));
    console.log(non_friends, "fdata");
    

  return (
    <div> 
        {(typeof non_friends === 'undefined')?(
        <p> login </p>
      ): (
      <div className="container text-center">
         <div className="row">
        {non_friends.map((user , i) => (
          <div key={i} className="col-4">
          <a href={`/feed/${user.name}`} className="text-decoration-none">
          <div className="card  bg-dark text-light text-center p-2 my-5 mx-auto justify-content-center rounded "  onClick={()=>{console.log(user.name);}}>
          <div className="card-header"><p> {user.name} </p> </div>
            <div className="card-body">
              <img src={`https://robohash.org/${user.avatar}/.png?set=set4`} width={100}/>
              <p > {user.name} </p> 
              <AddUserButton name={user.name}/>
            </div>
          </div>
          </a>
          </div>
        ))
        }
        </div>
        </div>
        
      )}
    
    </div>
  )
}

export default Users