import React from 'react'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import InstagramEmbed from 'react-instagram-embed'

var Scroll = require('react-scroll');
var Element = Scroll.Element;

const divStyle = {
    padding: '30px',
  };

const social = () => {
    return (
        <Element name="soc">
        <Container fluid style={divStyle} className="bg-light" id="social">
            <Row>
                <Col>
                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="RutgersClubSwim"
                    options={{height: 800}}
                />
                </Col>
                <Col>
                <InstagramEmbed
                    url='https://www.instagram.com/p/B9NPReTA3Ia/'
                    //maxWidth={550}
                    hideCaption={true}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => {}}
                    onSuccess={() => {}}
                    onAfterRender={() => {}}
                    onFailure={() => {}}
                    />
                </Col>
            </Row>
        </Container>
        </Element>
    )
}

export default social;