import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bitPlayground from '../images/bitPlayground.jpeg';
import PlaygroundTabs from './PlaygroundTabs.js';
import '../css/Playground.css';

class Playground extends React.Component {
  render() {
    return (
      <div id="playground">
        <h1> Playground </h1>
        <Container id="bitsoccer">
          <Row>
            <Col md="6" id="playground-desc">
              <p className = "lead"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
              </p>
            </Col>
            <Col md="6">
              <img src={bitPlayground} alt="virtualID"/>
            </Col>
          </Row>
        </Container>
        <PlaygroundTabs />
      </div>
    )
  }
}

export default Playground;
