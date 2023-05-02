import React, { useState, useEffect } from 'react'
import DeleteUser from '../components/DeleteUser';
import RequestButton from '../components/RequestFriendButton';
import { Link } from 'react-router-dom';

function FriendRequest(props) {


  const [requests, setReq] = useState([])
  useEffect(() => {
   fetch(`http://localhost:5000/friends-requests`).then(
     response =>  {
       return response.json()
     }
    ).then(
     data => {
       setReq(data.req_recived)
     } 
     )
   }, []);
    
  return (
    <div className='container text-center'> 
    <div className="row">
      {requests.map((request , i) => (
          <div key={i} className="col-4">
            <a href={`/feed/${request}`} className="text-decoration-none">
            <div className="card  bg-dark text-light text-center p-2 my-5 mx-auto justify-content-center rounded ">
              <div className="card-header"><p> {request} </p> </div>
              <div className="card-body">
                <p> {request} </p>
                <RequestButton name={request}/>
              </div>
            </div>
            </a>
          </div>
        ))}
    </div>
    </div>
  )
}

export default FriendRequest