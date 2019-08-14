import React from 'react';
import { Button, Jumbotron } from 'reactstrap';
import $ from 'jquery';
import '../../css/Playground.css';

export default class TabQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    this.state = {
      quoteText: "",
      quoteAuthor: ""
    };
  }
  getQuote() {
    $("#Lquote").html('<FontAwesomeIcon icon = {faAQuoteLeft}');
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
      .then(data => this.setState({
        quoteText: "\"" + data["quoteText"] + "\"",
        quoteAuthor: "-" + data["quoteAuthor"]
      }));
  }

  render() {
    const {quoteText, quoteAuthor} = this.state;
    return (
        <Jumbotron fluid id="quotebox">
          <div id="quotearea">
            <p className = "lead" id = "quote"> <span id="Lquote"> </span> {quoteText}</p>
            <p className = "lead" id = "author"> {quoteAuthor}</p>
          </div>
          <Button color="primary" size="lg" block onClick={this.getQuote}> New Quote </Button>
        </Jumbotron>
    )
  }
}
