import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedOutLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Announcements</NavLink></li>
            <li><NavLink to='/'>Upcoming Meets</NavLink></li>
            <li><NavLink to='/'>Our Twitter Feed</NavLink></li>
            <li><NavLink to='/'>Login</NavLink></li>
        </ul>
    )
}

export default SignedOutLinks;