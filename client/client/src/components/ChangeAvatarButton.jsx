import React, { Component } from 'react'
import axios from 'axios';

export class ChangeAvatarButton extends Component {
    handleClick = (e) =>{
        console.log("change");
        e.preventDefault()

        axios.get(`http://localhost:5000/avatar`)
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
      <button className='btn btn-danger p-1 m-0' onClick={this.handleClick}> Change Avatar</button>
    )
  }
}

export default ChangeAvatarButton