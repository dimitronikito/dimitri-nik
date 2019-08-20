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
              <p className = "lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;
