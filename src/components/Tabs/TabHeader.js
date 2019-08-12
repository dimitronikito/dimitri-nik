import React from 'react';
import '../../css/Playground.css';

export default class TabHeader extends React.Component {
  render () {
    return (
      <div fluid class = "tab-head">
        <p class="lead"> {this.props.apiname} API </p>
      </div>
    )
  }
}
