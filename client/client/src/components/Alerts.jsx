import React, { Component } from 'react'

export class Alerts extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <>
        
        { this.props.success &&  (
            <div className="alert alert-success" role="alert">
            {this.props.text}
            </div>
        )}
        </>
    )
  }
}

export default Alerts