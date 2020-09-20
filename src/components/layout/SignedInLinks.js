import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { BoxArrowUpRight } from 'react-bootstrap-icons';

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
            <Nav.Link onClick={() => window.open("http://recreation.rutgers.edu", "_blank")}>
                Rutgers Rec <BoxArrowUpRight/>
            </Nav.Link>
            <Nav.Link onClick={() => window.open("https://rutgers.campuslabs.com/engage/organization/SwimClub", "_blank")}>
                GetInvolved <BoxArrowUpRight/>
            </Nav.Link>
            <Nav.Link onClick={() => window.open("https://groupme.com/join_group/62677133/qaDtJKcV", "_blank")}>
                GroupMe <BoxArrowUpRight/>
            </Nav.Link>
            </Nav>
    )
}

export default SignedInLinks;