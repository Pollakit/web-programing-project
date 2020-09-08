import React, { Component } from 'react';
import "./Index.css"

class Button extends Component {

  render() {
    const {name, size, textSize} = this.props;

    return (
      <button className="Standard-button" style={{height: `${size[0]}px`, width : `${size[1]}px`,fontSize: `${textSize}px`,}}>
      {name}
    </button>
    );
  }

}

export default Button;
