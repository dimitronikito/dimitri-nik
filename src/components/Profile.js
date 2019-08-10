import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bitmogiHi from '../images/bitmogiHi.JPG';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Container id="bitmogi">
          <Row>
            <Col md="6">
              <p className = "lead"> Welcome to my site! My name is Dimtri, a Computer Science major at CUNY Queens College.  I built this site to teach myself React and to showcase my skills and projects.
              </p>
            </Col>
            <Col md="6">
              <img src={bitmogiHi} alt="virtualID"/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;
