import React, { Component } from 'react'
import axios from 'axios'

export class CreateParty extends Component {
  constructor(props) {
    super(props) //boiler plate code

    this.state = { // state then sets what will this contain and what will it affect (thing whether u nned thgis to be in the backend)
        partyName: '', 
        
    };
  }

    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
      console.log(this.state.partyName);
    }

    handleCreateParty = (e) => {
        e.preventDefault()
        console.log(this.state);
        if(this.state.partyName == ''){
          axios.post(`http://localhost:5000/party`)
            .then(response => {
                console.log(response);
                window.location.reload()
            })
            .catch(error => {
                console.log(error);
            })
        } else{
          axios.post(`http://localhost:5000/party/${this.state.partyName}`)
          .then(response => {
              console.log(response);
              window.location.reload()
          })
          .catch(error => {
              console.log(error);
          })
        }
    }
  render() {
    return (
      <>
      <div className='my-0'>
      <form className='bg-dark p-2 w-50 mx-auto justify-content-center rounded'>
        <button className='btn btn-success m-1' onClick={this.handleCreateParty}> create party</button>
          <div>
              <input type='text' className="form-control my-0" name='partyName' onChange={this.changeHandler}/>
          </div>
      </form>
      </div>
      </>
    )
  }
}

export default CreateParty