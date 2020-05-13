import React from 'react'
//import teamPic from '../../images/landing.jpeg'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import teamPic from '../../images/landing.jpeg'

const divStyle = {
    backgroundImage: 'url(' + teamPic + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  };

const jumboStyle = {
    background: 'rgba(204, 204, 204, 0.2)',
    height: '100%',
  };

const constStyle = {
    background: 'rgba(204, 204, 204, 0.8)',
    marginTop: '15%',
    position: 'center',
    width: '80%',
    borderRadius: '10px',
    textAlign: 'center',
  };

const pStyle = {
    fontSize: '1.25rem',
    fontFamily: 'Balsamiq Sans, cursive',
}

const landingPage = () => {

    return (
        <div style={divStyle} id="home">
            <Jumbotron style={jumboStyle}>
                <Container style={constStyle}>
                    <h1>Rutgers Club Swim Team</h1>
                    <p style={pStyle}>
                    The Rutgers Club Swim Team is a competitive coed team that swims against other college club swim teams all along the East Coast.  The team gives Rutgers students an opportunity to continue their swimming careers at a competitive level that does not have as much of a time commitment as a varsity sport.  In wake of cutting the varsity men's swimming team, the club team continues to carry on the legacy of strong men's (as well as women's) swimming in New Jersey. 
   Swimmers of all abilities are encouraged to join.
                    </p>
                </Container>
            </Jumbotron>
        </div>
    )
}

export default landingPage;