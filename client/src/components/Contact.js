import React from 'react';
import { Card, Button, Modal, ModalHeader, Form, FormGroup, Label, Input, Row, Container, Col } from 'reactstrap';
import '../css/Contact.css';
import bitCall from '../images/bitCall.jpeg';

export default class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      company: '',
      email: '',
      reason: 'Feedback',
      message: '',
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    const {name, company, email, reason, message} = this.state;
    console.log({name, company, email, reason, message });
    fetch('/form-submit-url', {
      method: "POST",
      header: {
        'Content-type': 'application/json',
      },
      body: {name, company, email, reason, message }})
      .then((response) => response.json())
      .then((result => {
        console.log(result)
      }));
    this.toggle();
  }
  render() {
    const { name, company, email, reason, message } = this.state;
    return (
      <Container>
      <Card id="contact" className ="container-fluid">
        <Container fluid id="bitcall">
          <Row>
            <Col md="6" id="contact-head">
              <h1> Contact Me </h1>
              <p className="lead"> Questions or comments?  Fill out the form below and I'll be sure to get back to you! </p>
            </Col>
            <Col id="bit-call" md="6">
              <img src={bitCall} className="bitmoji" alt="bitmoji"/>
            </Col>
          </Row >
        </Container>
        <Form onSubmit={this.onSubmit}>
          <Row fluid="true">
            <Col fluid="true" md="6">
              <FormGroup>
                <Label for="name">Name*</Label>
                <Input required type="name" name="name" id="name" placeholder="what do they call you?" value={name} onChange={this.onChange}/>
                <Label for="company">Company</Label>
                <Input type="company" name="company" id="company" placeholder="where do you work?" value={company} onChange={this.onChange}/>
                <Label for="email">Email*</Label>
                <Input required type="email" name="email" id="email" placeholder="email" value={email} onChange={this.onChange}/>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="reason">Reason for Contact*</Label>
                <Input required type="select" name="reason" id="select" value={reason} onChange={this.onChange}>
                  <option>Feedback</option>
                  <option>Report Bug/Problem</option>
                  <option>Enquire For Further Work</option>
                  <option>New Tab Idea!</option>
                  <option>Other</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="message">Additional Comments</Label>
                <Input type="textarea" name="message" id="exampleText" value={message} onChange={this.onChange}/>
              </FormGroup>
            </Col>
          </Row>
          <div id="submit-form-button">
            <Button color="primary" block id="submit-form">Submit</Button>
            <Modal isOpen={this.state.modal} toggle = {this.toggle}>
              <ModalHeader>
                Form Submitted!
              </ModalHeader>
            </Modal>
          </div>
        </Form>
      </Card>
      </Container>
    );
  }
}
