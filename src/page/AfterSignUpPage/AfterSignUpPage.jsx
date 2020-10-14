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
                <h1>Sign Up As</h1>
                <ResponsiveStandardButton text="Company" />
                {/* <div className="vertical-spacer"></div> */}
                <ResponsiveStandardButton text="Employee" />
            </React.Fragment>
        );
    }
}
 
export default SignUp;