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
              <img src={bitmogiHi} alt="virtualID"/>
            </Col>
            <Col md="6" id="intro">
              <p className = "lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;
