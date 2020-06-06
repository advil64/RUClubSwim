import React from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InstagramEmbed from "react-instagram-embed";


var Scroll = require("react-scroll");
var Element = Scroll.Element;

const social = () => {
  return (
    <Element name="soc">
      <div className="pt-4">
        <Container className="pt-2" id="social">
          <h3>Something cool coming soon!</h3>
        </Container>
        <footer className="text-center footer bg-primary">
            <Container>

            <img src="https://cdn.iconscout.com/icon/free/png-512/instagram-201-599421.png?resize=1240,1240&w=50"/>
            <img className="pl-2" src="https://cdn.iconscout.com/icon/free/png-256/facebook-264-734861.png?resize=1240,1240&w=40"/>
            <img className="pl-3" src="https://cdn.iconscout.com/icon/free/png-256/twitter-208-555655.png?resize=1240,1240&w=40"/>
            <img className="pl-2" src="https://cdn.iconscout.com/icon/free/png-512/internet-2359086-1970946.png?resize=1240,1240&w=40"/>

            </Container>
        </footer>
      </div>
    </Element>
  );
};

export default social;
