import React, { Component } from 'react'
import axios from 'axios'

class DeleteNote extends Component {
    constructor(props){
        super(props)

        this.state = {
            id: props.id,
        }
    }

    deleteHandler = (e) => {
        e.preventDefault() //It would prevent the submit button from reloading a page but it is just what i wanted so i will live it (in case of data that should be submitted but not refresh page use it)
        console.log(this.state.id);

        axios.delete(`http://localhost:5000/notes/${this.props.id}`)
        .then(response => {
            console.log(response);
            window.location.reload()
        })
        .catch(error => {
            console.log(error);
        })
    }

  render() {
    return (
      <div >
        <form>
            <button className='btn btn-danger' onClick={this.deleteHandler} > x </button>
        </form>
      </div>
    )
  }
}

export default DeleteNote