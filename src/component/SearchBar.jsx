import React, { Component } from 'react';
import Button from './Button.jsx'
import './Index.css'

class SearchBar extends Component {
  constructor(props) {
    super( props )
  }
  render() {

    return (
        <span className="SearchBarContainer">
            <h1>Description</h1>

            <input type="text" className="SearchBarStyle" />

            <Button name={ "Seacrh" } size={[40,120]} textSize={25} /> 
        </span>
    );
  }

}

export default SearchBar;
