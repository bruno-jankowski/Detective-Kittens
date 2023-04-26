import React, { useState, useEffect }  from 'react'


function UserFeed() {
    const [currentUser, setCurrentUser] = useState(null)
    const [currentFriends, setCurrentFriends] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/currentUser`).then(
        response => response.json()
        ).then(
        data => {
            setCurrentUser(data)
            setCurrentFriends(data.friends)
        }
        )
        }, []);

        //latest friends added
        const latestFriends = currentFriends.slice(-4).reverse();

    return (
        (currentUser != null && 
            <>
            <div className='bg-dark my-5 p-2 w-50 mx-auto justify-content-center rounded'>
                <div className="container text-center">
                    <div className="row">
                        <div className='col'>
                            <h1> {currentUser.name} </h1>
                        </div>
                        <div className='col'>
                            <img width={100} src={`https://robohash.org/${currentUser.avatar}/.png?set=set4`} alt='users avatar'></img>
                            <br/>
                            <button> change avatar </button>
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