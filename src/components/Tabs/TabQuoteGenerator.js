import React from 'react';
import { Button, ButtonGroup, Jumbotron } from 'reactstrap';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default class TabQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);

    this.state = {
      quote: {
        text: "\"It's always sunny above the clouds.\"",
        author: ""
      },
      quotes: [{
        'text': "\"It's always sunny above the clouds.\"",
        'author': ""
      }],
      pos: 0
    };
  }

  getQuote() {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")
      .then(data => this.setState({
        quote: {
          text: "\"" + data["quoteText"] + "\"",
          author: "-" + data["quoteAuthor"],
        },
          quotes: [...this.state.quotes, {
            'text': "\"" + data["quoteText"] + "\"",
            'author': "-" + data["quoteAuthor"]
          }],
          pos: this.state.quotes.length + 1
      }));
  }

  handleLeft() {
    if (this.state.pos > 1) {
      this.setState({
        pos: this.state.pos - 1,
        quote: this.state.quotes[this.state.pos - 2]
      });
    }
  }

  handleRight() {
    if (this.state.pos < this.state.quotes.length - 1) {
      this.setState({
        pos: this.state.pos + 1,
        quote: this.state.quotes[this.state.pos + 1]
      });
    }
  }

  render() {
    var {quote} = this.state;
    if (quote.author === "-") quote.author = "-Anonymous";

    return (
      <div>
        <Button color="primary" size="lg" block onClick={this.getQuote}> New Quote </Button>
        <Jumbotron fluid id="quotebox">
          <div id="quotearea">
            <p className = "lead" id = "quote"> {quote.text}</p>
            <p className = "lead" id = "author"> {quote.author}</p>
          </div>
        </Jumbotron>
        <ButtonGroup>
          <Button onClick = {this.handleLeft} color="primary">
            <FontAwesomeIcon icon = {faChevronLeft} />
          </Button>
          <Button onClick = {this.handleRight} color="primary">
            <FontAwesomeIcon icon = {faChevronRight} />
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}
