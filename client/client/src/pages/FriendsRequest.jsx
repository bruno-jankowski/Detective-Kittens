import React, { useState, useEffect } from 'react'
import DeleteUser from '../components/DeleteUser';
import RequestButton from '../components/RequestFriendButton';
import { Link } from 'react-router-dom';

function FriendRequest(props) {


   const [requests, setReq] = useState([])
   useEffect(() => {
    fetch(`http://localhost:5000/friends-requests/${props.currentUser}`).then(
      response =>  {
        return response.json()
      }
     ).then(
      data => {
        setReq(data.requests)
      } 
      )
    }, []);
     console.log(requests);
  return (
    <div> 
        {(requests)?(
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
      </>
      )}
    </div>
  )
}

export default FriendRequest