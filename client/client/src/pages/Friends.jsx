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
    

    const avatar = []
    friends.forEach(user => {
      const uniqueString = Math.floor(Math.random() * 10000).toString();
      avatar.push(`https://robohash.org/${uniqueString}/.png?set=set4`)
    });
     
  return (
    <div> 
        {(friends.length < 1)?(
        <p> no friends  </p>
      ): (
      <div className="container text-center">
         <div className="row">

        {friends.map((user , i) => (
          <div key={i} className="col-4">
            <div className="card  bg-dark text-light text-center p-2 my-5 mx-auto justify-content-center rounded ">
              <div className="card-header"><p> {user} </p> </div>
              <div className="card-body">
                <img src={avatar[i]} width={100}/>
                <p> {user} </p>
                <DeleteUser name={user}/>
              </div>
            </div>
          </div>
        ))}
          </div>       
        </div>
      )}
    
    </div>
  )
}

export default Users