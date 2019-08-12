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
            <Col md="6">
              <img src={bitPlayground} alt="virtualID"/>
            </Col>
            <Col md="6" id="playground-desc">
              <p className = "lead"> Messing around with some cool api's
              </p>
            </Col>
          </Row>
        </Container>
        <PlaygroundTabs />
      </div>
    )
  }
}

export default Playground;
