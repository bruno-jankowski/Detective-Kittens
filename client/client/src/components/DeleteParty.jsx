import React, { Component } from 'react'
import axios from 'axios'

export class DeleteParty extends Component {
    constructor(props){
        super(props)
    }

    handleDeleteParty = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:5000/party/${this.props.id}`)
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
        <button className='btn btn-danger' onClick={this.handleDeleteParty}> CLOSE PARTY</button>
    )
  }
}

export default DeleteParty