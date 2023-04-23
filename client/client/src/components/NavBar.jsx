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
            <a className="navbar-brand text-light" href="/"> {this.props.currentUser} </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link className="nav-link active text-light" to="/users"> Other Users</Link> 
                </li>
                { this.props.currentUser != null && ( <li> 
                   <Link  className="nav-link active text-light" to="/notes"> Notes</Link> 
                </li>)}
                <li className="nav-item">
                <Link className="nav-link active text-light" to="/"> Login</Link> 
                </li>
                <li className="nav-item">
                { this.props.currentUser != null && <LogoutButton/>}
                </li>
            </ul>
            <span className="navbar-text text-light">
                DeadMan Notes
            </span>
            </div>
        </div>
        </nav>
    )
  }
}

export default NavBar