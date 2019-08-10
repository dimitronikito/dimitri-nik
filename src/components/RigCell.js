import React from 'react';
import { Col } from 'reactstrap';
import '../css/Rig.css';

class RigCell extends React.Component {
  render() {
    return (
      <li>
        <Col>
          <div className = "rig-cell">
            <img className ="rig-img" src={this.props.icon} alt="icon"/>
            <span className ="rig-overlay"></span>
            <span className ="rig-text"> {this.props.rigtext}</span>
          </div>
        </Col>
      </li>
    )
  }
}

export default RigCell;
