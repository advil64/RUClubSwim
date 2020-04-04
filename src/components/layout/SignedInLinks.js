import React from 'react'
import {NavLink} from 'react-router-dom'

const SignedInLinks = () => {
    return (
        <ul className="right">
            <li><NavLink to='/'>Announcements</NavLink></li>
            <li><NavLink to='/'>Upcoming Meets</NavLink></li>
            <li><NavLink to='/'>Our Twitter Feed</NavLink></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>AC</NavLink></li>
        </ul>
    )
}

export default SignedInLinks;