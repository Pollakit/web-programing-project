import React, { Component } from 'react';
import "./Index.css"

class ResponsiveStandardButton extends Component {

  render() {
    const {text, textSize} = this.props;

    return (
      <div>
        <button className="Standard-button center-button">
        {text}
        </button>
      </div>
    );
  }

}

export default ResponsiveStandardButton;
