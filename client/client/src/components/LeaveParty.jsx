import React, { Component } from 'react'
import axios from 'axios'
export class LeaveParty extends Component {
    constructor(props){
        super(props)

    }
    handleLeaveParty = (e) => {
        e.preventDefault()
        axios.delete(`http://localhost:5000/party/${this.props.id}/${this.props.name}`)
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
      <button className='btn btn-danger' onClick={this.handleLeaveParty}> LEAVE PARTY</button>
    )
  }
}

export default LeaveParty