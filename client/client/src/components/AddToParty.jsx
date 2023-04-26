import React, { Component } from 'react'
import axios from 'axios'
export class AddToParty extends Component {
    constructor(props){
        super(props)

    }

    handleAddToParty = (e) => {
        e.preventDefault() 
        axios.post(`http://localhost:5000/party/${this.props.user}`)
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
      <button className='btin btn-primary' onClick={this.handleAddToParty} > Add to AddToParty</button>
    )
  }
}

export default AddToParty