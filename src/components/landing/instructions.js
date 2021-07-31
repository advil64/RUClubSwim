import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import CardDeck from "react-bootstrap/CardDeck";
import Jumbotron from "react-bootstrap/Jumbotron";
import picture from "../../images/WRC_pool.jpg";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

const divStyle = {
  backgroundImage: "url(" + picture + ")",
  backgroundPosition: "center",
  backgroundSize: "cover",
};

function Links(props) {
  if (props.isLink) {
    return <Card.Link href={props.link}>{props.title}</Card.Link>;
  }
  return <br></br>;
}

function CardBody(props) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {props.subtitle}
        </Card.Subtitle>
        <Card.Text>{props.message}</Card.Text>
        <Links isLink={props.isLink} title={props.title} link={props.link} />
      </Card.Body>
    </Card>
  );
}

const Instruction = () => {
  return (
    <Element name="instr">
      <div className="text-center" style={divStyle} id="new">
        <Container className="container-lg pt-3 pb-3">
          <Jumbotron className="pt-5 pb-5">
            <h2>Instructions for New Swimmers</h2>
            <CardDeck>
              <CardBody
                message="If you are interested in continuing swimming with our team, 
                        you need to pay dues for the semester. Dues are $30 per semester and can be payed
                        to any exec board member in the form of check, cash, or venmo."
                title="Dues"
                subtitle="Step 1"
                isLink={false}
              />

              <CardBody
                message="Please request membership on our GetInvolved page to stay updated on our events.
                          You will be added to a mailing list automatically once you become a member. You will also
                          be able to join our GroupMe once you request membership"
                title="Rutgers GetInvolved"
                subtitle="Step 2"
                link="https://rutgers.campuslabs.com/engage/organization/SwimClub"
                isLink={true}
              />

              <CardBody
                message="This website is Rutgers' way to track which students are 
                        involved in our club. Defensive drivers also need to upload their documentation 
                        onto this website."
                title="Do Sports Easy"
                subtitle="Step 3"
                link="http://recreation.rutgers.edu/sports/sport-clubs/registration/"
                isLink={true}
              />

              <CardBody
                title="College Club Swimming"
                subtitle="Step 4"
                message="To participate in swim meets and eventually qualify for nationals, you need to
                        register with College Club Swimming. Returning swimmers need to login and confirm their
                        participation for the coming year."
                link="https://www.clubassistant.com/club/login_form.cfm?c=2417"
                isLink={true}
              />
            </CardDeck>
          </Jumbotron>
        </Container>
      </div>
    </Element>
  );
};

export default Instruction;
