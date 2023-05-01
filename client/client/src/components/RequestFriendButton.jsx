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

    handleCancelUser = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:5000/friends-requests/${this.props.name}`)
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
        <button type="button" className=" mx-2 btn btn-success" onClick={this.handleAddUser}> add </button>
        <button type="button" className=" mx-2 btn btn-danger" onClick={this.handleCancelUser}>cancel</button>
        </>
    )
  }
}

export default RequestButton