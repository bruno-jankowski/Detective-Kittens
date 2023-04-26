import React, { Component } from 'react'
import axios from 'axios'

class DeleteNote extends Component {
    constructor(props){
        super(props)

    }

    deleteHandler = (e) => {
        e.preventDefault() 

        axios.delete(`http://localhost:5000/friends/${this.props.name}`)
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
            <button className='btn btn-danger' onClick={this.deleteHandler} > remove Friend </button>
        </form>
      </div>
    )
  }
}

export default DeleteNote