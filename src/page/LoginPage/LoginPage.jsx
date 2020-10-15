import React from 'react';
import Header from '../../component/Header.jsx';
import Button from '..//../component/Button';

import './LoginPage.css';

function LoginPage(){

    return(
        <React.Fragment>
            <Header text={"Sign up"} isDisplaySignUp={false} isDisplayRightButton={true} />

                <div>
                    <h1 className="LoginPageContainer">Login</h1>

                    <input type="email" placeholder="jane@example" className="email-input" required /> 
                    
                    <input type="password" className="email-input" required />

                    <a href="./afterSignUp" className="SiginUpBtnCenter"><Button name="Login" size={[52, 317]} textSize={26}/></a>

                    <a style={{color:'black'}} href="./forgotPasswordPage"> <p className="LoginTextPAlligin">forgot password</p></a>
                </div>
        </React.Fragment>
    );
}

export default LoginPage;