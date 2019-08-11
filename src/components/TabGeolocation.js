import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import {} from 'reactstrap';

export class TabGeolocation extends React.Component {
  render() {
    return (
      <div id="mapcanvas">
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
      </div>
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
