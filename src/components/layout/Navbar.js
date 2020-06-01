import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import SignedInLinks from './SignedInLinks'
import logo from '../../images/logo.png'
// import SignedOutLinks from './SignedOutLinks'

const Navigation = () => {
    return (
        <Navbar bg="secondary" variant="dark"  expand="lg" className="fixed-top">
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
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <SignedInLinks />
                </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;