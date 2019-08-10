import React from 'react';
import { Container, Row, Col } from 'reactstrap';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Container id="bitmogi">
          <Row>
            <Col md="6">
              <p class = "lead"> Hi I'm Dimitri, a Computer Science student at CUNY Queens College.  I built this site to teach myself ReactJS and to showcase my skills and projects.
              </p>
            </Col>
            <Col md="6">
              <img src='/images/bitmogiHi.jpg' alt="virtualID"/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Profile;
