import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

class Profile extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid id="jumbo1">
          <Container>
            <h1> Lorem Ipsum </h1>
          </Container>
        </Jumbotron>
        <Jumbotron fluid id="jumbo2">
          <Container>
            <h1> Dolor Sit Amet </h1>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Profile;
