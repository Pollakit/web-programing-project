import React, { Component } from 'react';
import Header from '../../component/Header.jsx';
import Button from '../../component/Button.jsx';
import './AfterSignUpPage.css'
import ResponsiveStandardButton from '../../component/ResponsiveStandardButton.jsx';

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header
                    text={""}
                    isDisplaySignUp={false}
                    isDisplayRightButton={false}
                />
                <h1 className="AfterSignUpTextAlligin">Sign Up As</h1>
                <a href="./company"><ResponsiveStandardButton text="Company" /></a>
                {/* <div className="vertical-spacer"></div> */}
                <a href="./userPage"><ResponsiveStandardButton text="Employee" /></a>
            </React.Fragment>
        );
    }
}
 
export default SignUp;