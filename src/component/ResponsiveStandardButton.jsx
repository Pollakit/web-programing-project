import React, { Component } from 'react';
import "./Index.css"

class ResponsiveStandardButton extends Component {

  render() {
    const {text, textSize} = this.props;

    return (
      <button className="Standard-button center-button">
      <p>{text}</p>
    </button>
    );
  }

}

export default ResponsiveStandardButton;
