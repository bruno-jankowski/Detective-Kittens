import React, { Component } from 'react'
import axios from 'axios'

export class CreateParty extends Component {
  constructor(props) {
    super(props) //boiler plate code

    this.state = { // state then sets what will this contain and what will it affect (thing whether u nned thgis to be in the backend)
        partyName: '', 
        clicked: false, 
        clickedValue: 'create party'
    };
  }

    changeHandler = (e) => {
      this.setState({[e.target.name]: e.target.value})
      console.log(this.state.partyName);
    }

    handleCreateParty = (e) => {
        e.preventDefault()
        console.log(this.state);
        if(!this.state.clicked){
          console.log('first click');
          this.setState({ clicked: true});
          this.setState({ clickedValue: 'confirm'})
        }else{ 
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
          axios.post(`http://localhost:5000/partyN/${this.state.partyName}`)
          .then(response => {
              console.log(response);
              window.location.reload()
          })
          .catch(error => {
              console.log(error);
          })
        }
        }
    }
  render() {
    return (
      <>
      <button className='btn btn-success m-1' onClick={this.handleCreateParty}> {this.state.clickedValue}</button>
      { this.state.clicked && (
        <div className='my-0'>
          <p> give it a name (optional)</p> 
        <form className='bg-dark p-0 w-50 mx-auto justify-content-center rounded'>
            <div>
                <input type='text' className="form-control my-0" name='partyName' onChange={this.changeHandler}/>
            </div>
        </form>
        </div>  
      )}
      </>
    )
  }
}

export default CreateParty