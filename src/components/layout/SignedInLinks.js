import React from 'react'
import Nav from 'react-bootstrap/Nav'

var Scroll = require('react-scroll');
var scroller = Scroll.scroller;

const SignedInLinks = () => {
    return (
        <Nav className="mr-auto">
            <Nav.Link onClick={() => scroller.scrollTo('home', {
                smooth: true,
                offset: -70,
                duration: 500,
            })}>About Us</Nav.Link>
            <Nav.Link onClick={() => scroller.scrollTo('info', {
                smooth: true,
                offset: -70,
                duration: 500,
            })}>Information</Nav.Link>
            <Nav.Link onClick={() => scroller.scrollTo('instr', {
                smooth: true,
                offset: -70,
                duration: 500,
            })}>New Swimmers</Nav.Link>
            <Nav.Link onClick={() => scroller.scrollTo('soc', {
                smooth: true,
                offset: -70,
                duration: 500,
            })}>Social Media</Nav.Link>
            </Nav>
    )
}

export default SignedInLinks;