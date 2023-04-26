import React, { Component } from 'react'

export class AddToParty extends Component {
    handleAddToParty = (e) => {
        e.preventDefault() 
    }
  render() {
    return (
      <button className='btin btn-primary' onClick={handleAddToParty} > Add to AddToParty</button>
    )
  }
}

export default AddToParty