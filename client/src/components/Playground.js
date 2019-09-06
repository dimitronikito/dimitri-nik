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
              <p className = "lead"> Most of the tabs are the results from me playing around with some cool api's.  In the soccer tab I connected a node backend to extract the information since I couldn't find a decent api for livescores. Click on the tabs to try them out!
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
