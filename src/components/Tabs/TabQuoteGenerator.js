import React from 'react';
import { Button, Jumbotron } from 'reactstrap';
import $ from 'jquery';

export default class TabQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    this.state = {
      quoteText: "\"It's always sunny above the clouds.\"",
      quoteAuthor: ""
    };
  }
  getQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
      .then(data => this.setState({
        quoteText: "\"" + data["quoteText"] + "\"",
        quoteAuthor: "-" + data["quoteAuthor"]
      }));
  }

  render() {
    var {quoteText, quoteAuthor} = this.state;
    if (quoteAuthor === "-") quoteAuthor = "-Anonymous";
    return (
      <div>
        <Button color="primary" size="lg" block onClick={this.getQuote}> New Quote </Button>
        <Jumbotron fluid id="quotebox">
          <div id="quotearea">
            <p className = "lead" id = "quote"> {quoteText}</p>
            <p className = "lead" id = "author"> {quoteAuthor}</p>
          </div>
        </Jumbotron>
      </div>
    )
  }
}
