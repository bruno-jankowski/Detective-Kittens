import React, { Component } from 'react'

export class Alerts extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <>
        
        { this.props.display &&  (
            <div className='alert alert-secondary' role="alert">
            {this.props.text}
            </div>
        )}
        </>
    )
  }
}

export default Alerts