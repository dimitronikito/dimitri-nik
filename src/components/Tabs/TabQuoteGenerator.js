import React from 'react';
import { Button, ButtonGroup, Jumbotron } from 'reactstrap';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default class TabQuoteGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.getQuote = this.getQuote.bind(this);
    this.state = {
      quoteText: "\"It's always sunny above the clouds.\"",
      quoteAuthor: "",
      quotes:[]
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
    function Quote(text, author) {
      this.text = text;
      this.author = author;
    }
    var {quoteText, quoteAuthor} = this.state;
    if (quoteAuthor === "-") quoteAuthor = "-Anonymous";

    var quote = new Quote(quoteText, quoteAuthor);

    function handleLeft() {
      console.log('left');
    }
    function handleRight() {
      console.log('rigth');
    }
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
          <Button onClick = {handleLeft} color="primary">
            <FontAwesomeIcon icon = {faChevronLeft} />
          </Button>
          <Button onClick = {handleRight} color="primary">
            <FontAwesomeIcon icon = {faChevronRight} />
          </Button>
        </ButtonGroup>
      </div>
    )
  }
}
