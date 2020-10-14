import React, { Component } from "react";

class Input extends React.Component {
    constructor(props) {
        super(props);
        const inputElement = <input type="text" onKeyDown={this._handleEnter.bind(this) }
                            onChange={this._handleOnChange.bind(this)} className="tagInput" onBlur={this._handleOnBlur.bind(this)} />
        
        this.state = {
            element: inputElement,
            value: '',
        }
    }
    
    render() {
      return (this.state.element)
    }

    _handleEnter = (e) => {
        if (e.key === 'Enter' && this.state.value != '') {
            console.log(this.state.value);
            const textElement = <span className={"tag"} onDoubleClick={this._handleDoubleClick.bind(this)}>{this.state.value}</span>
            this.setState({
                element: textElement
            })
        }
    
    }

    _handleDoubleClick = (e) => {
        const inputElement = <input type="text" onKeyDown={this._handleEnter.bind(this) }
                            onChange={this._handleOnChange.bind(this)} className="tagInput" value={this.state.value}/>
        this.setState({element: inputElement});
    }

    _handleOnChange = (e) => {
        this.setState({
            value: e.target.value
        });
        console.log("State: " + this.state.value);
    }

    _handleOnBlur = (e) => {
        if (this.state.value != "") {
            const textElement = <span className={"tag"} onDoubleClick={this._handleDoubleClick.bind(this)}>{this.state.value}</span>
            this.setState({
                element: textElement
            })
        }
    }
}

export default Input;