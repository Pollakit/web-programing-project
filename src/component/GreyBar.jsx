import React, { Component } from 'react';
import './Index.css';

class GreyBar extends Component {
  render() {
    return (
      <span class="bar">
        {this.props.children}
      </span>
    );
  }
}



export default GreyBar;
