import React from 'react';
import $ from 'jquery';
import { Jumbotron, Spinner, Button, ButtonGroup } from 'reactstrap';

export default class TabWeather extends React.Component {
  constructor(props) {
    super(props);
    this.toC = this.toC.bind(this);
    this.toF = this.toF.bind(this);
    this.getWeather = this.getWeather.bind(this);

    this.state = {
      loading: true,
      units: 'F',
    };
    navigator.geolocation.getCurrentPosition(this.getWeather);
  }

  getWeather(position) {
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var format = "imperial";
    $.getJSON("https://api.openweathermap.org/data/2.5/find?lat="+lat+"&lon="+lng+"&units="+format+"&appid=906353eb2cac78688bff837c0bcfa352")
      .then(
        response => this.setState({
        city: response.list[0].name,
        temp: Math.round(response.list[0].main.temp),
        tempf: Math.round(response.list[0].main.temp),
        tempc: Math.round(((response.list[0].main.temp) - 32) * (5/9)),
        desc: response.list[0].weather[0].description,
        icon: "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png",
        loading: false
      }));
  }

  toC() {
    if (this.state.units === 'F') {
      console.log(this.state.temp);
      this.setState({
        temp: this.state.tempc,
        units: 'C'
      });
    }
  }

  toF() {
    if (this.state.units === 'C') {
      console.log(this.state.temp);
      this.setState({
        temp: this.state.tempf,
        units: 'F'
      });
    }
  }

  render() {
    var {desc, temp, city, icon, loading, units} = this.state;
    if (loading) {
      return (
        <div id = "spinner">
          <Spinner style={{ width: '5rem', height:
          '5rem'}} type="grow" color = "primary" />
        </div>
      )
    }
    return (
        <Jumbotron fluid id="weatherbox" style={{
          backgroundImage: "url("+icon+")",
          backgroundSize: "15vh",
          backgroundRepeat: "round"
        }}>
          <div fluid="true" id="weatherarea" >
            <p className = "lead" id = "temp">  {temp}&#176; {units} </p>
            <p className = "lead" id = "city">  {city}</p>
            <p className = "lead" id = "weatherdesc">  {desc}</p>
            <ButtonGroup>
              <Button onClick={this.toC} color="danger" id = "degreeC"> C </Button>
              <Button onClick={this.toF} color="primary" id = "degreeF"> F </Button>
            </ButtonGroup>
          </div>
        </Jumbotron>

    )
  }
}
