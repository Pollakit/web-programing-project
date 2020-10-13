import React, { Component } from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        const element = <input type="text" onKeyDown={this._handleEnter.bind(this) }
                            onChange={this._handleOnChange.bind(this)}/>
        this.state = {
            element: element,
            value: '',
        }
    }
    render() {
      return (this.state.element)
    }

    _handleEnter = (e) => {
        if (e.key === 'Enter') {
          console.log(this.state.element.value);
        }
    
    }

    _handleOnChange = (e) => {
        let value = e.target.value;
        console.log("Value: " + value);
        
        this.setState({
            value: e.target.valu
        });
        console.log("State: " + this.state.value);
    }
  }

  export default Input;