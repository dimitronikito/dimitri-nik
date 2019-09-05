import React from 'react';
import { Container, Button, ButtonGroup, Input, Spinner } from 'reactstrap';
import $ from 'jquery';

export default class TabGoogleSearch extends React.Component {
  constructor(props) {
    super(props);
    this.googleSearch = this.googleSearch.bind(this);
    this.clearResults = this.clearResults.bind(this);
    this.state = {
      data:[],
      loading: false,
    };
  }

  clearResults() {
    this.setState({
      data:[],
      loading: false
    });
  }

  googleSearch() {
    this.setState({
      loading: true
    });
    const json_api_key = "AIzaSyCshjTXvmxSyUgceMhDG31EIGsO71UWOLc";
    const url = "https://www.googleapis.com/customsearch/v1";
    const cx = '010899884897236485615:zcnahc-yrs8';

    var query = $("#google-button").val();
    $.ajax({
      dataType:"json",
      type: "GET",
      url: url + "?key=" + json_api_key + "&cx=" + cx + "&q=" + query,
      success: (response) => {
        this.setState({
          data: response.items,
          loading: false,
          key: this.state.key + 1
        });
      },
      error: function(xhr) {
        console.log(xhr);
      }
    });
  }

  render() {
    var { data, loading } = this.state;

    function Data(title, url, description) {
      this.title = title;
      this.url = url;
      this.description = description;
    }
    if (data != null) {
      var results = [];
      for (var i = 0; i < data.length; i++) {
        results[i] = new Data(data[i].title, data[i].link, data[i].snippet);
      }
      var rows = results.map(function(result, i) {
        return <div key={i} id="search-results">
                 <h3 className="result">
                  <a target='_blank'  rel="noopener noreferrer" href = {result.url}>  {result.title} </a>
                 </h3>
                 <h5 className="result-url"> {result.url} </h5>
                 <p className="lead result-desc">  {result.description} </p>
                </div>;
      });
    }
    if (loading) {
      return (
        <div id = "spinner">
          <Spinner style={{ width: '5rem', height:
          '5rem'}} type="grow" color = "primary" />
        </div>
      )
    }
    return (
      <Container>
          <Input autoComplete="off" bsSize="lg" id="google-button" type="text" />
          <ButtonGroup id="google-tab-buttons">
          <Button color="primary" onClick={this.googleSearch}>
            Google Search
          </Button>
          <Button color="danger" onClick={this.clearResults}>
            Clear Results
          </Button>
          </ButtonGroup>
          {rows}
      </Container>
    )
  }
}
