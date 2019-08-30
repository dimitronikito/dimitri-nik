import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import { Spinner } from 'reactstrap';

export class TabGeolocation extends React.Component {
  state = { userLocation: { lat: 40.7128, lng: 74 },
                            activeMarker: {},
                            loading: true };

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
        >
          <Marker
          />
        </Map>
    );
  }
}

const mapStyles = {
  width: '98%',
  height: '80.5vh',
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDmd1CPGNTCmcH_iSQBQpYHSdBKckL76UQ'
})(TabGeolocation);
