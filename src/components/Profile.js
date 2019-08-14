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
              <img src={bitmogiHi} alt="virtualID"/>
            </Col>
            <Col md="6" id="intro">
              <p className = "lead"> Welcome to my site!  My name is Dimitri and I am a computer science major at CUNY Queens College.  I created this site to showcase my skills and some of my work/projects. I chose to build this site with ReactJS because I was interested in learning the language and the best way to learn is to do!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;
