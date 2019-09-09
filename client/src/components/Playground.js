import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import bitPlayground from '../images/bitPlayground.jpeg';
import PlaygroundTabs from './PlaygroundTabs.js';
import '../css/Playground.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol, faHeart } from '@fortawesome/free-solid-svg-icons';

class Playground extends React.Component {
  render() {
    return (
      <div id="playground">
        <h1> Playground </h1>
        <Container id="bitsoccer">
          <Row>
            <Col md="6" id="playground-desc">
              <p className = "lead"> This section is the result of me playing around with some cool API's.  For the soccer tab I couldn't find a decent API... soo I went through the trouble of adding a Node backend and scraping the data from a website - all for the love of the game. &nbsp;
              <FontAwesomeIcon id="soccer" icon = {faFutbol} />
              <FontAwesomeIcon id="heart" icon = {faHeart} />
              </p>
            </Col>
            <Col md="6">
              <img src={bitPlayground} className="bitmoji" alt="bitmoji"/>
            </Col>
          </Row>
        </Container>
        <PlaygroundTabs />
      </div>
    )
  }
}

export default Playground;
