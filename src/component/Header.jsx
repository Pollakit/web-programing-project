import React, { Component } from 'react';
import logo from '../image/logo.png'
import Button from './Button.jsx'
import './Index.css'

class Header extends Component {
  constructor(props) {
    super( props )
    const { isDisplayRightButton, isDisplaySignUp, text} = this.props

    this.source = [isDisplayRightButton, isDisplaySignUp, text]

  }
  render() {

    return (
      <div>
        <table>
          <thead className = "Standard-font-style">
            <th >
              <th><h1>&nbsp;&nbsp;&nbsp;</h1></th>

              <th> <a href="#" > <img height="70" src={logo} /> </a></th>

              <th> <a href="#" > <p>job spot</p> </a> </th>
            </th>

            <th style ={{position: 'absolute', right: 0}}>
              { this.isDisplaySignUp( this.source[1] ) }

              <th><h1>&nbsp;&nbsp;</h1></th>

              { this.isDisplayRightButton( this.source[0] )}

              {/*I promise I will fix this later*/}
              <th><h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1></th>
            </th>
          </thead>
        </table>

        <hr/>

      </div>
    );
  }

  isDisplaySignUp = ( isDisplay ) => {
    return (isDisplay) ? <th> <a href="#" > <p>Sign up</p> </a> </th> : <th> <a > <p>&nbsp;</p> </a> </th>
  }

  isDisplayRightButton = ( isDisplay ) => {
    return (isDisplay) ? <th> <Button name={ this.source[2] } size={[50,130]} textSize={25} /> </th> : <th> <a ></a> </th>
  }

}



export default Header;
