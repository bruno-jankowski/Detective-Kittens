import React, { Component } from 'react'

export class Alerts extends Component {
    constructor(props){
        super(props)

        this.state = {
            type : this.props.type,
            success : this.props.success,
        }
    }

  render() {
    return (
        <>
        { this.props.success &&  (
            <div class="alert alert-success" role="alert">
            Loged In
            </div>
        )}
        </>
    )
  }
}

export default Alerts