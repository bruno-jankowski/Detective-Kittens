import React, { useState, useEffect }  from 'react'
import ChangeAvatarButton from '../components/ChangeAvatarButton';
import { useParams } from 'react-router-dom';
import AddUserButton from '../components/AddUserButton';
import DeleteUser from '../components/DeleteUser'
import CreateParty from '../components/CreateParty';
import AddToParty from '../components/AddToParty';

function UserFeed(props) {
    const currentUser = props.currentUser;
    const [user, setUser] = useState({})
    const [currentFriends, setCurrentFriends] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/feed/${params.username}`).then(
        response => response.json()
        ).then(
        data => {
            setUser(data)
            setCurrentFriends(data.friends)
        }
        )
        }, []);

    
    const [userParty, setUserParty] = useState(null)


    useEffect(() => {
        fetch(`http://localhost:5000/party/${params.username}`).then(
        response => response.json()
        ).then(
        data => {
            console.log(data);
            setUserParty(data)
        }
        ).catch( error => {console.log(error);})
        }, []);

    
    const [currentUserParty, setCurrentParty] = useState(null)
    const [currentUserPartner, setCurrentPartner] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/party`).then(
        response => response.json()
        ).then(
        data => {
            setCurrentParty(data)
            setCurrentPartner(data.partner)
        }
        )
        }, []);

        
        
        //latest friends added
        const latestFriends = currentFriends.slice(-4).reverse();
        const yourFriend = currentFriends.includes(currentUser); //third condition user not already in party
        
        const notInParty = userParty == null; //conditions to display party (if you have max members in your party and if you have party)
        //console.log(notInParty);

        const partyCreated = currentUserParty != null && currentUserPartner == ''
        //console.log(partyCreated, currentUserPartner, currentUserParty);

        const partyIsFull = currentUserPartner != ''
        //console.log(partyIsFull);
        //Debug
        /*console.log(yourFriend);
        console.log(userPartyPlayers);*/
        //console.log(currentUserPartner);

    return (
        (user != null && 
            <>
            <div className='bg-dark my-5 p-2 w-50 mx-auto justify-content-center rounded'>
                <div className="container text-center">
                    <div className="row">
                        <div className='col'>
                            <h1> {user.name} </h1>
                        </div>
                        <div className='col'>
                            <img width={100} src={`https://robohash.org/${user.avatar}/.png?set=set4`} alt='users avatar'></img>
                            <br/>
                            <> { !yourFriend ? (<AddUserButton name={user.name}/>):(
                                <> 
                                    <DeleteUser name={user.name}/>
                                    { partyCreated && 
                                    <div>
                                        { notInParty ? ( <AddToParty user={user.name}/>) : (
                                            <div> 
                                                <p> curently in partner with <br/>{userParty.players.map((user , i) => (<span key={i}> {user} </span>))} </p>
                                            </div>  
                                        )}
                                        
                                    </div>
                                    }
                                    <div>
                                        { partyIsFull && (<p> your party is full </p>)}
                                    </div>
                                </>
                            )}  
                            </>
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

            </>
        )
         
            
    )
}

export default UserFeed