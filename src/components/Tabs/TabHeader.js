import React from 'react';
import '../../css/Playground.css';

export default class TabHeader extends React.Component {
  render () {
    return (
      <div fluid="true" className = "tab-head">
        <p className="lead"> {this.props.apiname} API </p>
        <p> {this.props.apidesc} </p>
      </div>
    )
  }
}
