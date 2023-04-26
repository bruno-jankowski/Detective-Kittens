import React, { useState, useEffect } from 'react'
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

    
    const friends_list = users.filter((user) => friends.includes(user.name));
    console.log(friends_list);
     
  return (
    <div> 
        {(friends_list.length < 1)?(
        <p> no friends  </p>
      ): (
      <div className="container text-center">
         <div className="row">

        {friends_list.map((friend , i) => (
          <div key={i} className="col-4">
            <a href={`/feed/${friend.name}`} className="text-decoration-none">
            <div className="card  bg-dark text-light text-center p-2 my-5 mx-auto justify-content-center rounded ">
              <div className="card-header"><p> {friend.name} </p> </div>
              <div className="card-body">
                <img src={`https://robohash.org/${friend.avatar}/.png?set=set4`} width={100}/>
                <p> {friend.name} </p>
                <DeleteUser name={friend.name}/>
              </div>
            </div>
            </a>
          </div>
        ))}
          </div>       
        </div>
      )}
    
    </div>
  )
}

export default Users