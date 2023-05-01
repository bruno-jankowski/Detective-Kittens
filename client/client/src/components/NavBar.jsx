import React, { Component } from 'react'
import { Route, Routes, Link} from 'react-router-dom'
import {Navigate, useNavigate} from "react-router-dom"
import LogoutButton from './LogoutButton'

export class NavBar extends Component {
    constructor(props) {
        super(props) 
    }

  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
            <a className="navbar-brand text-light" href={`/myFeed`}> {this.props.currentUser} </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                { this.props.currentUser != null && ( <li> 
                   <Link  className="nav-link active text-light" to="/notes"> Notes</Link> 
                </li>)}
                { this.props.currentUser != null && ( <li> 
                   <Link  className="nav-link active text-light" to="/investigation"> Investigation</Link> 
                </li>)}
                { this.props.currentUser != null && ( <li> 
                   <Link  className="nav-link active text-light" to="/users"> users</Link> 
                </li>)}
                { this.props.currentUser != null && ( <li> 
                   <Link  className="nav-link active text-light" to="/friends"> friends {this.props.requests > 0 && <b> new! </b>}</Link> 
                </li>)}
                <li className="nav-item">
                <Link className="nav-link active text-light" to="/"> Login</Link> 
                </li>
                { this.props.currentUser != null && ( <li> 
                   <LogoutButton/>
                </li>)}
            </ul>
            <button className='btn btn-primary mx-3 p-1' onClick={this.props.handleTheme}>Mode change</button>
            <span className="navbar-text text-light">
                <b> Detective Kittens </b>
            </span>
            </div>
        </div>
        </nav>
    )
  }
}

export default NavBar