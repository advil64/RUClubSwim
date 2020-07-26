import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import teamPic from "../../images/landing.jpeg";
import Alert from "../layout/Alert"

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

export default class landingPage extends React.Component {
  state = {
    width: 0,
    height: 0,
  };

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  async componentDidMount() {
    this.updateWindowDimensions();
  }

  getText() {
    if (this.state.width > 550) {
      return "The Rutgers Club Swim Team is a competitive coed team that swims against other college club swim teams all along the Country. The team gives Rutgers students an opportunity to continue their swimming careers at a competitive level that does not have as much of a time commitment as a varsity sport. In wake of cutting the varsity men's swimming team, the club team continues to carry on the legacy of strong men's (as well as women's) swimming in New Jersey. Swimmers of all abilities are encouraged to join. Email: ruclubswim@gmail.com";
    } else if (this.state.width <= 550) {
      return "The Rutgers Club Swim Team is a competitive coed team that swims against other college club swim teams all along the Country. Email: ruclubswim@gmail.com";
    }
  }

  render() {
    return (
      <Element name="home">
        <div style={divStyle} id="home">
          <div style={screen}>
            <Container className="container-lg pt-6 pb-3">
              <Alert/>
              <Jumbotron className="text-center">
                <h1>Rutgers Club Swim Team</h1>
                <p style={pStyle}>{this.getText()}</p>
              </Jumbotron>
            </Container>
          </div>
        </div>
      </Element>
    );
  }
}
