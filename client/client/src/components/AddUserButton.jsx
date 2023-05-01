import React, { Component } from 'react'
import axios from 'axios'
export class AddUserButton extends Component {
    constructor(props){
        super(props)
        //username of added
        //curentUser
    }

    handleAddUser = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/friends-requests/${this.props.name}`)
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
        <button className='btn btn-primary' onClick={this.handleAddUser} >add friend</button>
    )
  }
}

export default AddUserButton