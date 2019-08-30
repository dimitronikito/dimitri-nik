import React from 'react';
import { Card, Button, Form, FormGroup, Label, Input, Row, Container, Col } from 'reactstrap';
import '../css/Contact.css';
import bitCall from '../images/bitCall.jpeg';

export default class Contact extends React.Component {
  render() {
    return (
      <Container fluid>
      <Card id="contact" class ="container-fluid">
        <Container id="bitcall">
          <Row>
            <Col md="6" id="contact-head">
              <h1> Contact Me </h1>
              <p class="lead"> Questions or comments?  Fill out the form below and I'll be sure to get back to you! </p>
            </Col>
            <Col id="bit-call" md="6">
              <img src={bitCall} alt="virtualID"/>
            </Col>
          </Row>
        </Container>
        <Form>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="name">Name*</Label>
                <Input required type="name" name="name" id="name" placeholder="name" />
                <Label for="company">Company</Label>
                <Input type="company" name="company" id="company" placeholder="company" />
                <Label for="email">Email*</Label>
                <Input required type="email" name="email" id="email" placeholder="email" />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="select">Reason for Contact*</Label>
                <Input required type="select" name="select" id="select">
                  <option>Feedback</option>
                  <option>Report Bug/Problem</option>
                  <option>Enquire For Further Work</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Additional Comments</Label>
                <Input type="textarea" name="text" id="exampleText" />
              </FormGroup>
            </Col>
          </Row>
          <div id="submit-form-button">
            <Button block id="submit-form">Submit</Button>
          </div>
        </Form>
      </Card>
      </Container>
    );
  }
}
