import React, { useState, useEffect }  from 'react'
import ChangeAvatarButton from '../components/ChangeAvatarButton';
import { useParams } from 'react-router-dom';
import AddUserButton from '../components/AddUserButton';
import CreateParty from '../components/CreateParty';
import AddToParty from '../components/AddToParty';

function UserFeed() {
    const [curentUser, setCurentUser] = useState(null)
    const [currentFriends, setCurrentFriends] = useState([])
    const [loadingAvatar, setLoading] = useState(true)

    const params = useParams()
    

    useEffect(() => {
        fetch(`http://localhost:5000/currentUser`).then(
        response => response.json()
        ).then(
        data => {
            console.log(data);
            setCurentUser(data)
            setCurrentFriends(data.friends)
        }
        )
        }, []);


    const [party, setParty] = useState(null)
        
    useEffect(() => {
        fetch(`http://localhost:5000/party`).then(
        response => response.json()
        ).then(
        data => {
            setParty(data)
            console.log(data);
        }
        )
        }, []);


        const handleImageLoad = () => {
            setLoading(false);
          };


        //latest friends added
        const latestFriends = currentFriends.slice(-4).reverse();


    return (
        (curentUser != null && 
            <>
            <div className='bg-dark my-5 p-2 w-50 mx-auto justify-content-center rounded'>
                <div className="container text-center">
                    <div className="row">
                        <div className='col'>
                            <h1> {curentUser.name} </h1>
                            { party == null && <CreateParty currentUser={curentUser}/>}
                        </div>
                        <div className='col'>
                            { loadingAvatar && <h2>generating...</h2>}
                            <img width={100} src={`https://robohash.org/${curentUser.avatar}/.png?set=set4`} alt='users avatar' onLoad={handleImageLoad}></img>
                            <br/>
                            <ChangeAvatarButton/>
                        </div>
                    </div>
                    <div className='mt-3 row'>
                        <div className='col-3'>
                            <h2> Friends:</h2>
                        </div>
                        <div className='col-9'>
                        
                        </div>
                    </div>
                    <div className='row'>
                        {latestFriends.map((user , i) => (
                            <div key={i} className='col-3'>
                                <p> {user} </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            { party != null && (
                
                <div>
                <div className='bg-dark p-2 w-50 mx-auto justify-content-center rounded'>
                <div className="container text-center">
                    <div className="row">
                        <div className='col-9'>
                            <h1> Party by {party.owner}</h1>
                        </div>
                        <div className='col-3'>
                            <button className='btn btn-danger' > CLOSE PARTY</button>
                        </div>
                    </div>
                    <div className='row'>
                    {party.players.map((player , i) => (
                        <div key={i} className='col-6'> {player} </div>
                    ))}
                    </div>

                </div>
                </div>
                </div>
                
                )}
                            

            </>
        )
         
            
    )
}

export default UserFeed