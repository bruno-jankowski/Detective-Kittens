import React, { useState, useEffect }  from 'react'
import ChangeAvatarButton from '../components/ChangeAvatarButton';
import { useParams } from 'react-router-dom';
import AddUserButton from '../components/AddUserButton';
import CreateParty from '../components/CreateParty';
import AddToParty from '../components/AddToParty';

function UserFeed(props) {
    const curentUser = props.currentUser;
    const [user, setUser] = useState(null)
    const [currentFriends, setCurrentFriends] = useState([])

    const params = useParams()
    

    useEffect(() => {
        fetch(`http://localhost:5000/feed/${params.username}`).then(
        response => response.json()
        ).then(
        data => {
            console.log(data);
            setUser(data)
            setCurrentFriends(data.friends)
        }
        )
        }, []);


        //latest friends added
        const latestFriends = currentFriends.slice(-4).reverse();


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
                            <> <AddUserButton name={user.name}/> <AddToParty user={user.name}/> </>
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