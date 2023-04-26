import React, { Component } from 'react'
import axios from 'axios'

export class CreateParty extends Component {
    constructor(props){
        super(props)

        }

    handleCreateParty = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:5000/party`)
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
      <button className='btn btn-success' onClick={this.handleCreateParty}> create party</button>
    )
  }
}

export default CreateParty