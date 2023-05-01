import React, { Component } from 'react'
import axios from 'axios'
export class RequestButton extends Component {
    constructor(props){
        super(props)
        //username of added
        //curentUser
    }

    handleAddUser = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:5000/friends/${this.props.name}`)
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
        <>
        <button type="button" class="btn btn-success">add </button>
        <button type="button" class="btn btn-danger">cancel</button>
        </>
    )
  }
}

export default RequestButton