import React from 'react';
import Header from '../../component/Header.jsx';
import Button from '../../component/Button.jsx';

import './ForgotPasswordPage.css';


function ForgotPasswordPage(){

    return(
        <div>
            <Header text={"login"} isDisplaySignUp={true} isDisplayRightButton={true} />

            <div className="ForgotPasswordContainer">
                <h3 className="ForgotPasswordPageTextLeft RedText">error status text</h3>
                <h1 className="ForgotPasswordPageTextLeft">Find you account</h1>
                <h3 className="ForgotPasswordPageTextLeft"> please enter you email</h3>
                <h3 className="ForgotPasswordPageTextLeft">Email*</h3>
                <input type="email" placeholder="jane@example" className="ForgotPasswordInput" required /> 

                <div className="ForgotPasswordButtonGroup">
                    <button className="ForgotPasswordButtonStyle">Cancel</button>
                    <a style={{marginLeft:'2%'}}><Button name="Find account" size={[52, 200]} textSize={26}/></a>
                </div>

            </div>
            

        </div>
        
    );
}

export default ForgotPasswordPage;