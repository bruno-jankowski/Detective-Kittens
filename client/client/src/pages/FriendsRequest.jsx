import React, { useState, useEffect } from 'react'
import DeleteUser from '../components/DeleteUser';
import RequestButton from '../components/RequestFriendButton';
import { Link } from 'react-router-dom';

function FriendRequest() {
   const [friends, setFriends] = useState([])
   
   useEffect(() => {
    fetch(`http://localhost:5000/requests`).then(
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
      <>
      <div className="container text-center">
        <div className='row'>
        <div className='col-9'></div>
          <div className='col-3'>
          <Link  className="nav-link active text-light" to="/friends">
          <button type="button" className="btn btn-primary position-relative   mx-3 mt-4" href='requests'>
          Friends
          </button>
          </Link> 
        </div>
        </div>
         <div className="row">
        {friends.map((friend , i) => (
          <div key={i} className="col-4">
            <a href={`/feed/${friend.name}`} className="text-decoration-none">
            <div className="card  bg-dark text-light text-center p-2 my-5 mx-auto justify-content-center rounded ">
              <div className="card-header"><p> {friend.name} </p> </div>
              <div className="card-body">
                <img src={`https://robohash.org/${friend.avatar}/.png?set=set4`} width={100}/>
                <p> {friend.name} </p>
                <RequestButton name={friend.name}/>
              </div>
            </div>
            </a>
          </div>
        ))}
          </div>       
        </div>
      </>
      )}
    </div>
  )
}

export default FriendRequest