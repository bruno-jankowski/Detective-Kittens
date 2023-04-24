import React, { Component } from 'react'

export class AddUserButton extends Component {
    constructor(props){
        super(props)
        //username of added
        //curentUser
    }

    handleAddUser = (e) => {
        e.preventDefault()
        console.log(this.props.name);
    }

  render() {
    return (
        <button className='btn btn-primary' onClick={this.handleAddUser} >add friend</button>
    )
  }
}

export default AddUserButton