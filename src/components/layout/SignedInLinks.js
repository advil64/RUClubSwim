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
            <Nav.Link onClick={() => window.open("https://services.rec.rutgers.edu/Program/GetProgramDetails?courseId=0c0f9f29-eabf-4316-93a1-d0693b61e08f&semesterId=616eb7c4-8995-41b9-979a-ba0c952afbf2", "_blank")}>
                Rutgers Rec <BoxArrowUpRight/>
            </Nav.Link>
            <Nav.Link onClick={() => window.open("https://rutgers.campuslabs.com/engage/organization/SwimClub", "_blank")}>
                GetInvolved <BoxArrowUpRight/>
            </Nav.Link>
            <Nav.Link onClick={() => window.open("https://groupme.com/join_group/70392994/IHIGFq6X", "_blank")}>
                GroupMe <BoxArrowUpRight/>
            </Nav.Link>
            </Nav>
    )
}

export default SignedInLinks;