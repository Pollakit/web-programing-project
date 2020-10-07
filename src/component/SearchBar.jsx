import React, { Component } from 'react';
import Button from './Button.jsx'
import './Index.css'

class SearchBar extends Component {
  constructor(props) {
    super( props )
  }
  render() {

    return (
        <span style={{display: 'flex', justifyContent: "space-between", width: '70%', alignItems: 'center'}}>
            <h1>Description</h1>

            <input type="text" style={{width:'70%', height:'30px'}}/>

            <Button name={ "Seacrh" } size={[40,120]} textSize={25} /> 
        </span>
    );
  }

}

export default SearchBar;
