import React, { Component } from 'react';
import Header from '../../component/Header.jsx';
import Button from '../../component/Button.jsx';
import './SignUpPage.css'

class SignUp extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Header text={"Login"} isDisplaySignUp={false} isDisplayRightButton={true}/>

                <div>
                    <h1 className="SignUpTextAlligin">Sign Up</h1>
                    
                    <input type="email" placeholder="jane@example" className="email-input" required /> 
                    
                    <input type="password" className="email-input" required />

                    <div className="SiginUpBtnCenter"><a href="/afterSignUp"><Button name="Sign Up" size={[52, 317]} textSize={26}/></a></div>
                </div>

            </React.Fragment>
        );
    }
}
 
export default SignUp;