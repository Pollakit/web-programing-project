import React, { Component } from 'react';
import Header from '../../component/Header.jsx';
import Button from '../../component/Button.jsx';
import './SignUpPage.css'

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header
                    text={"Login"}
                    isDisplaySignUp={false}
                    isDisplayRightButton={true}
                />
                <h1>Sign Up</h1>
                <div>
                    <input type="email" placeholder="jane@example.com" className="email-input" required />
                </div>
                <input type="password" className="email-input" required />
                <div className="align-text-center">
                    <Button name="Sign Up" size={[52, 353]} textSize={29}/>
                </div>
            </React.Fragment>
        );
    }
}
 
export default SignUp;