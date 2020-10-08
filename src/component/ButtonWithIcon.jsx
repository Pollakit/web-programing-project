import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./Index.css"


class ButtonWithIcon extends Component{
    render() {
        const {text, size, textSize, imageUrl} = this.props;

        return (
            <button className="buttonWithIcon">
                <span>
                    <img src={imageUrl} width="35" height = "35"></img>
                    <span className="buttonWithIconText standard-font-style">{text}</span>
                </span>
            </button>
        );
    }
}

export default ButtonWithIcon;
