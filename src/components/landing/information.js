import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Iframe from "react-iframe";

var Scroll = require("react-scroll");
var Element = Scroll.Element;

function TableVal(props) {
  return (
    <tr>
      <td>{props.day}</td>
      <td>8:30 - 10:00 PM</td>
      <td>{props.officer}</td>
    </tr>
  );
}

const Info = () => {
  return (
    <Element name="info">
      <Container fluid id="info">
        <Col className="pt-3 pb-3">
          <Row className="pr-0 mr-0">
            <Container className="text-center">
              <h2>Practice Schedule</h2>
            </Container>
            <Table responsive>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Practice Time</th>
                  <th>Officers</th>
                </tr>
              </thead>
              <tbody>
                <TableVal day="Monday" officer="Someone & Someone" />
                <TableVal day="Tuesday" officer="Someone & Someone" />
                <TableVal day="Wednesday" officer="Someone & Someone" />
                <TableVal day="Thursday" officer="Someone & Someone" />
              </tbody>
            </Table>
          </Row>
          <Row>
            <Iframe
              url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3032.9966840200914!2d-74.46307228460093!3d40.519564379353326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3c70b5757be8d%3A0x4a73ed726e1ec667!2sSonny%20Werblin%20Recreation%20Center!5e0!3m2!1sen!2sus!4v1589341556290!5m2!1sen!2sus"
              width="100%"
              height="300px"
              frameborder="0"
              position="relative"
            />
          </Row>
        </Col>
      </Container>
    </Element>
  );
};

export default Info;
