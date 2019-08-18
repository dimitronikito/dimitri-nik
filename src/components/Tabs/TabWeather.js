import React from 'react';
import $ from 'jquery';
import { Button, ButtonGroup, Jumbotron } from 'reactstrap';
import { Spinner } from 'reactstrap';

export default class TabWeather extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.state = {
      desc: "",
      temp: "",
      city: "",
      icon: "",
      loading: true
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
        desc: response.list[0].weather[0].description,
        icon: "http://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png",
        loading: false
      }));
  }
  render() {
    var {desc, temp, city, icon, loading} = this.state;
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
            <p className = "lead" id = "temp">  {temp} F </p>
            <p className = "lead" id = "city">  {city}</p>
            <p className = "lead" id = "weatherdesc">  {desc}</p>
          </div>

        </Jumbotron>
    )
    // <ButtonGroup id="degree-buttons">
    //   <Button color="danger" id = "degreeC"> C </Button>
    //   <Button color="primary" id = "degreeF"> F </Button>
    // </ButtonGroup>
  }
}
