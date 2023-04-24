import React, { useState, Component } from 'react'
import axios from 'axios'

class LoginForm extends Component {
  constructor(props) {
    super(props) //boiler plate code

    this.state = { // state then sets what will this contain and what will it affect (thing whether u nned thgis to be in the backend)
        name: '', 
        password: '',  
    };

}


//this function handle change so it runs each time i type anything in the form so any time i click submit the state would be ready and all set 
changeHandler = (e) => {
  this.setState({[e.target.name]: e.target.value}) //updates the values of a state based on name so the name of the form must match the state variable name and sets it then to the value
}

submitHandler = (e) => {
    e.preventDefault() //It would prevent the submit button from reloading a page but it is just what i wanted so i will live it (in case of data that should be submitted but not refresh page use it)
    console.log(this.state);
    //to sebd only part of data
    axios.post('http://localhost:5000/login', this.state)
    .then(response => {
        this.setState({name: '', password: ''})
        this.props.handleLoginResponse(response);
        window.location.href = '/notes'
    })
    .catch(error => {
        console.log(error);
    })
}



render() {
const {name, password} = this.state // i need to destructure my state here so i can use it in html components
return (
    <div className='my-5'>
        <form onSubmit={this.submitHandler} className='bg-dark p-2 w-50 mx-auto justify-content-center rounded'>
            <h2> Login to your account </h2>
            <div>
                <input type='text' className="form-control my-3" aria-describedby="emailHelp" name='name' value={name} onChange={this.changeHandler}/>
            </div>

            <div>
                <input type='password' name='password' className="form-control my-3" value={password} onChange={this.changeHandler}/>
            </div>

            <button type='submit' className='btn btn-primary'> Log in</button>
        </form>
    </div>
)
}
}


export default LoginForm