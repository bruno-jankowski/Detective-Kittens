import React, { Component } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export class LogoutButton extends Component {
    constructor(props){
        super(props)
    }

    deleteHandler = (e) => {
        e.preventDefault() 
        axios.get(`http://localhost:5000/logout`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
        window.location.href = '/'
    }

  render() {
    return (
      <div >
        <form>
            <button onClick={this.deleteHandler} > Log Out </button>
        </form>
      </div>
    )
  }
}

export default LogoutButton