import React from 'react';
import { Jumbotron, Container, Row } from 'reactstrap';
import RigCell from './RigCell.js'
import bootstrap from '../images/bootstrap.png';
import html from '../images/html.png';
import css from '../images/css.png';
import express from '../images/express.png';
import github from '../images/github.svg';
import heroku from '../images/heroku.png';
import javascript from '../images/javascript.png';
import mongo from '../images/mongo.png';
import node from '../images/node.png';
import react from '../images/react.png';
import python from '../images/python.png';
import java from '../images/java.png';

class Technologies extends React.Component {
  render() {
    return (
      <div className = "container-fluid">
        <Jumbotron fluid id = "jumbo2">
          <Container fluid >
            <h1> Some technologies I'm familiar with: </h1>
              <div id = "technologies">
                <ul id ="rig">
                  <Row>
                    <RigCell rigtext="HTML" icon={html}/>
                    <RigCell rigtext="CSS" icon={css}/>
                    <RigCell rigtext="JavaScript" icon={javascript}/>
                    <RigCell rigtext="Bootstrap" icon={bootstrap}/>
                  </Row>
                  <Row>
                    <RigCell rigtext="React" icon={react}/>
                    <RigCell rigtext="Express" icon={express}/>
                    <RigCell rigtext="MongoDB" icon={mongo}/>
                    <RigCell rigtext="NodeJS" icon={node}/>
                  </Row>
                    <Row>
                    <RigCell rigtext="Python" icon={python}/>
                    <RigCell rigtext="Java" icon={java}/>
                    <RigCell rigtext="Github" icon={github}/>
                    <RigCell rigtext="Heroku" icon={heroku}/>
                  </Row>
                </ul>
              </div>
          </Container>
        </Jumbotron>
      </div>
    )
  }
}

export default Technologies;
