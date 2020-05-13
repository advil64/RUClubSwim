import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import SignedInLinks from './SignedInLinks'
import logo from '../../images/logo.png'
// import SignedOutLinks from './SignedOutLinks'

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" className="fixed-top navbar-expand-sm">
            <Navbar.Brand href="/" fixed="top">
                <img
                    alt="Rutgers Club Swimming"
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                Rutgers Club Swimming
                </Navbar.Brand>
                <SignedInLinks />
        </Navbar>
    )
}

export default Navigation;