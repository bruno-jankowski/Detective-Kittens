import React, { Component } from 'react'
import axios from 'axios'
 //to create this rce

class PostNote extends Component {
    constructor(props) {
        super(props) //boiler plate code

        this.state = { // state then sets what will this contain and what will it affect (thing whether u nned thgis to be in the backend)
            title: '', 
            contents: '', 
        }
    }

    //this function handle change so it runs each time i type anything in the form so any time i click submit the state would be ready and all set 
    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value}) //updates the values of a state based on name so the name of the form must match the state variable name and sets it then to the value
    }

    submitHandler = (e) => {
        //e.preventDefault() //It would prevent the submit button from reloading a page but it is just what i wanted so i will live it (in case of data that should be submitted but not refresh page use it)
        console.log(this.state);

        axios.post('http://localhost:5000/notes', this.state)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

  render() {
    const {title, contents} = this.state // i need to destructure my state here so i can use it in html components
    return (
        <div >
            <form onSubmit={this.submitHandler} className='bg-dark p-2 w-50 mx-auto my-5 justify-content-center rounded '>
                <div>
                    <input type='text' className="form-control my-3" name='title' value={title} onChange={this.changeHandler}/>
                </div>

                <div>
                    <input type='text' className="form-control my-3" name='contents' value={contents} onChange={this.changeHandler}/>
                </div>

                <button className='btn btn-primary' type='submit'> Submit note</button>
            </form>

        </div>
    )
  }
}

export default PostNote