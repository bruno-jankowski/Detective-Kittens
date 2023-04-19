import React, { Component } from 'react'

class PostNote extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '', 
            contents: '', 
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
    }

  render() {
    const {title, contents} = this.state
    return (
        <div>
            <form onSubmit={this.submitHandler}>
                <div>
                    <input type='text' name='title' value={title} onChange={this.changeHandler}/>
                </div>

                <div>
                    <input type='text' name='contents' value={contents} onChange={this.changeHandler}/>
                </div>

                <button type='submit'> Submit note</button>
            </form>

        </div>
    )
  }
}

export default PostNote