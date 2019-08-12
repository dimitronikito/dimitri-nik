import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Spinner } from 'reactstrap';
import '../../css/Playground.css'

export class TabGeolocation extends React.Component {
  state = { userLocation: { lat: 40.7128, lng: 74 }, loading: true };

  componentDidMount(props) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        this.setState({
          userLocation: { lat: latitude, lng: longitude },
          loading: false
        });
      },
      () => {
        this.setState({ loading: false });
      }
    );
  }

  render() {
    const { loading, userLocation } = this.state;
    const { google } = this.props;

    if (loading) {
      return (
        <div id = "spinner">
          <Spinner style={{ width: '5rem', height:
          '5rem'}} type="grow" color = "primary" />
        </div>
      )
    }

    return (
      <Map
        google={ google }
        zoom={ 14 }
        style={ mapStyles }
        initialCenter={ userLocation }
      />
    );
  }
}

const mapStyles = {
  width: '100%',
  height: '95.5%',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDmd1CPGNTCmcH_iSQBQpYHSdBKckL76UQ'
})(TabGeolocation);
