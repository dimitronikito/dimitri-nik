import React from 'react';

export default class TabHeader extends React.Component {
  render () {
    return (
      <div fluid="true" className = "tab-head">
        <p className="lead"> {this.props.apiname}</p>
        <p> {this.props.apidesc} </p>
      </div>
    )
  }
}
