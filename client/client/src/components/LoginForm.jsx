import React, { useState, Component } from 'react'
import axios from 'axios'
class LoginForm extends Component {
  constructor(props) {
    super(props) //boiler plate code

    this.state = { // state then sets what will this contain and what will it affect (thing whether u nned thgis to be in the backend)
        name: '', 
        password: '', 
        isLogged: 'not logged', //i can add aditional values because the server gets only the values it needs from this.state
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
        console.log(response);
        this.setState({ isLogged: 'logged' });
        
    })
    .catch(error => {
        console.log(error);
    })
}



render() {
const {name, password} = this.state // i need to destructure my state here so i can use it in html components
return (
    <div>
      <h2> Login to your account </h2>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type='text' name='name' value={name} onChange={this.changeHandler}/>
            </div>

            <div>
                <input type='password' name='password' value={password} onChange={this.changeHandler}/>
            </div>

            <button type='submit'> Log in</button>
        </form>
        <b> {this.state.isLogged} </b> 
    </div>
)
}
}


export default LoginForm