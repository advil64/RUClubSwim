import React from "react";
//import teamPic from '../../images/landing.jpeg'
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import teamPic from "../../images/landing.jpeg"

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const divStyle = {
  backgroundImage: "url(" + teamPic + ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

const screen = {
  background: "rgba(204, 204, 204, 0.2)",
  height: "100%",
  width: "100%",
};

const pStyle = {
  fontSize: "1.5rem",
};

const landingPage = () => {
  return (
    <Element name="home">
    <div style={divStyle} id="home">
      <div style={screen}>
        <Container className="container-lg pt-6 pb-3">
          <Jumbotron className="text-center">
            <h1>Rutgers Club Swim Team</h1>
            <p style={pStyle}>
              The Rutgers Club Swim Team is a competitive coed team that swims
              against other college club swim teams all along the East Coast.
              The team gives Rutgers students an opportunity to continue their
              swimming careers at a competitive level that does not have as much
              of a time commitment as a varsity sport. In wake of cutting the
              varsity men's swimming team, the club team continues to carry on
              the legacy of strong men's (as well as women's) swimming in New
              Jersey. Swimmers of all abilities are encouraged to join. Email:
              ruclubswim@gmail.com
            </p>
          </Jumbotron>
        </Container>
      </div>
    </div>
    </Element>
  );
};

export default landingPage;
