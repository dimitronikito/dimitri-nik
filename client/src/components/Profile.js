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
              <p className = "lead"> Hello and welcome to my site! I'm Dimitri, a Computer Science major at CUNY Queens College in NY. I built this site to teach myself React and freshen up my web dev skills... enjoy!
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;
