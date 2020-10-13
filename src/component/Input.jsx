import React, { Component } from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        const inputElement = <input type="text" onKeyDown={this._handleEnter.bind(this) }
                            onChange={this._handleOnChange.bind(this)}/>
        const textElement = <p></p>
        
        this.state = {
            element: inputElement,
            value: '',
        }
    }
    render() {
      return (this.state.element)
    }

    _handleEnter = (e) => {
        if (e.key === 'Enter') {
          console.log(this.state.value);
        }
    
    }

    _handleOnChange = (e) => {
        this.setState({
            value: e.target.value
        });
        console.log("State: " + this.state.value);
    }
  }

  export default Input;