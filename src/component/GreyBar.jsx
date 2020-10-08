import React, { Component } from 'react';
import './Index.css';

class GreyBar extends Component {
  render() {
    return (
      <span className="bar">
        {this.props.children}
      </span>
    );
  }
}



export default GreyBar;
