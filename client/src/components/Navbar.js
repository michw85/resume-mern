import React, {useContext} from 'react'
import {NavLink, useHistory} from 'react-router-dom'
import {AuthContext} from "../context/AuthContext";

export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }
    return (
        <nav>
            <div className="nav-wrapper blue-grey darken-1"
            style={{ padding: '0 2rem' }}
            >
                <span className="brand-logo">M.Vorontsov</span>
                <ul  className="navig">
                    <li><NavLink to="/home">Home</NavLink></li>
                    <li><NavLink to="/experience">My experience</NavLink></li>
                    <li><NavLink to="/works">My works</NavLink></li>
                    <li><NavLink to="/contacts">My contacts</NavLink></li>
                    <li><NavLink to="/links">Example of links</NavLink></li>
                    <li><a href="/" onClick={logoutHandler}>Exit</a></li>
                </ul>
            </div>
        </nav>
    )
}