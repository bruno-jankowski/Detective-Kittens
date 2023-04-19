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

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
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
    const {title, contents} = this.state
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type='text' name='title' value={title} onChange={this.changeHandler}/>
                </div>

                <div>
                    <input type='text' name='contents' value={contents} onChange={this.changeHandler}/>
                </div>

                <button type='submit'> Submit note</button>
            </form>

        </div>
    )
  }
}

export default PostNote