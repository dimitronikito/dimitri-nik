import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bitmogiHi from '../images/bitmogiHi.JPG';

class Profile extends React.Component {
  render() {
    return (
      <div id="intro">
        <Container id="bitmogi">
          <Row>
            <Col md="6">
              <img src={bitmogiHi} className="bitmoji" alt="bitmoji"/>
            </Col>
            <Col md="6" id="intro">
              <p className = "lead"> Hello and welcome!  My name is Dimitri. I am a computer science major at CUNY Queens College in NY.  I built this site to showcase some of my skills and work.  I chose to create this site with ReactJS because I was interested in leraning the framework and the best way to do is to learn... enjoy!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;
