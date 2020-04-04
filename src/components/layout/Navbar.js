import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
// import SignedOutLinks from './SignedOutLinks'

const Navbar = () => {
    return (
        <nav className="nav-wrapper red darken-1">
            <div className="container left-align">
                <Link to='/' className="brand-logo">
                    Rutgers Club Swimming
                </Link>
                {/* <SignedOutLinks /> */}
                <SignedInLinks />
            </div>
        </nav>
    )
}

export default Navbar;