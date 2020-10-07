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
      <div >
        <div className = "HeaderStyle">

              <span className="HeaderElementStyleLeft">
                <a href="#" > <img height="70" src={logo} /> </a>

                <a  href="#" className ="HeadeTextStyle"> <p >job spot</p> </a> 
              </span>
              
              <span className="HeaderElementStyleRight" >
                { ( this.source[1] ) ? <a href="#" className="HeadeTextStyle"> <p>Sign up</p> </a> : <a ></a> }

                { (this.source[0] ) ? <Button name={ this.source[2] } size={[50,130]} textSize={25} />  : <a ></a>  }
              </span>

        </div>


      </div>
    );
  }

}

export default Header;
